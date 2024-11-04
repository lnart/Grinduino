---
sidebar_position: 2
sidebar_label: "Button Class"
---

# Button

In this file we will explore the `button.h` and the `button.cpp` file


```
Grinduino/
├── lib/
│   └── button/
│   |    └── button.h
|   |    └──button.cpp
```

### Overview
This header file defines a `ButtonClass` that manages the button's functionality. The class is designed to detect button presses and handle the initialization of a grinding process.

### Class Definition

### ButtonClass

The `ButtonClass` is responsible for managing a button connected to a specific pin on the Arduino board. It provides methods to check the button's current state and detect changes in its state.

### Public Methods

1. `ButtonClass(int pin)`
   - Constructor that initializes a new ButtonClass object.
   - Parameter: `pin` - The Arduino pin number to which the button is connected.

2. `bool isPressed()`
   - Checks if the button is currently pressed.
   - Returns: `true` if the button is pressed, `false` otherwise.

3. `bool wasPressed()`
   - Detects if the button was pressed since the last check.
   - Returns: `true` if the button was pressed, `false` otherwise.

4. `void begin()`
   - Initializes the button by setting up the pin and initial state.

### Private Members

1. `int _pin`
   - Stores the Arduino pin number to which the button is connected.

2. `int _lastState`
   - Keeps track of the button's previous state.

3. `int _currentState`
   - Stores the button's current state.

### Global Instance

The header file also declares an external global instance of the ButtonClass named `Button`. This allows easy access to a single button object throughout the project.

### Usage

To use this ButtonClass in your project:

1. Include this header file in your main Arduino sketch.
2. Use the global `Button` object to interact with the button.
3. Call `Button.begin()` in your `setup()` function to initialize the button.
4. Use `Button.isPressed()` or `Button.wasPressed()` in your `loop()` function to check the button's state and trigger actions accordingly.

Example:
```cpp
void setup() {
  Button.begin();
}

void loop() {
  if (Button.wasPressed()) {
    // Start the grinding process
  }
}

