const speedometerElement = document.querySelector('.dashboard__speedometer');
const odometerElement = document.querySelector('.dashboard__odometer');
const warningElement = document.querySelector('.dashboard__warning');

const acceleratorButton = document.querySelector('.floorboard__accelerator');
const brakeButton = document.querySelector('.floorboard__brake');

const car = new Car();

let isOdometerActive = false;
let intervalId = null;

// update Speedometer with speed
const updateSpeedometer = function(){
    speedometerElement.innerText = car.getSpeed();
}

// update Odometer with distance
const updateOdometer = function(){
    odometerElement.innerText = car.getDistanceTravelled();
}

// add eventListener to accelerator
acceleratorButton.addEventListener("click", function(){
    // go faster, make the car accelerate
    car.accelerate();
    // update speedometer
    updateSpeedometer();
    warnIfSpeeding();
    addMilesIfDriving();
})

// add eventListener to brake
brakeButton.addEventListener("click", function(){
    // slow down
    car.brake();
    // update speedometer
    updateSpeedometer();
    warnIfSpeeding();
    addMilesIfDriving();
})

const warnIfSpeeding = function(){
    if(car.isSpeeding()){
        // make the warning visible
        warningElement.classList.remove('hidden');
    }
    else{
        // make the warning invisible
        warningElement.classList.add('hidden');
    }
}

const addMilesIfDriving = function(){
    if(car.isDriving() && !isOdometerActive){
        console.log('driving')
        activateOdometer();
    }
    else if(!car.isDriving() && isOdometerActive){
        console.log('not driving or odometer is already active')
        clearInterval(intervalId);
        isOdometerActive = false;
    }
}

const activateOdometer = function() {
    intervalId = setInterval(function(){
        car.addMile();
        updateOdometer();
        isOdometerActive = true;
    }, 1000)
}

updateSpeedometer();
updateOdometer();