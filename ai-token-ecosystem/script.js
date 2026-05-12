const buttons = document.querySelectorAll('nav button');
const panels = document.querySelectorAll('.panel');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const target = button.dataset.target;
    panels.forEach(panel => {
      panel.classList.toggle('active', panel.id === target);
    });
  });
});
