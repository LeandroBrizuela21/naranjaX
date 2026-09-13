import React, { useState } from 'react';
import {
  Bell,
  HelpCircle,
  Eye,
  EyeOff,
  ArrowUp,
  ArrowRightLeft,
  CreditCard,
  Home,
  Activity,
  ScanLine,
  LayoutGrid,
  ChevronLeft,
  ChevronRight,
  Trophy,
  Plane,
  Utensils,
  Shirt,
  QrCode
} from 'lucide-react';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('home');

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4 font-sans">
      {/* Mobile Device Mockup */}
      <div className="relative w-[375px] h-[812px] bg-[#f8f9fa] rounded-[40px] shadow-2xl overflow-hidden border-[12px] border-gray-800 flex flex-col">

        {/* Status Bar */}
        <div className="flex justify-between items-center px-6 py-3 text-xs font-semibold text-gray-800 z-10 bg-[#f8f9fa]/90 backdrop-blur-md">
          <span>00:41</span>
          <div className="flex space-x-2 items-center">
            <div className="w-4 h-4 bg-gray-800 rounded-sm"></div>
            <div className="w-6 h-3 bg-gray-800 rounded-sm"></div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto pb-28 scrollbar-hide">
          {currentScreen === 'home' ? (
            <HomeScreen onNavigate={() => setCurrentScreen('manguitos')} />
          ) : (
            <ManguitosScreen onNavigate={() => setCurrentScreen('home')} />
          )}
        </div>

        {/* Bottom Navigation */}
        <div className="absolute bottom-0 w-full bg-white border-t border-gray-200 px-6 py-4 flex justify-between items-center pb-8 rounded-b-[28px] shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)]">
          <button className={`flex flex-col items-center transition-colors ${currentScreen === 'home' ? 'text-naranja-500' : 'text-gray-400 hover:text-gray-600'}`} onClick={() => setCurrentScreen('home')}>
            <Home size={24} className="mb-1" strokeWidth={2.5} />
            <span className="text-[10px] font-bold">Inicio</span>
          </button>
          <button className="flex flex-col items-center text-gray-400 hover:text-gray-600 transition-colors">
            <Activity size={24} className="mb-1" strokeWidth={2.5} />
            <span className="text-[10px] font-bold">Cuentas</span>
          </button>

          <div className="relative -top-5">
            <button className="w-14 h-14 bg-naranja-500 rounded-full flex items-center justify-center shadow-lg shadow-naranja-500/40 text-white hover:scale-105 active:scale-95 transition-all">
              <ScanLine size={28} strokeWidth={2.5} />
            </button>
          </div>

          <button className="flex flex-col items-center text-gray-400 hover:text-gray-600 transition-colors">
            <CreditCard size={24} className="mb-1" strokeWidth={2.5} />
            <span className="text-[10px] font-bold">Tarjetas</span>
          </button>
          <button className="flex flex-col items-center text-gray-400 hover:text-gray-600 transition-colors">
            <LayoutGrid size={24} className="mb-1" strokeWidth={2.5} />
            <span className="text-[10px] font-bold">Más</span>
          </button>
        </div>
      </div>
    </div>
  );
}

