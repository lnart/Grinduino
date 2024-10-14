#include <motor.h>

MotorClass::MotorClass(int in1Pin, int in2Pin, int enaPin)
    : _in1Pin(in1Pin), _in2Pin(in2Pin), _enaPin(enaPin){}

    void MotorClass::begin(){
        pinMode(_in1Pin, OUTPUT);
        pinMode(_in2Pin, OUTPUT);
        pinMode(_enaPin, OUTPUT);
        stop();
    }

    void MotorClass::setSpeed(int speed){
        analogWrite(_enaPin, speed);
    }

    void MotorClass::start(){
        digitalWrite(_in1Pin, HIGH);
        digitalWrite(_in2Pin, LOW);
    }

    void MotorClass::stop(){
        digitalWrite(_in1Pin, LOW);
        digitalWrite(_in2Pin, LOW);
        analogWrite(_enaPin, 0);
    }