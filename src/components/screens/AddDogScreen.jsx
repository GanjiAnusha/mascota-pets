import React, { useState } from 'react';
import { ArrowLeft, Camera, Calendar, ChevronDown, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export function AddDogScreen({ onAddDog, onBack }) {
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('Golden Retriever');
  const [dob, setDob] = useState('15 Jan 2024');
  const [gender, setGender] = useState('Male');
  const [weight, setWeight] = useState('18 kg');
  const [color, setColor] = useState('Golden');
  const [microchip, setMicrochip] = useState('985141000' + Math.floor(100000 + Math.random() * 900000));
  const [photo, setPhoto] = useState('https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=600&q=80');

  const breedsList = [
    'Golden Retriever',
    'Labrador Retriever',
    'German Shepherd',
    'French Bulldog',
    'Beagle',
    'Standard Poodle',
    'Rottweiler',
    'Siberian Husky',
    'Shih Tzu',
    'Boxer',
    'Dachshund',
    'Pug',
    'Indie / Mixed Breed'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    const newDog = {
      id: 'dog-' + Date.now(),
      name: name.trim(),
      breed: breed,
      age: '1.0 yr',
      dob: dob,
      weight: weight,
      gender: gender,
      genderSymbol: gender === 'Male' ? '♂' : '♀',
      color: color,
      microchip: microchip,
      status: 'Healthy',
      statusType: 'healthy',
      photo: photo,
      coverPhoto: photo,
      overview: {
        bio: `${name} is a playful and friendly ${breed}.`,
        allergies: 'None',
        diet: 'Standard puppy/adult kibble blend',
        vetContact: 'Dr. Sharma (+91 98450 11223)'
      }
    };

    onAddDog(newDog);
    confetti({ particleCount: 90, spread: 60, origin: { y: 0.7 } });
  };

  return (
    <div className="flex-1 flex flex-col bg-slate-50/60 animate-fade-in pb-12">
      
      {/* Top Header */}
      <div className="px-4 pt-1 pb-2 flex items-center justify-between bg-white border-b border-slate-100">
        <button
          onClick={onBack}
          className="p-1.5 -ml-1 text-slate-700 hover:text-emerald-700 rounded-lg transition"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h2 className="text-base font-bold text-slate-900">Add Dog</h2>
        <div className="w-8"></div>
      </div>

      {/* Form Content */}
      <form onSubmit={handleSubmit} className="p-4 space-y-4">
        
        {/* Photo Upload Box */}
        <div className="flex flex-col items-center justify-center pt-2">
          <div className="w-24 h-24 rounded-3xl bg-white border-2 border-dashed border-emerald-300 hover:border-emerald-500 flex flex-col items-center justify-center text-emerald-700 shadow-sm cursor-pointer tap-effect transition overflow-hidden">
            {photo ? (
              <img src={photo} alt="Preview" className="w-full h-full object-cover" />
            ) : (
              <>
                <Camera className="w-6 h-6 mb-1 text-emerald-600" />
                <span className="text-[10px] font-bold text-slate-600">Add Photo</span>
              </>
            )}
          </div>
          <button
            type="button"
            onClick={() => {
              const samplePhotos = [
                'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=600&q=80',
                'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=600&q=80',
                'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&w=600&q=80',
                'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80'
              ];
              const random = samplePhotos[Math.floor(Math.random() * samplePhotos.length)];
              setPhoto(random);
            }}
            className="text-[11px] font-semibold text-emerald-700 hover:underline mt-1.5"
          >
            Change Sample Photo
          </button>
        </div>

        {/* Inputs Card */}
        <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm space-y-3.5 text-xs">
          
          {/* Name */}
          <div>
            <label className="text-slate-600 font-bold block mb-1">Dog's Name</label>
            <input
              type="text"
              required
              placeholder="e.g. Cooper / Bruno / Daisy"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 font-medium focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            />
          </div>

          {/* Breed */}
          <div>
            <label className="text-slate-600 font-bold block mb-1">Breed</label>
            <div className="relative">
              <select
                value={breed}
                onChange={(e) => setBreed(e.target.value)}
                className="w-full appearance-none bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 font-medium focus:ring-2 focus:ring-emerald-500 focus:outline-none pr-8 cursor-pointer"
              >
                {breedsList.map((b) => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Date of Birth */}
          <div>
            <label className="text-slate-600 font-bold block mb-1">Date of Birth</label>
            <div className="relative">
              <input
                type="text"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                placeholder="DD/MM/YYYY"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-3.5 pr-10 py-2.5 text-slate-900 font-medium focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              />
              <Calendar className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Gender */}
          <div>
            <label className="text-slate-600 font-bold block mb-1.5">Gender</label>
            <div className="grid grid-cols-2 gap-3">
              <label
                onClick={() => setGender('Male')}
                className={`flex items-center justify-center gap-2 p-2.5 rounded-xl border cursor-pointer font-bold transition-all tap-effect ${
                  gender === 'Male'
                    ? 'border-emerald-600 bg-emerald-50 text-emerald-800'
                    : 'border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100'
                }`}
              >
                <input
                  type="radio"
                  name="gender"
                  checked={gender === 'Male'}
                  onChange={() => setGender('Male')}
                  className="accent-emerald-600"
                />
                <span>Male ♂</span>
              </label>

              <label
                onClick={() => setGender('Female')}
                className={`flex items-center justify-center gap-2 p-2.5 rounded-xl border cursor-pointer font-bold transition-all tap-effect ${
                  gender === 'Female'
                    ? 'border-pink-500 bg-pink-50 text-pink-800'
                    : 'border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100'
                }`}
              >
                <input
                  type="radio"
                  name="gender"
                  checked={gender === 'Female'}
                  onChange={() => setGender('Female')}
                  className="accent-pink-600"
                />
                <span>Female ♀</span>
              </label>
            </div>
          </div>

          {/* Weight & Color */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-slate-600 font-bold block mb-1">Weight</label>
              <input
                type="text"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900 font-medium focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="text-slate-600 font-bold block mb-1">Color</label>
              <input
                type="text"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900 font-medium focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Microchip */}
          <div>
            <label className="text-slate-600 font-bold block mb-1">Microchip Number</label>
            <input
              type="text"
              value={microchip}
              onChange={(e) => setMicrochip(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 font-mono font-medium focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            />
          </div>

        </div>

        {/* Action Button */}
        <button
          type="submit"
          className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-3.5 px-4 rounded-2xl shadow-xl shadow-emerald-950/20 flex items-center justify-center gap-2 transition-all tap-effect"
        >
          <CheckCircle2 className="w-5 h-5" />
          <span>Save Dog Profile</span>
        </button>

      </form>

    </div>
  );
}
