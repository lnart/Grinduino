#include <button.h>

//Implements the ButtonClass Functionality

ButtonClass::ButtonClass(int pin) : _pin(pin), _lastState(HIGH), _currentState(HIGH) {}

//Sets up the button and assigns the pin
void ButtonClass::begin(){
    pinMode(_pin,  INPUT);
}

//reads if the button is pressed
bool ButtonClass::isPressed(){
    _currentState = digitalRead(_pin);
    return _currentState == HIGH;
}

//reads if the button was pressed
bool ButtonClass::wasPressed(){
    _currentState = digitalRead(_pin);
    bool pressed = (_currentState == HIGH && _lastState == LOW);
    _lastState = _currentState;
    return pressed;
}
