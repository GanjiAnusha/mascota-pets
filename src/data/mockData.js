// Mock Data for Mascota Pets Demo

export const INITIAL_USER = {
  name: "Dr. Jhansi Rani",
  title: "Veterinary Specialist & Dog Parent",
  phone: "+91 98765 43210",
  address: "Visakhapatnam, AP",
  email: "jhansi.rani@mascotapets.com",
  avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80"
};

export const INITIAL_DOGS = [
  {
    id: "dog-1",
    name: "Rocky",
    breed: "Labrador Retriever",
    age: "2.5 yrs",
    dob: "15 Jan 2023",
    weight: "28 kg",
    gender: "Male",
    genderSymbol: "♂",
    color: "Golden",
    microchip: "985141000123456",
    status: "Healthy",
    statusType: "healthy", // healthy | warning | alert | info
    photo: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=600&q=80",
    coverPhoto: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1000&q=80",
    overview: {
      bio: "Rocky is an energetic, affectionate golden Labrador who loves fetch and swimming.",
      allergies: "None known",
      diet: "High-protein dry kibble + omega-3 fish oil supplement",
      vetContact: "Dr. Sharma (+91 98450 11223)"
    }
  },
  {
    id: "dog-2",
    name: "Bella",
    breed: "Golden Retriever",
    age: "1.8 yrs",
    dob: "20 Aug 2023",
    weight: "25 kg",
    gender: "Female",
    genderSymbol: "♀",
    color: "Cream Golden",
    microchip: "985141000987654",
    status: "In Heat (Estimated)",
    statusType: "heat",
    photo: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&w=600&q=80",
    coverPhoto: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=1000&q=80",
    overview: {
      bio: "Bella is a gentle soul who loves belly rubs, soft squeaky toys, and children.",
      allergies: "Mild poultry sensitivity",
      diet: "Salmon & Sweet Potato recipe",
      vetContact: "Dr. Sharma (+91 98450 11223)"
    }
  },
  {
    id: "dog-3",
    name: "Luna",
    breed: "French Bulldog",
    age: "1.2 yrs",
    dob: "10 Feb 2024",
    weight: "12 kg",
    gender: "Female",
    genderSymbol: "♀",
    color: "Brindle & White",
    microchip: "985141000456123",
    status: "Grooming Due",
    statusType: "grooming",
    photo: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=600&q=80",
    coverPhoto: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=1000&q=80",
    overview: {
      bio: "Luna is a playful Frenchie with big ears and a bigger personality.",
      allergies: "Sensitive skin in summer",
      diet: "Hypoallergenic grain-free blend",
      vetContact: "Dr. Sharma (+91 98450 11223)"
    }
  },
  {
    id: "dog-4",
    name: "Max",
    breed: "German Shepherd",
    age: "3 yrs",
    dob: "05 Jun 2022",
    weight: "32 kg",
    gender: "Male",
    genderSymbol: "♂",
    color: "Black & Tan",
    microchip: "985141000321654",
    status: "Vaccination Due",
    statusType: "vaccine",
    photo: "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?auto=format&fit=crop&w=600&q=80",
    coverPhoto: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?auto=format&fit=crop&w=1000&q=80",
    overview: {
      bio: "Max is an alert, protective, and obedient German Shepherd who excels in agility training.",
      allergies: "None",
      diet: "Active Working Dog Blend + Glucosamine",
      vetContact: "Dr. Sharma (+91 98450 11223)"
    }
  }
];

