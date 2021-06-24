// JAVASCRTIPT STOPWATCH //

// function StopWatch(){
// 	let startTime = null; 
// 	let stopTime = null; 
// 	let running = false; 
//         }

// function getTime(){
// 	var day = new Date();
// 	return day.getTime();
//         }     

// // START //
// this.start = function(){ 
// 	if (running == true)
// 	return;
// 	else if (startTime != null) 
// 	stopTime = null; 
		
// 	running = true;    
// 	startTime = getTime();
// 	}

// // STOP //
// this.stop = function(){ 
// 	if (running == false)
// 	return;    
	
// 	stopTime = getTime();
// 	running = false; 
// 	}

// // DURATION //
// this.duration = function(){ 
// 	if(startTime == null || stopTime == null)
// 	return 'Undefined';
// 	else  
// 	return (stopTime - startTime) / 1000;
// 	}

// let _StopWatch = new StopWatch();

// _StopWatch.start();

// _StopWatch.stop();

// alert(_StopWatch.duration());



//------------------------------------------------------------


// let h2 = document.getElementsByTagName('h2')[0],
//     start = document.getElementById('start'),
//     stop = document.getElementById('stop'),
//     reset = document.getElementById('reset'),
//     seconds = 0, minutes = 0, hours = 0,
//     t;

// function add() {
//     seconds++;
//     if (seconds >= 60) {
//         seconds = 0;
//         minutes++;
//         if (minutes >= 60) {
//             minutes = 0;
//             hours++;
//         }
//     }
    
//     h2.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);

//     timer();
// }
// function timer() {
//     t = setTimeout(add, 1000);
// }
// timer();


// /* Start button */
// start.onclick = timer;


// /* Stop button */
// stop.onclick = function() {
//     clearTimeout(t);
// }

// /* Clear button */
// reset.onclick = function() {
//     h2.textContent = "00:00:00";
//     seconds = 0; minutes = 0; hours = 0;
// }


//------------------------------------------------------------


lety Stopwatch = function(elem, options) {

    let timer       = createTimer(),
        startButton = createButton("start", start),
        stopButton  = createButton("stop", stop),
        resetButton = createButton("reset", reset),
        offset,
        clock,
        interval;
  
    // default options
    options = options || {};
    options.delay = options.delay || 1;
  
    // append elements     
    elem.appendChild(timer);
    elem.appendChild(startButton);
    elem.appendChild(stopButton);
    elem.appendChild(resetButton);
  
    // initialize
    reset();
  
    // private functions
    function createTimer() {
      return document.createElement("span");
    }
  
    function createButton(action, handler) {
      var a = document.createElement("a");
      a.href = "#" + action;
      a.innerHTML = action;
      a.addEventListener("click", function(event) {
        handler();
        event.preventDefault();
      });
      return a;
    }
  
    function start() {
      if (!interval) {
        offset   = Date.now();
        interval = setInterval(update, options.delay);
      }
    }
  
    function stop() {
      if (interval) {
        clearInterval(interval);
        interval = null;
      }
    }
  
    function reset() {
      clock = 0;
      render();
    }
  
    function update() {
      clock += delta();
      render();
    }
  
    function render() {
      timer.innerHTML = clock/1000; 
    }
  
    function delta() {
      var now = Date.now(),
          d   = now - offset;
  
      offset = now;
      return d;
    }
  
    // public API
    this.start  = start;
    this.stop   = stop;
    this.reset  = reset;
  };