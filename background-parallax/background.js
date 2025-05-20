document.addEventListener('DOMContentLoaded', function() {
  const parallaxContainer = document.querySelector('.parallax-container');
  const parallaxLayers = document.querySelectorAll('.parallax-layer');
  
  const isStaticBackground = parallaxContainer.classList.contains('static');
  
  // Function to handle parallax movement
  function handleParallax(e) {
    if (isStaticBackground) return;
    
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    
    // Calculate how far the mouse is from the center
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    parallaxLayers.forEach(layer => {
      const speed = parseFloat(layer.getAttribute('data-speed'));
      
      // Move the layer based on mouse position and layer speed
      const x = -mouseX * speed;
      const y = -mouseY * speed;
      
      layer.style.transform = `translate(${x}px, ${y}px)`;
    });
  }
  
  if (!isStaticBackground) {
    document.addEventListener('mousemove', handleParallax);
  }
  
  window.toggleParallaxEffect = function(enable) {
    if (enable) {
      parallaxContainer.classList.remove('static');
      document.addEventListener('mousemove', handleParallax);
    } else {
      parallaxContainer.classList.add('static');
      document.removeEventListener('mousemove', handleParallax);
      
      parallaxLayers.forEach(layer => {
        layer.style.transform = 'translate(0, 0)';
      });
    }
  };
});