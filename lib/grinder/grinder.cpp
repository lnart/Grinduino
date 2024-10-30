#include <grinder.h>
#include <Wire.h>
#include <LiquidCrystal_I2C.h>

//Implements the GrinderClass functionality

GrinderClass::GrinderClass(int in1Pin, int in2Pin, int enaPin, int speedPin, int durationPin, int startPin)
    : _startButton(startPin), _motor(in1Pin, in2Pin, enaPin),
    _lcd(0x27, 16, 2), _speedPin(speedPin), _durationPin(durationPin) {
    _motorRunning = false;
}

//Initializes the Grinder
void GrinderClass::begin(){
    _startButton.begin();
    _motor.begin();

    _lcd.init();
    _lcd.backlight(); 
    _lcd.print("Ready To Grind");
    _lcd.setCursor(0,1);
    _lcd.print("Some Coffee!");

    delay(1000);
}

//Reads the values from the potentiometers and buttons and reacts to those values
void GrinderClass::update(){
       unsigned long currentMillis = millis();

    _speedReading = smoothAnalogRead(_speedPin);
    _durationReading = smoothAnalogRead(_durationPin);

    _speed = map(_speedReading, 0, 1023, 0, 255);
    _readableSpeed = map(_speedReading, 0, 1023, 0, 300);
    _duration = map(_durationReading, 0, 1023, 1, 60);

    if (_startButton.wasPressed()) {
        _motorRunning = !_motorRunning;
        if (_motorRunning) {
            _motorStartTime = currentMillis;
            _motor.start();
        } else {
            _motor.stop();
        }
    }

    if (_motorRunning) {
        _remainingTime = _duration - ((currentMillis - _motorStartTime) / 1000.0);
        if (_remainingTime <= 0) {
            _motorRunning = false;
            _remainingTime = 0;
            _motor.stop();
        } else {
            _motor.setSpeed(_speed);
        }
    }
}


//Updates the LCD screen
void GrinderClass::updateLCD() {
    _lcd.clear();
    _lcd.setCursor(0, 0);
    _lcd.print("RPM: ");
    _lcd.print(_readableSpeed);

    _lcd.setCursor(0, 1);
    if (_motorRunning) {
        _lcd.print("Time: ");
        if (_remainingTime >= 10) {
            _lcd.print(_remainingTime, 1);
        } else {
            _lcd.print(" ");
            _lcd.print(_remainingTime, 1);
        }
        _lcd.print("s");
    } else {
        _lcd.print("Dur: ");
        _lcd.print(_duration);
        _lcd.print("s");
    }
}

//Reads the analog values and returns an average to avoid fluctuating values
int GrinderClass::smoothAnalogRead(int pin, int samples) {
    long sum = 0;
    for (int i = 0; i < samples; i++) {
        sum += analogRead(pin);
        delay(1);
    }
    return sum / samples;
}

