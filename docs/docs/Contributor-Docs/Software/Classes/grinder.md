---
sidebar_position: 3
sidebar_label: "Grinder Class"
---

# GrinderClass Documentation

## Table of Contents
1. [Overview](#overview)
2. [Class Definition](#class-definition)
3. [Implementation Details](#implementation-details)
4. [Key Concepts](#key-concepts)
5. [Usage Example](#usage-example)

## Overview

The `GrinderClass` manages the functionality of a coffee grinder in an Arduino-based project. It integrates control of a motor, user input through buttons and potentiometers, and output via an LCD display. This class orchestrates the grinding process, allowing users to set grinding speed and duration, start/stop the grinder, and view real-time information.

## Class Definition

### GrinderClass

The `GrinderClass` coordinates various components to create a functional coffee grinder system.

#### Public Methods

1. `GrinderClass(int in1Pin, int in2Pin, int enaPin, int speedPin, int durationPin, int startPin)`
   - Constructor that initializes a new GrinderClass object.
   - Parameters:
     - `in1Pin`, `in2Pin`, `enaPin`: Motor control pins
     - `speedPin`, `durationPin`: Analog input pins for potentiometers
     - `startPin`: Digital input pin for the start button

2. `void begin()`
   - Initializes the grinder components and displays a welcome message.

3. `void update()`
   - Updates the grinder's state based on user inputs and time.

4. `void updateLCD()`
   - Updates the LCD display with current speed and time information.

#### Private Members

- `ButtonClass _startButton`: Manages the start/stop button.
- `MotorClass _motor`: Controls the grinder's motor.
- `LiquidCrystal_I2C _lcd`: Manages the LCD display.
- Various int and bool variables for storing state and settings.

#### Private Methods

- `int smoothAnalogRead(int pin, int samples = 10)`
   - Performs multiple analog reads and returns an average to reduce fluctuations.

## Implementation Details

### Constructor
```cpp
GrinderClass::GrinderClass(int in1Pin, int in2Pin, int enaPin, int speedPin, int durationPin, int startPin)
    : _startButton(startPin), _motor(in1Pin, in2Pin, enaPin),
    _lcd(0x27, 16, 2), _speedPin(speedPin), _durationPin(durationPin) {
    _motorRunning = false;
}

- Initializes the grinder components with the provided pin configurations.
- Sets up the LCD display (assuming I2C address 0x27 and 16x2 display).
```

### begin Method

- Initializes all components and displays a welcome message.

### update Method
- Reads potentiometer values for speed and duration.
- Maps these values to appropriate ranges for motor speed and grinding duration.
- Handles start/stop button presses.
- Manages the motor running state and remaining time.

### updateLCD() Method
- Updates the LCD with current speed (in RPM) and either remaining time or set duration.

### smoothAnalogRead() Method
- Performs multiple analog reads and returns an average to reduce fluctuations in readings.

## Key Concepts
### Component Integration:
The class integrates multiple components (motor, button, potentiometers, LCD) into a cohesive system.
### State Management:
Keeps track of the grinder's state (running/stopped) and manages transitions.
### User Input Processing:
Continuously reads and processes user inputs for speed and duration settings.
### Real-time Updates:
Provides real-time updates on the LCD, showing current speed and remaining time or set duration.
### Smooth Analog Reading:
Implements a method to reduce fluctuations in analog readings for more stable input.