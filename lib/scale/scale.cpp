#include "scale.h"

ScaleClass::ScaleClass(uint8_t dout, uint8_t sck) : _scale(dout, sck) {
    _calibration_factor = 1000.0; // Default calibration factor, adjust as needed
    _offset = 0.0;
}

void ScaleClass::begin() {
    _scale.begin();
    _scale.set_scale(_calibration_factor);
    _scale.tare();
}

void ScaleClass::calibrate(float known_weight) {
    _scale.set_scale();
    _scale.tare();
    
    Serial.println("Place known weight on the scale...");
    delay(5000);
    
    long reading = _scale.get_units(10);
    _calibration_factor = reading / known_weight;
    
    _scale.set_scale(_calibration_factor);
    Serial.print("Calibration factor: ");
    Serial.println(_calibration_factor);
}

void WeightSensor::tare() {
    _scale.tare();
}

float WeightSensor::getWeight() {
    return _scale.get_units();
}

bool WeightSensor::isThresholdReached(float threshold) {
    return getWeight() >= threshold;
}

void WeightSensor::setCalibrationFactor(float factor) {
    _calibration_factor = factor;
    _scale.set_scale(_calibration_factor);
}