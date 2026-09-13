import React, { useState, useEffect } from 'react';
import {
  INITIAL_USER,
  INITIAL_DOGS,
  INITIAL_GROOMING,
  INITIAL_VACCINATIONS,
  INITIAL_MEDICATIONS,
  INITIAL_DEWORMING,
  HEAT_CYCLE_DATA,
  BREEDS_GUIDE,
  CALENDAR_EVENTS_MOCK,
  INITIAL_ACTIVITY_HISTORY
} from './data/mockData';

// Common Components
import { DemoPresentationBar } from './components/common/DemoPresentationBar';
import { PhoneFrame } from './components/common/PhoneFrame';
import { MascotaPaw } from './components/common/MascotaLogo';

// Screen Components
import { OnboardingScreen } from './components/screens/OnboardingScreen';
import { HomeScreen } from './components/screens/HomeScreen';
import { MyDogsScreen } from './components/screens/MyDogsScreen';
import { DogProfileScreen } from './components/screens/DogProfileScreen';
import { GroomingScreen } from './components/screens/GroomingScreen';
import { VaccinationScreen } from './components/screens/VaccinationScreen';
import { MedicationScreen } from './components/screens/MedicationScreen';
import { DewormingScreen } from './components/screens/DewormingScreen';
import { HeatCycleScreen } from './components/screens/HeatCycleScreen';
import { BreedGuideScreen } from './components/screens/BreedGuideScreen';
import { BreedDetailScreen } from './components/screens/BreedDetailScreen';
import { CalendarScreen } from './components/screens/CalendarScreen';
import { ActivityHistoryScreen } from './components/screens/ActivityHistoryScreen';
import { AddDogScreen } from './components/screens/AddDogScreen';
import { FeatureShowcaseScreen } from './components/screens/FeatureShowcaseScreen';
import { StudioGalleryView } from './components/screens/StudioGalleryView';

import { CheckCircle2, Bell, X, Sparkles } from 'lucide-react';