export const INITIAL_GROOMING = [
  { id: "g-1", service: "Bath", lastDone: "10 Aug 2025", nextDue: "10 Sep 2025", status: "Due", statusClass: "bg-amber-100 text-amber-800 border-amber-300" },
  { id: "g-2", service: "Full Grooming", lastDone: "10 Aug 2025", nextDue: "10 Oct 2025", status: "Upcoming", statusClass: "bg-blue-100 text-blue-800 border-blue-300" },
  { id: "g-3", service: "Combing", lastDone: "Daily", nextDue: "Daily", status: "On track", statusClass: "bg-emerald-100 text-emerald-800 border-emerald-300" },
  { id: "g-4", service: "Trimming", lastDone: "05 Aug 2025", nextDue: "05 Oct 2025", status: "Upcoming", statusClass: "bg-blue-100 text-blue-800 border-blue-300" },
  { id: "g-5", service: "Nail Grinding", lastDone: "05 Aug 2025", nextDue: "05 Sep 2025", status: "Due", statusClass: "bg-amber-100 text-amber-800 border-amber-300" },
  { id: "g-6", service: "Ear Cleaning", lastDone: "05 Aug 2025", nextDue: "05 Sep 2025", status: "Due", statusClass: "bg-amber-100 text-amber-800 border-amber-300" },
  { id: "g-7", service: "Teeth Cleaning", lastDone: "15 Jul 2025", nextDue: "15 Oct 2025", status: "Upcoming", statusClass: "bg-blue-100 text-blue-800 border-blue-300" },
  { id: "g-8", service: "Anal Gland Cleaning", lastDone: "15 Jul 2025", nextDue: "15 Oct 2025", status: "Upcoming", statusClass: "bg-blue-100 text-blue-800 border-blue-300" },
];

export const INITIAL_VACCINATIONS = [
  {
    id: "v-1",
    name: "DHPP / DHLPP",
    date: "10 Jan 2025",
    nextDue: "10 Jan 2026",
    batch: "V1234",
    vet: "Dr. Sharma",
    status: "Completed",
    isDueSoon: false
  },
  {
    id: "v-2",
    name: "Rabies",
    date: "10 Jan 2025",
    nextDue: "10 Jan 2027",
    batch: "R5678",
    vet: "Dr. Sharma",
    status: "Completed",
    isDueSoon: false
  },
  {
    id: "v-3",
    name: "Bordetella",
    date: "10 Mar 2025",
    nextDue: "10 Mar 2026",
    batch: "B2390",
    vet: "Dr. Sharma",
    status: "Completed",
    isDueSoon: false
  },
  {
    id: "v-4",
    name: "Leptospirosis",
    date: "10 Mar 2025",
    nextDue: "10 Mar 2026",
    batch: "L8877",
    vet: "Dr. Sharma",
    status: "Due Soon",
    isDueSoon: true
  }
];

export const INITIAL_MEDICATIONS = [
  {
    id: "m-1",
    name: "Amoxicillin",
    startDate: "10 Aug 2025",
    endDate: "17 Aug 2025",
    dose: "250 mg, 2 times/day",
    reason: "Skin infection",
    status: "Completed",
    isCurrent: true
  },
  {
    id: "m-2",
    name: "Pain Relief (Carprofen)",
    startDate: "01 Aug 2025",
    endDate: "10 Aug 2025",
    dose: "50 mg, 1 time/day",
    reason: "Post surgery recovery",
    status: "Completed",
    isCurrent: false
  },
  {
    id: "m-3",
    name: "Heartworm Preventive",
    startDate: "01 Aug 2025",
    endDate: "30 Aug 2025",
    dose: "1 tablet, 1 time/month",
    reason: "Heartworm prevention",
    status: "Due Soon",
    isCurrent: true
  }
];

export const INITIAL_DEWORMING = [
  {
    id: "dw-1",
    name: "Fenbendazole",
    date: "10 Jun 2025",
    nextDue: "10 Dec 2025",
    weight: "26 kg",
    dose: "2.5 ml",
    status: "Completed",
    isDueSoon: false
  },
  {
    id: "dw-2",
    name: "Praziquantel",
    date: "10 Dec 2024",
    nextDue: "10 Jun 2025",
    weight: "26 kg",
    dose: "1 tablet",
    status: "Completed",
    isDueSoon: false
  },
  {
    id: "dw-3",
    name: "Broad Spectrum",
    date: "10 Jun 2024",
    nextDue: "10 Jun 2025",
    weight: "25 kg",
    dose: "1 tablet",
    status: "Due Soon",
    isDueSoon: true
  }
];

