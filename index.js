// Import stylesheets
import './style.css';

var panels = document.querySelectorAll('.panel');
panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    panels.forEach((panelCheck) => {
      panelCheck.classList.remove('active');
    });
    if (!panel.classList.contains('active')) {
      panel.classList.add('active');
    }
  });
});
