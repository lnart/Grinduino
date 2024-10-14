#ifndef motor.h
#define motor.h

#include <Arduino.h>

class MotorClass{
    public:
        MotorClass(int in1Pin, int in2Pin, int enaPin);
        void begin();
        void setSpeed(int speed);
        void start();
        void stop();

    private: 
        int _in1Pin, _in2Pin, _enaPin;
};

extern MotorClass Motor;

#endif