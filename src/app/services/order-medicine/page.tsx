"use client";

import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import { debounce } from 'lodash';
import {
  FaSearch,
  FaTimes,
  FaSpinner,
  FaInfoCircle,
  FaShoppingCart,
  FaComment,
  FaPhone,
  FaFileUpload,
  FaCheckCircle,
  FaFileAlt
} from 'react-icons/fa';
import { FiUpload } from 'react-icons/fi';
import { motion } from 'framer-motion';

// Custom modal styles
const customModalStyles: Modal.Styles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxHeight: '90vh',
    overflowY: 'auto',
    width: '90%',
    maxWidth: '800px',
    padding: '0',
    border: 'none',
    borderRadius: '0.5rem',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1000,
  },
};

// Types
interface Medicine {
  brand_name?: string;
  generic_name?: string;
  product_id?: string;
  purpose?: string;
  use_case?: string;
  inactive_ingredient?: string;
  json_data?: {
    purpose?: string[];
    indications_and_usage?: string[];
    active_ingredient?: string[];
    inactive_ingredient?: string[];
    warnings?: string[];
    dosage_and_administration?: string[];
    do_not_use?: string[];
    ask_doctor?: string[];
    stop_use?: string[];
    storage_and_handling?: string[];
  };
}

const OrderMedicinePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [allMedicines, setAllMedicines] = useState<Medicine[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedMedicine, setSelectedMedicine] = useState<Medicine | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const medicinesPerPage = 9;

  // Prescription Upload State
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [isPrescriptionSubmitting, setIsPrescriptionSubmitting] = useState(false);
  const [prescriptionSuccess, setPrescriptionSuccess] = useState(false);

  // Local hero image
  const heroImageUrl = '/herobg.jpg';

  // Common medicines for default view and suggestions
  const commonMedicines: string[] = [
    'Betadine',
    'Paracetamol',
    'Ibuprofen',
    'Amoxicillin',
    'Cetirizine',
    'Omeprazole',
    'Aspirin',
    'Diclofenac',
    'Loratadine',
    'Atorvastatin',
    'Metformin',
    'Losartan',
    'Levothyroxine',
    'Amlodipine',
    'Sertraline',
  ];

  // Set App Element for Accessibility
  useEffect(() => {
    if (typeof document !== 'undefined') {
      Modal.setAppElement('body');
    }
  }, []);

  // Truncated Text Component
  const TruncatedText: React.FC<{
    text?: string;
    maxLength?: number;
    className?: string;
  }> = ({ text, maxLength = 100, className = '' }) => {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    if (!text)
      return <p className={`text-gray-600 ${className}`}>Not specified</p>;

    if (text.length <= maxLength || isExpanded) {
      return (
        <div>
          <p className={`text-gray-600 ${className}`}>{text}</p>
          {text.length > maxLength && (
            <button
              onClick={() => setIsExpanded(false)}
              className="text-blue-500 text-sm mt-1 hover:underline flex items-center"
            >
              <FaTimes className="mr-1" /> Show less
            </button>
          )}
        </div>
      );
    }

    return (
      <div>
        <p className={`text-gray-600 ${className}`}>
          {text.substring(0, maxLength)}...
        </p>
        <button
          onClick={() => setIsExpanded(true)}
          className="text-blue-500 text-sm mt-1 hover:underline flex items-center"
        >
          <FaInfoCircle className="mr-1" /> Show more
        </button>
      </div>
    );
  };

  // Fetch medicine details from API
  const fetchMedicineDetails = async (medicineName: string): Promise<Medicine | null> => {
    try {
      const response = await axios.post('https://www.pcds.co.in/medapi.php', {
        uri: medicineName,
      });
      return response.data;
    } catch (error) {
      console.error(`Error fetching ${medicineName}:`, error);
      return null;
    }
  };

  // Debounced search
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchSuggestions = useCallback(
    debounce(async (term: string) => {
      if (!term.trim()) {
        setSuggestions([]);
        return;
      }
      try {
        const matched = commonMedicines
          .filter((med) => med.toLowerCase().includes(term.toLowerCase()))
          .slice(0, 5);
        setSuggestions(matched);
      } catch (error) {
        console.error('Error fetching suggestions:', error);
      }
    }, 300),
    []
  );

  // Load defaults
  useEffect(() => {
    const fetchAllDefaultMedicines = async () => {
      setLoading(true);
      setError(null);
      try {
        const savedSearches = JSON.parse(localStorage.getItem('recentMedicineSearches') || '[]') as string[];
        setRecentSearches(savedSearches);
        const medicinePromises = commonMedicines.map((medicine) =>
          fetchMedicineDetails(medicine)
        );
        const results = await Promise.all(medicinePromises);
        const successfulResults = results.filter((medicine): medicine is Medicine => medicine !== null);
        setAllMedicines(successfulResults);
      } catch (error) {
        console.error('Error fetching default medicines:', error);
        setError('Failed to load medicines. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    fetchAllDefaultMedicines();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Suggestions handler
  useEffect(() => {
    if (searchTerm.trim()) {
      fetchSuggestions(searchTerm);
    } else {
      setSuggestions([]);
    }
  }, [searchTerm, fetchSuggestions]);

  // Search function
  const fetchMedicines = async (term: string = searchTerm) => {
    if (!term.trim()) return;
    setLoading(true);
    setError(null);
    setShowSuggestions(false);
    try {
      const medicine = await fetchMedicineDetails(term);
      if (medicine) {
        setAllMedicines([medicine]);
        const newRecentSearches = [
          term,
          ...recentSearches.filter((item) => item !== term),
        ].slice(0, 5);
        setRecentSearches(newRecentSearches);
        localStorage.setItem('recentMedicineSearches', JSON.stringify(newRecentSearches));
      } else {
        setAllMedicines([]);
        setError(`No medicines found for "${term}"`);
      }
      setCurrentPage(1);
    } catch (error) {
      console.error('Error searching medicines:', error);
      setError('An error occurred while searching. Please try again.');
      setAllMedicines([]);
    } finally {
      setLoading(false);
    }
  };

  // Reset function
  const handleReset = async () => {
    setSearchTerm('');
    setLoading(true);
    setError(null);
    setShowSuggestions(false);
    try {
      const medicinePromises = commonMedicines.map((medicine) =>
        fetchMedicineDetails(medicine)
      );
      const results = await Promise.all(medicinePromises);
      const successfulResults = results.filter((medicine): medicine is Medicine => medicine !== null);
      setAllMedicines(successfulResults);
      setCurrentPage(1);
    } catch (error) {
      console.error('Error resetting medicines:', error);
      setError('Failed to reset medicines. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Handle Submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchMedicines();
  };

  // Modal Handlers
  const openModal = (medicine: Medicine) => {
    document.body.style.overflow = 'hidden';
    setSelectedMedicine(medicine);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    document.body.style.overflow = 'auto';
    setIsModalOpen(false);
    setSelectedMedicine(null);
  };

  // Pagination
  const indexOfLastMedicine = currentPage * medicinesPerPage;
  const indexOfFirstMedicine = indexOfLastMedicine - medicinesPerPage;
  const currentMedicines = allMedicines.slice(indexOfFirstMedicine, indexOfLastMedicine);
  const totalPages = Math.ceil(allMedicines.length / medicinesPerPage);

  // Upload Handlers
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setPrescriptionSuccess(false);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePrescriptionSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedFile) return;
    setIsPrescriptionSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setPrescriptionSuccess(true);
      setTimeout(() => {
        setSelectedFile(null);
        setPreviewImage(null);
        setPrescriptionSuccess(false);
      }, 3000);
    } catch (error) {
      console.error("Error uploading prescription:", error);
    } finally {
      setIsPrescriptionSubmitting(false);
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
    setPreviewImage(null);
    setPrescriptionSuccess(false);
  };

  // Medicine Card
  const MedicineCard: React.FC<{ medicine: Medicine }> = ({ medicine }) => {
    return (
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 h-full flex flex-col">
        <div className="p-6 flex-grow">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-1">
                {medicine.brand_name || 'Unnamed Medicine'}
              </h3>
              <p className="text-purple-600 font-medium line-clamp-1">
                {medicine.generic_name || 'No generic name'}
              </p>
            </div>
            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full whitespace-nowrap">
              #{medicine.product_id?.substring(0, 6) || 'N/A'}
            </span>
          </div>
          <div className="mt-4">
            <h4 className="font-semibold text-gray-700">Purpose:</h4>
            <TruncatedText
              text={medicine.purpose || medicine.json_data?.purpose?.[0]}
              maxLength={120}
            />
          </div>
          <div className="mt-4">
            <h4 className="font-semibold text-gray-700">Uses:</h4>
            <TruncatedText
              text={medicine.use_case || medicine.json_data?.indications_and_usage?.[0]}
              maxLength={120}
            />
          </div>
          {medicine.json_data?.active_ingredient && (
            <div className="mt-4">
              <h4 className="font-semibold text-gray-700">Active Ingredient:</h4>
              <TruncatedText
                text={medicine.json_data.active_ingredient[0]}
                maxLength={120}
              />
            </div>
          )}
        </div>
        <div className="mt-auto pt-4 border-t border-gray-100 p-6 flex gap-2">
          <button
            onClick={() => openModal(medicine)}
            className="flex-grow bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium flex items-center justify-center"
          >
            <FaInfoCircle className="mr-2" /> Details
          </button>
          <button className="flex-grow bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-all duration-300 font-medium flex items-center justify-center">
            <FaShoppingCart className="mr-2" /> Buy
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div
        className="relative h-96 w-full bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${heroImageUrl})` }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-md">
            Medicine Information Center
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto drop-shadow-md">
            Comprehensive drug information at your fingertips
          </p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="container mx-auto px-4 -mt-12 relative z-20">
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-lg shadow-xl p-6 max-w-4xl mx-auto relative"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setShowSuggestions(true);
                }}
                onFocus={() => setShowSuggestions(true)}
                placeholder="Search for medicines (e.g., Betadine, Paracetamol)"
                className="w-full px-4 py-3 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              {/* Suggestions */}
              {(showSuggestions && (suggestions.length > 0 || recentSearches.length > 0)) && (
                <div className="absolute z-10 mt-1 w-full bg-white rounded-lg shadow-lg border border-gray-200 max-h-60 overflow-auto">
                  {recentSearches.length > 0 && (
                    <div className="px-4 py-2 text-sm text-gray-500 border-b">Recent Searches</div>
                  )}
                  {recentSearches.map((search, index) => (
                    <div
                      key={`recent-${index}`}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center"
                      onClick={() => {
                        setSearchTerm(search);
                        fetchMedicines(search);
                      }}
                    >
                      <FaSearch className="mr-2 text-gray-400" />
                      {search}
                    </div>
                  ))}
                  {suggestions.length > 0 && (
                    <div className="px-4 py-2 text-sm text-gray-500 border-b">Suggestions</div>
                  )}
                  {suggestions.map((suggestion, index) => (
                    <div
                      key={`suggestion-${index}`}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        setSearchTerm(suggestion);
                        fetchMedicines(suggestion);
                      }}
                    >
                      {suggestion}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="flex gap-2">
              <button
                type="submit"
                className="px-6 py-3 bg-[#6366f1] text-white rounded-lg hover:bg-[#4f46e5] transition-all duration-300 font-medium flex items-center"
                disabled={loading || !searchTerm.trim()}
              >
                {loading ? <FaSpinner className="animate-spin mr-2" /> : <FaSearch className="mr-2" />}
                Search
              </button>
              {(allMedicines.length > 0 || searchTerm) && (
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-all duration-300 font-medium flex items-center"
                >
                  <FaTimes className="mr-2" />
                  Reset
                </button>
              )}
            </div>
          </div>
        </form>
      </div>

      {/* Medicine List */}
      <div className="container mx-auto px-4 py-12">
        {loading && allMedicines.length === 0 ? (
          <div className="flex justify-center items-center h-64">
            <FaSpinner className="animate-spin text-4xl text-blue-500" />
          </div>
        ) : (
          <>
            {/* UPDATED: Normal text color, no gradient */}
            <h2 className="text-3xl font-bold text-[#6366f1] mb-8 text-center">
              {searchTerm ? 'Search Results' : 'Common Medicines'}
            </h2>

            {error ? (
              <div className="text-center py-12">
                <div className="bg-red-50 border-l-4 border-red-500 p-4 max-w-md mx-auto mb-4">
                  <div className="flex">
                    <FaTimes className="h-5 w-5 text-red-500" />
                    <div className="ml-3"><h3 className="text-sm font-medium text-red-800">{error}</h3></div>
                  </div>
                </div>
                <button onClick={handleReset} className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300 mx-auto flex items-center">
                  <FaSearch className="mr-2" /> Show Common Medicines
                </button>
              </div>
            ) : currentMedicines.length > 0 ? (
              <>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {currentMedicines.map((medicine, index) => (
                    <MedicineCard medicine={medicine} key={index} />
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex justify-center mt-10">
                    <nav className="inline-flex rounded-md shadow">
                      <button
                        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className="px-4 py-2 border border-gray-300 bg-white text-gray-700 rounded-l-md hover:bg-gray-50 disabled:opacity-50"
                      >
                        Previous
                      </button>
                      {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                        let pageNum = currentPage;
                        if (totalPages <= 5) pageNum = i + 1;
                        else if (currentPage <= 3) pageNum = i + 1;
                        else if (currentPage >= totalPages - 2) pageNum = totalPages - 4 + i;
                        else pageNum = currentPage - 2 + i;

                        return (
                          <button
                            key={pageNum}
                            onClick={() => setCurrentPage(pageNum)}
                            className={`px-4 py-2 border ${
                              currentPage === pageNum
                                ? 'bg-blue-500 text-white border-blue-500'
                                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                            }`}
                          >
                            {pageNum}
                          </button>
                        );
                      })}
                      <button
                        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 border border-gray-300 bg-white text-gray-700 rounded-r-md hover:bg-gray-50 disabled:opacity-50"
                      >
                        Next
                      </button>
                    </nav>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-12">
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 max-w-md mx-auto mb-4">
                  <div className="flex">
                    <FaInfoCircle className="h-5 w-5 text-yellow-500" />
                    <div className="ml-3"><h3 className="text-sm font-medium text-yellow-800">No medicines found</h3></div>
                  </div>
                </div>
                <button onClick={handleReset} className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300 mx-auto flex items-center">
                  <FaSearch className="mr-2" /> Show Common Medicines
                </button>
              </div>
            )}
          </>
        )}
      </div>

       {/* Prescription Upload Section */}
       <div className="container mx-auto px-4 pb-12">
        <motion.div
          className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-[#6366f1] mb-2">
              Upload Your Prescription
            </h2>
            <p className="text-gray-600">
              Simply upload your doctor’s prescription and we'll prepare your medications for quick pickup or delivery.
            </p>
          </div>

          <form onSubmit={handlePrescriptionSubmit}>
            <div className="flex flex-col md:flex-row gap-8">
              {/* Left Column: Upload Area + Button */}
              <div className="flex-1 flex flex-col gap-4">
                <label className="block text-sm font-bold text-gray-700">
                  Upload Prescription (JPG, PNG, PDF)
                </label>
                
                <label className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 group">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <FiUpload className="w-10 h-10 text-gray-400 group-hover:text-blue-500 transition mb-3" />
                    <p className="text-sm text-gray-500 font-medium">
                      {selectedFile ? selectedFile.name : "Select a file"}
                    </p>
                  </div>
                  <input
                    type="file"
                    accept="image/*,.pdf"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </label>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={!selectedFile || isPrescriptionSubmitting}
                  className="w-full py-3 bg-[#a855f7] text-white rounded-lg hover:bg-[#9333ea] transition-all duration-300 font-medium flex items-center justify-center shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isPrescriptionSubmitting ? (
                    <>
                      <FaSpinner className="animate-spin mr-2 w-5 h-5" />
                      Uploading...
                    </>
                  ) : (
                    <>
                      <FaFileUpload className="mr-2 w-5 h-5" />
                      Submit Prescription
                    </>
                  )}
                </button>
                 
                 {/* Success Message */}
                 {prescriptionSuccess && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-green-600 flex items-center justify-center mt-2 font-medium"
                  >
                    <FaCheckCircle className="mr-2" /> Upload Successful!
                  </motion.div>
                )}
              </div>

              {/* Right Column: Preview Area */}
              <div className="flex-1 bg-gray-50 rounded-xl flex items-center justify-center min-h-[250px] border border-gray-100 relative overflow-hidden">
                {previewImage ? (
                  <div className="relative w-full h-full flex items-center justify-center p-4">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={previewImage}
                      alt="Prescription preview"
                      className="max-h-60 rounded-lg shadow-sm"
                    />
                    <button
                      type="button"
                      onClick={removeFile}
                      className="absolute top-4 right-4 bg-white text-red-500 rounded-full p-2 shadow-md hover:bg-red-50 transition"
                    >
                      <FaTimes />
                    </button>
                  </div>
                ) : (
                  <div className="text-center text-gray-400">
                    <FaFileAlt className="w-12 h-12 mx-auto mb-3 opacity-30" />
                    <p>Prescription preview will appear here</p>
                  </div>
                )}
              </div>
            </div>
          </form>
        </motion.div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Medicine Details"
        style={customModalStyles}
        onAfterOpen={() => { document.body.style.overflow = 'hidden'; }}
        onAfterClose={() => { document.body.style.overflow = 'auto'; }}
      >
        {selectedMedicine && (
          <div className="space-y-6 p-6">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">{selectedMedicine.brand_name}</h2>
                <p className="text-lg text-purple-600">{selectedMedicine.generic_name}</p>
              </div>
              <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
                <FaTimes className="h-6 w-6" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Active Ingredients', key: 'active_ingredient', src: selectedMedicine.json_data?.active_ingredient?.[0] },
                { title: 'Inactive Ingredients', key: 'inactive', src: selectedMedicine.inactive_ingredient || selectedMedicine.json_data?.inactive_ingredient?.[0] },
                { title: 'Purpose', key: 'purpose', src: selectedMedicine.purpose || selectedMedicine.json_data?.purpose?.[0] },
                { title: 'Uses', key: 'uses', src: selectedMedicine.use_case || selectedMedicine.json_data?.indications_and_usage?.[0] },
                { title: 'Warnings', key: 'warnings', src: selectedMedicine.json_data?.warnings?.[0] },
                { title: 'Directions', key: 'directions', src: selectedMedicine.json_data?.dosage_and_administration?.[0] }
              ].map((section, idx) => (
                <div key={idx}>
                  <h3 className="font-bold text-lg text-gray-800 mb-2">{section.title}</h3>
                  <TruncatedText text={section.src || 'Not specified'} className="text-gray-600" />
                </div>
              ))}

              {[
                { title: 'Do Not Use', data: selectedMedicine.json_data?.do_not_use?.[0], bg: 'bg-red-50', text: 'text-red-600', titleColor: 'text-red-800' },
                { title: 'Ask a Doctor', data: selectedMedicine.json_data?.ask_doctor?.[0], bg: 'bg-blue-50', text: 'text-blue-600', titleColor: 'text-blue-800' },
                { title: 'Stop Use', data: selectedMedicine.json_data?.stop_use?.[0], bg: 'bg-yellow-50', text: 'text-yellow-600', titleColor: 'text-yellow-800' },
                { title: 'Storage Instructions', data: selectedMedicine.json_data?.storage_and_handling?.[0], bg: 'bg-green-50', text: 'text-green-600', titleColor: 'text-green-800' },
              ].map((box, idx) => (
                box.data && (
                  <div key={idx} className={`md:col-span-2 ${box.bg} p-4 rounded-lg`}>
                    <h3 className={`font-bold text-lg ${box.titleColor} mb-2`}>{box.title}</h3>
                    <TruncatedText text={box.data} className={box.text} />
                  </div>
                )
              ))}
            </div>

            <div className="pt-4 border-t border-gray-200 flex justify-end gap-3">
              <button onClick={closeModal} className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-all duration-300 flex items-center">
                <FaTimes className="mr-2" /> Close
              </button>
              <button className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-300 flex items-center">
                <FaShoppingCart className="mr-2" /> Buy Now
              </button>
            </div>
          </div>
        )}
      </Modal>

      {/* UPDATED CTA Section: Background Image + Dark Overlay + Visible Text */}
      <div 
        className="relative bg-cover bg-center py-16 text-white"
        style={{ backgroundImage: `url(${heroImageUrl})` }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Help Finding the Right Medicine?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our pharmacists are available 24/7 to answer your questions and help you find the right medication.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-medium flex items-center justify-center">
              <FaComment className="mr-2" /> Chat with a Pharmacist
            </button>
            <button className="px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-medium flex items-center justify-center">
              <FaPhone className="mr-2" /> Call Now: 1-800-MED-HELP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderMedicinePage;