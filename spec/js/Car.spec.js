describe('Car should behave like a car:', function(){

    let underTest;

    beforeEach( function(){
        underTest = new Car();
    })

    describe('Car should have properties:', function(){

        describe('should have speed', function(){
            it('should have a default speed of 5', function(){
                expect(underTest.speed).toBe(5);
            })
        })

        describe('getSpeed returns current value of speed', function(){
            it('should return 5 for new car', function(){
                expect(underTest.getSpeed()).toBe(5);
            })
        })
    })

    describe('Car should accelerate:', function(){

        describe('when accelerator is pressed', function(){
            it('should go faster by 10 mph', function(){
                underTest.accelerate();
                expect(underTest.getSpeed()).toBe(15);
            })

            it('isSpeeding should return true if speed is greater than 70', function(){
                for(let i=0; i<10; i++){
                    underTest.accelerate();
                }
                expect(underTest.isSpeeding()).toBeTrue();
            })

            it('isSpeeding should return true if speed is 71', function(){
                underTest.speed = 71;
                expect(underTest.isSpeeding()).toBeTrue();
            })

            it('isSpeeding should return false if speed is less than 70', function(){
                expect(underTest.isSpeeding()).toBeFalse();
            })

            it('isSpeeding should return false if speed is 70', function(){
                underTest.speed = 70;
                expect(underTest.isSpeeding()).toBeFalse();
            })
        })
    })

    describe('Car should slow down:', function(){

        describe('when brake is pressed', function(){
            it('should slow down by 7', function(){
                // act
                underTest.accelerate(); // accelerate from 5 to 15
                underTest.brake(); // slow from 15 to 8

                // assert
                expect(underTest.getSpeed()).toBe(8);
            })

            it('speed cannot go below 0', function(){
                underTest.brake();
                expect(underTest.getSpeed()).toBe(0);
            })

            it('if speed is 0, it remains 0', function(){
                underTest.speed = 0;
                underTest.brake();
                expect(underTest.getSpeed()).toBe(0);
            })
        })
    })

    describe('Car should have an odometer:', function(){

        describe('when speed is greater than 0', function(){

            it('isDriving should return true', function(){
                underTest.accelerate();
                expect(underTest.isDriving()).toBeTrue();
            })

            it('getDistanceTravelled returns 27 when distanceTravelled is 27', function(){
                underTest.distanceTravelled = 27;
                expect(underTest.getDistanceTravelled()).toBe(27);
            })

            it('addMile should increase distanceTravelled by 1', function(){
                underTest.addMile();
                expect(underTest.getDistanceTravelled()).toBe(1);
            })
        })
    })


})