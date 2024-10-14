#include <button.h>

ButtonClass::ButtonClass(int pin) : _pin(pin), _lastState(HIGH), _currentState(HIGH) {}

void ButtonClass::begin(){
    pinMode(_pin,  INPUT);
}

bool ButtonClass::isPressed(){
    _currentState = digitalRead(_pin);
    return _currentState == HIGH;
}

bool ButtonClass::wasPressed(){
    _currentState = digitalRead(_pin);
    bool pressed = (_currentState == HIGH && _lastState == LOW);
    _lastState = _currentState;
    return pressed;
}
