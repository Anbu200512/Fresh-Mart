function loadFooter() {
  const footerHTML = `

  <footer class="bg-gray-50 dark:bg-gray-950 text-gray-600 dark:text-gray-400 transition-colors duration-300 relative overflow-hidden">
    <!-- Top gradient accent -->
    <div class="h-1 bg-gradient-to-r from-primary via-secondary to-primary"></div>

    <!-- Decorative background -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <div class="absolute -top-32 -right-32 w-64 h-64 bg-primary/3 rounded-full blur-3xl"></div>
      <div class="absolute -bottom-32 -left-32 w-64 h-64 bg-secondary/3 rounded-full blur-3xl"></div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16 relative z-10">
      <!-- Top row: Logo + Newsletter -->
      <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-12 pb-10 border-b border-gray-200 dark:border-gray-800">
        <div class="flex items-center gap-3">
          <a href="index.html" class="flex items-center gap-2.5">
            <div class="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z"/></svg>
            </div>
            <div>
              <span class="text-xl font-bold text-green-600 dark:text-green-400 font-['Poppins'] leading-none">FreshMart</span>
              <p class="text-[10px] text-gray-500 dark:text-gray-500 leading-none mt-0.5">Fresh Groceries Delivered</p>
            </div>
          </a>
        </div>
        <div class="flex flex-col sm:flex-row items-start sm:items-center gap-3">
          <span class="text-sm font-semibold text-gray-800 dark:text-gray-200 whitespace-nowrap">Stay Updated:</span>
          <div class="flex items-center gap-2">
            <input type="email" placeholder="Your email address" class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary w-56 transition-all">
            <button class="bg-primary hover:bg-secondary text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all shadow-md shadow-primary/20 hover:shadow-primary/40 whitespace-nowrap">Subscribe</button>
          </div>
        </div>
      </div>

      <!-- Main grid -->
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6">
        <!-- Brand column -->
        <div class="col-span-2 sm:col-span-3 lg:col-span-1">
          <p class="text-sm text-gray-500 dark:text-gray-500 mb-5 leading-relaxed">Your trusted neighborhood supermarket. Fresh groceries, daily essentials, and premium products delivered with care since 2010.</p>
          <div class="flex items-center gap-2">
            <a href="#" class="w-9 h-9 bg-white dark:bg-gray-900 hover:bg-primary text-gray-400 hover:text-white rounded-xl flex items-center justify-center transition-all duration-300 border border-gray-200 dark:border-gray-800 hover:border-primary hover:shadow-lg hover:shadow-primary/20" aria-label="Facebook">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="#" class="w-9 h-9 bg-white dark:bg-gray-900 hover:bg-primary text-gray-400 hover:text-white rounded-xl flex items-center justify-center transition-all duration-300 border border-gray-200 dark:border-gray-800 hover:border-primary hover:shadow-lg hover:shadow-primary/20" aria-label="Twitter">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
            </a>
            <a href="#" class="w-9 h-9 bg-white dark:bg-gray-900 hover:bg-primary text-gray-400 hover:text-white rounded-xl flex items-center justify-center transition-all duration-300 border border-gray-200 dark:border-gray-800 hover:border-primary hover:shadow-lg hover:shadow-primary/20" aria-label="Instagram">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/></svg>
            </a>
            <a href="#" class="w-9 h-9 bg-white dark:bg-gray-900 hover:bg-primary text-gray-400 hover:text-white rounded-xl flex items-center justify-center transition-all duration-300 border border-gray-200 dark:border-gray-800 hover:border-primary hover:shadow-lg hover:shadow-primary/20" aria-label="YouTube">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-gray-900 dark:text-white font-heading font-semibold mb-5 text-sm uppercase tracking-wider flex items-center gap-2">
            <span class="w-6 h-0.5 bg-primary rounded-full"></span>
            Quick Links
          </h4>
          <ul class="space-y-3">
            <li><a href="index.html" class="text-sm hover:text-primary dark:hover:text-primary transition-colors inline-flex items-center gap-2 group"><span class="w-1.5 h-1.5 bg-gray-300 dark:bg-gray-700 rounded-full group-hover:bg-primary transition-colors"></span>Home</a></li>
            <li><a href="shop.html" class="text-sm hover:text-primary dark:hover:text-primary transition-colors inline-flex items-center gap-2 group"><span class="w-1.5 h-1.5 bg-gray-300 dark:bg-gray-700 rounded-full group-hover:bg-primary transition-colors"></span>Shop</a></li>
            <li><a href="shop.html" class="text-sm hover:text-primary dark:hover:text-primary transition-colors inline-flex items-center gap-2 group"><span class="w-1.5 h-1.5 bg-gray-300 dark:bg-gray-700 rounded-full group-hover:bg-primary transition-colors"></span>Categories</a></li>
            <li><a href="weekly-deals.html" class="text-sm hover:text-primary dark:hover:text-primary transition-colors inline-flex items-center gap-2 group"><span class="w-1.5 h-1.5 bg-gray-300 dark:bg-gray-700 rounded-full group-hover:bg-primary transition-colors"></span>Weekly Deals</a></li>
            <li><a href="departments.html" class="text-sm hover:text-primary dark:hover:text-primary transition-colors inline-flex items-center gap-2 group"><span class="w-1.5 h-1.5 bg-gray-300 dark:bg-gray-700 rounded-full group-hover:bg-primary transition-colors"></span>Departments</a></li>
            <li><a href="about.html" class="text-sm hover:text-primary dark:hover:text-primary transition-colors inline-flex items-center gap-2 group"><span class="w-1.5 h-1.5 bg-gray-300 dark:bg-gray-700 rounded-full group-hover:bg-primary transition-colors"></span>About Us</a></li>
          </ul>
        </div>

        <!-- Customer Service -->
        <div>
          <h4 class="text-gray-900 dark:text-white font-heading font-semibold mb-5 text-sm uppercase tracking-wider flex items-center gap-2">
            <span class="w-6 h-0.5 bg-primary rounded-full"></span>
            Support
          </h4>
          <ul class="space-y-3">
            <li><a href="contact.html" class="text-sm hover:text-primary dark:hover:text-primary transition-colors inline-flex items-center gap-2 group"><span class="w-1.5 h-1.5 bg-gray-300 dark:bg-gray-700 rounded-full group-hover:bg-primary transition-colors"></span>Contact Us</a></li>
            <li><a href="about.html" class="text-sm hover:text-primary dark:hover:text-primary transition-colors inline-flex items-center gap-2 group"><span class="w-1.5 h-1.5 bg-gray-300 dark:bg-gray-700 rounded-full group-hover:bg-primary transition-colors"></span>FAQ</a></li>
            <li><a href="departments.html" class="text-sm hover:text-primary dark:hover:text-primary transition-colors inline-flex items-center gap-2 group"><span class="w-1.5 h-1.5 bg-gray-300 dark:bg-gray-700 rounded-full group-hover:bg-primary transition-colors"></span>Delivery Info</a></li>
            <li><a href="about.html" class="text-sm hover:text-primary dark:hover:text-primary transition-colors inline-flex items-center gap-2 group"><span class="w-1.5 h-1.5 bg-gray-300 dark:bg-gray-700 rounded-full group-hover:bg-primary transition-colors"></span>Food Safety</a></li>
            <li><a href="about.html" class="text-sm hover:text-primary dark:hover:text-primary transition-colors inline-flex items-center gap-2 group"><span class="w-1.5 h-1.5 bg-gray-300 dark:bg-gray-700 rounded-full group-hover:bg-primary transition-colors"></span>Privacy Policy</a></li>
            <li><a href="about.html" class="text-sm hover:text-primary dark:hover:text-primary transition-colors inline-flex items-center gap-2 group"><span class="w-1.5 h-1.5 bg-gray-300 dark:bg-gray-700 rounded-full group-hover:bg-primary transition-colors"></span>Terms</a></li>
          </ul>
        </div>

        <!-- My Account -->
        <div>
          <h4 class="text-gray-900 dark:text-white font-heading font-semibold mb-5 text-sm uppercase tracking-wider flex items-center gap-2">
            <span class="w-6 h-0.5 bg-primary rounded-full"></span>
            Account
          </h4>
          <ul class="space-y-3">
            <li><a href="login.html" class="text-sm hover:text-primary dark:hover:text-primary transition-colors inline-flex items-center gap-2 group"><span class="w-1.5 h-1.5 bg-gray-300 dark:bg-gray-700 rounded-full group-hover:bg-primary transition-colors"></span>Login / Register</a></li>
            <li><a href="dashboards/user-dashboard.html" class="text-sm hover:text-primary dark:hover:text-primary transition-colors inline-flex items-center gap-2 group"><span class="w-1.5 h-1.5 bg-gray-300 dark:bg-gray-700 rounded-full group-hover:bg-primary transition-colors"></span>My Dashboard</a></li>
            <li><a href="dashboards/user-dashboard.html" class="text-sm hover:text-primary dark:hover:text-primary transition-colors inline-flex items-center gap-2 group"><span class="w-1.5 h-1.5 bg-gray-300 dark:bg-gray-700 rounded-full group-hover:bg-primary transition-colors"></span>Order History</a></li>
            <li><a href="dashboards/user-dashboard.html" class="text-sm hover:text-primary dark:hover:text-primary transition-colors inline-flex items-center gap-2 group"><span class="w-1.5 h-1.5 bg-gray-300 dark:bg-gray-700 rounded-full group-hover:bg-primary transition-colors"></span>Track Order</a></li>
            <li><a href="shop.html" class="text-sm hover:text-primary dark:hover:text-primary transition-colors inline-flex items-center gap-2 group"><span class="w-1.5 h-1.5 bg-gray-300 dark:bg-gray-700 rounded-full group-hover:bg-primary transition-colors"></span>Wishlist</a></li>
            <li><a href="checkout.html" class="text-sm hover:text-primary dark:hover:text-primary transition-colors inline-flex items-center gap-2 group"><span class="w-1.5 h-1.5 bg-gray-300 dark:bg-gray-700 rounded-full group-hover:bg-primary transition-colors"></span>Shopping Cart</a></li>
          </ul>
        </div>

        <!-- Contact Us -->
        <div>
          <h4 class="text-gray-900 dark:text-white font-heading font-semibold mb-5 text-sm uppercase tracking-wider flex items-center gap-2">
            <span class="w-6 h-0.5 bg-primary rounded-full"></span>
            Contact
          </h4>
          <ul class="space-y-4">
            <li class="flex items-start gap-3">
              <div class="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                <svg class="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              </div>
              <span class="text-sm leading-relaxed">123 Green Avenue, Fresh District, NY 10001</span>
            </li>
            <li class="flex items-center gap-3">
              <div class="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                <svg class="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              </div>
              <span class="text-sm">+1 (555) 123-4567</span>
            </li>
            <li class="flex items-center gap-3">
              <div class="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                <svg class="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              </div>
              <span class="text-sm">fm@fresh.com</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
        <div class="flex flex-col items-center gap-4 md:flex-row md:justify-between text-center md:text-left">
          <p class="text-sm text-gray-500">&copy; 2026 FreshMart. All rights reserved.</p>
          <div class="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
            <span class="text-sm text-gray-500">We accept:</span>
            <div class="flex flex-wrap justify-center items-center gap-2">
              <div class="bg-white dark:bg-gray-900 px-3 py-1.5 rounded-lg text-xs text-gray-700 dark:text-gray-300 font-medium border border-gray-200 dark:border-gray-800 shadow-sm">Visa</div>
              <div class="bg-white dark:bg-gray-900 px-3 py-1.5 rounded-lg text-xs text-gray-700 dark:text-gray-300 font-medium border border-gray-200 dark:border-gray-800 shadow-sm">Mastercard</div>
              <div class="bg-white dark:bg-gray-900 px-3 py-1.5 rounded-lg text-xs text-gray-700 dark:text-gray-300 font-medium border border-gray-200 dark:border-gray-800 shadow-sm">PayPal</div>
              <div class="bg-white dark:bg-gray-900 px-3 py-1.5 rounded-lg text-xs text-gray-700 dark:text-gray-300 font-medium border border-gray-200 dark:border-gray-800 shadow-sm">Apple Pay</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>

  <button id="back-to-top" class="fixed bottom-6 right-6 w-12 h-12 bg-primary hover:bg-secondary text-white rounded-full shadow-lg shadow-primary/30 flex items-center justify-center transition-all duration-300 opacity-0 pointer-events-none z-50 hover:shadow-primary/50 hover:-translate-y-1">
    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"/></svg>
  </button>`;

  document.addEventListener('DOMContentLoaded', () => {
    const existingFooter = document.getElementById('freshmart-footer');
    if (existingFooter) {
      existingFooter.outerHTML = footerHTML;
    }
    initFooterEvents();
  });

  return footerHTML;
}

function initFooterEvents() {
  const backToTop = document.getElementById('back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTop.classList.remove('opacity-0', 'pointer-events-none');
        backToTop.classList.add('opacity-100');
      } else {
        backToTop.classList.add('opacity-0', 'pointer-events-none');
        backToTop.classList.remove('opacity-100');
      }
    });
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

function getFooterHTML() {
  return loadFooter();
}

loadFooter();
