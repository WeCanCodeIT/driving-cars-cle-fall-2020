const speedometerElement = document.querySelector('.dashboard__speedometer');
const odometerElement = document.querySelector('.dashboard__odometer');
const warningElement = document.querySelector('.dashboard__warning');

const acceleratorButton = document.querySelector('.floorboard__accelerator');
const brakeButton = document.querySelector('.floorboard__brake');

const car = new Car();

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
})

// add eventListener to brake
brakeButton.addEventListener("click", function(){
    // slow down
    car.brake();
    // update speedometer
    updateSpeedometer();
})

updateSpeedometer();
updateOdometer();