export function App() {
  // App State
  const [user, setUser] = useState(INITIAL_USER);
  const [dogs, setDogs] = useState(INITIAL_DOGS);
  const [activeDog, setActiveDog] = useState(INITIAL_DOGS[0]); // Default Rocky
  const [groomingServices, setGroomingServices] = useState(INITIAL_GROOMING);
  const [vaccinations, setVaccinations] = useState(INITIAL_VACCINATIONS);
  const [medications, setMedications] = useState(INITIAL_MEDICATIONS);
  const [dewormingList, setDewormingList] = useState(INITIAL_DEWORMING);
  const [heatData, setHeatData] = useState(HEAT_CYCLE_DATA);
  const [breeds, setBreeds] = useState(BREEDS_GUIDE);
  const [selectedBreed, setSelectedBreed] = useState(BREEDS_GUIDE[0]);
  const [calendarData, setCalendarData] = useState(CALENDAR_EVENTS_MOCK);
  const [activityList, setActivityList] = useState(INITIAL_ACTIVITY_HISTORY);

  // Navigation and Presentation State
  const [currentScreen, setCurrentScreen] = useState('home'); // Default to home for high-impact first view or 'onboarding'
  const [viewMode, setViewMode] = useState('phone'); // 'phone' | 'studio' | 'fullscreen'
  const [toastMessage, setToastMessage] = useState(null);
  const [showNotificationsModal, setShowNotificationsModal] = useState(false);

  // Show temporary toast notification
  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  // Reset Demo Data Handler
  const handleResetData = () => {
    setUser(INITIAL_USER);
    setDogs(INITIAL_DOGS);
    setActiveDog(INITIAL_DOGS[0]);
    setGroomingServices(INITIAL_GROOMING);
    setVaccinations(INITIAL_VACCINATIONS);
    setMedications(INITIAL_MEDICATIONS);
    setDewormingList(INITIAL_DEWORMING);
    setHeatData(HEAT_CYCLE_DATA);
    setBreeds(BREEDS_GUIDE);
    setSelectedBreed(BREEDS_GUIDE[0]);
    setCalendarData(CALENDAR_EVENTS_MOCK);
    setActivityList(INITIAL_ACTIVITY_HISTORY);
    triggerToast("Demo data reset to default!");
  };

  // Grooming completion handler
  const handleUpdateGrooming = (serviceId) => {
    const todayStr = "Today (13 Sep 2026)";
    setGroomingServices(prev =>
      prev.map(item => {
        if (item.id === serviceId) {
          return {
            ...item,
            lastDone: todayStr,
            status: 'On track',
            nextDue: '13 Oct 2026'
          };
        }
        return item;
      })
    );

    const targetService = groomingServices.find(s => s.id === serviceId);
    if (targetService) {
      // Add to activity history
      setActivityList(prev => [
        {
          id: 'act-' + Date.now(),
          date: '13 Sep 2026',
          title: targetService.service,
          dogName: activeDog.name,
          category: 'grooming',
          status: 'Done',
          icon: 'scissors',
          color: 'emerald'
        },
        ...prev
      ]);
      triggerToast(`Marked ${targetService.service} as Completed for ${activeDog.name}!`);
    }
  };

  // Add Vaccination handler
  const handleAddVaccination = (newVac) => {
    setVaccinations(prev => [newVac, ...prev]);
    setActivityList(prev => [
      {
        id: 'act-' + Date.now(),
        date: newVac.date,
        title: `Vaccination: ${newVac.name}`,
        dogName: activeDog.name,
        category: 'vaccination',
        status: 'Done',
        icon: 'syringe',
        color: 'rose'
      },
      ...prev
    ]);
    triggerToast(`Added ${newVac.name} vaccination for ${activeDog.name}!`);
  };

  // Add Medication handler
  const handleAddMedication = (newMed) => {
    setMedications(prev => [newMed, ...prev]);
    triggerToast(`Prescription for ${newMed.name} saved!`);
  };

  // Add Deworming handler
  const handleAddDeworming = (newItem) => {
    setDewormingList(prev => [newItem, ...prev]);
    setActivityList(prev => [
      {
        id: 'act-' + Date.now(),
        date: newItem.date,
        title: `Deworming: ${newItem.name}`,
        dogName: activeDog.name,
        category: 'deworming',
        status: 'Done',
        icon: 'shield',
        color: 'purple'
      },
      ...prev
    ]);
    triggerToast(`Deworming record for ${newItem.name} saved!`);
  };

  // Add Heat Cycle handler
  const handleAddCycle = (newCycle) => {
    setHeatData(prev => ({
      ...prev,
      previousCycles: [newCycle, ...prev.previousCycles]
    }));
    triggerToast(`New heat cycle logged for ${heatData.dogName}!`);
  };

  // Add New Dog handler
  const handleAddDog = (newDog) => {
    setDogs(prev => [...prev, newDog]);
    setActiveDog(newDog);
    setCurrentScreen('dogs');
    triggerToast(`Welcome ${newDog.name} to Mascota Pets! 🐾`);
  };

  // Select dog & navigate to profile
  const handleSelectDog = (dog) => {
    setActiveDog(dog);
    setCurrentScreen('profile');
  };

  // Select breed from guide
  const handleSelectBreed = (breed) => {
    setSelectedBreed(breed);
    setCurrentScreen('breeddetail');
  };

  // Helper to render screen content
  const renderScreenContent = (screenId = currentScreen) => {
    switch (screenId) {
      case 'onboarding':
        return (
          <OnboardingScreen
            onGetStarted={() => setCurrentScreen('home')}
            onLogin={() => setCurrentScreen('home')}
          />
        );
      case 'home':
        return (
          <HomeScreen
            user={user}
            dogs={dogs}
            activeDog={activeDog}
            setActiveDog={setActiveDog}
            onNavigate={(screen) => setCurrentScreen(screen)}
            onOpenNotifications={() => setShowNotificationsModal(true)}
          />
        );
      case 'dogs':
        return (
          <MyDogsScreen
            dogs={dogs}
            onSelectDog={handleSelectDog}
            onAddDog={() => setCurrentScreen('adddog')}
          />
        );
      case 'profile':
        return (
          <DogProfileScreen
            dog={activeDog}
            user={user}
            onBack={() => setCurrentScreen('dogs')}
            onEdit={() => setCurrentScreen('adddog')}
            onNavigate={(screen) => setCurrentScreen(screen)}
          />
        );
      case 'grooming':
        return (
          <GroomingScreen
            groomingServices={groomingServices}
            onUpdateGrooming={handleUpdateGrooming}
            onBack={() => setCurrentScreen('home')}
            dogName={activeDog.name}
          />
        );
      case 'vaccination':
        return (
          <VaccinationScreen
            vaccinations={vaccinations}
            onAddVaccination={handleAddVaccination}
            onBack={() => setCurrentScreen('home')}
            dogName={activeDog.name}
          />
        );
      case 'medication':
        return (
          <MedicationScreen
            medications={medications}
            onAddMedication={handleAddMedication}
            onBack={() => setCurrentScreen('home')}
            dogName={activeDog.name}
          />
        );
      case 'deworming':
        return (
          <DewormingScreen
            dewormingList={dewormingList}
            onAddDeworming={handleAddDeworming}
            onBack={() => setCurrentScreen('home')}
            dogName={activeDog.name}
          />
        );
      case 'heatcycle':
        return (
          <HeatCycleScreen
            heatData={heatData}
            onAddCycle={handleAddCycle}
            onBack={() => setCurrentScreen('home')}
          />
        );
      case 'breedguide':
        return (
          <BreedGuideScreen
            breeds={breeds}
            onSelectBreed={handleSelectBreed}
            onBack={() => setCurrentScreen('home')}
          />
        );
      case 'breeddetail':
        return (
          <BreedDetailScreen
            breed={selectedBreed}
            onBack={() => setCurrentScreen('breedguide')}
          />
        );
      case 'calendar':
        return (
          <CalendarScreen
            calendarData={calendarData}
            onBack={() => setCurrentScreen('home')}
            onNavigate={(screen) => setCurrentScreen(screen)}
          />
        );
      case 'history':
        return (
          <ActivityHistoryScreen
            activityList={activityList}
            onBack={() => setCurrentScreen('home')}
          />
        );
      case 'adddog':
        return (
          <AddDogScreen
            onAddDog={handleAddDog}
            onBack={() => setCurrentScreen('dogs')}
          />
        );
      case 'showcase':
        return (
          <FeatureShowcaseScreen
            onNavigate={(screen) => setCurrentScreen(screen)}
          />
        );
      default:
        return (
          <HomeScreen
            user={user}
            dogs={dogs}
            activeDog={activeDog}
            setActiveDog={setActiveDog}
            onNavigate={(screen) => setCurrentScreen(screen)}
            onOpenNotifications={() => setShowNotificationsModal(true)}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col font-sans selection:bg-emerald-500 selection:text-white">
      
      {/* Top Client Presentation Bar */}
      <DemoPresentationBar
        currentScreen={currentScreen}
        setCurrentScreen={(s) => {
          if (s === 'studio') {
            setViewMode('studio');
          } else {
            setCurrentScreen(s);
          }
        }}
        viewMode={viewMode}
        setViewMode={setViewMode}
        activeDog={activeDog}
        setActiveDog={setActiveDog}
        dogs={dogs}
        onResetData={handleResetData}
      />

      {/* Main View Area */}
      <main className="flex-1 flex flex-col items-center justify-center relative overflow-x-hidden">
        
        {/* VIEW 1: STUDIO GALLERY (Side-by-side all 15 screens) */}
        {viewMode === 'studio' && (
          <StudioGalleryView
            onSelectScreen={(screenId) => {
              setCurrentScreen(screenId);
              setViewMode('phone');
            }}
            currentScreen={currentScreen}
            renderScreenContent={renderScreenContent}
          />
        )}

        {/* VIEW 2: MOBILE PHONE FRAME SIMULATOR */}
        {viewMode === 'phone' && (
          <PhoneFrame
            currentScreen={currentScreen}
            onSelectTab={(tabId) => {
              if (tabId === 'more') {
                setCurrentScreen('showcase');
              } else {
                setCurrentScreen(tabId);
              }
            }}
          >
            {renderScreenContent(currentScreen)}
          </PhoneFrame>
        )}

        {/* VIEW 3: FULL SCREEN RESPONSIVE */}
        {viewMode === 'fullscreen' && (
          <div className="w-full max-w-2xl mx-auto my-6 bg-slate-50 min-h-[85vh] rounded-3xl overflow-hidden shadow-2xl border border-slate-700 flex flex-col">
            <div className="flex-1 flex flex-col">
              {renderScreenContent(currentScreen)}
            </div>
          </div>
        )}

      </main>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 animate-slide-up flex items-center gap-2.5 bg-slate-900 text-white px-4 py-3 rounded-2xl shadow-2xl border border-emerald-500/40 text-xs font-semibold">
          <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-3.5 h-3.5" />
          </div>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Notifications Drawer Modal */}
      {showNotificationsModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-fade-in">
          <div className="bg-white rounded-3xl p-5 max-w-sm w-full shadow-2xl space-y-3.5 animate-slide-up text-slate-800">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center">
                  <Bell className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold">Notifications</h3>
              </div>
              <button
                onClick={() => setShowNotificationsModal(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-2.5 text-xs">
              <div
                onClick={() => {
                  setShowNotificationsModal(false);
                  setCurrentScreen('vaccination');
                }}
                className="p-3 bg-rose-50 border border-rose-200 rounded-2xl cursor-pointer hover:bg-rose-100/70 transition"
              >
                <span className="font-bold text-rose-900 block">💉 Leptospirosis Vaccine Due Soon</span>
                <span className="text-rose-700 text-[11px]">Due for Max in 5 days. Tap to review schedule.</span>
              </div>

              <div
                onClick={() => {
                  setShowNotificationsModal(false);
                  setCurrentScreen('grooming');
                }}
                className="p-3 bg-amber-50 border border-amber-200 rounded-2xl cursor-pointer hover:bg-amber-100/70 transition"
              >
                <span className="font-bold text-amber-900 block">✂️ Grooming & Bath Due</span>
                <span className="text-amber-700 text-[11px]">Bath scheduled for Rocky today.</span>
              </div>

              <div
                onClick={() => {
                  setShowNotificationsModal(false);
                  setCurrentScreen('heatcycle');
                }}
                className="p-3 bg-pink-50 border border-pink-200 rounded-2xl cursor-pointer hover:bg-pink-100/70 transition"
              >
                <span className="font-bold text-pink-900 block">🌸 Bella Heat Cycle Prediction</span>
                <span className="text-pink-700 text-[11px]">Next estimated cycle starting 06 Nov 2025.</span>
              </div>
            </div>

            <button
              onClick={() => setShowNotificationsModal(false)}
              className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-2.5 rounded-xl text-xs transition"
            >
              Close
            </button>
          </div>
        </div>
      )}

    </div>
  );
}

export default App;
