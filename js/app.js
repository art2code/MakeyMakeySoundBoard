(function(){
  var body     = document;
  var left     = body.getElementById('left'),
      right    = body.getElementById('right'),
      top      = body.getElementById('top'),
      bottom   = body.getElementById('bottom'),
      space    = body.getElementById('space'),
      click    = body.getElementById('click'),
      active   = null;

  // keyboard
  body.addEventListener('keydown', function(event) {
    switch (event.which) {
      case 38: var key = 'up';    setActive(up,key);break;
      case 40: var key = 'down';  setActive(down,key);break;
      case 37: var key = 'left';  setActive(left,key);break;
      case 39: var key = 'right'; setActive(right,key);break;
      case 32: var key = 'space'; setActive(space,key);break;
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
    active.className = 'action active';

    var sndmp3 = 'audio/'+key+'.mp3';
    var sndogg = 'audio/'+key+'.ogg';

    soundmp3 = new Audio(sndmp3);
    soundmp3.play();

    soundogg = new Audio(sndogg);
    soundogg.play();
  }

  function removeActive() {
    if (active) {
      active.className = 'action';
      }
    active = null;
  }

  

})();