function HomeScreen({ onNavigate }) {
  const [showBalance, setShowBalance] = useState(true);

  return (
    <div className="animate-in fade-in duration-500 slide-in-from-bottom-2">
      {/* Header */}
      <div className="px-5 pt-4 pb-2 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm text-naranja-500 font-black text-lg border border-gray-100">
            NX
          </div>
          <h1 className="text-gray-800 text-lg">Hola <span className="font-bold text-xl">Jose</span>,</h1>
        </div>
        <div className="flex items-center space-x-3">
          <div className="relative cursor-pointer hover:scale-105 transition-transform">
            <Bell size={24} className="text-gray-800" />
            <span className="absolute -top-1 -right-1 bg-naranja-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-sm">7</span>
          </div>
          <button className="flex items-center space-x-1 bg-purple-100/50 text-purple-900 px-3 py-1.5 rounded-full text-sm font-bold hover:bg-purple-100 transition-colors">
            <HelpCircle size={16} />
            <span>Ayuda</span>
          </button>
        </div>
      </div>

      <div className="px-5 mt-6">
        {/* Main Balance Card */}
        <div className="bg-white rounded-[24px] p-6 shadow-md border border-gray-100 relative overflow-hidden transition-all hover:shadow-lg">
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-50 rounded-full blur-3xl -mr-10 -mt-10 opacity-60"></div>

          <div className="flex justify-between items-center mb-3 relative z-10">
            <span className="text-gray-600 text-sm font-bold flex items-center">
              Cuenta en pesos
              <span className="text-green-600 ml-2 bg-green-100 px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider">+19%</span>
            </span>
            <ChevronRight size={20} className="text-naranja-500 cursor-pointer" />
          </div>
          <div className="flex items-center space-x-3 mb-8 relative z-10">
            <span className="text-gray-800 text-[32px] font-black tracking-tight">
              {showBalance ? '$ 250.000' : '$ Shh...'}
            </span>
            <button onClick={() => setShowBalance(!showBalance)} className="text-purple-400 hover:text-purple-600 transition-colors p-1 rounded-full hover:bg-purple-50">
              {showBalance ? <EyeOff size={24} /> : <Eye size={24} />}
            </button>
          </div>

          {/* Quick Actions */}
          <div className="flex justify-between relative z-10 px-2">
            <button className="flex flex-col items-center group">
              <div className="w-14 h-14 rounded-full bg-purple-50 group-hover:bg-purple-100 transition-colors flex items-center justify-center text-purple-700 mb-2 shadow-sm">
                <ArrowUp size={24} strokeWidth={2.5} />
              </div>
              <span className="text-xs text-gray-700 font-bold">Agregar</span>
            </button>
            <button className="flex flex-col items-center group">
              <div className="w-14 h-14 rounded-full bg-purple-50 group-hover:bg-purple-100 transition-colors flex items-center justify-center text-purple-700 mb-2 shadow-sm">
                <ArrowRightLeft size={24} strokeWidth={2.5} />
              </div>
              <span className="text-xs text-gray-700 font-bold">Transferir</span>
            </button>
            <button className="flex flex-col items-center group">
              <div className="w-14 h-14 rounded-full bg-purple-50 group-hover:bg-purple-100 transition-colors flex items-center justify-center text-purple-700 mb-2 shadow-sm">
                <CreditCard size={24} strokeWidth={2.5} />
              </div>
              <span className="text-xs text-gray-700 font-bold">Alias y CBU</span>
            </button>
          </div>
        </div>

        {/* CTA Banner (Manguitos MVP) */}
        <div
          onClick={onNavigate}
          className="mt-6 bg-white rounded-2xl p-5 shadow-lg shadow-purple-900/5 border border-purple-100 flex items-center justify-between cursor-pointer transform transition-all hover:-translate-y-1 hover:shadow-xl active:scale-[0.98] relative overflow-hidden"
        >
          <div className="absolute right-0 top-0 w-24 h-24 bg-gradient-to-br from-yellow-100 to-transparent rounded-full blur-xl opacity-50"></div>

          <div className="relative z-10">
            <h3 className="text-purple-900 font-bold text-lg mb-1 tracking-tight">Manguitos</h3>
            <div className="flex items-center space-x-2">
              <span className="text-[40px] leading-none font-black text-gray-800">500</span>
              <span className="text-3xl filter drop-shadow-sm">🥭</span>
            </div>
          </div>
          <div className="h-16 w-px bg-gray-200/60 relative z-10"></div>
          <div className="flex flex-col items-center justify-center px-2 relative z-10">
            <Trophy size={36} className="text-[#cd7f32] mb-1 drop-shadow-sm" strokeWidth={2} />
            <span className="text-gray-500 text-[11px] font-bold uppercase tracking-wider">Top 2503</span>
          </div>
        </div>

        {/* Shortcuts */}
        <div className="mt-8 mb-4 flex justify-between items-center">
          <h3 className="text-gray-800 font-bold text-lg">Tus atajos</h3>
          <span className="text-purple-800 text-sm font-bold cursor-pointer hover:underline">Conocer más</span>
        </div>
        <div className="grid grid-cols-4 gap-y-6 gap-x-2">
          {['Préstamos', 'Frascos', 'Dólares', 'Cobrar'].map((item, i) => (
            <div key={i} className="flex flex-col items-center cursor-pointer group">
              <div className="w-[60px] h-[60px] bg-white rounded-2xl shadow-sm group-hover:shadow-md transition-shadow flex items-center justify-center text-purple-800 mb-2 border border-gray-100 relative">
                {i === 1 && <span className="absolute -top-2 bg-naranja-500 text-white text-[9px] font-black px-2 py-0.5 rounded-full shadow-sm">20%</span>}
                <CreditCard size={28} strokeWidth={2} className="group-hover:scale-110 transition-transform" />
              </div>
              <span className="text-[11px] text-gray-600 font-bold text-center">{item}</span>
            </div>
          ))}
          {['Servicios', 'Recargas', 'QR subte', 'Seguros'].map((item, i) => (
            <div key={i + 4} className="flex flex-col items-center cursor-pointer group">
              <div className="w-[60px] h-[60px] bg-white rounded-2xl shadow-sm group-hover:shadow-md transition-shadow flex items-center justify-center text-purple-800 mb-2 border border-gray-100">
                <LayoutGrid size={28} strokeWidth={2} className="group-hover:scale-110 transition-transform" />
              </div>
              <span className="text-[11px] text-gray-600 font-bold text-center">{item}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

function ManguitosScreen({ onNavigate }) {
  return (
    <div className="animate-in slide-in-from-right-4 duration-300 pb-10">
      {/* Header */}
      <div className="px-4 pt-4 pb-2 flex justify-between items-center sticky top-0 bg-[#f8f9fa]/95 backdrop-blur-md z-20">
        <button onClick={onNavigate} className="flex items-center text-gray-800 font-black text-xl hover:text-naranja-500 transition-colors">
          <ChevronLeft size={28} strokeWidth={3} className="mr-1" />
          <span className="tracking-tight">Manguitos</span>
        </button>
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Bell size={24} className="text-gray-800 cursor-pointer hover:scale-105 transition-transform" />
          </div>
          <button className="flex items-center space-x-1 bg-white border border-gray-200 text-gray-700 px-3 py-1.5 rounded-full text-sm font-bold shadow-sm hover:bg-gray-50 transition-colors">
            <HelpCircle size={16} />
            <span>Ayuda</span>
          </button>
        </div>
      </div>

      <div className="px-5 mt-2">


        {/* Main Balance */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center justify-between mb-4 transform transition-transform hover:scale-[1.02]">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center text-2xl shadow-inner border border-orange-100">🥭</div>
            <div>
              <span className="text-3xl leading-none font-black text-gray-800 block tracking-tighter">500</span>
              <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-0.5 block">Manguitos</span>
            </div>
          </div>
          <div className="bg-gray-50 px-3 py-2 rounded-xl border border-gray-200 flex flex-col items-center shadow-sm">
            <div className="flex items-center space-x-1 mb-0.5">
              <Trophy size={14} className="text-[#cd7f32]" strokeWidth={2.5} />
              <span className="text-[9px] font-black text-gray-800 uppercase tracking-widest">Top</span>
            </div>
            <span className="text-sm font-black text-gray-800">2503</span>
          </div>
        </div>

        {/* Missions */}
        <h3 className="text-gray-800 font-black text-lg mb-2 tracking-tight">Misiones</h3>
        <div className="space-y-2 mb-4">
          {[
            { goal: 5000, current: 0, reward: 5 },
            { goal: 10000, current: 4000, reward: 10 },
            { goal: 15000, current: 0, reward: 15 },
          ].map((mission, i) => (
            <div key={i} className="bg-white rounded-[16px] p-2.5 flex items-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer">
              <div className="bg-gray-50 p-2 rounded-xl mr-3 border border-gray-100">
                <QrCode size={20} className="text-gray-800" strokeWidth={2} />
              </div>
              <div className="flex-1">
                <h4 className="font-black text-gray-800 text-[11px] mb-1 uppercase tracking-wide">Pagar con QR</h4>
                <div className="w-full bg-gray-200 rounded-full h-1.5 mb-1 overflow-hidden">
                  <div className="bg-naranja-500 h-full rounded-full transition-all duration-1000" style={{ width: `${Math.max((mission.current / mission.goal) * 100, 5)}%` }}></div>
                </div>
                <span className="text-[9px] font-black text-gray-400">{mission.current} / {mission.goal} $</span>
              </div>
              <div className="ml-3 w-11 h-11 bg-naranja-500 rounded-full flex flex-col items-center justify-center text-white shadow-md shadow-naranja-500/40 shrink-0">
                <span className="text-[12px] leading-none mb-0.5">🥭</span>
                <span className="font-black text-[13px] leading-none">+{mission.reward}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Carousel */}
        <h3 className="text-gray-800 font-black text-lg mb-2 tracking-tight uppercase">Beneficios</h3>
        <div className="flex overflow-x-auto space-x-4 pb-6 scrollbar-hide -mx-5 px-5">
          <div className="min-w-[290px] bg-white rounded-3xl p-5 shadow-md border border-gray-100 flex items-center transform transition-transform hover:scale-[1.02] cursor-pointer">
            <div className="w-[72px] h-[72px] bg-[#E3000F] rounded-2xl flex items-center justify-center text-[#FFC72C] font-black text-4xl mr-4 shadow-sm shrink-0">
              M
            </div>
            <div className="flex-1">
              <h4 className="font-black text-gray-800 text-lg leading-none mb-1 tracking-tight">McDonald's</h4>
              <p className="text-[12px] font-black text-naranja-500 uppercase tracking-widest mb-2">20% de descuento</p>
              <div className="bg-gray-50 inline-flex items-center px-3 py-1.5 rounded-xl border border-gray-200">
                <span className="text-xs font-black text-gray-800 mr-1">10000$</span>
                <span className="text-sm">🥭</span>
              </div>
            </div>
          </div>

          <div className="min-w-[290px] bg-white rounded-3xl p-5 shadow-sm border border-gray-100 flex items-center opacity-60">
            <div className="w-[72px] h-[72px] bg-blue-100 rounded-2xl mr-4 shrink-0 flex items-center justify-center">
              <Plane className="text-blue-500" size={32} />
            </div>
            <div className="flex-1">
              <div className="h-5 bg-gray-200 rounded-md w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-200 rounded-md w-1/2 mb-3"></div>
              <div className="h-7 bg-gray-200 rounded-xl w-1/3"></div>
            </div>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="mt-2 mb-6">
          <div className="flex justify-between items-center mb-5">
            <h3 className="text-gray-800 font-black text-xl tracking-tight">Categorías</h3>
            <span className="text-[10px] text-gray-500 font-black tracking-widest uppercase cursor-pointer hover:text-naranja-500 transition-colors">Ver todas</span>
          </div>

          <div className="flex space-x-3 mb-6 overflow-x-auto scrollbar-hide -mx-5 px-5 pb-2">
            <button className="bg-white border border-gray-200 px-5 py-2.5 rounded-full text-sm font-bold text-gray-700 shadow-sm flex items-center space-x-2 whitespace-nowrap hover:border-naranja-500 hover:text-naranja-500 transition-all">
              <Plane size={18} />
              <span>Viajes</span>
            </button>
            <button className="bg-white border border-gray-200 px-5 py-2.5 rounded-full text-sm font-bold text-gray-700 shadow-sm flex items-center space-x-2 whitespace-nowrap hover:border-naranja-500 hover:text-naranja-500 transition-all">
              <Utensils size={18} />
              <span>Restaurantes</span>
            </button>
            <button className="bg-white border border-gray-200 px-5 py-2.5 rounded-full text-sm font-bold text-gray-700 shadow-sm flex items-center space-x-2 whitespace-nowrap hover:border-naranja-500 hover:text-naranja-500 transition-all">
              <Shirt size={18} />
              <span>Moda</span>
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { name: 'Café Martínez', discount: '10%', cost: '8000', icon: '☕' },
              { name: 'YPF', discount: '15%', cost: '12000', icon: '⛽' },
              { name: 'Farmacity', discount: '10%', cost: '5000', icon: '💊' },
              { name: 'Cinepolis', discount: '2x1', cost: '15000', icon: '🍿' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-[24px] p-5 shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center hover:shadow-md transition-all cursor-pointer group">
                <div className="w-14 h-14 bg-gray-50 rounded-full flex items-center justify-center text-3xl mb-3 border border-gray-100 shadow-inner group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h4 className="font-bold text-gray-800 text-[13px] mb-1.5 leading-tight">{item.name}</h4>
                <p className="text-[15px] font-black text-naranja-500 mb-3 tracking-tight">{item.discount} <span className="text-[10px] uppercase tracking-widest text-gray-500">OFF</span></p>
                <div className="bg-gray-50 border border-gray-100 px-3 py-1.5 rounded-xl w-full flex items-center justify-center">
                  <span className="text-xs font-black text-gray-800 mr-1">{item.cost}$</span>
                  <span className="text-xs">🥭</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}
