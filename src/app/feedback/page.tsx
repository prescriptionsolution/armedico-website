'use client';

import React, { useState } from 'react';
import { 
  User, 
  Stethoscope, 
  Activity, 
  Pill, 
  MoreHorizontal,
  Star, 
  MessageSquare, 
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  Plus,
  Trash2
} from 'lucide-react';
import Link from 'next/link';

// Sections defined as per the feedback form document 
const FEEDBACK_FLOW = [
  {
    id: 'patient_info',
    title: 'Patient Information',
    icon: <User size={24} />,
    description: 'Provide suggestions for registration, relative details, and address management.',
    categories: ['Corrections', 'Additions', 'Deletions']
  },
  {
    id: 'medical_history',
    title: 'Medical History',
    icon: <Stethoscope size={24} />,
    description: 'Provide suggestions for Chief Complaints, Past History, and Vitals.',
    categories: ['Corrections', 'Additions', 'Deletions']
  },
  {
    id: 'physical_exam',
    title: 'Physical Examination',
    icon: <Activity size={24} />,
    description: 'Provide suggestions for General and Systemic examination sections.',
    categories: ['Corrections', 'Additions', 'Deletions']
  },
  {
    id: 'treatment',
    title: 'Treatment',
    icon: <Pill size={24} />,
    description: 'Provide suggestions for Medicine search, Dosages, and Instructions.',
    categories: ['Corrections', 'Additions', 'Deletions']
  },
  {
    id: 'others',
    title: 'Others',
    icon: <MoreHorizontal size={24} />,
    description: 'Any other modifications or feedback for remaining areas.',
    categories: ['Corrections', 'Additions', 'Deletions']
  },
  {
    id: 'final_rating',
    title: 'Overall Satisfaction',
    icon: <Star size={24} />,
    description: 'Provision for star rating at the end of the form.',
    isRatingStep: true
  }
];

