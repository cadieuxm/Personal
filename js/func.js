const tabs = document.querySelectorAll('.nav_link');
tabs.forEach(clickedTab =>{
  clickedTab.addEventListener('click', () => {
    tabs.forEach( tab => {
      tab.classList.remove(' active');
    });
    e.target.classList.add(' active');
  });
});