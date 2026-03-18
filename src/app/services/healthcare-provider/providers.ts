// src/app/services/healthcare-provider/providers.ts

export interface Provider {
  id: number;
  slug: string;
  name: string;
  type: string;
  location: string; // Fake Mixed Addresses
  rating: number;
  reviewsCount: number;
  image: string;
  isOpen247: boolean;
  hasOxygen: boolean;
  equipment: string[];
  departments: string[];
  faculty: string[];
  price: string;
  about: string;
  timing: string;
  reviews: { user: string; comment: string; rating: number }[];
}

export const MOCK_PROVIDERS: Provider[] = [
  {
    id: 1,
    slug: "city-multispeciality-hospital",
    name: "City Multispeciality Hospital",
    type: "Hospital",
    location: "Marine Drive, Bhopal", // Mumbai ki location, Bhopal city
    rating: 4.6,
    reviewsCount: 840,
    image: "/city hospital.jpeg", 
    isOpen247: true,
    hasOxygen: true,
    equipment: ["Advanced MRI", "Life Support System", "Robotic Surgery Unit"],
    departments: ["Oncology", "Gastroenterology", "Urology"],
    faculty: ["Dr. V. Verma (Oncologist)", "Dr. S. Kapoor (Surgeon)"],
    price: "₹600 Consultation",
    about: "A leading tertiary care facility equipped with modern technology to handle complex medical cases and emergency surgeries with precision.",
    timing: "Open 24 Hours",
    reviews: [
      { user: "Amit B.", comment: "Infrastructure is top-notch.", rating: 5 },
      { user: "Karan M.", comment: "Doctors are very experienced.", rating: 4 }
    ]
  },
  {
    id: 2,
    slug: "jeevan-jyoti-clinic",
    name: "Jeevan Jyoti Clinic",
    type: "Clinic",
    location: "Connaught Place, Ranchi", // Delhi ki location, Ranchi city
    rating: 4.3,
    reviewsCount: 150,
    image: "/jiwan.jpeg",
    isOpen247: false,
    hasOxygen: false,
    equipment: ["Digital X-Ray", "Diabetes Monitor", "Nebulizer"],
    departments: ["General Medicine", "Geriatric Care"],
    faculty: ["Dr. R. Pandey (General Physician)"],
    price: "₹250 Consultation",
    about: "A community-focused clinic dedicated to providing affordable primary healthcare and chronic disease management for elderly patients.",
    timing: "Mon-Sat: 09:00 AM - 08:00 PM",
    reviews: [
      { user: "Sneha G.", comment: "Good for routine checkups.", rating: 4 }
    ]
  },
  {
    id: 3,
    slug: "sewa-hospital",
    name: "Sewa Hospital",
    type: "Hospital",
    location: "Banjara Hills, Kanpur", // Hyderabad ki location, Kanpur city
    rating: 4.7,
    reviewsCount: 1800,
    image: "/sewa hospital.jpeg",
    isOpen247: true,
    hasOxygen: true,
    equipment: ["Burn Unit", "Dialysis Center", "Trauma Care"],
    departments: ["Orthopedics", "Plastic Surgery", "Internal Medicine"],
    faculty: ["Dr. A. Sinha (Ortho)", "Dr. M. Soren (General)"],
    price: "₹450 Consultation",
    about: "Dedicated to serving the community with compassionate care, this hospital specializes in trauma management and rehabilitation services.",
    timing: "Open 24 Hours",
    reviews: [
      { user: "Rahul T.", comment: "Very supportive nursing staff.", rating: 5 }
    ]
  },
  {
    id: 4,
    slug: "dr-sharma-clinic",
    name: "Dr. Sharma's Clinic",
    type: "Clinic",
    location: "Koramangala, Jaipur", // Bangalore ki location, Jaipur city
    rating: 4.8,
    reviewsCount: 410,
    image: "/dr sharma.jpeg",
    isOpen247: false,
    hasOxygen: false,
    equipment: ["Dermatoscope", "Laser Therapy", "Pharmacy"],
    departments: ["Dermatology", "Cosmetology"],
    faculty: ["Dr. K. Sharma (Dermatologist)"],
    price: "₹700 Consultation",
    about: "Specialized clinic offering advanced skin care treatments, laser procedures, and cosmetic consultations in a hygienic environment.",
    timing: "Mon-Fri: 11:00 AM - 07:00 PM",
    reviews: [
      { user: "Pooja R.", comment: "Excellent results for acne treatment.", rating: 5 }
    ]
  },
  {
    id: 5,
    slug: "maa-tara-child-hospital",
    name: "Maa Tara Child Hospital",
    type: "Hospital",
    location: "Juhu Beach, Ludhiana", // Mumbai ki location, Ludhiana city
    rating: 4.9,
    reviewsCount: 920,
    image: "/maa tara.jpeg",
    isOpen247: true,
    hasOxygen: true,
    equipment: ["Level 3 NICU", "Pediatric Ventilator", "Incubators"],
    departments: ["Pediatrics", "Neonatal Surgery", "Vaccination Center"],
    faculty: ["Dr. B. Das (Pediatrician)", "Dr. T. Roy (Surgeon)"],
    price: "₹600 Consultation",
    about: "A state-of-the-art facility exclusively for children, providing comprehensive care from newborn stages to adolescence.",
    timing: "Open 24 Hours",
    reviews: [
        { user: "Sunita W.", comment: "Saved my baby's life. Grateful.", rating: 5 }
    ]
  },
  {
    id: 6,
    slug: "swasth-parivar-clinic",
    name: "Swasth Parivar Clinic",
    type: "Clinic",
    location: "Salt Lake, Indore", // Kolkata ki location, Indore city
    rating: 4.2,
    reviewsCount: 200,
    image: "/swasth parivar.jpeg",
    isOpen247: false,
    hasOxygen: false,
    equipment: ["Basic Pathology", "BP Machine", "Weight Management"],
    departments: ["Family Medicine", "Nutrition & Diet"],
    faculty: ["Dr. H. Khurana (Nutritionist)"],
    price: "₹350 Consultation",
    about: "Focusing on preventive health and lifestyle management, helping families maintain wellness through diet and regular checkups.",
    timing: "Mon-Sat: 10:00 AM - 06:00 PM",
    reviews: [
        { user: "Vikram S.", comment: "Diet plans are very effective.", rating: 4 }
    ]
  },
  {
    id: 7,
    slug: "district-hospital-patna",
    name: "District Hospital",
    type: "Hospital",
    location: "Hitech City, Meerut", // Hyderabad ki location, Meerut city
    rating: 4.0,
    reviewsCount: 340,
    image: "/district hospital.jpeg",
    isOpen247: true,
    hasOxygen: true,
    equipment: ["Emergency Ward", "X-Ray", "Minor OT"],
    departments: ["General Surgery", "ENT", "Ophthalmology"],
    faculty: ["Dr. P. Gupta (ENT Specialist)"],
    price: "₹150 Consultation",
    about: "Providing accessible healthcare services to all sections of society with a focus on general surgery and eye care.",
    timing: "Open 24 Hours",
    reviews: []
  },
  {
    id: 8,
    slug: "gupta-nursing-clinic",
    name: "Gupta Nursing Clinic",
    type: "Clinic",
    location: "Park Street, Udaipur", // Kolkata ki location, Udaipur city
    rating: 4.5,
    reviewsCount: 180,
    image: "/gupta nursing.jpeg",
    isOpen247: true,
    hasOxygen: true,
    equipment: ["Physiotherapy Unit", "Post-op Care Beds", "Oxygen Concentrator"],
    departments: ["Physiotherapy", "Rehabilitation"],
    faculty: ["Dr. N. Singh (Physiotherapist)"],
    price: "₹400 Consultation",
    about: "Specializing in post-operative recovery, physiotherapy, and long-term nursing care for bedridden patients.",
    timing: "Open 24 Hours",
    reviews: []
  },
  {
    id: 9,
    slug: "aarogya-clinic",
    name: "Aarogya Clinic",
    type: "Clinic",
    location: "Boring Road, Nagpur", // Patna ki location, Nagpur city
    rating: 4.8,
    reviewsCount: 560,
    image: "/aarogya clinic.jpeg",
    isOpen247: false,
    hasOxygen: true,
    equipment: ["Ultrasound", "Doppler", "Automated Lab"],
    departments: ["Radiology", "Pathology"],
    faculty: ["Dr. S. Malhotra (Radiologist)"],
    price: "₹800 Consultation",
    about: "A premium diagnostic center offering high-precision ultrasound, lab tests, and expert medical consultations.",
    timing: "Mon-Sat: 08:00 AM - 08:00 PM",
    reviews: []
  }
];