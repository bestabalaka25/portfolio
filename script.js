// Simple JS: theme toggle, year, projects render, and fake contact handler
(function(){
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Theme
  const root = document.documentElement;
  const toggle = document.getElementById('themeToggle');
  const saved = localStorage.getItem('theme');
  if (saved === 'light') root.classList.add('light');
  if (toggle){
    toggle.addEventListener('click', () => {
      root.classList.toggle('light');
      localStorage.setItem('theme', root.classList.contains('light') ? 'light' : 'dark');
    });
  }


  // Fake contact submit (no backend yet)
  const form = document.getElementById('contactForm');
  const status = document.getElementById('contactStatus');
  if (form){
    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      status.textContent = 'Thanks! Your message has been queued (demo).';
      form.reset();
    });
  }
})();