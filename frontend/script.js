document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault(); 

    const targetId = this.getAttribute('href').substring(1); 
    const targetElement = document.getElementById(targetId); 

    window.scrollTo({
      top: targetElement.offsetTop, 
      behavior: 'smooth' 
    });
  });
});

document.querySelectorAll('.scroll-btn').forEach(button => {
  button.addEventListener('click', function () {
    const targetId = this.getAttribute('data-target').substring(1); 
    const targetElement = document.getElementById(targetId); 

    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: 'smooth'
    });
  });
});