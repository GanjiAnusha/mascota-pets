import React from 'react';

export function MascotaPaw({ className = "w-8 h-8 text-emerald-700", fill = "currentColor" }) {
  return (
    <svg viewBox="0 0 24 24" fill={fill} className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M12 10.5C9.5 10.5 7.5 12.5 7.5 15C7.5 17.5 9.5 20.5 12 20.5C14.5 20.5 16.5 17.5 16.5 15C16.5 12.5 14.5 10.5 12 10.5Z" />
      <circle cx="6" cy="9" r="2.2" />
      <circle cx="10" cy="5.5" r="2.2" />
      <circle cx="14" cy="5.5" r="2.2" />
      <circle cx="18" cy="9" r="2.2" />
    </svg>
  );
}

export function MascotaLogo({ size = "default", light = false, showTagline = true }) {
  return (
    <div className="flex flex-col items-center select-none">
      <div className="flex items-center gap-2">
        <div className={`p-2 rounded-2xl ${light ? 'bg-white/20 text-white' : 'bg-emerald-700 text-white shadow-md shadow-emerald-700/20'}`}>
          <MascotaPaw className="w-7 h-7" fill="currentColor" />
        </div>
        <div className="text-left">
          <span className={`font-extrabold tracking-tight block ${size === 'large' ? 'text-3xl' : 'text-xl'} ${light ? 'text-white' : 'text-emerald-900'}`} style={{ fontFamily: 'Outfit, sans-serif' }}>
            Mascota <span className="text-emerald-700 font-bold">Pets</span>
          </span>
          {showTagline && (
            <span className={`text-[10px] font-semibold tracking-wider uppercase block ${light ? 'text-emerald-100' : 'text-emerald-800'}`}>
              Healthy Dogs • Happy Lives
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
