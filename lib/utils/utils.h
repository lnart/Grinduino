#ifndef utils_h
#define utils_h


class utilsClass
{
    public:
        utilsClass();
        int smoothAnalogRead(int pin, int samples = 10);
        void checkForButtonPress(int buttonState, int lastButtonState, bool motorRunning, unsigned long motorStartTime);
        
};

extern utilsClass utils;

#endif