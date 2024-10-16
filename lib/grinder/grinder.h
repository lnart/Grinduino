#ifndef grinder.h
#define grinder.h

#include <Arduino.h>
#include <LiquidCrystal_I2C.h>
#include <button.h>
#include <motor.h>

class GrinderClass {
    public:
        GrinderClass(int in1Pin, int in2Pin, int enaPin, int speedPin, int durationPin, int startPin);
        void begin();
        void update();
        void updateLCD();

    private:
        ButtonClass _startButton;
        MotorClass _motor;
        LiquidCrystal_I2C _lcd;

        int _speedPin, _durationPin;
        bool _motorRunning;
        int _speedReading, _speed, _readableSpeed;
        int _durationReading, _duration;
        unsigned long _motorStartTime;
        float _remainingTime;

        int smoothAnalogRead(int pin, int samples = 10);

};

#endif