import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import arab1 from './assets/arab1.png';

function Dashboard() {
  const navigate = useNavigate();
  const [selectedAsset, setSelectedAsset] = useState(null);
  const [timeRange, setTimeRange] = useState('6M');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef(null);

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    const root = document.getElementById('root');

    const prevHtmlOverflow = html.style.overflow;
    const prevHtmlOverflowX = html.style.overflowX;
    const prevHtmlOverflowY = html.style.overflowY;
    const prevBodyOverflow = body.style.overflow;
    const prevBodyOverflowX = body.style.overflowX;
    const prevBodyOverflowY = body.style.overflowY;
    const prevRootOverflow = root?.style.overflow;
    const prevRootHeight = root?.style.height;

    html.style.overflow = 'auto';
    html.style.overflowX = 'hidden';
    html.style.overflowY = 'auto';
    body.style.overflow = 'auto';
    body.style.overflowX = 'hidden';
    body.style.overflowY = 'auto';
    if (root) {
      root.style.overflow = 'visible';
      root.style.height = 'auto';
    }

    return () => {
      html.style.overflow = prevHtmlOverflow;
      html.style.overflowX = prevHtmlOverflowX;
      html.style.overflowY = prevHtmlOverflowY;
      body.style.overflow = prevBodyOverflow;
      body.style.overflowX = prevBodyOverflowX;
      body.style.overflowY = prevBodyOverflowY;
      if (root) {
        root.style.overflow = prevRootOverflow ?? '';
        root.style.height = prevRootHeight ?? '';
      }
    };
  }, []);

  useEffect(() => {
    if (!profileOpen) return;

    const handlePointerDown = (e) => {
      if (!profileRef.current) return;
      if (profileRef.current.contains(e.target)) return;
      setProfileOpen(false);
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setProfileOpen(false);
    };

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('touchstart', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('touchstart', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [profileOpen]);

  const assets = useMemo(
    () => [
      { key: 'AVX', label: 'AVX' },
      { key: 'XNR1', label: 'XNR' },
      { key: 'XNR2', label: 'XNR' },
    ],
    []
  );

  const handleSelectAsset = (key) => {
    setSelectedAsset(key);
  };

  const handleLogout = () => {
    setProfileOpen(false);
    navigate('/', { replace: true });
  };

  return (
    <div className="bg-background-light text-slate-900 min-h-screen overflow-x-hidden">
      <nav className="sticky top-0 z-50 bg-white border-b border-slate-100">
        <div className="max-w-[1440px] mx-auto px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 pr-20">
            <svg width="154" height="32" viewBox="0 0 154 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_46_3388)">
                <path d="M3.21777 0.5H33.7822C35.2934 0.5 36.5 1.69559 36.5 3.14746V28.8525C36.5 30.3044 35.2934 31.5 33.7822 31.5H3.21777C1.70664 31.5 0.500045 30.3044 0.500045 28.8525V3.14746C0.500045 1.69559 1.70664 0.5 3.21777 0.5Z" stroke="#C1C1C1" />
                <mask id="mask0_46_3388" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="2" y="7" width="33" height="18">
                  <path d="M34.4006 7.62427H2.6001V24.3759H34.4006V7.62427Z" fill="white" />
                </mask>
                <g mask="url(#mask0_46_3388)">
                  <path d="M19.6668 16.0132C19.6668 13.7952 18.7691 11.6681 17.1712 10.0998C15.5733 8.53147 13.4061 7.65039 11.1464 7.65039C8.88664 7.65039 6.71943 8.53147 5.12154 10.0998C3.52365 11.6681 2.62598 13.7952 2.62598 16.0132H4.98557C4.98557 14.4095 5.63467 12.8714 6.79002 11.7374C7.94543 10.6034 9.5124 9.96634 11.1464 9.96634C12.7803 9.96634 14.3473 10.6034 15.5027 11.7374C16.6581 12.8714 17.3072 14.4095 17.3072 16.0132H19.6668Z" fill="#43536D" />
                  <path d="M3.86426 20.363C4.59748 21.5399 5.61597 22.5205 6.82894 23.2175C8.04193 23.9144 9.4117 24.306 10.8163 24.3573C12.2208 24.4087 13.6165 24.1181 14.879 23.5117C16.1414 22.9053 17.2314 22.0017 18.0518 20.8815L16.1358 19.5297C15.5426 20.3397 14.7545 20.993 13.8417 21.4315C12.9289 21.87 11.9197 22.0801 10.9041 22.043C9.88853 22.0059 8.89807 21.7227 8.02097 21.2187C7.14394 20.7148 6.40751 20.0058 5.87733 19.1548L3.86426 20.363Z" fill="#43536D" />
                  <path d="M19.6668 16.0132H2.62598V17.9297H19.6668V16.0132Z" fill="#43536D" />
                  <path d="M33.5684 19.6169C34.4424 17.8207 34.6349 15.7774 34.1113 13.8543C33.5878 11.9312 32.3825 10.2545 30.7122 9.12556C29.0419 7.9966 27.0161 7.48942 24.9989 7.69522C22.9817 7.90102 21.1054 8.80626 19.7074 10.2483C18.3094 11.6903 17.4812 13.5744 17.3718 15.5621C17.2624 17.5498 17.8789 19.5105 19.1105 21.092C20.3422 22.6734 22.1081 23.7718 24.091 24.1896C26.0739 24.6076 28.1436 24.3175 29.9281 23.3718L28.6072 20.9708C27.4049 21.608 26.0105 21.8034 24.6746 21.5218C23.3388 21.2403 22.149 20.5003 21.3192 19.4349C20.4894 18.3694 20.074 17.0484 20.1478 15.7093C20.2215 14.3702 20.7794 13.1008 21.7213 12.1293C22.6632 11.1578 23.9273 10.5479 25.2863 10.4092C26.6453 10.2706 28.0102 10.6123 29.1355 11.3729C30.2608 12.1335 31.0728 13.2631 31.4256 14.5587C31.7784 15.8543 31.6487 17.231 31.0598 18.4412L33.5684 19.6169Z" fill="#FFD700" />
                  <path d="M33.2162 20.562H31.3197C31.0584 20.562 30.8467 20.7699 30.8467 21.0265V22.8894C30.8467 23.146 31.0584 23.354 31.3197 23.354H33.2162C33.4775 23.354 33.689 23.146 33.689 22.8894V21.0265C33.689 20.7699 33.4775 20.562 33.2162 20.562Z" fill="#FFD700" />
                </g>
                <path d="M61.2673 24.1911C60.0267 24.1911 58.898 23.9776 57.8811 23.5505C56.8845 23.103 56.0202 22.5031 55.288 21.7506C54.5558 20.9777 53.9864 20.1032 53.5796 19.127C53.1932 18.1305 53 17.0729 53 15.9543C53 14.4493 53.3457 13.0765 54.0372 11.8359C54.7287 10.575 55.6948 9.56824 56.9354 8.81575C58.176 8.04291 59.6301 7.65649 61.2978 7.65649C62.9655 7.65649 64.3993 8.04291 65.5993 8.81575C66.8195 9.56824 67.7652 10.5648 68.4364 11.8054C69.1075 13.046 69.4431 14.3781 69.4431 15.8018C69.4431 16.0458 69.4329 16.2797 69.4126 16.5034C69.3923 16.7068 69.3719 16.8797 69.3516 17.022H56.5693C56.6303 17.9576 56.8845 18.7813 57.3319 19.4931C57.7997 20.1846 58.3895 20.7337 59.1013 21.1404C59.8132 21.5269 60.5758 21.7201 61.3893 21.7201C62.2842 21.7201 63.1282 21.4964 63.9214 21.0489C64.7349 20.6015 65.284 20.0117 65.5687 19.2795L68.4364 20.1032C68.0906 20.876 67.5618 21.5777 66.85 22.2082C66.1585 22.8183 65.3349 23.3064 64.379 23.6725C63.4231 24.0182 62.3859 24.1911 61.2673 24.1911ZM56.4778 14.7951H66.1179C66.0569 13.8799 65.7925 13.0765 65.3247 12.385C64.8773 11.6732 64.2976 11.1241 63.5858 10.7377C62.8943 10.3309 62.1215 10.1275 61.2673 10.1275C60.4335 10.1275 59.6606 10.3309 58.9488 10.7377C58.2573 11.1241 57.6879 11.6732 57.2404 12.385C56.793 13.0765 56.5388 13.8799 56.4778 14.7951Z" fill="#43536D" />
                <path d="M96.8033 23.886H93.4476V14.9476C93.4476 13.4629 93.2035 12.3749 92.7154 11.6834C92.2273 10.9919 91.5155 10.6461 90.5799 10.6461C89.6444 10.6461 88.7699 11.0021 87.9564 11.7139C87.1632 12.4054 86.6039 13.3104 86.2785 14.429V23.886H82.9228V14.9476C82.9228 13.4629 82.6787 12.3749 82.1906 11.6834C81.7025 10.9919 81.0008 10.6461 80.0856 10.6461C79.1501 10.6461 78.2756 10.9919 77.4621 11.6834C76.6689 12.3749 76.0994 13.2799 75.7537 14.3985V23.886H72.3979V7.93105H75.4486V11.1343C76.0791 10.0157 76.9028 9.16149 77.9197 8.57169C78.9569 7.96156 80.1365 7.65649 81.4584 7.65649C82.7804 7.65649 83.8176 8.00224 84.5701 8.69372C85.3429 9.38521 85.8209 10.2496 86.0039 11.2868C86.6954 10.1072 87.5394 9.21233 88.536 8.6022C89.5529 7.97173 90.7121 7.65649 92.0137 7.65649C92.9493 7.65649 93.7323 7.82937 94.3628 8.17511C94.9932 8.52085 95.4813 8.99879 95.8271 9.60892C96.1728 10.1987 96.4169 10.8902 96.5592 11.6834C96.7219 12.4562 96.8033 13.2799 96.8033 14.1544V23.886Z" fill="#43536D" />
                <path d="M100.888 23.8861V7.93108H104.244V23.8861H100.888ZM100.888 5.30751V1.61621H104.244V5.30751H100.888Z" fill="#43536D" />
                <path d="M117.463 10.8292C116.161 10.8496 115.002 11.1445 113.985 11.7139C112.989 12.2834 112.277 13.0867 111.85 14.124V23.8861H108.494V7.9311H111.606V11.5004C112.155 10.4021 112.877 9.52761 113.772 8.8768C114.667 8.20566 115.612 7.83958 116.609 7.77856C116.812 7.77856 116.975 7.77856 117.097 7.77856C117.239 7.77856 117.361 7.78873 117.463 7.80907V10.8292Z" fill="#43536D" />
                <path d="M127.055 24.1911C125.814 24.1911 124.686 23.9776 123.669 23.5505C122.672 23.103 121.808 22.5031 121.076 21.7506C120.343 20.9777 119.774 20.1032 119.367 19.127C118.981 18.1305 118.788 17.0729 118.788 15.9543C118.788 14.4493 119.133 13.0765 119.825 11.8359C120.516 10.575 121.482 9.56824 122.723 8.81575C123.964 8.04291 125.418 7.65649 127.085 7.65649C128.753 7.65649 130.187 8.04291 131.387 8.81575C132.607 9.56824 133.553 10.5648 134.224 11.8054C134.895 13.046 135.231 14.3781 135.231 15.8018C135.231 16.0458 135.221 16.2797 135.2 16.5034C135.18 16.7068 135.16 16.8797 135.139 17.022H122.357C122.418 17.9576 122.672 18.7813 123.12 19.4931C123.587 20.1846 124.177 20.7337 124.889 21.1404C125.601 21.5269 126.363 21.7201 127.177 21.7201C128.072 21.7201 128.916 21.4964 129.709 21.0489C130.522 20.6015 131.072 20.0117 131.356 19.2795L134.224 20.1032C133.878 20.876 133.349 21.5777 132.638 22.2082C131.946 22.8183 131.122 23.3064 130.167 23.6725C129.211 24.0182 128.173 24.1911 127.055 24.1911ZM122.265 14.7951H131.905C131.844 13.8799 131.58 13.0765 131.112 12.385C130.665 11.6732 130.085 11.1241 129.373 10.7377C128.682 10.3309 127.909 10.1275 127.055 10.1275C126.221 10.1275 125.448 10.3309 124.736 10.7377C124.045 11.1241 123.475 11.6732 123.028 12.385C122.581 13.0765 122.326 13.8799 122.265 14.7951Z" fill="#43536D" />
                <path d="M144.257 24.1911C143.219 24.1911 142.263 23.9776 141.389 23.5505C140.535 23.103 139.792 22.5031 139.162 21.7506C138.531 20.9777 138.043 20.093 137.698 19.0965C137.372 18.0796 137.209 17.0119 137.209 15.8933C137.209 14.7544 137.393 13.6866 137.759 12.6901C138.145 11.6935 138.674 10.819 139.345 10.0665C140.036 9.31402 140.84 8.72423 141.755 8.29713C142.67 7.87004 143.657 7.65649 144.714 7.65649C145.934 7.65649 147.033 7.95139 148.009 8.54119C149.005 9.13098 149.788 9.89365 150.358 10.8292V7.93105H153.317V30.384H149.961V20.8964C148.619 23.0929 146.717 24.1911 144.257 24.1911ZM145.477 21.3235C146.148 21.3235 146.758 21.1913 147.307 20.9269C147.877 20.6625 148.375 20.3066 148.802 19.8592C149.249 19.3914 149.636 18.8626 149.961 18.2728V14.0629C149.86 13.5748 149.656 13.1274 149.351 12.7206C149.066 12.2935 148.71 11.9173 148.283 11.5919C147.856 11.2461 147.399 10.9817 146.911 10.7987C146.422 10.6156 145.945 10.5241 145.477 10.5241C144.765 10.5241 144.114 10.6767 143.524 10.9817C142.935 11.2868 142.416 11.7037 141.969 12.2325C141.541 12.7409 141.206 13.3206 140.962 13.9714C140.738 14.6222 140.626 15.2933 140.626 15.9848C140.626 16.961 140.83 17.8559 141.236 18.6694C141.663 19.4626 142.233 20.1032 142.945 20.5913C143.677 21.0794 144.521 21.3235 145.477 21.3235Z" fill="#43536D" />
              </g>
              <defs>
                <clipPath id="clip0_46_3388">
                  <rect width="153.317" height="32" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>

       <div className="flex items-center gap-10 ml-16">   
            <div className="hidden md:flex items-center gap-8">
              <a className="nav-link hover:text-primary transition-colors text-[15px]" href="#">Announcements</a>
              <a className="nav-link hover:text-primary transition-colors text-[15px]" href="#">Transactions</a>
              <a className="nav-link hover:text-primary transition-colors text-[15px]" href="#">Deposit</a>
            </div>

            <div className="hidden md:block h-6 w-[1px] bg-slate-200"></div>

            <div className="flex items-center gap-6">
              <button
                className="md:hidden w-10 h-10 rounded-full bg-white flex flex-col justify-center items-center gap-1.5 text-slate-700 hover:text-primary transition-colors hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                onClick={() => setMobileMenuOpen((v) => !v)}
                aria-expanded={mobileMenuOpen}
                aria-label="Open navigation menu"
                type="button"
              >
                <div className="w-5 h-[1.5px] bg-[#2F2F33] rounded" />
                <div className="w-4 h-[1.5px] bg-[#2F2F33] rounded" />
              </button>

              <div className="relative">
                <button
                  className="text-slate-600 hover:text-primary transition-colors"
                  onClick={() => setNotificationsOpen((v) => !v)}
                  aria-expanded={notificationsOpen}
                  type="button"
                >
                <span className="material-symbols-outlined text-[26px]">notifications</span>
                </button>
                {notificationsOpen ? (
                  <div className="absolute right-0 top-12 w-72 bg-white border border-slate-100 shadow-sm rounded-2xl p-4">
                    <p className="text-sm font-bold text-slate-900">Notifications</p>
                    <p className="text-xs text-slate-400 font-medium mt-2">No new notifications</p>
                  </div>
                ) : null}
              </div>

              <div className="relative" ref={profileRef}>
                <div className="w-[90px] h-12 rounded-[20px] bg-white border border-slate-100 flex items-center justify-between pl-3 pr-2 hover:shadow-sm">
                  <button
                    className="h-full flex items-center justify-center cursor-pointer focus:outline-none"
                    aria-label="Profile menu"
                    onClick={(e) => {
                      e.stopPropagation();
                      setProfileOpen((prev) => !prev);
                    }}
                    type="button"
                  >
                    <svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.75 0.75H14.75" stroke="#2F2F33" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M0.75 6.75H11.75" stroke="#2F2F33" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </button>

                  <div className="w-8 h-8 rounded-full overflow-hidden bg-slate-100">
                    <img src={arab1} alt="User profile" className="w-full h-full object-cover" />
                  </div>
                </div>

                {profileOpen ? (
                  <div
                    className="absolute right-0 top-12 w-72 bg-white border border-slate-100 shadow-sm rounded-2xl p-4"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="flex items-center gap-3">
                      <img src={arab1} alt="User" className="w-10 h-10 rounded-full object-cover" />
                      <div>
                        <div className="text-sm font-bold text-slate-900">John Doe</div>
                        <div className="text-xs text-slate-400 font-medium">johndoe@gmail.com</div>
                      </div>
                    </div>

                    <div className="h-px bg-slate-100 my-4" />

                    <button className="w-full flex items-center gap-3 text-left text-sm font-semibold text-slate-700 hover:text-primary transition-colors" type="button">
                      <span className="text-base">👤</span>
                      My Profile
                    </button>

                    <button
                      className="w-full mt-3 flex items-center gap-3 text-left text-sm font-semibold text-slate-700 hover:text-primary transition-colors"
                      onClick={handleLogout}
                      type="button"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                        <path d="M16 17L21 12L16 7" stroke="#2F2F33" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M21 12H9" stroke="#2F2F33" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M13 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H13" stroke="#2F2F33" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      Logout
                    </button>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>

        {mobileMenuOpen ? (
          <div className="md:hidden border-t border-slate-100 bg-white">
            <div className="max-w-[1440px] mx-auto px-8 py-4 flex flex-col gap-3">
              <a className="nav-link hover:text-primary transition-colors text-[15px]" href="#">Announcements</a>
              <a className="nav-link hover:text-primary transition-colors text-[15px]" href="#">Transactions</a>
              <a className="nav-link hover:text-primary transition-colors text-[15px]" href="#">Deposit</a>
            </div>
          </div>
        ) : null}
      </nav>

      <main className="w-full px-8 py-8">
        <div className="grid grid-cols-12 gap-8">
          <aside className="col-span-12 lg:col-span-3 space-y-6">
            <div className="bg-white/40 p-1 rounded-2xl flex gap-1 border border-slate-100 shadow-sm">
              {assets.map((asset, idx) => {
                const isActive = selectedAsset === asset.key;

                return (
                  <button
                    key={asset.key}
                    className={`flex-1 flex items-center justify-center gap-2 py-3 px-2 rounded-xl shadow-sm transition-colors ${
                      isActive 
                        ? 'bg-white border-2 border-blue-600' 
                        : 'bg-slate-50 border-2 border-transparent hover:bg-slate-100'
                    }`}
                    onClick={() => handleSelectAsset(asset.key)}
                    type="button"
                    aria-pressed={isActive}
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      isActive && idx === 0 ? 'bg-amber-50' : ''
                    }`}>
                      {idx === 0 ? (
                        <svg width="20" height="31" viewBox="0 0 20 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.98779 19.5557L9.93816 29.3333L13.9133 24.4445L17.8885 19.5557" stroke="#FF8C00" stroke-width="1.89442" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.876 19.5557H0L1.9873 15.6445H17.8887L16.5635 13.0371H3.3125L9.93848 0L19.876 19.5557Z" fill="url(#paint0_linear_50_4514)"/>
<defs>
<linearGradient id="paint0_linear_50_4514" x1="0" y1="9.77785" x2="19.8762" y2="9.77785" gradientUnits="userSpaceOnUse">
<stop offset="0.5" stop-color="#FFB800"/>
<stop offset="0.5" stop-color="#845418"/>
</linearGradient>
</defs>
</svg>
                      ) : (
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.370014 23.5325C1.13658 21.7433 8.63341 17.2165 8.557 14.8543C8.4806 12.492 2.05512 8.88992 0.69743 6.42161C-0.203228 4.7842 -0.121287 3.06492 1.43433 1.50939C2.98994 -0.0461435 4.49904 0.012611 5.85526 0.690693C7.21148 1.36878 13.1419 8.63214 14.5336 8.63214C15.9253 8.63214 19.9423 1.93077 23.5393 0.608844C27.1363 -0.713085 27.7912 0.4331 28.4462 1.08806C29.1012 1.74302 30.3698 3.54417 28.779 5.93042C26.6503 9.12337 25.5042 10.0844 23.785 11.1701C22.0658 12.2558 20.1608 12.2665 18.3815 11.7432C16.6022 11.2199 16.3294 10.0938 14.5336 8.86574C12.7378 7.63769 10.3529 8.37452 9.13017 9.76632C7.90749 11.1581 8.39326 13.6262 9.13017 14.8543C9.86708 16.0823 12.7324 20.4214 11.5863 22.7957C10.4401 25.1699 6.99601 28.5588 5.52787 29.0997C4.05974 29.6406 2.71954 29.1213 1.51623 28.0354C0.0482214 26.7106 -0.396547 25.3217 0.370014 23.5325Z" fill="url(#paint0_linear_50_4522)"/>
<circle cx="21.8143" cy="22.047" r="7.28646" fill="#3CEE90"/>
<defs>
<linearGradient id="paint0_linear_50_4522" x1="14.5719" y1="0.351222" x2="9.27398" y2="24.3249" gradientUnits="userSpaceOnUse">
<stop stop-color="#4EBCF1"/>
<stop offset="1" stop-color="#3CEE90"/>
</linearGradient>
</defs>
</svg>
                      )}
                    </div>
                    <span className={`font-bold text-sm ${
                      isActive ? 'text-slate-800' : 'text-slate-400'
                    }`}>{asset.label}</span>
                  </button>
                );
              })}
            </div>

            <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm relative overflow-hidden cursor-pointer">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center shadow-sm">
                  <svg width="20" height="31" viewBox="0 0 20 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.98779 19.5557L9.93816 29.3333L13.9133 24.4445L17.8885 19.5557" stroke="#FF8C00" stroke-width="1.89442" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.876 19.5557H0L1.9873 15.6445H17.8887L16.5635 13.0371H3.3125L9.93848 0L19.876 19.5557Z" fill="url(#paint0_linear_50_4476)"/>
<defs>
<linearGradient id="paint0_linear_50_4476" x1="0" y1="9.77785" x2="19.8762" y2="9.77785" gradientUnits="userSpaceOnUse">
<stop offset="0.5" stop-color="#FFB800"/>
<stop offset="0.5" stop-color="#845418"/>
</linearGradient>
</defs>
</svg>

                </div>
                <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 7L13.5 15.5L8.5 10.5L2 17" stroke="#717182" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 7H22V13" stroke="#717182" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                </div>
              </div>
              <p className="text-[13px] font-medium text-slate-400">Total Balance</p>
              <div className="flex items-baseline gap-2 mt-2">
                <h2 className="text-4xl font-bold text-slate-900">$12,450.00</h2>
                <span className="text-base font-bold text-slate-400">AVX</span>
              </div>
              <div className="flex items-center gap-2 mt-3">
                <span className="text-sm font-medium text-slate-400">$5,227.50 USD</span>
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">
                  +5.2% <span className="font-medium text-emerald-500/70">24h</span>
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-10">
                <button className="flex items-center justify-center gap-2 py-3.5 px-4 bg-indigo-50 text-indigo-600 hover:bg-indigo-100 transition-colors font-bold rounded-2xl text-sm" type="button">
                  <span className="material-symbols-outlined text-lg">north_east</span> Send
                </button>
                <button className="flex items-center justify-center gap-2 py-3.5 px-4 bg-slate-50 text-slate-700 hover:bg-slate-100 transition-colors font-bold rounded-2xl text-sm" type="button">
                  <span className="material-symbols-outlined text-lg">south_west</span> Receive
                </button>
              </div>
            </div>

            <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm">
              <h3 className="font-bold text-lg text-slate-900 mb-8">Compliance &amp; Security</h3>
              <div className="space-y-8">
                <div className="flex gap-4 cursor-pointer">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 flex-shrink-0 flex items-center justify-center border border-emerald-100">
                    <span className="material-symbols-outlined text-emerald-600 text-xl">check_circle</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Asset-backed</p>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed font-medium">Fully backed by real-world assets</p>
                  </div>
                </div>

                <div className="flex gap-4 cursor-pointer">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 flex-shrink-0 flex items-center justify-center border border-emerald-100">
                    <span className="material-symbols-outlined text-emerald-600 text-xl">check_circle</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Shariah-compliant</p>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed font-medium">Certified by Islamic scholars</p>
                  </div>
                </div>

                <div className="flex gap-4 cursor-pointer">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 flex-shrink-0 flex items-center justify-center border border-emerald-100">
                    <span className="material-symbols-outlined text-emerald-600 text-xl">check_circle</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Audited</p>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed font-medium">Regular third-party audits</p>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          <div className="col-span-12 lg:col-span-9 space-y-6 cursor-pointer">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-[10px] border border-slate-200 shadow-sm flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex gap-3">
                    <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center border border-amber-100">
                     <svg width="20" height="31" viewBox="0 0 20 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.98779 19.5557L9.93816 29.3333L13.9133 24.4445L17.8885 19.5557" stroke="#FF8C00" stroke-width="1.89442" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.876 19.5557H0L1.9873 15.6445H17.8887L16.5635 13.0371H3.3125L9.93848 0L19.876 19.5557Z" fill="url(#paint0_linear_50_4413)"/>
<defs>
<linearGradient id="paint0_linear_50_4413" x1="0" y1="9.77785" x2="19.8762" y2="9.77785" gradientUnits="userSpaceOnUse">
<stop offset="0.5" stop-color="#FFB800"/>
<stop offset="0.5" stop-color="#845418"/>
</linearGradient>
</defs>
</svg>

                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900 leading-none mb-1">Aurivox</p>
                      <p className="text-[11px] font-bold text-slate-400">AVX</p>
                    </div>
                  </div>
                  <span className="text-[12px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">+14.67%</span>
                </div>
                <div className="flex items-center justify-between mt-auto">
                  <h3 className="text-[26px] font-bold text-slate-900 tracking-tight">$23,738</h3>
                  <div className="w-24 h-12 -mt-20 mr-12">
                   <svg width="172" height="128" viewBox="0 0 172 128" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_50_4303)">
<path d="M41 60.4504L42.0882 61.0438C43.1765 61.6371 45.3529 62.8238 47.5294 65.0896C49.7059 67.3554 51.8824 70.7004 54.0588 73.4319C56.2353 76.1634 58.4118 78.2814 60.5882 74.8063C62.7647 71.3313 64.9412 62.263 67.1177 63.1531C69.2941 64.0432 71.4706 74.8916 73.6471 79.6635C75.8235 84.4353 78 83.1305 80.1765 81.6235C82.3529 80.1164 84.5294 78.4071 86.7059 73.7249C88.8824 69.0428 91.0588 61.3878 93.2353 58.319C95.4118 55.2501 98.99 61.0107 101.167 58.319C103.343 55.6273 101.99 49.8021 104.167 47.1403C106.343 44.4785 109.99 43.268 112.167 47.1403C114.343 51.0125 116.49 63.3614 118.667 63.1531C120.843 62.9448 123.706 47.6479 125.882 47.1403C128.059 46.6326 130.235 52.2013 132.412 57.5266C134.588 62.8518 136.765 67.9336 138.941 64.1812C141.118 60.4289 142.167 40 147.167 40" stroke="#00B031" stroke-opacity="0.6" stroke-width="2" stroke-linecap="round"/>
<g filter="url(#filter1_f_50_4303)">
<path d="M151.667 41C151.667 43.7614 149.428 46 146.667 46C143.905 46 141.667 43.7614 141.667 41C141.667 38.2386 143.905 36 146.667 36C149.428 36 151.667 38.2386 151.667 41Z" fill="#00B031"/>
</g>
</g>
<defs>
<filter id="filter0_d_50_4303" x="0" y="0" width="191.667" height="128.005" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="20"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.690196 0 0 0 0 0.192157 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_50_4303"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_50_4303" result="shape"/>
</filter>
<filter id="filter1_f_50_4303" x="136.667" y="31" width="20" height="20" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="2.5" result="effect1_foregroundBlur_50_4303"/>
</filter>
</defs>
</svg>

                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-50 flex justify-between items-center">
                  <span className="text-[10px] font-medium text-slate-400">14th October 2025</span>
                  <span className="text-[10px] font-bold text-indigo-600">$23,738</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-[10px] border border-slate-200 shadow-sm flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex gap-3">
                    <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center border border-indigo-100">
                      <svg width="40" height="40" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 4.25049L8.5 10.6255V23.3755L17 29.7505L25.5 23.3755V10.6255L17 4.25049Z" fill="#6366F1" fill-opacity="0.3"/>
<path d="M17 4.25049L8.5 10.6255V23.3755L17 29.7505L25.5 23.3755V10.6255L17 4.25049Z" stroke="#6366F1" stroke-width="2.7085" stroke-linejoin="round"/>
<path d="M17 21.2505C19.3472 21.2505 21.25 19.3477 21.25 17.0005C21.25 14.6533 19.3472 12.7505 17 12.7505C14.6528 12.7505 12.75 14.6533 12.75 17.0005C12.75 19.3477 14.6528 21.2505 17 21.2505Z" fill="#6366F1"/>
</svg>

                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900 leading-none mb-1">Eminar</p>
                      <p className="text-[11px] font-bold text-slate-400">EMN</p>
                    </div>
                  </div>
                  <span className="text-[12px] font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-md">-14.67%</span>
                </div>
                <div className="flex items-center justify-between mt-auto">
                  <h3 className="text-[26px] font-bold text-slate-900 tracking-tight">$23,738</h3>
                  <div className="w-24 h-12">
                    <svg width="118" height="49" viewBox="0 0 118 49" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.468262 3.14151L3.76626 1.49251C5.51296 0.619162 7.63141 1.06873 8.87286 2.57621L18.4788 14.2405C20.0507 16.1493 22.9254 16.2881 24.674 14.5396L25.62 13.5935C27.317 11.8966 30.0899 11.9695 31.6953 13.7533L35.8732 18.3955C37.2071 19.8776 39.4009 20.2139 41.1176 19.1995L56.3711 10.1861C58.7826 8.76106 61.8863 10.0588 62.5656 12.7763L64.2763 19.6188C64.8751 22.0142 67.4055 23.3745 69.7339 22.5527L80.8841 18.6174C82.3113 18.1137 83.8994 18.4191 85.0379 19.4163L107.968 39.5" stroke="#E2473F" stroke-width="2.09434"/>
<g filter="url(#filter0_f_50_4331)">
<path d="M112.468 39.1995C112.468 41.7952 110.23 43.8995 107.468 43.8995C104.707 43.8995 102.468 41.7952 102.468 39.1995C102.468 36.6038 104.707 34.4995 107.468 34.4995C110.23 34.4995 112.468 36.6038 112.468 39.1995Z" fill="#E2473F"/>
</g>
<defs>
<filter id="filter0_f_50_4331" x="97.4683" y="29.4995" width="20" height="19.3999" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="2.5" result="effect1_foregroundBlur_50_4331"/>
</filter>
</defs>
</svg>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-50 flex justify-between items-center">
                  <span className="text-[10px] font-medium text-slate-400">14th October 2025</span>
                  <span className="text-[10px] font-bold text-indigo-600">$23,738</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-[10px] border border-slate-200 shadow-sm flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex gap-3">
                    <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center border border-emerald-100">
                      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.370014 23.5325C1.13658 21.7433 8.63341 17.2165 8.557 14.8543C8.4806 12.492 2.05512 8.88992 0.69743 6.42161C-0.203228 4.7842 -0.121287 3.06492 1.43433 1.50939C2.98994 -0.0461435 4.49904 0.012611 5.85526 0.690693C7.21148 1.36878 13.1419 8.63214 14.5336 8.63214C15.9253 8.63214 19.9423 1.93077 23.5393 0.608844C27.1363 -0.713085 27.7912 0.4331 28.4462 1.08806C29.1012 1.74302 30.3698 3.54417 28.779 5.93042C26.6503 9.12337 25.5042 10.0844 23.785 11.1701C22.0658 12.2558 20.1608 12.2665 18.3815 11.7432C16.6022 11.2199 16.3294 10.0938 14.5336 8.86574C12.7378 7.63769 10.3529 8.37452 9.13017 9.76632C7.90749 11.1581 8.39326 13.6262 9.13017 14.8543C9.86708 16.0823 12.7324 20.4214 11.5863 22.7957C10.4401 25.1699 6.99601 28.5588 5.52787 29.0997C4.05974 29.6406 2.71954 29.1213 1.51623 28.0354C0.0482214 26.7106 -0.396547 25.3217 0.370014 23.5325Z" fill="url(#paint0_linear_50_4420)"/>
<circle cx="21.8143" cy="22.047" r="7.28646" fill="#3CEE90"/>
<defs>
<linearGradient id="paint0_linear_50_4420" x1="14.5719" y1="0.351222" x2="9.27398" y2="24.3249" gradientUnits="userSpaceOnUse">
<stop stop-color="#4EBCF1"/>
<stop offset="1" stop-color="#3CEE90"/>
</linearGradient>
</defs>
</svg>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900 leading-none mb-1">Xenara</p>
                      <p className="text-[11px] font-bold text-slate-400">XNR</p>
                    </div>
                  </div>
                  <span className="text-[12px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">+14.67%</span>
                </div>
                <div className="flex items-center justify-between mt-auto">
                  <h3 className="text-[26px] font-bold text-slate-900 tracking-tight">$23,738</h3>
                  <div className="w-24 h-12">
                    <svg width="117" height="53" viewBox="0 0 117 53" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 29.4504L2.08824 30.0438C3.17647 30.6371 5.35294 31.8238 7.52941 34.0896C9.70588 36.3554 11.8824 39.7004 14.0588 42.4319C16.2353 45.1634 18.4118 47.2814 20.5882 43.8063C22.7647 40.3313 24.9412 31.263 27.1177 32.1531C29.2941 33.0432 31.4706 43.8916 33.6471 48.6635C35.8235 53.4353 38 52.1305 40.1765 50.6235C42.3529 49.1164 44.5294 47.4071 46.7059 42.7249C48.8824 38.0428 51.0588 30.3878 53.2353 27.319C55.4118 24.2501 58.99 30.0107 61.1665 27.319C63.343 24.6273 61.99 18.8021 64.1665 16.1403C66.343 13.4785 69.99 12.268 72.1665 16.1403C74.343 20.0125 76.49 32.3614 78.6665 32.1531C80.843 31.9448 83.7059 16.6479 85.8824 16.1403C88.0588 15.6326 90.2353 21.2013 92.4118 26.5266C94.5883 31.8518 96.7647 36.9336 98.9412 33.1812C101.118 29.4289 102.167 9 107.167 9" stroke="#00B031" stroke-opacity="0.6" stroke-width="2" stroke-linecap="round"/>
<g filter="url(#filter0_f_50_4358)">
<path d="M111.667 10C111.667 12.7614 109.428 15 106.667 15C103.905 15 101.667 12.7614 101.667 10C101.667 7.23858 103.905 5 106.667 5C109.428 5 111.667 7.23858 111.667 10Z" fill="#00B031"/>
</g>
<defs>
<filter id="filter0_f_50_4358" x="96.6665" y="0" width="20" height="20" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="2.5" result="effect1_foregroundBlur_50_4358"/>
</filter>
</defs>
</svg>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-50 flex justify-between items-center">
                  <span className="text-[10px] font-medium text-slate-400">14th October 2025</span>
                  <span className="text-[10px] font-bold text-indigo-600">$23,738</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-10 rounded-[32px] border border-slate-100 shadow-sm cursor-pointer">
              <div className="flex items-start justify-between mb-10">
                <div>
                  <h3 className="text-[22px] font-bold text-slate-900">Transaction Activity</h3>
                  <p className="text-sm text-slate-400 mt-1 font-medium">Last 6 months</p>
                </div>
                <div className="flex bg-slate-100 p-1 rounded-xl">
                  <button
                    className={
                      timeRange === '6M'
                        ? 'px-7 py-2 bg-blue-600 text-white text-sm font-bold rounded-lg shadow-sm'
                        : 'px-7 py-2 text-sm font-bold text-slate-400'
                    }
                    onClick={() => setTimeRange('6M')}
                    type="button"
                  >
                    6M
                  </button>
                  <button
                    className={
                      timeRange === '1Y'
                        ? 'px-7 py-2 bg-blue-600 text-white text-sm font-bold rounded-lg shadow-sm'
                        : 'px-7 py-2 text-sm font-bold text-slate-400'
                    }
                    onClick={() => setTimeRange('1Y')}
                    type="button"
                  >
                    1Y
                  </button>
                </div>
              </div>

              <div className="relative h-[320px] w-full">
                <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-[13px] text-slate-400 font-bold pb-10">
                  <span>$6k</span>
                  <span>$4.5k</span>
                  <span>$3k</span>
                  <span>$1.5k</span>
                  <span>$0k</span>
                </div>

                <div className="ml-16 h-[280px] relative">
                  <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                    <div className="w-full border-t border-dashed border-slate-100"></div>
                    <div className="w-full border-t border-dashed border-slate-100"></div>
                    <div className="w-full border-t border-dashed border-slate-100"></div>
                    <div className="w-full border-t border-dashed border-slate-100"></div>
                    <div className="w-full border-t border-dashed border-slate-100"></div>
                  </div>
                  <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 1000 280">
                    <defs>
                      <linearGradient id="chartAreaGradient" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="#2563eb" stopOpacity="0.15"></stop>
                        <stop offset="100%" stopColor="#2563eb" stopOpacity="0.01"></stop>
                      </linearGradient>
                    </defs>
                    <path d="M 0 160 C 100 160, 200 140, 400 140 C 600 140, 550 95, 600 95 C 700 95, 750 120, 800 120 C 900 120, 950 75, 1000 75 V 280 H 0 Z" fill="url(#chartAreaGradient)"></path>
                    <path d="M 0 160 C 100 160, 200 140, 400 140 C 600 140, 550 95, 600 95 C 700 95, 750 120, 800 120 C 900 120, 950 75, 1000 75" fill="none" stroke="#2563eb" strokeLinecap="round" strokeWidth="3"></path>
                  </svg>
                </div>

                <div className="ml-16 flex justify-between mt-6">
                  <span className="text-[13px] text-slate-400 font-bold">Jan</span>
                  <span className="text-[13px] text-slate-400 font-bold">Feb</span>
                  <span className="text-[13px] text-slate-400 font-bold">Mar</span>
                  <span className="text-[13px] text-slate-400 font-bold">Apr</span>
                  <span className="text-[13px] text-slate-400 font-bold">May</span>
                  <span className="text-[13px] text-slate-400 font-bold">Jun</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm cursor-pointer">
              <div className="flex items-center justify-between mb-10">
                <div>
                  <h3 className="text-[22px] font-bold text-slate-900">Recent Transactions</h3>
                  <p className="text-sm text-slate-400 mt-1 font-medium">Your latest activity</p>
                </div>
                <button className="px-6 py-2.5 bg-slate-100 text-slate-800 text-sm font-bold hover:bg-slate-200 transition-colors rounded-xl" type="button">
                  View All
                </button>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-6 bg-slate-50/50 rounded-2xl border border-transparent hover:border-slate-100 transition-all group">
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 4V17.5C3.5 18.2956 3.81607 19.0587 4.37868 19.6213C4.94129 20.1839 5.70435 20.5 6.5 20.5H20" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.5 15L11 10.5L14.5 14L20 8.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">Investment Return</p>
                      <p className="text-sm text-slate-400 font-medium mt-0.5">EMQ Sukuk Monthly Dividend</p>
                      <p className="text-[11px] text-slate-400 mt-1 font-medium">Today, 2:34 PM</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-emerald-500 font-bold text-lg">+$425.00</p>
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md uppercase tracking-wide mt-2">
                      <span className="material-symbols-outlined text-[14px]">south_west</span> In
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between p-6 bg-slate-50/50 rounded-2xl border border-transparent hover:border-slate-100 transition-all group">
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                      <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.2602 10.8999L0.140195 9.77986L8.4402 1.49986H0.000195369V-0.000137329H10.3402L10.9802 0.619863V10.9999H9.4802V2.67986L1.2602 10.8999Z" fill="#0A0A0A"/>
</svg>
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">Transfer Out</p>
                      <p className="text-sm text-slate-400 font-medium mt-0.5">To Sarah Johnson</p>
                      <p className="text-[11px] text-slate-400 mt-1 font-medium">Yesterday, 11:22 AM</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-slate-900 font-bold text-lg">-$850.00</p>
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-slate-400 bg-slate-200 px-2.5 py-1 rounded-md uppercase tracking-wide mt-2">
                      <span className="material-symbols-outlined text-[14px]">north_east</span> Out
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between p-6 bg-slate-50/50 rounded-2xl border border-transparent hover:border-slate-100 transition-all group">
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_46_3599)">
<path d="M12.0003 0L21.9153 4.5H23.2503C23.4492 4.5 23.6399 4.57902 23.7806 4.71967C23.9212 4.86032 24.0003 5.05109 24.0003 5.25V8.25C24.0003 8.44891 23.9212 8.63968 23.7806 8.78033C23.6399 8.92098 23.4492 9 23.2503 9H22.5003V19.5C22.6678 19.5001 22.8304 19.5563 22.9622 19.6596C23.0941 19.7629 23.1876 19.9074 23.2278 20.07L23.9778 23.07C24.0057 23.1805 24.008 23.2959 23.9844 23.4074C23.9609 23.5189 23.9121 23.6235 23.8419 23.7133C23.7717 23.803 23.6819 23.8755 23.5793 23.9252C23.4768 23.9749 23.3642 24.0005 23.2503 24H0.750264C0.63631 24.0005 0.523753 23.9749 0.421207 23.9252C0.318661 23.8755 0.228845 23.803 0.158634 23.7133C0.0884218 23.6235 0.0396755 23.5189 0.0161256 23.4074C-0.00742429 23.2959 -0.00515347 23.1805 0.0227643 23.07L0.772764 20.07C0.812964 19.9074 0.906437 19.7629 1.03828 19.6596C1.17013 19.5563 1.33277 19.5001 1.50026 19.5V9H0.750264C0.551352 9 0.360586 8.92098 0.219934 8.78033C0.0792819 8.63968 0.000264278 8.44891 0.000264278 8.25V5.25C0.000264278 5.05109 0.0792819 4.86032 0.219934 4.71967C0.360586 4.57902 0.551352 4.5 0.750264 4.5H2.08526L12.0003 0ZM5.66576 4.5H18.3363L12.0003 1.5L5.66576 4.5ZM3.00026 9V19.5H4.50026V9H3.00026ZM6.00026 9V19.5H9.75026V9H6.00026ZM11.2503 9V19.5H12.7503V9H11.2503ZM14.2503 9V19.5H18.0003V9H14.2503ZM19.5003 9V19.5H21.0003V9H19.5003ZM22.5003 7.5V6H1.50026V7.5H22.5003ZM21.9153 21H2.08526L1.71026 22.5H22.2903L21.9153 21Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_46_3599">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">Deposit</p>
                      <p className="text-sm text-slate-400 font-medium mt-0.5">Bank Transfer</p>
                      <p className="text-[11px] text-slate-400 mt-1 font-medium">Feb 4, 9:15 AM</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-emerald-500 font-bold text-lg">+$2,125.50</p>
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md uppercase tracking-wide mt-2">
                      <span className="material-symbols-outlined text-[14px]">south_west</span> In
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between p-6 bg-slate-50/50 rounded-2xl border border-transparent hover:border-slate-100 transition-all group">
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.4098 9.16003C18.4103 10.1256 18.1924 11.0787 17.7722 11.9481C17.3521 12.8174 16.7407 13.5805 15.9838 14.18C14.8519 15.0818 13.4471 15.572 11.9998 15.57C10.4938 15.57 9.10985 15.05 8.01585 14.182C7.16569 13.5075 6.5007 12.6282 6.08319 11.6265C5.66569 10.6248 5.50934 9.53352 5.6288 8.45488C5.74826 7.37625 6.13962 6.34561 6.7662 5.45954C7.39278 4.57347 8.23406 3.86099 9.21121 3.38887C10.1884 2.91675 11.2694 2.70044 12.353 2.76022C13.4365 2.82001 14.4872 3.15392 15.4065 3.73067C16.3258 4.30742 17.0836 5.10812 17.6089 6.05774C18.1342 7.00736 18.4098 8.0748 18.4098 9.16003Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.9836 14.1802V21.2502L11.9996 18.2672L8.01562 21.2502V14.1802" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.4547 6.74024C11.6337 6.43324 11.7227 6.27924 11.8397 6.22724C11.8902 6.20522 11.9446 6.19385 11.9997 6.19385C12.0548 6.19385 12.1092 6.20522 12.1597 6.22724C12.2767 6.27924 12.3657 6.43324 12.5447 6.74024L13.0327 7.57824C13.0643 7.63788 13.1018 7.69416 13.1447 7.74624C13.1747 7.77757 13.21 7.80291 13.2507 7.82224C13.3134 7.84706 13.3784 7.86549 13.4447 7.87724L14.3917 8.08224C14.7397 8.15724 14.9137 8.19524 14.9987 8.29024C15.0737 8.37324 15.1087 8.48324 15.0987 8.59424C15.0847 8.72124 14.9657 8.85424 14.7287 9.11924L14.0827 9.84224C14.0358 9.89088 13.9939 9.94415 13.9577 10.0012C13.9378 10.0398 13.9243 10.0813 13.9177 10.1242C13.9135 10.1917 13.9162 10.2594 13.9257 10.3262L14.0237 11.2902C14.0597 11.6452 14.0777 11.8222 14.0137 11.9322C13.9857 11.9798 13.9481 12.0211 13.9034 12.0535C13.8586 12.0858 13.8077 12.1085 13.7537 12.1202C13.6297 12.1472 13.4667 12.0752 13.1417 11.9322L12.2547 11.5412C12.1939 11.5115 12.1302 11.4881 12.0647 11.4712C12.0217 11.4642 11.9778 11.4642 11.9347 11.4712C11.8692 11.4881 11.8055 11.5115 11.7447 11.5412L10.8587 11.9312C10.5327 12.0752 10.3687 12.1472 10.2447 12.1212C10.1908 12.1093 10.14 12.0864 10.0954 12.0538C10.0509 12.0213 10.0135 11.9799 9.98571 11.9322C9.92171 11.8222 9.93971 11.6452 9.97571 11.2902L10.0737 10.3262C10.0837 10.2242 10.0887 10.1732 10.0817 10.1242C10.0751 10.0813 10.0616 10.0398 10.0417 10.0012C10.0055 9.94415 9.96364 9.89088 9.91671 9.84224L9.26971 9.12024C9.03171 8.85524 8.91371 8.72224 8.89971 8.59524C8.89455 8.54042 8.90077 8.48512 8.91798 8.43281C8.93519 8.3805 8.96301 8.3323 8.99971 8.29124C9.08471 8.19624 9.25871 8.15824 9.60671 8.08324L10.5537 7.87824C10.6537 7.85624 10.7037 7.84524 10.7477 7.82324C10.787 7.80388 10.8228 7.7782 10.8537 7.74724C10.8966 7.69516 10.9341 7.63888 10.9657 7.57924L11.4547 6.74024Z" fill="black"/>
</svg>
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">Subscription</p>
                      <p className="text-sm text-slate-400 font-medium mt-0.5">Premium Plan Renewal</p>
                      <p className="text-[11px] text-slate-400 mt-1 font-medium">Feb 3, 3:45 PM</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-slate-900 font-bold text-lg">-$29.99</p>
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-slate-400 bg-slate-200 px-2.5 py-1 rounded-md uppercase tracking-wide mt-2">
                      <span className="material-symbols-outlined text-[14px]">north_east</span> Out
                    </span>
                  </div>
                </div>
              </div>

              <button className="w-full mt-10 py-4 text-sm font-bold text-slate-400 hover:text-slate-600 transition-colors" type="button">
                Load more transactions
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
