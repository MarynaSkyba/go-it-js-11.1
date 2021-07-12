


const refs = {
btnCount: document.querySelector('[data-startcount]'),
clock: document.querySelector('.js-clockface'),
inputDate: document.querySelector('#date-selector'),
days: document.querySelector('[data-days]'),
hours: document.querySelector('[data-hours]'),
minutes: document.querySelector('[data-minutes]'),
hours: document.querySelector('[data-seconds]'),
};

import Swal from "sweetalert2";

class CountdownTimer {
    constructor() {
        this.intervalId = null;
        this.isActive = false;
        this.refs = {
            btnCount: document.querySelector('[data-startcount]'),
            clock: document.querySelector('.js-clockface'),
            inputDate: document.querySelector('#date-selector'),
            days: document.querySelector('[data-days]'),
            hours: document.querySelector('[data-hours]'),
            minutes: document.querySelector('[data-minutes]'),
            seconds: document.querySelector('[data-seconds]'),
            };
    }



chooseDate () {
    const input = refs.inputDate.value; 
        const startTime = new Date(input);
        const currentDate = Date.now()
        const countTime = startTime - currentDate;
        const timeCount= this.convertMs(countTime);
        this.updateClockface(timeCount);
        if (countTime < 0) {
            Swal.fire ({
                icon: 'error',
                title: 'Oops...',
                text: 'Please choose a date in the future',
            })
            return;
        }
}


start(){
        if (this.isActive) {
            return;
        }
   
    this.isActive = true;    
        setInterval(() => { 
        
        const input = refs.inputDate.value; 
        const startTime = new Date(input);
        console.log(startTime)
        const currentDate = Date.now()
        console.log(currentDate)
        const countTime = startTime - currentDate;
        const timeCount= this.convertMs(countTime);
        this.updateClockface(timeCount);
    
        }
    , 1000);
    }

convertMs(ms) {
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;
       
        const days = this.pad(Math.floor(ms / day));
        const hours = this.paddays(Math.floor((ms % day) / hour));
        const minutes = this.paddays(Math.floor(((ms % day) % hour) / minute));
        const seconds = this.paddays(Math.floor((((ms % day) % hour) % minute) / second));
      
        return { days, hours, minutes, seconds };
      }
      
pad(value) {
        return String(value).padStart(3,'0')};
    
paddays(value) {
            return String(value).padStart(2,'0')};
            
updateClockface ({ days, hours, minutes, seconds }) {
        this.refs.days.textContent = `${days}`;
        this.refs.hours.textContent = `${hours}`;
        this.refs.minutes.textContent = `${minutes}`;
        this.refs.seconds.textContent = `${seconds}`;
            }     
}


const timer = new CountdownTimer({});

refs.btnCount.addEventListener('click', () => {
    timer.start();
});

refs.inputDate.addEventListener('change', () => {
    timer.chooseDate();});

