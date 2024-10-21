#ifndef scale_h
#define scale_h

#include <Arduino.h>
#include "HX711.h"

class ScaleClass {
public:
    ScaleClass(uint8_t dout, uint8_t sck);
    void begin();
    void calibrate(float known_weight);
    void tare();
    float getWeight();
    bool isThresholdReached(float threshold);
    void setCalibrationFactor(float factor);

private:
    HX711 _scale;
    float _calibration_factor;
    float _offset;
};

#endif