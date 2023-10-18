window.addEventListener('load', function(){ 
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
    });
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
      return new bootstrap.Popover(popoverTriggerEl)
    })
    $('.preloader').fadeOut(300);
})

jQuery("document").ready(function($){

  var pg_number = parseInt(window.location.href.split('?')[1].split('=')[1]);

  //alert('Página: '+pg_number);

  if(pg_number == 1 || pg_number == 3 || pg_number == 6 || pg_number == 8){
    document.body.style.backgroundImage = "url('assets/img/textura_verde.png')";
  }else if(pg_number == 2 || pg_number == 7){
    document.body.style.backgroundImage = "url('assets/img/textura_branco.png')";
  }else if(pg_number == 4 || pg_number == 5){
    document.body.style.backgroundImage = "url('assets/img/textura_laranja.png')";
  }else{
    document.body.style.backgroundImage = "url('assets/img/textura_branco.png')";
  }

});