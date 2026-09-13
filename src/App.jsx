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
  QrCode,
  MoreHorizontal,
  User,
  Users,
  Store,
  Percent,
  Gift,
  PiggyBank,
  ShieldCheck,
  Gauge,
  HandCoins,
  Luggage,
  Check,
  ShoppingCart,
  Car
} from 'lucide-react';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('home');
  const [showMaintenance, setShowMaintenance] = useState(false);
  const [showNotEnough, setShowNotEnough] = useState(false);
  const [manguitos, setManguitos] = useState(150);

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
          {currentScreen === 'home' && (
            <HomeScreen onNavigate={() => setCurrentScreen('manguitos')} onShowMaintenance={() => setShowMaintenance(true)} manguitos={manguitos} />
          )}
          {currentScreen === 'manguitos' && (
            <ManguitosScreen
              onBack={() => setCurrentScreen('home')}
              onNavigate={(screen) => setCurrentScreen(screen)}
              manguitos={manguitos}
              setManguitos={setManguitos}
              onShowNotEnough={() => setShowNotEnough(true)}
            />
          )}
          {currentScreen === 'ranking' && (
            <RankingScreen onBack={() => setCurrentScreen('manguitos')} manguitos={manguitos} />
          )}
          {currentScreen === 'mas' && (
            <MasScreen onShowMaintenance={() => setShowMaintenance(true)} />
          )}
          {currentScreen === 'tarjetas' && (
            <TarjetasScreen />
          )}
        </div>

        {/* Not Enough Manguitos Popup */}
        {showNotEnough && (
          <div className="absolute inset-0 z-50 flex items-center justify-center p-6 bg-gray-900/40 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white rounded-[28px] p-6 shadow-2xl w-full max-w-sm flex flex-col items-center text-center animate-in zoom-in-95 duration-200 border border-gray-100">
              <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mb-4 shadow-inner border border-red-100">
                <span className="text-3xl filter grayscale opacity-50">🥭</span>
              </div>
              <h3 className="text-gray-800 text-xl font-black mb-2 tracking-tight">¡Casi casi!</h3>
              <p className="text-gray-600 text-[15px] mb-6 font-medium leading-tight">Todavía no tenés los manguitos necesarios para este beneficio.
                <br /> ¡A realizar misiones!</p>
              <button
                onClick={() => setShowNotEnough(false)}
                className="w-full bg-naranja-500 text-white font-bold py-3.5 rounded-2xl hover:bg-[#e54519] active:scale-[0.98] transition-all shadow-md shadow-naranja-500/30"
              >
                Entendido
              </button>
            </div>
          </div>
        )}

        {/* Maintenance Popup */}
        {showMaintenance && (
          <div className="absolute inset-0 z-50 flex items-center justify-center p-6 bg-gray-900/40 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white rounded-[28px] p-6 shadow-2xl w-full max-w-sm flex flex-col items-center text-center animate-in zoom-in-95 duration-200 border border-gray-100">
              <div className="w-16 h-16 bg-orange-50 text-naranja-500 rounded-full flex items-center justify-center mb-4 shadow-inner border border-orange-100">
                <HelpCircle size={32} strokeWidth={2.5} />
              </div>
              <h3 className="text-gray-800 text-xl font-black mb-2 tracking-tight">En mantenimiento</h3>
              <p className="text-gray-600 text-[15px] mb-6 font-medium leading-tight">Estamos trabajando en esta sección para ofrecerte una mejor experiencia. ¡Volvé pronto!</p>
              <button
                onClick={() => setShowMaintenance(false)}
                className="w-full bg-naranja-500 text-white font-bold py-3.5 rounded-2xl hover:bg-[#e54519] active:scale-[0.98] transition-all shadow-md shadow-naranja-500/30"
              >
                Entendido
              </button>
            </div>
          </div>
        )}

        {/* Bottom Navigation */}
        <div className="absolute bottom-0 w-full bg-white border-t border-gray-200 px-6 py-4 flex justify-between items-center pb-8 rounded-b-[28px] shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)] z-20">
          <button className={`flex flex-col items-center transition-colors ${currentScreen === 'home' ? 'text-naranja-500' : 'text-gray-400 hover:text-gray-600'}`} onClick={() => setCurrentScreen('home')}>
            <Home size={24} className="mb-1" strokeWidth={2.5} />
            <span className="text-[10px] font-bold">Inicio</span>
          </button>
          <button className="flex flex-col items-center text-gray-400 hover:text-gray-600 transition-colors" onClick={() => setShowMaintenance(true)}>
            <Activity size={24} className="mb-1" strokeWidth={2.5} />
            <span className="text-[10px] font-bold">Cuentas</span>
          </button>

          <div className="relative -top-5">
            <button onClick={() => setShowMaintenance(true)} className="w-14 h-14 bg-naranja-500 rounded-full flex items-center justify-center shadow-lg shadow-naranja-500/40 text-white hover:scale-105 active:scale-95 transition-all">
              <ScanLine size={28} strokeWidth={2.5} />
            </button>
          </div>

          <button className={`flex flex-col items-center transition-colors ${currentScreen === 'tarjetas' ? 'text-purple-900' : 'text-gray-400 hover:text-gray-600'}`} onClick={() => setCurrentScreen('tarjetas')}>
            <CreditCard size={24} className="mb-1" strokeWidth={2.5} />
            <span className="text-[10px] font-bold">Tarjetas</span>
          </button>
          <button className={`flex flex-col items-center transition-colors ${currentScreen === 'mas' ? 'text-purple-900' : 'text-gray-400 hover:text-gray-600'}`} onClick={() => setCurrentScreen('mas')}>
            <LayoutGrid size={24} className="mb-1" strokeWidth={2.5} />
            <span className="text-[10px] font-bold">Más</span>
          </button>
        </div>
      </div>
    </div>
  );
}

