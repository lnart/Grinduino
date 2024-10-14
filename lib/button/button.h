#ifndef button.h
#define button.h

#include <Arduino.h>

class ButtonClass {
    public:
        ButtonClass(int pin);
        bool isPressed();
        bool wasPressed();
        void begin();
        void debug();
    private:
        int _pin;
        int _lastState;
        int _currentState;

};

extern ButtonClass Button;

#endif