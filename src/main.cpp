// This is the main file, here everything comes together and is being executed

#include <grinder.h>


const int IN1 = 9;
const int IN2 = 8;
const int ENA = 10;
const int SPEED_PIN = A0;
const int DURATION_PIN = A1;
const int START_PIN = 6;

GrinderClass coffeeGrinder(IN1, IN2, ENA, SPEED_PIN, DURATION_PIN, START_PIN);

void setup() {
    Serial.begin(9600);
    coffeeGrinder.begin();
    Serial.println("Coffee Grinder initialized");

}

void loop() {
    coffeeGrinder.update();
    coffeeGrinder.updateLCD();

    delay(100);
}