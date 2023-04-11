# Task: Write an adapter for the Speedometer to make it work with the CarDisplay
import random
KPHMPH = 1.60934


class MphSpeedometer:
    """We are pretending this is a third-party class we can't change"""

    def __init__(self):
        pass

    def get_speed(self):
        """Returns speed in MPH"""
        speed = random.randint(0, 100)
        print("Speed in MPH: {}".format(speed))
        return speed


class MphToKphSpeedometerAdapter:
    def __init__(self, speed : MphSpeedometer):
        self.speed = speed

    def mphToKph(self):
        mph = self.speed.get_speed(MphSpeedometer)
        return mph * KPHMPH

class CarDisplay:
    """TODO: change to take in the SpeedometerAdapter instead of the Speedometer"""

    def __init__(self, speedometer: MphToKphSpeedometerAdapter):
        self.speedometer = speedometer

    def show_speed(self):
        speed = self.speedometer.mphToKph()
        print(f'Speed: {speed} kph')

def main():
    Mph = MphSpeedometer
    MphTokmh =MphToKphSpeedometerAdapter(Mph)
    display = CarDisplay(MphTokmh)

    return display.show_speed()
 

main()