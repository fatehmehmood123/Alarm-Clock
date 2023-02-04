
//getting submit button from DOM
const alarmSubmit = document.getElementById("alarmSubmit");
//audio for alarm
var audio = new Audio('mixkit-security-facility-breach-alarm-994.wav');
//another audion from web
// https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3

// function on submit button
function ringBell() {
    audio.play();
}


alarmSubmit.addEventListener("click", (e) => {
    e.preventDefault(); //to prevent reloading of page on submit
    const alarm = document.getElementById("alarm");  //getting the input date and time from user
    alarmDate = new Date(alarm.value);  //initiallizing date object from input date time
    now = new Date();   //getting current time 
    let timeToAlarm = alarmDate-now;  //calculating time until alarm goes on
    if(timeToAlarm>0){
        setTimeout(() => {
            ringBell();
        }, timeToAlarm);
    }
    
})
