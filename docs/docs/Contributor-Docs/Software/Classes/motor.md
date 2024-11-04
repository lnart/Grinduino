---
sidebar_position: 2
sidebar_label: "Motor Class"
---

# Motor Class

## Overview
This header file defines a `MotorClass` that manages the functionality of a DC motor in an Microcontroller-based project. The class is designed to control the motor's speed and direction using a motor driver.

## Class Definition

### MotorClass

The `MotorClass` is responsible for controlling a DC motor connected to the Microcontroller board through a motor driver. It provides methods to initialize the motor, set its speed, and control its start/stop operations.

#### Public Methods

1. `MotorClass(int in1Pin, int in2Pin, int enaPin)`
   - Constructor that initializes a new MotorClass object.
   - Parameters:
     - `in1Pin`: The Arduino pin number connected to the motor driver's IN1 input.
     - `in2Pin`: The Arduino pin number connected to the motor driver's IN2 input.
     - `enaPin`: The Arduino pin number connected to the motor driver's ENA (Enable) input.

2. `void begin()`
   - Initializes the motor by setting up the necessary pins.

3. `void setSpeed(int speed)`
   - Sets the speed of the motor.
   - Parameter: `speed` - The desired speed value (typically 0-255 for PWM control).

4. `void start()`
   - Starts the motor rotation.

5. `void stop()`
   - Stops the motor rotation.

#### Private Members

1. `int _in1Pin`
   - Stores the Arduino pin number connected to the motor driver's IN1 input.

2. `int _in2Pin`
   - Stores the Arduino pin number connected to the motor driver's IN2 input.

3. `int _enaPin`
   - Stores the Arduino pin number connected to the motor driver's ENA (Enable) input.

## Global Instance

The header file declares an external global instance of the MotorClass named `Motor`. This allows easy access to a single motor object throughout the project.

## Usage

To use this MotorClass in your project:

1. Include this header file in your main Arduino sketch.
2. Use the global `Motor` object to interact with the motor.
3. Call `Motor.begin()` in your `setup()` function to initialize the motor.
4. Use `Motor.setSpeed()`, `Motor.start()`, and `Motor.stop()` in your `loop()` function to control the motor.

Example:
```cpp
void setup() {
  Motor.begin();
}

void loop() {
  Motor.setSpeed(200);  // Set speed to 200 (out of 255)
  Motor.start();        // Start the motor
  delay(5000);          // Run for 5 seconds
  Motor.stop();         // Stop the motor
  delay(2000);          // Wait for 2 seconds
}