export const HEAT_CYCLE_DATA = {
  dogName: "Bella",
  breed: "Golden Retriever",
  photo: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&w=400&q=80",
  currentCycle: {
    heatStarted: "02 Aug 2025",
    heatEnded: "09 Aug 2025",
    duration: "7 days"
  },
  nextCycleEstimated: "06 Nov 2025",
  previousCycles: [
    { id: "1", range: "10 Jan 2025 - 17 Jan 2025", duration: "7 days" },
    { id: "2", range: "12 Aug 2024 - 19 Aug 2024", duration: "7 days" },
    { id: "3", range: "05 Jan 2024 - 12 Jan 2024", duration: "7 days" }
  ],
  disclaimer: "Note: Heat cycle dates are estimates and may vary between dogs. Consult your veterinarian for precise reproductive management."
};

export const BREEDS_GUIDE = [
  {
    id: "b-1",
    name: "Labrador Retriever",
    sizeCategory: "Large",
    weight: "25-36 kg",
    height: "21.5 - 24.5 in",
    grooming: "Weekly",
    bath: "2-4 weeks",
    earCare: "Monthly",
    coat: "Short & dense",
    photo: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=600&q=80",
    specialNotes: [
      "Prone to hip and elbow dysplasia.",
      "Keep ears clean and dry, especially after swimming.",
      "Regular physical and mental exercise is vital to prevent boredom."
    ],
    temperament: "Outgoing, Even-tempered, Gentle, Agile, Intelligent"
  },
  {
    id: "b-2",
    name: "Golden Retriever",
    sizeCategory: "Large",
    weight: "25-34 kg",
    height: "21.5 - 24 in",
    grooming: "2-3 times/week",
    bath: "2-4 weeks",
    earCare: "Bi-weekly",
    coat: "Medium dense water-repellent",
    photo: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&w=600&q=80",
    specialNotes: [
      "Prone to skin allergies and hot spots.",
      "Requires regular brushing to prevent matting of feathering.",
      "Friendly and devoted family dog with high trainability."
    ],
    temperament: "Friendly, Intelligent, Devoted, Reliable, Trustworthy"
  },
  {
    id: "b-3",
    name: "German Shepherd",
    sizeCategory: "Large",
    weight: "22-40 kg",
    height: "22 - 26 in",
    grooming: "2-3 times/week",
    bath: "3-4 weeks",
    earCare: "Monthly",
    coat: "Double coat thick",
    photo: "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?auto=format&fit=crop&w=600&q=80",
    specialNotes: [
      "Requires high daily mental stimulation and agility work.",
      "Joint care and glucosamine supplements are recommended early.",
      "Natural protective instincts require early socialization."
    ],
    temperament: "Loyal, Confident, Courageous, Watchful, Intelligent"
  },
  {
    id: "b-4",
    name: "French Bulldog",
    sizeCategory: "Small",
    weight: "8-14 kg",
    height: "11 - 13 in",
    grooming: "Weekly",
    bath: "2-3 weeks",
    earCare: "Weekly (facial folds)",
    coat: "Short smooth",
    photo: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=600&q=80",
    specialNotes: [
      "Brachycephalic breed: Keep in cool air-conditioned environments in summer.",
      "Clean facial wrinkles regularly with antiseptic wipes to avoid dermatitis.",
      "Do not over-exercise or expose to deep water."
    ],
    temperament: "Playful, Affectionate, Easygoing, Lively, Patient"
  },
  {
    id: "b-5",
    name: "Beagle",
    sizeCategory: "Medium",
    weight: "9-11 kg",
    height: "13 - 15 in",
    grooming: "Weekly",
    bath: "2-4 weeks",
    earCare: "Weekly",
    coat: "Short weather-proof",
    photo: "https://images.unsplash.com/photo-1505628346881-b72b27e84530?auto=format&fit=crop&w=600&q=80",
    specialNotes: [
      "Scent-driven hound; always walk on a secure leash.",
      "Floppy ears retain moisture; inspect and clean weekly.",
      "Prone to obesity if treats are not monitored."
    ],
    temperament: "Amiable, Determined, Excitable, Gentle, Even-tempered"
  },
  {
    id: "b-6",
    name: "Standard Poodle",
    sizeCategory: "Medium",
    weight: "20-32 kg",
    height: "15+ in",
    grooming: "Daily / Pro 4-6 wks",
    bath: "2-3 weeks",
    earCare: "Weekly",
    coat: "Curly hypoallergenic",
    photo: "https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?auto=format&fit=crop&w=600&q=80",
    specialNotes: [
      "Low dander coat is great for allergy sufferers.",
      "Requires routine clipping and ear hair plucking.",
      "One of the smartest dog breeds, excels in trick training."
    ],
    temperament: "Alert, Active, Intelligent, Trainable, Instinctual"
  }
];

