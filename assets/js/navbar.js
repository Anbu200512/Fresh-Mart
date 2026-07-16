function loadNavbar() {
  if (!document.getElementById('freshmart-marquee-style')) {
    var style = document.createElement('style');
    style.id = 'freshmart-marquee-style';
    style.textContent = '@keyframes marquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}.animate-marquee{animation:marquee 25s linear infinite}.animate-marquee:hover{animation-play-state:paused}';
    document.head.appendChild(style);
  }
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const isHome = currentPage === 'index.html' || currentPage === 'home2.html' || currentPage === '';

  const navLinks = [
    { href: 'about.html', label: 'About' },
    { href: 'shop.html', label: 'Shop' },
    { href: 'departments.html', label: 'Departments' },
    { href: 'weekly-deals.html', label: 'Weekly Deals' },
    { href: 'contact.html', label: 'Contact' },
  ];

  const isDashboard = currentPage === 'admin-dashboard.html' || currentPage === 'user-dashboard.html';

  const navbarHTML = `
  <nav id="main-navbar" class="bg-white dark:bg-black shadow-md sticky top-0 z-50 transition-all duration-300">
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex items-center justify-between h-16 xl:h-18">

        <a href="index.html" class="flex items-center gap-2.5 shrink-0">
          <div class="w-9 h-9 bg-green-600 rounded-xl flex items-center justify-center">
            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z"/></svg>
          </div>
          <div>
            <span class="text-xl font-bold text-green-600 dark:text-green-400 font-['Poppins'] leading-none">FreshMart</span>
            <p class="text-[10px] text-gray-500 dark:text-gray-400 leading-none">Fresh Groceries Delivered</p>
          </div>
        </a>

        <div class="hidden xl:flex items-center gap-6">
          <div class="relative" id="home-dropdown-wrapper">
            <button id="home-dropdown-btn" class="flex items-center gap-1 transition-colors text-sm font-medium whitespace-nowrap ${isHome ? 'text-green-600 dark:text-green-400 font-semibold' : 'text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400'}">
              Home
              <svg id="home-dropdown-arrow" class="w-3.5 h-3.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </button>
            <div id="home-dropdown-menu" class="absolute top-full left-0 mt-2 w-44 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 py-2 z-50 hidden">
              <a href="index.html" class="flex items-center gap-2 px-4 py-2.5 text-sm transition-colors ${currentPage === 'index.html' || currentPage === '' ? 'text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 font-semibold' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'}">
                <svg class="w-4 h-4 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
                Home 1
              </a>
              <a href="home2.html" class="flex items-center gap-2 px-4 py-2.5 text-sm transition-colors ${currentPage === 'home2.html' ? 'text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 font-semibold' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'}">
                <svg class="w-4 h-4 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"/></svg>
                Home 2
              </a>
            </div>
          </div>
          ${navLinks.map(link => {
            const isActive = currentPage === link.href;
            return `<a href="${link.href}" class="${isActive ? 'text-green-600 dark:text-green-400 font-semibold' : 'text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400'} transition-colors text-sm font-medium whitespace-nowrap">${link.label}</a>`;
          }).join('')}
          <div class="relative" id="dashboard-dropdown-wrapper">
            <button id="dashboard-dropdown-btn" class="flex items-center gap-1 transition-colors text-sm font-medium whitespace-nowrap ${isDashboard ? 'text-green-600 dark:text-green-400 font-semibold' : 'text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400'}">
              Dashboard
              <svg id="dashboard-dropdown-arrow" class="w-3.5 h-3.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </button>
            <div id="dashboard-dropdown-menu" class="absolute top-full right-0 mt-2 w-52 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 py-2 z-50 hidden">
              <a href="dashboards/admin-dashboard.html" class="flex items-center gap-2 px-4 py-2.5 text-sm transition-colors ${currentPage === 'admin-dashboard.html' ? 'text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 font-semibold' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'}">
                <svg class="w-4 h-4 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                Admin Dashboard
              </a>
              <a href="dashboards/user-dashboard.html" class="flex items-center gap-2 px-4 py-2.5 text-sm transition-colors ${currentPage === 'user-dashboard.html' ? 'text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 font-semibold' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'}">
                <svg class="w-4 h-4 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
                User Dashboard
              </a>
            </div>
          </div>
        </div>

        <div class="flex items-center gap-2 sm:gap-3">
          <button id="rtl-toggle-btn" class="hidden xl:flex p-2 text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors text-xs font-semibold rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800" title="Toggle RTL/LTR">RTL</button>

          <button id="theme-toggle" class="hidden xl:flex p-2 text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800" title="Toggle dark mode">
            <svg class="w-5 h-5 dark:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>
            <svg class="w-5 h-5 hidden dark:block" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
          </button>

          <a href="login.html" class="hidden xl:inline-flex items-center px-4 py-2 text-sm font-medium text-green-600 dark:text-green-400 border border-green-600 dark:border-green-400 hover:bg-green-600 hover:text-white dark:hover:bg-green-400 dark:hover:text-black transition-colors rounded-xl">Login</a>

          <a href="login.html#signup" class="hidden xl:inline-flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-xl transition-colors">Sign Up</a>

          <button id="mobile-menu-toggle" class="xl:hidden p-2 text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button>
        </div>
      </div>
    </div>

    <div id="mobile-menu" class="hidden xl:hidden border-t border-gray-100 dark:border-gray-800">
      <div class="px-4 py-3 space-y-1">
        <button id="mobile-home-toggle" class="w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium ${isHome ? 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'} transition-colors">
          Home
          <svg id="mobile-home-arrow" class="w-4 h-4 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
        </button>
        <div id="mobile-home-sub" class="hidden pl-4 space-y-1">
          <a href="index.html" class="flex items-center gap-2 px-4 py-2 rounded-lg text-sm ${currentPage === 'index.html' || currentPage === '' ? 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 font-semibold' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'} transition-colors">
            <span class="w-1.5 h-1.5 rounded-full bg-current opacity-60"></span>
            Home 1
          </a>
          <a href="home2.html" class="flex items-center gap-2 px-4 py-2 rounded-lg text-sm ${currentPage === 'home2.html' ? 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 font-semibold' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'} transition-colors">
            <span class="w-1.5 h-1.5 rounded-full bg-current opacity-60"></span>
            Home 2
          </a>
        </div>
        ${navLinks.map(link => {
          const isActive = currentPage === link.href;
          return `<a href="${link.href}" class="block px-4 py-2.5 rounded-xl text-sm font-medium ${isActive ? 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'} transition-colors">${link.label}</a>`;
        }).join('')}
        <button id="mobile-dashboard-toggle" class="w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium ${isDashboard ? 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'} transition-colors">
          Dashboard
          <svg id="mobile-dashboard-arrow" class="w-4 h-4 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
        </button>
        <div id="mobile-dashboard-sub" class="hidden pl-4 space-y-1">
          <a href="dashboards/admin-dashboard.html" class="flex items-center gap-2 px-4 py-2 rounded-lg text-sm ${currentPage === 'admin-dashboard.html' ? 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 font-semibold' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'} transition-colors">
            <span class="w-1.5 h-1.5 rounded-full bg-current opacity-60"></span>
            Admin Dashboard
          </a>
          <a href="dashboards/user-dashboard.html" class="flex items-center gap-2 px-4 py-2 rounded-lg text-sm ${currentPage === 'user-dashboard.html' ? 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 font-semibold' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'} transition-colors">
            <span class="w-1.5 h-1.5 rounded-full bg-current opacity-60"></span>
            User Dashboard
          </a>
        </div>
        <hr class="my-2 border-gray-100 dark:border-gray-800">
        <div class="flex items-center gap-2 px-4 pt-1 pb-2">
          <button id="mobile-rtl-toggle" class="p-2.5 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/></svg>
          </button>
          <button id="mobile-theme-toggle" class="p-2.5 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            <svg class="w-4 h-4 dark:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>
            <svg class="w-4 h-4 hidden dark:block" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
          </button>
        </div>
        <div class="flex items-center gap-3 px-4 pt-2 pb-1">
          <a href="login.html" class="flex-1 text-center px-4 py-2.5 border border-green-600 dark:border-green-400 rounded-xl text-sm font-medium text-green-600 dark:text-green-400 hover:bg-green-600 hover:text-white dark:hover:bg-green-400 dark:hover:text-black transition-colors">Login</a>
          <a href="login.html#signup" class="flex-1 text-center px-4 py-2.5 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-xl transition-colors">Sign Up</a>
        </div>
      </div>
    </div>
  </nav>
  ${isHome ? `
  <div class="bg-primary overflow-hidden whitespace-nowrap py-2">
    <div class="flex animate-marquee">
      <div class="flex items-center gap-8 px-4 text-white text-sm font-medium shrink-0">
        <span class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-white/60"></span>Fresh Produce Daily</span>
        <span class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-white/60"></span>Free Delivery Over $50</span>
        <span class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-white/60"></span>Up to 40% Off Weekly Deals</span>
        <span class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-white/60"></span>Same-Day Delivery Available</span>
        <span class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-white/60"></span>100% Organic & Farm-Fresh</span>
        <span class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-white/60"></span>Trusted by 50K+ Customers</span>
      </div>
      <div class="flex items-center gap-8 px-4 text-white text-sm font-medium shrink-0">
        <span class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-white/60"></span>Fresh Produce Daily</span>
        <span class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-white/60"></span>Free Delivery Over $50</span>
        <span class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-white/60"></span>Up to 40% Off Weekly Deals</span>
        <span class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-white/60"></span>Same-Day Delivery Available</span>
        <span class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-white/60"></span>100% Organic & Farm-Fresh</span>
        <span class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-white/60"></span>Trusted by 50K+ Customers</span>
      </div>
    </div>
  </div>
  ` : ''}`;

  document.addEventListener('DOMContentLoaded', () => {
    const existingNavbar = document.getElementById('freshmart-navbar');
    if (existingNavbar) {
      existingNavbar.outerHTML = navbarHTML;
    }
    initNavbarEvents();
  });

  return navbarHTML;
}

