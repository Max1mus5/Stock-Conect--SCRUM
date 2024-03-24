document.addEventListener('DOMContentLoaded', function() {
  var titles = document.querySelectorAll('#how-it-works p');
  var lastClickedTitle = null;
      
  titles.forEach(function(title) {
        title.addEventListener('click', function() {
          var clickedTitle = this.textContent;
          if (lastClickedTitle === clickedTitle) {
            lastClickedTitle = clickedTitle;
          } else {
            var detailedInfo = this.getAttribute('data-info'); 
            var howItWorksDiv = document.querySelector('.how-it-works');
            howItWorksDiv.classList.remove('fade-in'); 
            howItWorksDiv.innerHTML = `<p class="how-it-works-title">${clickedTitle}</p><p class="how-it-works-info">${detailedInfo}</p>`;
            setTimeout(function() {
              howItWorksDiv.classList.add('fade-in'); 
            }, 0);
            lastClickedTitle = clickedTitle;
   
            // Elimina el título de how-it-works-main-title
            var titleElement = document.getElementById('how-it-works-main-title');
            if (titleElement) {
              titleElement.remove();
            }
          }
        });
  });
 });
 
 

 document.addEventListener('DOMContentLoaded', function() {
  var titles = document.querySelectorAll('#how-it-works .title');
 
  titles.forEach(function(title) {
     title.addEventListener('click', function() {
       // Eliminar la clase 'clicked' de todos los títulos
       titles.forEach(function(t) {
         t.classList.remove('clicked');
       });
 
       // Agregar la clase 'clicked' al título clickeado
       this.classList.add('clicked');
 
       // Actualizar el contenido de la sección #about-stock-connect
       var clickedTitle = this.textContent;
       var detailedInfo = this.getAttribute('data-info');
       document.getElementById('about-stock-connect').innerHTML = `<p class="how-it-works-title">${clickedTitle}</p><p class="how-it-works-info">${detailedInfo}</p>`;
     });
  });
 });
 
