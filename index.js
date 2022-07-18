// Import stylesheets
import './style.css';

// Write Javascript code!

var panels = document.querySelectorAll('.panel');
panels.forEach((panel) => {
  panel.addEventListener('click', addRemoveClass);
});

function addRemoveClass() {
  panels.forEach((panel) => {
    panel.classList.remove('active');
  });
  this.classList.add('active');
}

// This is a Abhishek Mojumdar learning project
