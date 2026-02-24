import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './EmailConfirmationSuccess.css';

const EmailConfirmationSuccess = () => {
  const navigate = useNavigate();
  const [userActivity, setUserActivity] = useState({
    pageLoadTime: new Date(),
    interactions: []
  });

  const cursorTimerRef = useRef(null);

  // Log activity function
  const logActivity = (action, data = {}) => {
    const activity = {
      timestamp: new Date(),
      action: action,
      ...data
    };
    setUserActivity(prev => ({
      ...prev,
      interactions: [...prev.interactions, activity]
    }));
    console.log('Activity:', activity);
  };

  // Initialize on mount
  useEffect(() => {
    logActivity('page_load', { page: 'email_confirmation_success' });

    // Track cursor movement
    const handleMouseMove = (e) => {
      if (cursorTimerRef.current) {
        clearTimeout(cursorTimerRef.current);
      }
      cursorTimerRef.current = setTimeout(() => {
        logActivity('cursor_position', {
          x: e.clientX,
          y: e.clientY
        });
      }, 1000);
    };

    // Track clicks
    const handleClick = (e) => {
      let targetInfo = e.target.tagName;
      if (e.target.id) targetInfo += '#' + e.target.id;
      if (e.target.className) targetInfo += '.' + e.target.className.toString().split(' ')[0];
      
      logActivity('click', {
        target: targetInfo,
        x: e.clientX,
        y: e.clientY
      });
    };

    // Track window resize
    const handleResize = () => {
      logActivity('resize', {
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    // Track page visibility
    const handleVisibilityChange = () => {
      logActivity('visibility_change', { hidden: document.hidden });
    };

    // Network status tracking
    const handleOnline = () => {
      logActivity('network_status', { status: 'online' });
    };

    const handleOffline = () => {
      logActivity('network_status', { status: 'offline' });
      alert('You are currently offline. Please check your internet connection.');
    };

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('click', handleClick);
    window.addEventListener('resize', handleResize);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Performance monitoring
    if (window.performance) {
      window.addEventListener('load', () => {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        logActivity('performance_metrics', {
          pageLoadTime: pageLoadTime + 'ms',
          domContentLoaded: (perfData.domContentLoadedEventEnd - perfData.navigationStart) + 'ms',
          domReady: (perfData.domComplete - perfData.navigationStart) + 'ms'
        });
      });
    }

    // Console welcome message
    console.log('%c✅ Email Confirmation Successful!', 'color: #4CAF50; font-size: 18px; font-weight: bold;');
    console.log('%cAll user interactions are being tracked for analytics.', 'color: #5f6368; font-size: 12px;');

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('click', handleClick);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      
      if (cursorTimerRef.current) clearTimeout(cursorTimerRef.current);

      // Log session summary
      const timeOnPage = (new Date() - userActivity.pageLoadTime) / 1000;
      console.log('===== USER SESSION SUMMARY =====');
      console.log('Total time on page:', timeOnPage.toFixed(2), 'seconds');
      console.log('Total interactions:', userActivity.interactions.length);
      console.log('Full activity log:', userActivity);
    };
  }, []);

  // Support link handler
  const handleSupportClick = () => {
    logActivity('support_link_clicked');
  };

  // Click here link handler
  const handleClickHere = (e) => {
    e.preventDefault();
    logActivity('click_here_link_clicked');
    navigate('/account-information');
  };

  // Logo click handler
  const handleLogoClick = () => {
    logActivity('logo_clicked');
    navigate('/');
  };

  return (
    <div className="container">
      {/* Logo */}
      <div className="logo" onClick={handleLogoClick}>
        <svg width="173" height="40" viewBox="0 0 173 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_22_2899)">
            <path d="M41.181 0.162636H4.12428C1.96999 0.162636 0.223595 1.90981 0.223595 4.06506V35.9348C0.223595 38.0901 1.96999 39.8372 4.12428 39.8372H41.181C43.3353 39.8372 45.0817 38.0901 45.0817 35.9348V4.06506C45.0817 1.90981 43.3353 0.162636 41.181 0.162636Z" stroke="#CBDBFC" strokeWidth="0.325203"/>
            <mask id="mask0_22_2899" style={{maskType:"luminance"}} maskUnits="userSpaceOnUse" x="3" y="9" width="39" height="22">
              <path d="M41.9299 9.61523H3.37549V30.3845H41.9299V9.61523Z" fill="white"/>
            </mask>
            <g mask="url(#mask0_22_2899)">
              <path d="M24.0674 20.0162C24.0674 17.2663 22.9791 14.629 21.0419 12.6846C19.1046 10.7401 16.4771 9.64771 13.7375 9.64771C10.9978 9.64771 8.3703 10.7401 6.43305 12.6846C4.49579 14.629 3.40747 17.2663 3.40747 20.0162H6.2682C6.2682 18.0279 7.05516 16.1209 8.45588 14.7149C9.85668 13.309 11.7565 12.5191 13.7375 12.5191C15.7184 12.5191 17.6182 13.309 19.019 14.7149C20.4198 16.1209 21.2067 18.0279 21.2067 20.0162H24.0674Z" fill="#43536D"/>
              <path d="M4.90881 25.4093C5.79776 26.8685 7.03256 28.0843 8.50314 28.9484C9.97375 29.8125 11.6344 30.298 13.3374 30.3616C15.0402 30.4253 16.7323 30.0651 18.2629 29.3132C19.7934 28.5613 21.1149 27.4411 22.1095 26.0522L19.7867 24.3762C19.0674 25.3805 18.1119 26.1905 17.0052 26.7341C15.8986 27.2778 14.675 27.5382 13.4438 27.4922C12.2125 27.4462 11.0117 27.0952 9.94834 26.4703C8.88505 25.8456 7.99221 24.9665 7.34942 23.9114L4.90881 25.4093Z" fill="#43536D"/>
              <path d="M24.0674 20.0164H3.40747V22.3925H24.0674V20.0164Z" fill="#43536D"/>
              <path d="M40.9214 24.4844C41.981 22.2574 42.2143 19.724 41.5796 17.3398C40.9449 14.9555 39.4836 12.8766 37.4586 11.4769C35.4335 10.0772 32.9774 9.44835 30.5319 9.7035C28.0863 9.95865 25.8115 11.081 24.1166 12.8688C22.4216 14.6567 21.4175 16.9927 21.2849 19.4571C21.1523 21.9215 21.8997 24.3525 23.3929 26.3132C24.8862 28.2739 27.0272 29.6357 29.4312 30.1538C31.8351 30.672 34.3444 30.3124 36.5079 29.1398L34.9065 26.163C33.4489 26.953 31.7584 27.1953 30.1387 26.8462C28.5192 26.4971 27.0767 25.5797 26.0707 24.2587C25.0647 22.9377 24.5611 21.2998 24.6505 19.6396C24.7398 17.9793 25.4163 16.4055 26.5582 15.201C27.7001 13.9965 29.2327 13.2403 30.8803 13.0684C32.528 12.8965 34.1827 13.3202 35.547 14.2632C36.9113 15.2062 37.8958 16.6067 38.3234 18.2131C38.7513 19.8194 38.594 21.5262 37.88 23.0267L40.9214 24.4844Z" fill="#FFC300"/>
              <path d="M40.4947 25.656H38.1954C37.8786 25.656 37.6219 25.9138 37.6219 26.2319V28.5416C37.6219 28.8597 37.8786 29.1176 38.1954 29.1176H40.4947C40.8115 29.1176 41.0679 28.8597 41.0679 28.5416V26.2319C41.0679 25.9138 40.8115 25.656 40.4947 25.656Z" fill="#FFC300"/>
            </g>
            <path d="M61.397 29.9139C59.8962 29.9139 58.5306 29.6554 57.3004 29.1385C56.0948 28.597 55.0491 27.8708 54.1633 26.9601C53.2776 26.0247 52.5887 24.9662 52.0966 23.7847C51.6291 22.5785 51.3953 21.2985 51.3953 19.9447C51.3953 18.1231 51.8136 16.4616 52.6502 14.9601C53.4867 13.4339 54.6554 12.2154 56.1563 11.3047C57.6572 10.3693 59.4164 9.9016 61.434 9.9016C63.4515 9.9016 65.1861 10.3693 66.6378 11.3047C68.1141 12.2154 69.2582 13.4216 70.0701 14.9231C70.8821 16.4247 71.288 18.037 71.288 19.7601C71.288 20.0554 71.2757 20.3385 71.2511 20.6093C71.2265 20.8554 71.2019 21.0647 71.1773 21.237H55.7134C55.7872 22.3693 56.0948 23.3662 56.6361 24.2277C57.202 25.0647 57.9155 25.7293 58.7767 26.2216C59.6378 26.6893 60.5605 26.9231 61.5447 26.9231C62.6273 26.9231 63.6484 26.6524 64.6079 26.1108C65.5921 25.5693 66.2564 24.8554 66.6009 23.9693L70.0701 24.9662C69.6518 25.9016 69.0121 26.7508 68.151 27.5139C67.3144 28.2524 66.3179 28.8431 65.1615 29.2862C64.0051 29.7047 62.7503 29.9139 61.397 29.9139ZM55.6027 18.5416H67.2652C67.1914 17.4339 66.8715 16.4616 66.3056 15.6247C65.7643 14.7631 65.0631 14.0985 64.202 13.6308C63.3654 13.1385 62.4304 12.8924 61.397 12.8924C60.3883 12.8924 59.4533 13.1385 58.5921 13.6308C57.7556 14.0985 57.0667 14.7631 56.5254 15.6247C55.9841 16.4616 55.6765 17.4339 55.6027 18.5416Z" fill="#43536D"/>
            <path d="M104.388 29.5447H100.329V18.7262C100.329 16.9293 100.033 15.6124 99.4428 14.7754C98.8523 13.9385 97.9912 13.5201 96.8594 13.5201C95.7275 13.5201 94.6696 13.9508 93.6854 14.8124C92.7258 15.6493 92.0492 16.7447 91.6555 18.0985V29.5447H87.5958V18.7262C87.5958 16.9293 87.3005 15.6124 86.71 14.7754C86.1195 13.9385 85.2707 13.5201 84.1635 13.5201C83.0317 13.5201 81.9737 13.9385 80.9895 14.7754C80.0299 15.6124 79.341 16.7077 78.9227 18.0616V29.5447H74.863V10.2339H78.5536V14.1108C79.3164 12.757 80.3129 11.7231 81.5431 11.0093C82.7979 10.2708 84.225 9.9016 85.8243 9.9016C87.4235 9.9016 88.6784 10.3201 89.5887 11.157C90.5237 11.9939 91.1019 13.0401 91.3234 14.2954C92.1599 12.8677 93.181 11.7847 94.3866 11.0462C95.6168 10.2831 97.0193 9.9016 98.594 9.9016C99.7258 9.9016 100.673 10.1108 101.436 10.5293C102.199 10.9477 102.789 11.5262 103.207 12.2647C103.626 12.9785 103.921 13.8154 104.093 14.7754C104.29 15.7108 104.388 16.7077 104.388 17.7662V29.5447Z" fill="#43536D"/>
            <path d="M109.33 29.5447V10.234H113.39V29.5447H109.33ZM109.33 7.05858V2.5909H113.39V7.05858H109.33Z" fill="#43536D"/>
            <path d="M129.383 13.7417C127.808 13.7663 126.405 14.1232 125.175 14.8125C123.97 15.5017 123.108 16.474 122.592 17.7294V29.5448H118.532V10.234H122.297V14.554C122.961 13.2248 123.834 12.1663 124.917 11.3786C125.999 10.5663 127.144 10.1232 128.349 10.0494C128.595 10.0494 128.792 10.0494 128.94 10.0494C129.112 10.0494 129.26 10.0617 129.383 10.0863V13.7417Z" fill="#43536D"/>
            <path d="M140.986 29.9139C139.485 29.9139 138.12 29.6554 136.89 29.1385C135.684 28.597 134.638 27.8708 133.753 26.9601C132.867 26.0247 132.178 24.9662 131.686 23.7847C131.218 22.5785 130.985 21.2985 130.985 19.9447C130.985 18.1231 131.403 16.4616 132.239 14.9601C133.076 13.4339 134.245 12.2154 135.746 11.3047C137.246 10.3693 139.006 9.9016 141.023 9.9016C143.041 9.9016 144.775 10.3693 146.227 11.3047C147.703 12.2154 148.847 13.4216 149.659 14.9231C150.471 16.4247 150.877 18.037 150.877 19.7601C150.877 20.0554 150.865 20.3385 150.84 20.6093C150.816 20.8554 150.791 21.0647 150.767 21.237H135.303C135.376 22.3693 135.684 23.3662 136.225 24.2277C136.791 25.0647 137.505 25.7293 138.366 26.2216C139.227 26.6893 140.15 26.9231 141.134 26.9231C142.216 26.9231 143.238 26.6524 144.197 26.1108C145.181 25.5693 145.846 24.8554 146.19 23.9693L149.659 24.9662C149.241 25.9016 148.601 26.7508 147.74 27.5139C146.904 28.2524 145.907 28.8431 144.751 29.2862C143.594 29.7047 142.339 29.9139 140.986 29.9139ZM135.192 18.5416H146.854C146.781 17.4339 146.461 16.4616 145.895 15.6247C145.354 14.7631 144.652 14.0985 143.791 13.6308C142.955 13.1385 142.02 12.8924 140.986 12.8924C139.977 12.8924 139.042 13.1385 138.181 13.6308C137.345 14.0985 136.656 14.7631 136.115 15.6247C135.573 16.4616 135.266 17.4339 135.192 18.5416Z" fill="#43536D"/>
            <path d="M161.797 29.9139C160.542 29.9139 159.385 29.6554 158.327 29.1385C157.294 28.597 156.396 27.8708 155.633 26.9601C154.871 26.0247 154.28 24.9539 153.862 23.7477C153.468 22.517 153.271 21.2247 153.271 19.8708C153.271 18.4924 153.493 17.2001 153.936 15.9939C154.403 14.7877 155.043 13.7293 155.855 12.8185C156.691 11.9077 157.663 11.1939 158.77 10.677C159.878 10.1601 161.071 9.9016 162.35 9.9016C163.827 9.9016 165.155 10.2585 166.336 10.9724C167.542 11.6862 168.489 12.6093 169.178 13.7416V10.2339H172.758V37.4093H168.698V25.9262C167.074 28.5847 164.774 29.9139 161.797 29.9139ZM163.273 26.4431C164.085 26.4431 164.823 26.2831 165.487 25.9631C166.176 25.6431 166.779 25.2124 167.296 24.6708C167.837 24.1047 168.305 23.4647 168.698 22.7508V17.6554C168.575 17.0647 168.329 16.5231 167.96 16.0308C167.616 15.5139 167.185 15.0585 166.668 14.6647C166.152 14.2462 165.598 13.9262 165.008 13.7047C164.417 13.4831 163.839 13.3724 163.273 13.3724C162.412 13.3724 161.624 13.557 160.911 13.9262C160.197 14.2954 159.57 14.8001 159.029 15.4401C158.512 16.0554 158.106 16.757 157.811 17.5447C157.54 18.3324 157.405 19.1447 157.405 19.9816C157.405 21.1631 157.651 22.2462 158.143 23.2308C158.66 24.1908 159.349 24.9662 160.21 25.557C161.095 26.1477 162.117 26.4431 163.273 26.4431Z" fill="#43536D"/>
          </g>
          <defs>
            <clipPath id="clip0_22_2899">
              <rect width="173" height="40" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      </div>

      {/* Main Card */}
      <div 
        className="card"
        onMouseEnter={() => logActivity('card_hover', { action: 'enter' })}
        onMouseLeave={() => logActivity('card_hover', { action: 'leave' })}
      >
        <h1 className="card-title">Create an Account</h1>

        {/* Success Content */}
        <div className="success-content">
          <div className="success-icon-wrapper">
            <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="45" fill="#4CAF50" fillOpacity="0.1"/>
              <circle cx="50" cy="50" r="40" fill="#4CAF50" className="success-circle"/>
              <path d="M35 50L44 59L65 38" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" className="success-checkmark"/>
            </svg>
          </div>

          <h2 className="success-title">Email Confirmation Successful</h2>
          
          <p className="success-text">
            Hello, your email address has been confirmed successfully.
            <br />
            If you are not redirected to the next step automatically,
            <br />
            <a 
              href="#" 
              className="click-here-link"
              onClick={handleClickHere}
            >
              Click here.
            </a>
          </p>
        </div>
      </div>

      {/* Footer Support */}
      <div className="footer">
        <p>
          Experiencing issues? Get assistance via{' '}
          <a 
            href="mailto:support@emireq.com" 
            className="support-link"
            onClick={handleSupportClick}
          >
            support@emireq.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default EmailConfirmationSuccess;
