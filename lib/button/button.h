#ifndef button.h
#define button.h

#include <Arduino.h>

//Defines the functionality for the Button that initializes the Grinding process
class ButtonClass {
    public:
        ButtonClass(int pin);
        bool isPressed();
        bool wasPressed();
        void begin();
    private:
        int _pin;
        int _lastState;
        int _currentState;

};

extern ButtonClass Button;

#endif