export default function DetailedFeedbackPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<any>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const activeStepData = FEEDBACK_FLOW[currentStep];
  const progress = ((currentStep + 1) / FEEDBACK_FLOW.length) * 100;

  // Initialize a category with one empty suggestion if it doesn't exist
  const getSuggestions = (stepId: string, category: string) => {
    return formData[stepId]?.[category] || [''];
  };

  const handleUpdateSuggestion = (stepId: string, category: string, index: number, value: string) => {
    const currentList = [...getSuggestions(stepId, category)];
    currentList[index] = value;
    
    setFormData((prev: any) => ({
      ...prev,
      [stepId]: {
        ...prev[stepId],
        [category]: currentList
      }
    }));
  };

  const handleAddMore = (stepId: string, category: string) => {
    const currentList = [...getSuggestions(stepId, category), ''];
    setFormData((prev: any) => ({
      ...prev,
      [stepId]: {
        ...prev[stepId],
        [category]: currentList
      }
    }));
  };

  const handleRemove = (stepId: string, category: string, index: number) => {
    const currentList = getSuggestions(stepId, category).filter((_: any, i: number) => i !== index);
    setFormData((prev: any) => ({
      ...prev,
      [stepId]: {
        ...prev[stepId],
        [category]: currentList.length > 0 ? currentList : ['']
      }
    }));
  };

  const handleRatingChange = (rating: number) => {
    setFormData((prev: any) => ({ ...prev, overall_star_rating: rating }));
  };

  const handleNext = () => {
    if (currentStep < FEEDBACK_FLOW.length - 1) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setCurrentStep(prev => prev + 1);
    } else {
      console.log("Final Compiled Feedback:", formData);
      setIsSubmitted(true);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white max-w-lg w-full p-8 rounded-2xl shadow-xl text-center space-y-6">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto text-green-600">
            <CheckCircle size={32} />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Feedback Submitted!</h2>
          <p className="text-gray-500">Thank you for your precious suggestions.</p>
          <Link href="/" className="inline-block px-8 py-3 bg-blue-600 text-white rounded-xl font-medium">Return to Dashboard</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-6 px-4">
      <div className="max-w-4xl w-full mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-blue-900 font-bold text-lg">
          <MessageSquare size={20} className="text-blue-600" /> ARmedico Feedback
        </div>
        <div className="text-xs text-gray-400 font-medium">Step {currentStep + 1} of {FEEDBACK_FLOW.length}</div>
      </div>

      <div className="max-w-4xl w-full bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
        <div className="h-1.5 w-full bg-gray-100">
          <div className="h-full bg-blue-600 transition-all duration-500" style={{ width: `${progress}%` }} />
        </div>

        <div className="p-6 md:p-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">{activeStepData.icon}</div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">{activeStepData.title}</h1>
              <p className="text-sm text-gray-500">{activeStepData.description}</p>
            </div>
          </div>

          <div className="space-y-10">
            {activeStepData.isRatingStep ? (
              <div className="flex flex-col items-center py-12 bg-blue-50/30 rounded-2xl border border-dashed border-blue-100">
                <label className="text-lg font-bold text-blue-900 mb-6">Your Overall Rating</label>
                <div className="flex gap-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onClick={() => handleRatingChange(star)}
                      className={`transition-all transform hover:scale-110 ${formData.overall_star_rating >= star ? 'text-yellow-400' : 'text-gray-200'}`}
                    >
                      <Star size={54} fill={formData.overall_star_rating >= star ? "currentColor" : "none"} strokeWidth={1.5} />
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              activeStepData.categories?.map((cat) => (
                <div key={cat} className="space-y-4">
                  <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                    <h3 className="font-bold text-gray-800 text-sm uppercase tracking-wide">{cat}</h3>
                    <button 
                      onClick={() => handleAddMore(activeStepData.id, cat)}
                      className="text-xs flex items-center gap-1 font-bold text-blue-600 hover:text-blue-700 bg-blue-50 px-2 py-1 rounded-md"
                    >
                      <Plus size={14} /> Add more
                    </button>
                  </div>
                  
                  <div className="space-y-3">
                    {getSuggestions(activeStepData.id, cat).map((text: string, idx: number) => (
                      <div key={idx} className="flex gap-3 items-start group">
                        <span className="text-gray-400 font-bold mt-3 text-sm w-4">{idx + 1}.</span>
                        <div className="relative flex-1">
                          <textarea
                            placeholder={`Enter ${cat.toLowerCase()} details here...`}
                            className="w-full p-3 pr-10 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-50 focus:border-blue-400 outline-none min-h-[60px] bg-gray-50/30 transition-all"
                            value={text}
                            onChange={(e) => handleUpdateSuggestion(activeStepData.id, cat, idx, e.target.value)}
                          />
                          {getSuggestions(activeStepData.id, cat).length > 1 && (
                            <button 
                              onClick={() => handleRemove(activeStepData.id, cat, idx)}
                              className="absolute top-3 right-3 text-gray-300 hover:text-red-500 transition-colors"
                            >
                              <Trash2 size={16} />
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="bg-gray-50 px-6 py-4 flex justify-between border-t border-gray-100">
          <button 
            onClick={() => currentStep > 0 && setCurrentStep(prev => prev - 1)} 
            disabled={currentStep === 0} 
            className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium ${currentStep === 0 ? 'text-gray-300' : 'text-gray-600 hover:bg-gray-200'}`}
          >
            <ChevronLeft size={18} /> Back
          </button>
          <button 
            onClick={handleNext} 
            className="flex items-center gap-1.5 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-bold shadow-md transition-all active:scale-95"
          >
            {currentStep === FEEDBACK_FLOW.length - 1 ? 'Submit Feedback' : 'Next Step'}
            {currentStep !== FEEDBACK_FLOW.length - 1 && <ChevronRight size={18} />}
          </button>
        </div>
      </div>
    </div>
  );
}