function applyTheme(theme) {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  var icon = document.querySelector('#theme-toggle svg');
  if (icon) {
    icon.innerHTML = theme === 'dark'
      ? '<circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>'
      : '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>';
  }
}

var saved = localStorage.getItem('freshmart-theme') || 'light';
applyTheme(saved);

document.addEventListener('click', function (e) {
  var btn = e.target.closest('#theme-toggle');
  if (!btn) return;
  var current = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
  var next = current === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  localStorage.setItem('freshmart-theme', next);
});
