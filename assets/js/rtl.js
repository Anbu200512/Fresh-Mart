function initRTL() {
  const savedDir = localStorage.getItem('freshmart-rtl') || 'ltr';
  applyRTL(savedDir);
}

function applyRTL(dir) {
  document.documentElement.dir = dir;
  document.documentElement.lang = dir === 'rtl' ? 'ar' : 'en';
  if (dir === 'rtl') {
    document.documentElement.classList.add('rtl');
  } else {
    document.documentElement.classList.remove('rtl');
  }
}

function toggleRTL() {
  const current = document.documentElement.dir || 'ltr';
  const next = current === 'rtl' ? 'ltr' : 'rtl';
  applyRTL(next);
  localStorage.setItem('freshmart-rtl', next);
  location.reload();
}

initRTL();
