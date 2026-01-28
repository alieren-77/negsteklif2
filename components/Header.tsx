
import React from 'react';
import { COLORS } from '../constants';

const Header: React.FC = () => {
  return (
    <header className="bg-white px-10 py-8 border-b-4 border-[#e65100] flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="flex flex-col items-center md:items-start">
        <h1 className="text-3xl font-bold tracking-tight text-[#0f2445]">
          NEGS <span className="text-[#e65100] font-light">Tech</span>
        </h1>
        <small className="text-gray-500 font-medium">Güç Sistemleri | Since 1984</small>
      </div>
      <div className="text-center md:text-right">
        <p className="text-gray-600 text-sm">Sayın</p>
        <strong className="text-[#0f2445] text-lg block leading-tight">Hakan Kara</strong>
        <p className="text-gray-600 text-sm mt-1">Serik Güzellik Merkezi</p>
        <p className="text-gray-400 text-xs mt-1">Tarih: 26.06.2024</p>
      </div>
    </header>
  );
};

export default Header;
