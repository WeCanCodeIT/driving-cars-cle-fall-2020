class Car {

    constructor() {
        this.speed = 5;
        this.distanceTravelled = 0;
    }

    getSpeed() {
        return this.speed;
    }

    accelerate() {
        this.speed += 10;
    }

    brake() {
        this.speed -= 7;
        if(this.speed < 0){
            this.speed = 0;
        }
    }

    isSpeeding() {
        return this.speed > 70;
    }

    isDriving(){
        return this.speed > 0
    }

    addMile(){
        this.distanceTravelled++
    }

    getDistanceTravelled(){
        return this.distanceTravelled
    }
}