export const CALENDAR_EVENTS_MOCK = {
  selectedMonth: "September 2025",
  activeDay: 16,
  daysInMonth: 30,
  eventsByDay: {
    16: [
      { id: "ce-1", time: "09:00 AM", title: "Tracky Daily Walk & Log", type: "tracky", color: "border-blue-500 bg-blue-50 text-blue-700", icon: "activity" },
      { id: "ce-2", time: "10:00 AM", title: "Medicine: Heartworm Preventive (Rocky)", type: "medicine", color: "border-amber-500 bg-amber-50 text-amber-700", icon: "pill" },
      { id: "ce-3", time: "01:00 PM", title: "Vaccination: Leptospirosis Booster (Max)", type: "vaccination", color: "border-rose-500 bg-rose-50 text-rose-700", icon: "syringe" },
      { id: "ce-4", time: "04:00 PM", title: "Deworming: Broad Spectrum (Luna)", type: "deworming", color: "border-purple-500 bg-purple-50 text-purple-700", icon: "shield" },
      { id: "ce-5", time: "05:00 PM", title: "Grooming: Bath & Nail Grinding (Rocky)", type: "grooming", color: "border-emerald-500 bg-emerald-50 text-emerald-700", icon: "scissors" },
    ],
    10: [
      { id: "ce-6", time: "11:00 AM", title: "Deworming: Fenbendazole (Bella)", type: "deworming", color: "border-purple-500 bg-purple-50 text-purple-700", icon: "shield" },
      { id: "ce-7", time: "04:00 PM", title: "Grooming: Ear Cleaning (Luna)", type: "grooming", color: "border-emerald-500 bg-emerald-50 text-emerald-700", icon: "scissors" },
    ],
    22: [
      { id: "ce-8", time: "03:00 PM", title: "Vet Checkup: Dr. Sharma Clinic", type: "vet", color: "border-teal-500 bg-teal-50 text-teal-700", icon: "stethoscope" }
    ]
  }
};

export const INITIAL_ACTIVITY_HISTORY = [
  { id: "act-1", date: "15 Aug 2025", title: "Bath", dogName: "Rocky", category: "grooming", status: "Done", icon: "bath", color: "emerald" },
  { id: "act-2", date: "10 Aug 2025", title: "Nail Grinding", dogName: "Bella", category: "grooming", status: "Done", icon: "scissors", color: "emerald" },
  { id: "act-3", date: "05 Aug 2025", title: "Medication", dogName: "Max", category: "medication", status: "Done", icon: "pill", color: "blue" },
  { id: "act-4", date: "01 Aug 2025", title: "Deworming", dogName: "Luna", category: "deworming", status: "Done", icon: "shield", color: "purple" },
  { id: "act-5", date: "25 Jul 2025", title: "Vaccination", dogName: "Bella", category: "vaccination", status: "Done", icon: "syringe", color: "rose" },
  { id: "act-6", date: "20 Jul 2025", title: "Teeth Cleaning", dogName: "Rocky", category: "grooming", status: "Done", icon: "sparkles", color: "emerald" },
  { id: "act-7", date: "15 Jul 2025", title: "Full Grooming", dogName: "Luna", category: "grooming", status: "Done", icon: "bath", color: "emerald" }
];
