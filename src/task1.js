
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');


const timer = {
    intervalId: null,
    isActive: false,

    clickOnStart () {
        if(this.isActive){
            return;
        }
        this.isActive  = true;
        startBtn.disabled = true;
        this.intervalId = setInterval(changeBodyBgcolor,1000,1000);
    },
    

    clickOnStop () {
        clearInterval(this.intervalId);
        this.isActive = false;
        startBtn.disabled = false;
    },
    };


startBtn.addEventListener('click', () => {timer.clickOnStart()});
stopBtn.addEventListener('click', () => {timer.clickOnStop()});


function changeBodyBgcolor () {
   console.log(document.body.style.background = `#${Math.floor(Math.random() * 16777215).toString(16)}`);
}
