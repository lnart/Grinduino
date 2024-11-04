"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[53],{4738:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>c});var s=i(4848),r=i(8453);const t={sidebar_position:2,sidebar_label:"Wiring"},l="Wiring",o={id:"Contributor-Docs/Hardware/wiring",title:"Wiring",description:"In this section we will investigate the wiring of the project. The goal for you is to understand why the pins are assigned the way they are and at the end of the section you should be able to judge if a certain pin is appropriate for a certain component.",source:"@site/docs/Contributor-Docs/Hardware/wiring.md",sourceDirName:"Contributor-Docs/Hardware",slug:"/Contributor-Docs/Hardware/wiring",permalink:"/docs/Contributor-Docs/Hardware/wiring",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Wiring"},sidebar:"tutorialSidebar",previous:{title:"Component Overview",permalink:"/docs/Contributor-Docs/Hardware/overview"},next:{title:"Architecture",permalink:"/docs/Contributor-Docs/Software/software-architecture"}},d={},c=[{value:"1. Digital Pins (D0-D13)",id:"1-digital-pins-d0-d13",level:2},{value:"2. Analog Input Pins (A0-A5)",id:"2-analog-input-pins-a0-a5",level:2},{value:"3. PWM Pins (3, 5, 6, 9, 10, 11)",id:"3-pwm-pins-3-5-6-9-10-11",level:2},{value:"4. Serial Communication Pins (D0, D1)",id:"4-serial-communication-pins-d0-d1",level:2},{value:"5. I2C Pins (A4, A5)",id:"5-i2c-pins-a4-a5",level:2},{value:"6. SPI Pins (10, 11, 12, 13)",id:"6-spi-pins-10-11-12-13",level:2},{value:"7. Built-in LED Pin (13)",id:"7-built-in-led-pin-13",level:2},{value:"8. AREF Pin",id:"8-aref-pin",level:2},{value:"9. Reset Pin",id:"9-reset-pin",level:2},{value:"10. Power Pins",id:"10-power-pins",level:2},{value:"Special Considerations",id:"special-considerations",level:2},{value:"Wiring Design Explanation",id:"wiring-design-explanation",level:2}];function a(n){const e={h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"wiring",children:"Wiring"})}),"\n",(0,s.jsx)(e.p,{children:"In this section we will investigate the wiring of the project. The goal for you is to understand why the pins are assigned the way they are and at the end of the section you should be able to judge if a certain pin is appropriate for a certain component."}),"\n",(0,s.jsx)(e.h1,{id:"microcontroller-pin-types-and-functions",children:"Microcontroller Pin Types and Functions"}),"\n",(0,s.jsx)(e.h2,{id:"1-digital-pins-d0-d13",children:"1. Digital Pins (D0-D13)"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Function"}),": Can be set to HIGH (5V) or LOW (0V)"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Uses"}),": Reading digital sensors, controlling LEDs, activating relays"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Special Notes"}),":","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Pins 3, 5, 6, 9, 10, and 11 support PWM (Pulse Width Modulation)"}),"\n",(0,s.jsx)(e.li,{children:"Pins 2 and 3 can be used for external interrupts"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"2-analog-input-pins-a0-a5",children:"2. Analog Input Pins (A0-A5)"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Function"}),": Read analog voltages between 0 and 5V"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Uses"}),": Reading analog sensors (e.g., potentiometers, light sensors)"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Special Notes"}),":","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"10-bit resolution (0-1023 values)"}),"\n",(0,s.jsx)(e.li,{children:"Can also be used as digital pins (HIGH or LOW)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"3-pwm-pins-3-5-6-9-10-11",children:"3. PWM Pins (3, 5, 6, 9, 10, 11)"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Function"}),": Provide 8-bit PWM output"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Uses"}),": Controlling motor speed, LED brightness, generating analog-like signals"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Special Notes"}),": Marked with '~' symbol on most Microcontroller boards"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"4-serial-communication-pins-d0-d1",children:"4. Serial Communication Pins (D0, D1)"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Function"}),": Used for serial communication with computer or other devices"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Uses"}),": Debugging, communicating with serial devices"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Special Notes"}),":","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"D0 (RX): Receive"}),"\n",(0,s.jsx)(e.li,{children:"D1 (TX): Transmit"}),"\n",(0,s.jsx)(e.li,{children:"Using these can interfere with USB communication"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"5-i2c-pins-a4-a5",children:"5. I2C Pins (A4, A5)"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Function"}),": Used for I2C (Inter-Integrated Circuit) communication"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Uses"}),": Connecting to I2C devices like certain sensors and displays"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Special Notes"}),":","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"A4: SDA (Data line)"}),"\n",(0,s.jsx)(e.li,{children:"A5: SCL (Clock line)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"6-spi-pins-10-11-12-13",children:"6. SPI Pins (10, 11, 12, 13)"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Function"}),": Used for SPI (Serial Peripheral Interface) communication"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Uses"}),": High-speed synchronized communication with devices"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Special Notes"}),":","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"10: SS (Slave Select)"}),"\n",(0,s.jsx)(e.li,{children:"11: MOSI (Master Out Slave In)"}),"\n",(0,s.jsx)(e.li,{children:"12: MISO (Master In Slave Out)"}),"\n",(0,s.jsx)(e.li,{children:"13: SCK (Serial Clock)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"7-built-in-led-pin-13",children:"7. Built-in LED Pin (13)"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Function"}),": Connected to the built-in LED on the Arduino board"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Uses"}),": Simple visual output for testing"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Special Notes"}),": Can still be used as a regular digital pin"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"8-aref-pin",children:"8. AREF Pin"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Function"}),": Optional external reference voltage for analog inputs"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Uses"}),": Providing a different reference voltage for analog readings"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Special Notes"}),": Typically used when the default 5V reference is not suitable"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"9-reset-pin",children:"9. Reset Pin"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Function"}),": Resets the Arduino when pulled LOW"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Uses"}),": External reset button or auto-reset during programming"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Special Notes"}),": Connected to the onboard reset button"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"10-power-pins",children:"10. Power Pins"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"5V"}),": Supplies 5V power"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"3.3V"}),": Supplies 3.3V power"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"GND"}),": Ground pins"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Vin"}),": Input voltage to Arduino when using an external power source (Like the motor Driver in our example)"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"special-considerations",children:"Special Considerations"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Not all Microcontroller models have the same pin layout or capabilities"}),"\n",(0,s.jsx)(e.li,{children:"Some pins have multiple functions and can be configured for different uses"}),"\n",(0,s.jsx)(e.li,{children:"Always check the specific Arduino model's datasheet for precise pin information"}),"\n"]}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"Component"}),(0,s.jsx)(e.th,{children:"Arduino Pin"}),(0,s.jsx)(e.th,{children:"Description"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Motor IN1"}),(0,s.jsx)(e.td,{children:"D2"}),(0,s.jsx)(e.td,{children:"Motor control input 1"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Motor IN2"}),(0,s.jsx)(e.td,{children:"D3"}),(0,s.jsx)(e.td,{children:"Motor control input 2"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Motor ENA"}),(0,s.jsx)(e.td,{children:"D4"}),(0,s.jsx)(e.td,{children:"Motor enable pin"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Speed Potentiometer"}),(0,s.jsx)(e.td,{children:"A0"}),(0,s.jsx)(e.td,{children:"Analog input for speed control"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Duration Potentiometer"}),(0,s.jsx)(e.td,{children:"A1"}),(0,s.jsx)(e.td,{children:"Analog input for duration control"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Start Button"}),(0,s.jsx)(e.td,{children:"D7"}),(0,s.jsx)(e.td,{children:"Digital input for start/stop button"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"LCD SDA"}),(0,s.jsx)(e.td,{children:"A4"}),(0,s.jsx)(e.td,{children:"I2C data line"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"LCD SCL"}),(0,s.jsx)(e.td,{children:"A5"}),(0,s.jsx)(e.td,{children:"I2C clock line"})]})]})]}),"\n",(0,s.jsx)(e.h2,{id:"wiring-design-explanation",children:"Wiring Design Explanation"}),"\n",(0,s.jsx)(e.p,{children:"The wiring diagram above illustrates the key connections in our coffee grinder project. Here are the rationales behind some of the critical design choices:"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Motor Control (Pins D2, D3, D4):\nWe chose PWM-capable pins for the motor driver connections to allow precise speed control. This enables smooth adjustment of the grinding speed and theoretically direction."}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Potentiometers (Pins A0, A1):\nThe analog inputs are used for the speed and duration potentiometers. This allows for a wide range of values to be read, providing fine-grained control over the grinding parameters.\nThose values reach from 1-1024, they have to be mapped accordingly, depending on what they should be used for."}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Start Button (Pin D7):\nWe connected the start button to a digital pin capable of generating interrupts. This ensures that the system can respond immediately to button presses, even if it's in the middle of a grinding operation."}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"LCD Display (Pins A4, A5):\nThe LCD is connected via I2C, which only requires two pins. This efficient communication protocol frees up other pins for additional features we might want to add in the future, and makes the wiring process significantly easier."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"By organizing our connections this way, we've created a system that is responsive, precise, and leaves room for future expansions or modifications."})]})}function h(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(a,{...n})}):a(n)}},8453:(n,e,i)=>{i.d(e,{R:()=>l,x:()=>o});var s=i(6540);const r={},t=s.createContext(r);function l(n){const e=s.useContext(t);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:l(n.components),s.createElement(t.Provider,{value:e},n.children)}}}]);