---
sidebar_position: 2
sidebar_label: "Wiring"
---

# Wiring

In this section we will investigate the wiring of the project. The goal for you is to understand why the pins are assigned the way they are and at the end of the section you should be able to judge if a certain pin is appropriate for a certain component.


# Microcontroller Pin Types and Functions

## 1. Digital Pins (D0-D13)
- **Function**: Can be set to HIGH (5V) or LOW (0V)
- **Uses**: Reading digital sensors, controlling LEDs, activating relays
- **Special Notes**: 
  - Pins 3, 5, 6, 9, 10, and 11 support PWM (Pulse Width Modulation)
  - Pins 2 and 3 can be used for external interrupts

## 2. Analog Input Pins (A0-A5)
- **Function**: Read analog voltages between 0 and 5V
- **Uses**: Reading analog sensors (e.g., potentiometers, light sensors)
- **Special Notes**: 
  - 10-bit resolution (0-1023 values)
  - Can also be used as digital pins (HIGH or LOW)

## 3. PWM Pins (3, 5, 6, 9, 10, 11)
- **Function**: Provide 8-bit PWM output
- **Uses**: Controlling motor speed, LED brightness, generating analog-like signals
- **Special Notes**: Marked with '~' symbol on most Microcontroller boards

## 4. Serial Communication Pins (D0, D1)
- **Function**: Used for serial communication with computer or other devices
- **Uses**: Debugging, communicating with serial devices
- **Special Notes**: 
  - D0 (RX): Receive
  - D1 (TX): Transmit
  - Using these can interfere with USB communication

## 5. I2C Pins (A4, A5)
- **Function**: Used for I2C (Inter-Integrated Circuit) communication
- **Uses**: Connecting to I2C devices like certain sensors and displays
- **Special Notes**:
  - A4: SDA (Data line)
  - A5: SCL (Clock line)

## 6. SPI Pins (10, 11, 12, 13)
- **Function**: Used for SPI (Serial Peripheral Interface) communication
- **Uses**: High-speed synchronized communication with devices
- **Special Notes**:
  - 10: SS (Slave Select)
  - 11: MOSI (Master Out Slave In)
  - 12: MISO (Master In Slave Out)
  - 13: SCK (Serial Clock)

## 7. Built-in LED Pin (13)
- **Function**: Connected to the built-in LED on the Arduino board
- **Uses**: Simple visual output for testing
- **Special Notes**: Can still be used as a regular digital pin

## 8. AREF Pin
- **Function**: Optional external reference voltage for analog inputs
- **Uses**: Providing a different reference voltage for analog readings
- **Special Notes**: Typically used when the default 5V reference is not suitable

## 9. Reset Pin
- **Function**: Resets the Arduino when pulled LOW
- **Uses**: External reset button or auto-reset during programming
- **Special Notes**: Connected to the onboard reset button

## 10. Power Pins
- **5V**: Supplies 5V power
- **3.3V**: Supplies 3.3V power
- **GND**: Ground pins
- **Vin**: Input voltage to Arduino when using an external power source (Like the motor Driver in our example)

## Special Considerations
- Not all Microcontroller models have the same pin layout or capabilities
- Some pins have multiple functions and can be configured for different uses
- Always check the specific Arduino model's datasheet for precise pin information


| Component | Arduino Pin | Description |
   |-----------|-------------|-------------|
   | Motor IN1 | D2 | Motor control input 1 |
   | Motor IN2 | D3 | Motor control input 2 |
   | Motor ENA | D4 | Motor enable pin |
   | Speed Potentiometer | A0 | Analog input for speed control |
   | Duration Potentiometer | A1 | Analog input for duration control |
   | Start Button | D7 | Digital input for start/stop button |
   | LCD SDA | A4 | I2C data line |
   | LCD SCL | A5 | I2C clock line |


## Wiring Design Explanation

The wiring diagram above illustrates the key connections in our coffee grinder project. Here are the rationales behind some of the critical design choices:

1. Motor Control (Pins D2, D3, D4):
   We chose PWM-capable pins for the motor driver connections to allow precise speed control. This enables smooth adjustment of the grinding speed and theoretically direction.

2. Potentiometers (Pins A0, A1):
   The analog inputs are used for the speed and duration potentiometers. This allows for a wide range of values to be read, providing fine-grained control over the grinding parameters.
   Those values reach from 1-1024, they have to be mapped accordingly, depending on what they should be used for.

3. Start Button (Pin D7):
   We connected the start button to a digital pin capable of generating interrupts. This ensures that the system can respond immediately to button presses, even if it's in the middle of a grinding operation.

4. LCD Display (Pins A4, A5):
   The LCD is connected via I2C, which only requires two pins. This efficient communication protocol frees up other pins for additional features we might want to add in the future, and makes the wiring process significantly easier.

By organizing our connections this way, we've created a system that is responsive, precise, and leaves room for future expansions or modifications.