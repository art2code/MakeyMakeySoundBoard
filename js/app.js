(function(){
  var body     = document;
  var left     = body.getElementById('left'),
      right    = body.getElementById('right'),
      top      = body.getElementById('top'),
      bottom   = body.getElementById('bottom'),
      space    = body.getElementById('space'),
      w        = body.getElementById('w'),
      a        = body.getElementById('a'),
      s        = body.getElementById('s'),
      d        = body.getElementById('d'),
      f        = body.getElementById('f'),
      g        = body.getElementById('g'),
      h        = body.getElementById('h'),
      j        = body.getElementById('j'),
      click    = body.getElementById('click'),
      active   = null;

  // keyboard
  body.addEventListener('keydown', function(event) {
    switch (event.which) {
      case 38: var key = 'up';    setActive(up,key);    break;
      case 40: var key = 'down';  setActive(down,key);  break;
      case 37: var key = 'left';  setActive(left,key);  break;
      case 39: var key = 'right'; setActive(right,key); break;
      case 32: var key = 'space'; setActive(space,key); break;
      case 87: var key = 'w';     setActive(w,key);     break;
      case 65: var key = 'a';     setActive(a,key);     break;
      case 83: var key = 's';     setActive(s,key);     break;
      case 68: var key = 'd';     setActive(d,key);     break;
      case 70: var key = 'f';     setActive(f,key);     break;
      case 71: var key = 'g';     setActive(g,key);     break;
      case 72: var key = 'h';     setActive(h,key);     break;
      case 74: var key = 'j';     setActive(j,key);     break;
    }
  }, false);
  body.addEventListener('keyup', function(event) {
    removeActive();
  }, false);

  // mouse
  body.addEventListener('mousedown', function(event) {
    var key = 'click';
    setActive(click,key);
  }, false);
  body.addEventListener('mouseup', function(event) {
    removeActive();
  }, false);

  function setActive(id,key) {

    active = id;
    key = key.toString()
    active.className = 'active action';

    var sound = new Howl({
      urls: ['audio/'+key+'.mp3','audio/'+key+'.ogg']
    }).play();
  }

  function removeActive() {
    if (active) {
      active.className = 'action';
      }
    active = null;
  }

})();