function initNavbarEvents() {
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const rtlToggleBtn = document.getElementById('rtl-toggle-btn');
  const homeDropdownBtn = document.getElementById('home-dropdown-btn');
  const homeDropdownMenu = document.getElementById('home-dropdown-menu');
  const homeDropdownArrow = document.getElementById('home-dropdown-arrow');
  const mobileHomeToggle = document.getElementById('mobile-home-toggle');
  const mobileHomeSub = document.getElementById('mobile-home-sub');
  const mobileHomeArrow = document.getElementById('mobile-home-arrow');
  const dashboardDropdownBtn = document.getElementById('dashboard-dropdown-btn');
  const dashboardDropdownMenu = document.getElementById('dashboard-dropdown-menu');
  const dashboardDropdownArrow = document.getElementById('dashboard-dropdown-arrow');
  const mobileDashboardToggle = document.getElementById('mobile-dashboard-toggle');
  const mobileDashboardSub = document.getElementById('mobile-dashboard-sub');
  const mobileDashboardArrow = document.getElementById('mobile-dashboard-arrow');

  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  if (homeDropdownBtn && homeDropdownMenu) {
    homeDropdownBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      homeDropdownMenu.classList.toggle('hidden');
      if (homeDropdownArrow) {
        homeDropdownArrow.style.transform = homeDropdownMenu.classList.contains('hidden') ? '' : 'rotate(180deg)';
      }
    });
    document.addEventListener('click', (e) => {
      const wrapper = document.getElementById('home-dropdown-wrapper');
      if (wrapper && !wrapper.contains(e.target)) {
        homeDropdownMenu.classList.add('hidden');
        if (homeDropdownArrow) homeDropdownArrow.style.transform = '';
      }
    });
  }

  if (mobileHomeToggle && mobileHomeSub) {
    mobileHomeToggle.addEventListener('click', () => {
      mobileHomeSub.classList.toggle('hidden');
      if (mobileHomeArrow) {
        mobileHomeArrow.style.transform = mobileHomeSub.classList.contains('hidden') ? '' : 'rotate(180deg)';
      }
    });
  }

  if (dashboardDropdownBtn && dashboardDropdownMenu) {
    dashboardDropdownBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      dashboardDropdownMenu.classList.toggle('hidden');
      if (dashboardDropdownArrow) {
        dashboardDropdownArrow.style.transform = dashboardDropdownMenu.classList.contains('hidden') ? '' : 'rotate(180deg)';
      }
    });
    document.addEventListener('click', (e) => {
      const wrapper = document.getElementById('dashboard-dropdown-wrapper');
      if (wrapper && !wrapper.contains(e.target)) {
        dashboardDropdownMenu.classList.add('hidden');
        if (dashboardDropdownArrow) dashboardDropdownArrow.style.transform = '';
      }
    });
  }

  if (mobileDashboardToggle && mobileDashboardSub) {
    mobileDashboardToggle.addEventListener('click', () => {
      mobileDashboardSub.classList.toggle('hidden');
      if (mobileDashboardArrow) {
        mobileDashboardArrow.style.transform = mobileDashboardSub.classList.contains('hidden') ? '' : 'rotate(180deg)';
      }
    });
  }

  if (rtlToggleBtn) {
    rtlToggleBtn.addEventListener('click', () => {
      if (typeof toggleRTL === 'function') toggleRTL();
    });
  }

  var mobileRtlBtn = document.getElementById('mobile-rtl-toggle');
  if (mobileRtlBtn) {
    mobileRtlBtn.addEventListener('click', () => {
      if (typeof toggleRTL === 'function') toggleRTL();
    });
  }

  var mobileThemeBtn = document.getElementById('mobile-theme-toggle');
  if (mobileThemeBtn) {
    mobileThemeBtn.addEventListener('click', () => {
      var themeBtn = document.getElementById('theme-toggle');
      if (themeBtn) themeBtn.click();
    });
  }

  const navbar = document.getElementById('main-navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 10) {
        navbar.classList.add('shadow-lg');
        navbar.classList.remove('shadow-md');
      } else {
        navbar.classList.remove('shadow-lg');
        navbar.classList.add('shadow-md');
      }
    });
  }
}

function getNavbarHTML() {
  return loadNavbar();
}

loadNavbar();
