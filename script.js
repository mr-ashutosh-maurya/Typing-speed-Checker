var time=document.querySelector('.label');
var start=document.querySelector('.btn1');
var pause=document.querySelector('.btn2');
var reset=document.querySelector('.btn3');
var mus1=document.querySelector('.cl1');
var mus2=document.querySelector('.cl2');
var mus3=document.querySelector('.cl3');
let sec=0;
let hour=0;
let min=0;
let interval;
console.log(!interval)
function timer(){
    if (sec>=59){
        sec=0;
        min+=1;
        mus3.play();
    }
   if(min>=59){
        min=0;
        hour+=1;
    }
    sec+=1;
    time.textContent = `${String(hour).padStart(2, '0')}:${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
}
start.addEventListener('click' ,()=>{
    mus1.play();
    if(!interval){
        interval=setInterval(timer,1000); 
    }

});
pause.addEventListener('click', () => {
    mus1.play();
    clearInterval(interval);
    interval = null; 
});
reset.addEventListener('click', () => {
    mus1.play();
    clearInterval(interval);
    interval = null; // Reset interval ID
    t = 0; // Reset total time
    sec = 0; // Reset seconds
    min = 0; // Reset minutes
    hour = 0; // Reset hours
    time.textContent = '00:00:00'; // Update display
});