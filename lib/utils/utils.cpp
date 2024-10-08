#include <Arduino.h>
#include <utils.h>

utilsClass::utilsClass(){

}

int utilsClass::smoothAnalogRead(int pin, int samples = 10){
    long sum = 0;
    for (int i = 0; i < samples; i++) {
        sum += analogRead(pin);
        delay(1);
    }
    return sum / samples;
}

void utilsClass::checkForButtonPress(int buttonState, int lastButtonState, bool motorRunning, unsigned long motorStartTime){
    if(buttonState == LOW && lastButtonState == HIGH){
        if(motorRunning){
            motorRunning = false;
        }else {
            motorRunning = true;
            motorStartTime = millis();
        }
        delay(50);
    }
    lastButtonState = buttonState;
}

utilsClass utils = utilsClass();

