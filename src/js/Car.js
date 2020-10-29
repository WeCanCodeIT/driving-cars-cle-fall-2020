class Car {

    constructor() {
        this.speed = 5;
    }

    getSpeed() {
        return this.speed;
    }

    accelerate() {
        this.speed += 10;
    }

    brake() {
        this.speed -= 7;
    }

    isSpeeding() {
        return this.speed > 70;
    }
}