function enterFullScreen(element) {
    if(element.requestFullscreen) {
      element.requestFullscreen();
    }else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();     // Firefox
    }else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();  // Safari
    }else if(element.msRequestFullscreen) {
      element.msRequestFullscreen();      // IE/Edge
    }
  };
  
  let btn = document.getElementById("full_screen");
  btn.addEventListener("click", function(){
    let videoEle = document.querySelector('body');
    enterFullScreen(everything);
  });
  
  document.addEventListener('fullscreenchange', (event) => {
    if (document.fullscreenElement) {
      console.log('Entered fullscreen:', document.fullscreenElement);
    } else {
      console.log('Exited fullscreen.');
    }
  });

window.addEventListener("load",function() {
  // Get the document element
  var doc = document.documentElement;

  // Request fullscreen
  doc.requestFullscreen = doc.requestFullscreen || doc.mozRequestFullScreen || doc.webkitRequestFullScreen || doc.msRequestFullscreen;
  doc.requestFullscreen();

  // Exit fullscreen on touch
  document.addEventListener("touchstart",function(){
    doc.exitFullscreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;
    doc.exitFullscreen();
  });
});