function HomeScreen({ onNavigate, onShowMaintenance, manguitos }) {
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
          <div className="relative cursor-pointer hover:scale-105 transition-transform" onClick={onShowMaintenance}>
            <Bell size={24} className="text-gray-800" />
            <span className="absolute -top-1 -right-1 bg-naranja-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-sm">7</span>
          </div>
          <button onClick={onShowMaintenance} className="flex items-center space-x-1 bg-purple-100/50 text-purple-900 px-3 py-1.5 rounded-full text-sm font-bold hover:bg-purple-100 transition-colors">
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
            <ChevronRight size={20} className="text-naranja-500 cursor-pointer" onClick={onShowMaintenance} />
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
            <button className="flex flex-col items-center group" onClick={onShowMaintenance}>
              <div className="w-14 h-14 rounded-full bg-purple-50 group-hover:bg-purple-100 transition-colors flex items-center justify-center text-purple-700 mb-2 shadow-sm">
                <ArrowUp size={24} strokeWidth={2.5} />
              </div>
              <span className="text-xs text-gray-700 font-bold">Agregar</span>
            </button>
            <button className="flex flex-col items-center group" onClick={onShowMaintenance}>
              <div className="w-14 h-14 rounded-full bg-purple-50 group-hover:bg-purple-100 transition-colors flex items-center justify-center text-purple-700 mb-2 shadow-sm">
                <ArrowRightLeft size={24} strokeWidth={2.5} />
              </div>
              <span className="text-xs text-gray-700 font-bold">Transferir</span>
            </button>
            <button className="flex flex-col items-center group" onClick={onShowMaintenance}>
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
              <span className="text-[40px] leading-none font-black text-gray-800">{manguitos}</span>
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
          <span className="text-purple-800 text-sm font-bold cursor-pointer hover:underline" onClick={onShowMaintenance}>Conocer más</span>
        </div>
        <div className="grid grid-cols-4 gap-y-6 gap-x-2">
          {['Préstamos', 'Frascos', 'Dólares', 'Cobrar'].map((item, i) => (
            <div key={i} className="flex flex-col items-center cursor-pointer group" onClick={onShowMaintenance}>
              <div className="w-[60px] h-[60px] bg-white rounded-2xl shadow-sm group-hover:shadow-md transition-shadow flex items-center justify-center text-purple-800 mb-2 border border-gray-100 relative">
                {i === 1 && <span className="absolute -top-2 bg-naranja-500 text-white text-[9px] font-black px-2 py-0.5 rounded-full shadow-sm">20%</span>}
                <CreditCard size={28} strokeWidth={2} className="group-hover:scale-110 transition-transform" />
              </div>
              <span className="text-[11px] text-gray-600 font-bold text-center">{item}</span>
            </div>
          ))}
          {['Servicios', 'Recargas', 'QR subte', 'Seguros'].map((item, i) => (
            <div key={i + 4} className="flex flex-col items-center cursor-pointer group" onClick={onShowMaintenance}>
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

function ManguitosScreen({ onBack, onNavigate, manguitos, setManguitos, onShowNotEnough }) {
  const beneficiosCarousel = [
    { name: "McDonald's", promo: '10% de descuento', cost: '400', initial: 'M', bg: 'bg-[#E3000F]', iconColor: 'text-[#FFC72C]' },
    { name: 'Carrefour', promo: '15% de descuento', cost: '450', icon: ShoppingCart, bg: 'bg-blue-600', iconColor: 'text-white' },
    { name: 'Cabify', promo: '30% de descuento', cost: '600', icon: Car, bg: 'bg-purple-600', iconColor: 'text-white' },
    { name: 'Pertutti', promo: '20% de reintegro', cost: '550', icon: Utensils, bg: 'bg-red-50', iconColor: 'text-red-800' },
  ];

  const [missions, setMissions] = useState([
    { id: 1, title: 'Pagar con QR', goal: 5000, current: 5000, reward: 15, claimed: false },
    { id: 2, title: 'Transferir', goal: 10000, current: 4000, reward: 30, claimed: false },
    { id: 3, title: 'Ingresar dinero', goal: 15000, current: 0, reward: 500, claimed: false },
  ]);
  const [animatingId, setAnimatingId] = useState(null);

  const handleClaim = (mission) => {
    if (mission.current >= mission.goal && !mission.claimed) {
      setAnimatingId(mission.id);

      setTimeout(() => {
        setManguitos(prev => prev + mission.reward);
        setMissions(missions.map(m => m.id === mission.id ? { ...m, claimed: true } : m));
        setAnimatingId(null);
      }, 600);
    }
  };

  return (
    <div className="animate-in slide-in-from-right-4 duration-300 pb-10">
      {/* Header */}
      <div className="px-4 pt-4 pb-2 flex justify-between items-center sticky top-0 bg-[#f8f9fa]/95 backdrop-blur-md z-20">
        <button onClick={onBack} className="flex items-center text-gray-800 font-black text-xl hover:text-naranja-500 transition-colors">
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
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center text-2xl shadow-inner border border-orange-100">🥭</div>
            <div>
              <span className="text-3xl leading-none font-black text-gray-800 block tracking-tighter transition-all duration-300">{manguitos}</span>
              <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-0.5 block">Manguitos</span>
            </div>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('ranking')}
            className="bg-gray-50 px-3 py-2 rounded-xl border border-gray-200 flex flex-col items-center shadow-sm cursor-pointer hover:bg-orange-50 hover:border-naranja-500 active:scale-95 transition-all"
          >
            <div className="flex items-center space-x-1 mb-0.5">
              <Trophy size={14} className="text-[#cd7f32]" strokeWidth={2.5} />
              <span className="text-[9px] font-black text-gray-800 uppercase tracking-widest">Top</span>
            </div>
            <span className="text-sm font-black text-gray-800">2503</span>
          </button>
        </div>

        {/* Missions */}
        <h3 className="text-gray-800 font-black text-lg mb-2 tracking-tight">Misiones</h3>
        <div className="space-y-2 mb-4">
          {missions.map((mission) => {
            const isCompleted = mission.current >= mission.goal;
            const isAnimating = animatingId === mission.id;

            return (
              <div
                key={mission.id}
                className={`bg-white rounded-[16px] p-2.5 flex items-center shadow-sm border ${isCompleted && !mission.claimed ? 'border-naranja-500/50 hover:shadow-md' : 'border-gray-100'} transition-all cursor-pointer relative overflow-hidden`}
                onClick={() => handleClaim(mission)}
              >
                {isCompleted && !mission.claimed && (
                  <div className="absolute inset-0 bg-naranja-500/5 animate-pulse"></div>
                )}

                <div className={`bg-gray-50 p-2 rounded-xl mr-3 border border-gray-100 relative z-10 ${isCompleted && !mission.claimed ? 'text-naranja-500' : 'text-gray-800'}`}>
                  <QrCode size={20} strokeWidth={2} />
                </div>
                <div className="flex-1 relative z-10">
                  <h4 className="font-black text-gray-800 text-[11px] mb-1 uppercase tracking-wide">{mission.title}</h4>
                  <div className="w-full bg-gray-200 rounded-full h-1.5 mb-1 overflow-hidden">
                    <div className={`${mission.claimed ? 'bg-green-500' : 'bg-naranja-500'} h-full rounded-full transition-all duration-1000`} style={{ width: `${Math.max((mission.current / mission.goal) * 100, 5)}%` }}></div>
                  </div>
                  <span className="text-[9px] font-black text-gray-400">{mission.current} / {mission.goal} $</span>
                </div>

                <div className={`ml-3 w-11 h-11 rounded-full flex flex-col items-center justify-center text-white shrink-0 relative z-10 transition-all duration-500 ${mission.claimed
                  ? 'bg-green-500 scale-95'
                  : isCompleted
                    ? 'bg-naranja-500 shadow-md shadow-naranja-500/40 animate-bounce'
                    : 'bg-gray-300'
                  }`}>
                  {isAnimating ? (
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  ) : mission.claimed ? (
                    <Check size={20} strokeWidth={3} />
                  ) : (
                    <>
                      <span className="text-[12px] leading-none mb-0.5">🥭</span>
                      <span className="font-black text-[13px] leading-none">+{mission.reward}</span>
                    </>
                  )}
                </div>

                {/* Floating mango animation */}
                {isAnimating && (
                  <div className="absolute right-4 top-0 animate-[ping_0.6s_cubic-bezier(0,0,0.2,1)_forwards] text-2xl z-20">
                    🥭
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Benefits Carousel */}
        <h3 className="text-gray-800 font-black text-lg mb-2 tracking-tight uppercase">Aumenta tus Beneficios</h3>
        <div className="flex overflow-x-auto space-x-4 pb-6 scrollbar-hide -mx-5 px-5">
          {beneficiosCarousel.map((item, idx) => (
            <div key={idx} className="min-w-[290px] bg-white rounded-3xl p-5 shadow-md border border-gray-100 flex items-center transform transition-transform hover:scale-[1.02] cursor-pointer" onClick={onShowNotEnough}>
              <div className={`w-[72px] h-[72px] ${item.bg} rounded-2xl flex items-center justify-center ${item.iconColor} font-black text-4xl mr-4 shadow-sm shrink-0`}>
                {item.initial ? item.initial : <item.icon size={36} strokeWidth={2.5} />}
              </div>
              <div className="flex-1">
                <h4 className="font-black text-gray-800 text-lg leading-none mb-1 tracking-tight">{item.name}</h4>
                <p className="text-[12px] font-black text-naranja-500 uppercase tracking-widest mb-2">{item.promo}</p>
                <div className="bg-gray-50 inline-flex items-center px-3 py-1.5 rounded-xl border border-gray-200">
                  <span className="text-xs font-black text-gray-800 mr-1">{item.cost}</span>
                  <span className="text-sm">🥭</span>
                </div>
              </div>
            </div>
          ))}
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
              { name: 'Café Martínez', discount: '+10%', cost: '300', icon: '☕' },
              { name: 'YPF', discount: '+15%', cost: '500', icon: '⛽' },
              { name: 'Farmacity', discount: '+10%', cost: '350', icon: '💊' },
              { name: 'Cinepolis', discount: '2x1', cost: '800', icon: '🍿' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-[24px] p-5 shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center hover:shadow-md transition-all cursor-pointer group" onClick={onShowNotEnough}>
                <div className="w-14 h-14 bg-gray-50 rounded-full flex items-center justify-center text-3xl mb-3 border border-gray-100 shadow-inner group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h4 className="font-bold text-gray-800 text-[13px] mb-1.5 leading-tight">{item.name}</h4>
                <p className="text-[15px] font-black text-naranja-500 mb-3 tracking-tight">{item.discount} <span className="text-[10px] uppercase tracking-widest text-gray-500"></span></p>
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

function RankingScreen({ onBack, manguitos }) {
  return (
    <div className="animate-in slide-in-from-right-4 duration-300 bg-white min-h-full pb-8 flex flex-col relative">
      {/* Header */}
      <div className="px-4 pt-6 pb-4 flex items-center justify-between sticky top-0 bg-white/95 backdrop-blur-md z-20 shadow-sm border-b border-gray-100">
        <button onClick={onBack} className="p-1 hover:bg-gray-100 rounded-full transition-colors text-gray-800">
          <ChevronLeft size={28} strokeWidth={2.5} />
        </button>
        <h2 className="font-bold text-lg text-gray-800">Ranking de Ligas</h2>
        <div className="w-8"></div> {/* Spacer for centering */}
      </div>

      {/* Leagues Selector */}
      <div className="flex justify-center space-x-6 py-6 px-4">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full border-[3px] border-naranja-500 flex items-center justify-center mb-2 shadow-sm bg-orange-50">
            <Trophy size={28} className="text-[#cd7f32]" strokeWidth={2} />
          </div>
          <span className="text-sm font-bold text-gray-800">Bronce</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full border border-gray-300 flex items-center justify-center mb-2 bg-gray-50">
            <Trophy size={28} className="text-gray-400" strokeWidth={2} />
          </div>
          <span className="text-sm font-medium text-gray-500">Plata</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full border border-gray-300 flex items-center justify-center mb-2 bg-gray-50">
            <Trophy size={28} className="text-yellow-500" strokeWidth={2} />
          </div>
          <span className="text-sm font-medium text-gray-500">Oro</span>
        </div>
      </div>

      {/* Dashed Separator */}
      <div className="px-6 mb-6">
        <div className="w-full border-t-2 border-dashed border-orange-200"></div>
      </div>

      {/* Leaderboard List */}
      <div className="px-5 space-y-3 flex-1 pb-44">
        {[
          { pos: 1, name: 'Manguito', pts: 3000, initial: 'M', color: 'text-[#cd7f32]' },
          { pos: 2, name: 'Pablo', pts: 2999, initial: 'P', color: 'text-gray-400' },
          { pos: 3, name: 'Pedro', pts: 2998, initial: 'P', color: 'text-[#8b5a2b]' }
        ].map((user, idx) => (
          <div key={idx} className="bg-white border border-gray-100 rounded-2xl p-4 flex items-center shadow-sm">
            <div className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold mr-3 ${idx === 0 ? 'bg-naranja-500' : 'bg-gray-400'}`}>
              {user.pos}
            </div>

            <div className="w-10 h-10 rounded-full bg-gray-200 text-gray-600 font-bold flex items-center justify-center mr-3">
              {user.initial}
            </div>

            <span className="font-bold text-gray-800 flex-1">{user.name}</span>
            <div className="flex items-center space-x-1 mr-2">
              <span className="text-gray-800 font-black text-sm">{user.pts}</span>
              <span className="text-base">🥭</span>
            </div>
            <div className="relative">
              <Trophy size={20} className={user.color} strokeWidth={2.5} />
              <span className="absolute inset-0 flex items-center justify-center text-[8px] font-black text-white mt-[1px]">{user.pos}</span>
            </div>
          </div>
        ))}

        <div className="flex justify-center space-x-1 mt-6">
          <div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
        </div>
      </div>

      {/* Fixed Bottom Card: Tu Rendimiento */}
      <div className="absolute bottom-6 left-0 right-0 px-4 z-10">
        <div className="bg-white rounded-3xl shadow-[0_-4px_20px_rgba(0,0,0,0.08)] border-t-[4px] border-naranja-500 px-6 py-5">
          <h3 className="font-black text-gray-800 text-lg mb-4">Tu Rendimiento</h3>

          <div className="flex justify-between items-end">
            <div>
              <span className="text-gray-500 text-sm block mb-1">Tu Posición</span>
              <div className="flex items-center space-x-2 mb-1">
                <span className="text-3xl font-black text-gray-800">2503</span>
                <Trophy size={24} className="text-[#cd7f32]" strokeWidth={2} />
              </div>
              <span className="text-gray-600 text-sm font-medium">Liga: Bronce</span>
            </div>

            <div className="text-right">
              <span className="text-gray-500 text-sm block mb-1">Tu Puntaje</span>
              <div className="flex items-center justify-end space-x-2 mb-1">
                <span className="text-3xl font-black text-gray-800">{manguitos}</span>
                <div className="w-6 h-6 rounded-full bg-naranja-500 text-white flex items-center justify-center shadow-md">
                  <span className="text-[10px]">🥭</span>
                </div>
              </div>
              <span className="text-gray-600 text-sm font-medium">Manguitos</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

function MasScreen({ onShowMaintenance }) {
  const menuItems = [
    { icon: User, label: 'Perfil' },
    { icon: Users, label: 'Cuentas compartidas', badge: 'Nuevo' },
    { icon: Store, label: 'Negocio' },
    { icon: Percent, label: 'Promociones' },
    { icon: Gift, label: 'Beneficios', badge: 'Nuevo' },
    { icon: PiggyBank, label: 'Frascos' },
    { icon: ShieldCheck, label: 'Seguros' },
    { icon: Gauge, label: 'Tu perfil crediticio' },
    { icon: HandCoins, label: 'Préstamos' },
    { icon: Luggage, label: 'Viajes Naranja X' },
  ];

  return (
    <div className="animate-in fade-in duration-300 pb-20 bg-white min-h-full">
      {/* Header Profile */}
      <div className="px-5 pt-10 pb-6 flex items-center space-x-4 border-b border-gray-100">
        <div className="w-[56px] h-[56px] bg-purple-50 rounded-2xl flex items-center justify-center text-purple-900 font-bold text-xl">
          J
        </div>
        <h2 className="text-gray-800 text-lg font-bold">José</h2>
      </div>

      {/* Menu Items */}
      <div className="px-5 mt-2">
        {menuItems.map((item, index) => (
          <div key={index} className="flex items-center justify-between py-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors" onClick={onShowMaintenance}>
            <div className="flex items-center space-x-4">
              <item.icon size={24} className="text-gray-700" strokeWidth={1.5} />
              <span className="text-gray-800 font-bold text-[15px]">{item.label}</span>
            </div>
            <div className="flex items-center space-x-3">
              {item.badge && (
                <span className="bg-[#e54519] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                  {item.badge}
                </span>
              )}
              <ChevronRight size={20} className="text-purple-800" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TarjetasScreen() {
  return (
    <div className="animate-in fade-in duration-300 pb-20 bg-white min-h-full">
      {/* Header */}
      <div className="px-5 pt-8 pb-4">
        <h1 className="text-gray-800 text-[28px] font-black tracking-tight">Tus tarjetas</h1>
      </div>

      <div className="px-5 space-y-4">
        {/* Débito */}
        <div className="bg-purple-50 rounded-[28px] p-4 flex items-center shadow-sm border border-purple-100 cursor-pointer hover:shadow-md transition-shadow">
          <div className="w-[84px] h-[116px] bg-[#530e8c] rounded-2xl relative overflow-hidden flex-shrink-0 shadow-sm mr-5">
            <div className="absolute top-3 left-3 text-white font-bold text-[10px]">NX Débito</div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-white/10 rounded-full blur-xl"></div>
            <div className="absolute top-1/2 left-1/2 w-[120%] h-[1px] bg-white/20 transform -rotate-45"></div>
            <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-white/40 rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)]"></div>
          </div>
          <div className="flex-1">
            <h3 className="text-gray-800 font-bold text-lg mb-0.5">Débito</h3>
            <p className="text-gray-700 text-sm">Usala con tu dinero en cuenta.</p>
          </div>
        </div>

        {/* Crédito */}
        <div className="bg-orange-50 rounded-[28px] p-4 flex items-center shadow-sm border border-orange-100 cursor-pointer hover:shadow-md transition-shadow">
          <div className="w-[84px] h-[116px] bg-[#ff6200] rounded-2xl relative overflow-hidden flex-shrink-0 shadow-sm mr-5">
            <div className="absolute top-3 left-3 text-white font-bold text-[10px]">NX Crédito</div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-white/10 rounded-full blur-xl"></div>
            <div className="absolute top-1/2 left-1/2 w-[120%] h-[1px] bg-white/30 transform -rotate-45"></div>
            <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-white/60 rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)]"></div>
          </div>
          <div className="flex-1">
            <h3 className="text-gray-800 font-bold text-lg mb-0.5">Crédito</h3>
            <p className="text-gray-700 text-sm">Consultá si podés pedirlas.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
