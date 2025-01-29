# Introduction to Micro:bit

## **Introduction**

In this lesson, we will learn how use Micro:bit programming environment. We will create a simple LED drawing and load it into the micro:bit controller.

## **Necessary:**

- Micro:bit controller
- USB cable
- Micro:bit program or internet link in which to do programming

## **Process!**

1. Follow the link: [Microsoft MakeCode for micro:bit](https://makecode.microbit.org/)

2. Choose a new project
![Alt text](/images/1.1.png)
3. A window will pop out in which you need to type the name of the project, then press the Create button
![Alt text](/images/1.2.png)
4. Next, a window opens in which you can already start programming. The program offers three types of programming: block programming, JavaScript and Python programming languages.
![Alt text](/images/1.3.png)
5. Create any image and save the project:
   - From the **basic** choice, take the command **on start**
   - From the same **basic** choice take the command **show leds**
   - LED lights can be lit by **pressing** on the corresponding **LED square** directly in the **Show Leds** command
![Alt text](/images/1.4.png)

6. In the **Python code language**:
   To depict a drawing, it is necessary to create an array that represents the entire LED block. Burning LED lamps are denoted by a hashtag, but non-combustible ones by a dot. In the first line, the command basic.show_leds is recorded, which means that the controller will show the burning lights all the time. Behind the command, open the parentheses and form an array in parentheses.
![Alt text](/images/1.5.png)
```from microbit import *
basic.show_leds("""
    . # . # .
    # . # . #
    . # . # .
    # . # . #
    . # . # .
""")
```
7. When you press the "save" button, the project is automatically saved on the computer, but the program also offers the ability to connect the micro:bit controller with a USB wire to the computer and create a pair, thereby allowing you to immediately put the code in the controller.



# The Flashing Heart

## **Introduction**

In this lesson, we will learn how to animate drawings, as well as the use of time (milliseconds) to extend or shorten the time when an image appears.

## **Necessary:**

- Micro:bit controller
- USB cable
- Micro:bit program or internet link in which to do programming

## **Process!**

1. In the program from the **basic** choose, take the blocks **forever**

2. Take the command **show icon** from the same **basic** choice (in this one there are already ready-made drawings that can be selected) -- choose the one in which the **big heart** is depicted.

3. Choose a **pause** block with **milliseconds** to let the heart shine for a moment (you can change the amount of **milliseconds**, making sure that the heart will blink faster or slower).

4. Select the **show icon** block, this time with the **little heart**

5. Set the flashing time again.

6. Under the virtual microbit controller there is an optional bar, there will be a green arrow. When you press it, the program will be launched on the virtual microbit controller.
![Alt text](/images/2.1.png)
## **Challenge:**

Try animations with other icons as well. Create your own drawings and try animating them.

### **Python Code:**

1. Opens a forever cycle, which means that the flicker will be all the time until the device is turned off or another program loads on it.

2. Next, record a command that displays the icon selected on the screen. They already have names in the program, so they don't need to be drawn using an array.

3. Pause so that the icon burns for a while before being replaced by another icon

4. Repeats both steps by choosing a different icon in the fourth line of code

5. Closes the forever cycle

![Alt text](/images/2.2.png)
```
def on_forever():
    basic.show_icon(IconNames.HEART)
    basic.pause(500)
    basic.show_icon(IconNames.SMALL_HEART)
    basic.pause(500)

basic.forever(on_forever)

```
# THE RUNNING WORD!

## **Introduction** 
  In this lesson, let's learn how to display running text on Micro:bit led displey.
## **Necessarry**
>-  Micro:bit controller
>-  USB cable
>-  Micro:bit program or internet link in which to do programming forever loop
## **Process!**

 > 1.   From the basic choice, take the command Forever
 > 2.   From the basic choice, take the command Show string and put it in forever loop
  >3.  Write in it anything you want, the text that will be recorded one letter at a time will run through the screen and can be read.
## **Challange**
  Try writing text in both uppercase and lowercase letters. What seems better to read? Try letters with softening and length marks. Try how long the text can be inserted with each type of programming.!

![Alt text](/images/3.1.png)
 Now let's write the same thing in the Python code
![Alt text](/images/3.2.png)
```
def on_forever():
    basic.show_string("SVEIKI!")
basic.forever(on_forever)

```

# Throwing Dice

## **Introduction**

In this lesson, we will learn how to use one of the micro:bit built-in sensors - the motion sensor. And let's make a random dice program out of it.

## **Necessary:**

- Micro:bit controller
- USB cable
- Micro:bit program or internet link in which to do programming
- Batteries to connect to the micro:bit controller

## **How it works:** 

The Micro:bit controller has several sensors, including a motion sensor. When shaken, it reacts to movement. If in the code there is a requirement to respond to movement (in this case, to purring), then the command executes when the controller is shaken.

## **Process!**

1. From the **input** choice, take the command **on shake**

2. From the **basic** choice, take the command **show number** and insert it **in On shake loop**.

3. From the **math** choice, take the command **pick random ...to...** and insert it **in show number command**.

4. **Record** **the numbers** you choose. If you want to imitate a throwing dice, then you need to choose numbers from **1** to **6**.
![Alt text](/images/4.1.png)
## **Challenge**

Conduct an experiment and find out how often each result appears, at a specific number of purges. And if the experiment is repeated, does the result coincide with the previous one.

### **Python Code:**

![Alt text](/images/4.2.png)
```
def on_gesture_shake():
    basic.show_number(randint(1, 6))

input.on_gesture(Gesture.SHAKE, on_gesture_shake)

```

# Step Counter

## **Introduction**

In this lesson, we will improve the knowledge of how the motion sensor can be applied and will learn how to create and use variables.

## **Necessary:**

- Micro:bit controller
- USB cable
- Micro:bit program or internet link in which to do programming
- Batteries to connect to the micro:bit controller

## **How it works:** 

In the micro:bit controller, we will insert a step counting program that will make the microcontroller respond to the movement of steps. For better effect, attach the microcontroller to the leg and walk with it.

## **Process!**

1. From the **basic** choice, take the command **on start**

2. In the **variables** choice, make variable **steps** and take the command **set steps to** and insert it **in On start loop**.
![Alt text](/images/5.1.png)
3. **Record** start count of steps, it is zero, because you haven't gone anywhere yet.

4. From the **input** choice, take the command loop **on shake**

5. In the **variables** choice take the command **change steps by** and insert it **in On shake loop**

6. **Record** **the number 1,** therefore, to start counting the steps starting with one.

7. From the **basic** choice, take the command **show numbers,** and also insert it **in On shake loop**

8. From the **variable** choice, take the variable **steps,** and insert it **into** command **show number.** This is how we point out that the unit to be counted is the steps
![Alt text](/images/5.2.png)
## **Challenge**

Try walking at different speeds. Measure the number of steps of different people at a certain distance. Try or other movements also affect the number of steps counted. Try if cycling or other riding gear affects the number of steps

### **Python Code:**
![Alt text](/images/5.3.png)
```
def on_gesture_shake():
    global Steps
    Steps += 1
    basic.show_number(Steps)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

Steps = 0
Steps = 0
```

# ROCK PAPER SCISSORS

## **Introduction**
In this lesson, we will improve our knowledge of how the motion sensor can be applied.

### **Necessary:**
- Micro:bit controller
- USB cable
- Micro:bit program or internet link in which to do programming
- Batteries to connect to the micro:bit controller

## **Process**
First, we need to make a variable to keep track of whether we have a Rock, Paper, or Scissors in our hand. A variable is a container for storing values. 

1. Click on the **Variables** category in the Toolbox.
2. Click on the **Make a Variable** button.
3. Give your new variable the name **“hand”** and click **Ok**.
![Alt text](/images/6.1.png)
Click on the **Variables** category in the Toolbox again. You’ll notice that there are some new blocks that have appeared. 

Drag a **set hand** block into the **on shake** block. We’ll start our Rock Paper Scissors game when we shake our micro:bit.
![Alt text](/images/6.2.png)
```
hand = 0

def on_gesture_shake():
    global hand
    hand = 0

input.on_gesture(Gesture.SHAKE, on_gesture_shake)

```


Click on the **Math** category in the Toolbox.

Drag a **pick random** block and drop it into the **set hand** block replacing the number 0. Now when we shake our micro:bit, the variable hand will contain a random number between 1 and 3.
![Alt text](/images/6.3.png)

```
hand = 0

def on_gesture_shake():
    global hand
    hand = randint(1, 3)

input.on_gesture(Gesture.SHAKE, on_gesture_shake)

```


Click on the **Logic** category in the Toolbox.

Drag the **if true then else** block out to the workspace and drop it into the **on shake** block under the **set hand** block.


# BANANA KEYBOARD

## Introduction
In this lesson, we will create our own music instrument using a banana and an orange.

### Necessary:
- micro:bit, battery holder, and 2 AAA batteries
- Banana
- Orange
- Crocodile clips

## Process

1. **Connect the ground lead**

   ![Alt text](/images/7.1.png)
   
2. **Connect the sound lead**

   Using the 2nd crocodile clip, connect the end of the crocodile clip onto pin 0 of the micro:bit.
   
   ![Alt text](/images/7.2.png)
   
3. **Connect the headphone to ground**

   Using the 1st crocodile clip, connect the second end of the crocodile clip onto the base of the headphone jack.
   
   ![Alt text](/images/7.3.png)
   
4. **Connect the headphone sound contact**

   Using the 2nd crocodile clip, connect the second end of the crocodile clip onto the tip of the headphone jack.
   
   ![Alt text](/images/7.4.png)
   ![Alt text](/images/7.5.png)
5. **Connect a fruit lead**

   Using the 3rd crocodile clip, connect the end of the crocodile clip onto the 1st crocodile clip already clipped onto GND.
   
   ![Alt text](/images/7.6.png)
   
6. **Connect the orange to ground**

   Using the 3rd crocodile clip, connect the unattached end of the crocodile clip onto the orange.
   
   ![Alt text](/images/7.7.png)
   
7. **Connect a second fruit lead**

   Using the 4th crocodile clip, connect the end of the crocodile clip onto pin 1 on the micro:bit.
   
   
8. **Connect the banana**

   Using the 4th crocodile clip, connect the unattached end of the crocodile clip onto the banana.
   
   ![Alt text](/images/7.8.png)

   Your banana keyboard is ready!

9. **Connect your micro:bit to your computer using your USB cable and run this script to test:**

   ![Alt text](/images/7.9.png)
```
def on_pin_pressed_p1():
    music.play_tone(Note.C, music.beat(BeatFraction.QUARTER))

input.on_pin_pressed(TouchPin.P1, on_pin_pressed_p1)


```



10. **Let’s write full code that increases sound pitch if P1 is touched and decreases if P2 is touched. To use this, in one hand put orange and with other hand touch banana or other object of your choice that you need to connect to P2.**

   ![Alt text](/images/7.10.png)
   ![Alt text](/images/7.11.png)
```
def on_pin_pressed_p2():
    global sound
    sound += -25
    music.play(music.tone_playable(sound, music.beat(BeatFraction.QUARTER)),
               music.PlaybackMode.IN_BACKGROUND)
input.on_pin_pressed(TouchPin.P2, on_pin_pressed_p2)

def on_pin_pressed_p1():
    global sound
    sound += 25
    music.play(music.tone_playable(sound, music.beat(BeatFraction.QUARTER)),
               music.PlaybackMode.IN_BACKGROUND)
input.on_pin_pressed(TouchPin.P1, on_pin_pressed_p1)

sound = 0
sound = 440


```

   
# Movement Basics

## Introduction

In this lecture we will get acquainted with Kitronik :move motor extension for micro:bit.

## Necessary:

- Micro:bit controller
- Kitronik :MOVE motor kit
- USB cable
- Micro:bit program or internet link in which to do programming

## Process!

1. First, **connect** the parts of the **:MOVE motor kit**, creating a running robot and add to it **micro:bit controller**.

2. In program choose **Extensions**.

![Alt text](/images/8.1.png)

3. Enter "**kitronik**" in the search engine and choose **kitronik-move-motor**

![Alt text](/images/8.2.png)

Now you have new blocks.

![Alt text](/images/8.3.png)

4. Let's create the code to test robot movement with buttons. First we add a block **on button A pressed** from optional **input** and add **move forward at speed 0** from **MOVE motor ...motors** and specify driving speed **0 -- 100**.

![Alt text](/images/8.4.png)

5. Choose block **on button B pressed** from **input** and add **stop** from **MOVE motor ...motors**.

You will get the following code:

![Alt text](/images/8.5.png)

**Note:** Set a reasonable travel speed, because to stop the robot you need to press the B button on the controller, which means you will have to catch the robot first

6. **Download** in micro:bit controller. **Push button A** on controller -- robot **start** move. **Press the B button** to **stop** the robot

**Python:**

![Alt text](/images/8.6.png)
```
def on_button_pressed_a():
    Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.LEFT, 20)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    Kitronik_Move_Motor.stop()
input.on_button_pressed(Button.B, on_button_pressed_b)

```

7. Now try to **rotate** the robot by disassembling the same code, **change** the block **move** to the block **spin.**

![Alt text](/images/8.7.png)

8. Download in micro:bit controller

**Python:**

![Alt text](/images/8.8.png)
```
def on_button_pressed_a():
    Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.LEFT, 20)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    Kitronik_Move_Motor.stop()
input.on_button_pressed(Button.B, on_button_pressed_b)


```
9. Now we try to go around thing.

10. For that we need to create **function**. Go to **Advanced -- Functions -- Make a function** and write the **function name** and push **Done**.

![Alt text](/images/8.9.png)

11. Take block **set turn radius** and set radius on **standard** from **MOVE motor ...motors**, insert it in **function**.

12. Take block **move right**/left **at speed 75** and insert it in **function**.

13. Take block **pause (ms)** and set on **500ms** and insert in **function**.

14. Insert block **stop** in **function**.

15. Create code, who will **call the function**. Take block **on button A pressed** from **Input** and from **Functions** insert **call bigCircle**

![Alt text](/images/8.10.png)

16. **Download** in micro:bit controller and try

Python code:

![Alt text](/images/8.11.png)
```
def on_button_pressed_a():
    bigCircle()

input.on_button_pressed(Button.A, on_button_pressed_a)

def bigCircle():
    Kitronik_Move_Motor.turn_radius(Kitronik_Move_Motor.TurnRadii.TIGHT)
    Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.RIGHT, 100)
    basic.pause(500)
    Kitronik_Move_Motor.stop()

```
## Challenge:

1. Choose a distance, start from speed 5 and measure how fast it can cover the selected distance with speed 5. Choose the step by which you will increase the speed and measure the same distance at different speeds, each time increasing the speed by the chosen step.

2. Try turns by changing the radius and/or speed, find out what changed, find out how to get the exact desired turn.

3. Insert a marker or pen that is the appropriate size Kitronik :move motor in the robot in a specially designated place and program the code to draw an S or other letter or drawing.

![Alt text](/images/8.12.jpg)![Alt text](/images/8.13.jpg)

![Alt text](/images/8.14.png)

Python:

![Alt text](/images/8.15.png)
```
def on_button_pressed_a():
    S()
input.on_button_pressed(Button.A, on_button_pressed_a)

def smallCircleL():
    Kitronik_Move_Motor.turn_radius(Kitronik_Move_Motor.TurnRadii.TIGHT)
    Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.LEFT, 50)
    basic.pause(900)
    Kitronik_Move_Motor.stop()

def smallCircleR():
    Kitronik_Move_Motor.turn_radius(Kitronik_Move_Motor.TurnRadii.TIGHT)
    Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.RIGHT, 50)
    basic.pause(900)
    Kitronik_Move_Motor.stop()

def S():
    smallCircleL()
    smallCircleR()


```
4. Since the robot has no sensors to determine how many degrees the robot has turned, the only measure is time and speed. By changing these parameters, create code according to the following example, because of which the robot would go around an angular object with sides of equal length.

![Alt text](/images/8.16.png)

Python:

![Alt text](/images/8.17.png)
```
def on_button_pressed_a():
    square()
input.on_button_pressed(Button.A, on_button_pressed_a)

def square():
    for index in range(4):
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.FORWARD, 50)
        basic.pause(500)
        Kitronik_Move_Motor.stop()
        Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.LEFT, 35)
        basic.pause(400)
        Kitronik_Move_Motor.stop()


```
**Note:** The robot's accuracy can also be affected by battery charge, surface variations, slipperiness, debris on tires, motor wear and other factors, so accuracy may vary even from time to time.


# Sound and Light with Kitronik

## Introduction

In this lecture we will get acquainted with Kitronik :move motor extension for micro:bit. How to use sound and lights.

## Necessary:

- Micro:bit controller
- Kitronik :MOVE motor kit
- USB cable
- Micro:bit program or internet link in which to do programming

## Process!

1. Kitronik robot is equipped with a sound buzzer. To use it, you need to select the beep to horn block from MOVE motor ...Sounds

![Alt text](/images/9.1.png)

Now your code will look like this:

![Alt text](/images/9.2.png)

2. Download in micro:bit controller and try beep

Python:

![Alt text](/images/9.3.png)
```
def on_button_pressed_a():
    Kitronik_Move_Motor.beep_horn()

input.on_button_pressed(Button.A, on_button_pressed_a)


```
3. Kitronik robot is equipped with **four** **LEDs**. Block for the LEDs can be found under the ...Lights category.

4. To use it, choose block **on start** from **Basic.**

5. After that, choose **set moveMotorZIP to 0** **Move Motor with 4 ZIP LEDs** from **MOVE Motor ...Lights** and input in block **on start**.

6. Then input **moveMotorZIP set ZIP LED 0 to red** for each LED. You can enter for each LED different color. You can create your color with **RGB Color Codes** -- for that you need to choose block where are **three colours (red 0, green 0, blue 0)** with color code fields. This means that if you want to create a yellow color, then input red 255, green 255, blue 0 (color codes you can find there: [RGB Color Code 🎨 Color Picker, Codes, Converters](https://rgbcolorcode.com/)).

7. And insert block **moveMotorZIP show** from **MOVE Motor ...Lights**.

8. Then using the **forever** loop from **Basic**, rotate LEDs around.

9. Input in **forever** block **moveMotorZIP rotate ZIP LEDs by 1** and block **moveMotorZIP show** from **MOVE Motor ...Lights**.

10. And input block **pause(ms)100** from Basic for rotate speed.

![Alt text](/images/9.4.png)

11. **Download** in micro:bit controller

Python code:

![Alt text](/images/9.5.png)
```
moveMotorZIP = Kitronik_Move_Motor.create_move_motor_zipled(4)
moveMotorZIP.set_zip_led_color(0, Kitronik_Move_Motor.rgb(255, 255, 0))
moveMotorZIP.set_zip_led_color(1, Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.RED))
moveMotorZIP.set_zip_led_color(2, Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.GREEN))
moveMotorZIP.set_zip_led_color(3, Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.BLUE))
moveMotorZIP.show()

def on_forever():
    moveMotorZIP.rotate(1)
    moveMotorZIP.show()
    basic.pause(100)

basic.forever(on_forever)


```
## Challenge:

1. Create two disco modes, also adding sound at certain times, then set them to be set by buttons - one disco mode on button A, the other on button B.


# Kitronik Line Following Robot

## Introduction

Kitronik robot is equipped with line following sensors. Line following sensors output an analog signal. This changes depending on the surface reflection. The more reflective the surface, the higher the value. In this lesson we learn how to create a line follower.

## Necessary:

- Micro:bit controller
- Kitronik :MOVE motor kit
- USB cable
- Micro:bit program or internet link in which to do programming

## Process!

1. Choose forever loop from Basic

2. Make two new variables **leftSensor** and **rightSensor**. Go to **Variables** push **Make a Variable**, write **variable name** and push **ok**.

![Alt text](/images/10.1.png)

3. Choose **set leftSensor to 0** block from **Variables** and insert in **forever** loop, do it again, but in **leftSensor change** on **rightSensor**

4. Take block **left line following sensor value** and insert in **set leftSensor** to 0 block.

5. The same does with **rightSensor** block but change **left sensor** to **rightSensor**.

6. Then create one newer **variable** -- **sensorDifference**.

7. When variable is ready, choose **set sensorDifference** **to 0** and insert in **forever** loop.

8. From **Math** choose block **absolute of 0** and insert in **set sensorDifference** to 0 block.

9. Also, from **Math** choose block **0 -- 0** and insert it in **absolute of 0** block.

10. Then in **one side** of **0 -- 0** block insert variable **leftSensor** in **other side** insert variable **rightSensor**

11. Then from **Logic** insert block **if-else** in **forever** loop and from **Logic** insert block **0 > 0** in **if-else** block

![Alt text](/images/10.2.png)

12. Insert Variable **sensorDifference** in block **0 > 0** **first position** and in **second position** write **10**

13. Then in **if -- else** loop insert block **if** and again insert block **0 > 0** in **if** block. Insert Variables **leftSensor** in one position and **rightSensor** in other position in **0 > 0** block

![Alt text](/images/10.3.png)

14. Then insert block **turn off right motor** and block **turn left motor on direction forward speed 30** from **MOVE Motor .... Motors** in **inner if** loop.

15. Insert the same blocks again but **change** **motors** and put it in the **inner else** loop.

16. Insert **move Forward at speed 30** in external else loops

![Alt text](/images/10.4.png)

17. **Download** in micro:bit controller

Python:

![Alt text](/images/10.5.png)


```
leftSensor = 0
rightSensor = 0
sensorDifference = 0

def on_forever():
    global leftSensor, rightSensor, sensorDifference
    leftSensor = Kitronik_Move_Motor.read_sensor(Kitronik_Move_Motor.LfSensor.LEFT)
    rightSensor = Kitronik_Move_Motor.read_sensor(Kitronik_Move_Motor.LfSensor.RIGHT)
    sensorDifference = abs(leftSensor - rightSensor)
    if sensorDifference > 10:
        if leftSensor > rightSensor:
            Kitronik_Move_Motor.motor_off(Kitronik_Move_Motor.Motors.MOTOR_RIGHT)
            Kitronik_Move_Motor.motor_on(Kitronik_Move_Motor.Motors.MOTOR_LEFT,
                Kitronik_Move_Motor.MotorDirection.FORWARD,
                10)
        else:
            Kitronik_Move_Motor.motor_off(Kitronik_Move_Motor.Motors.MOTOR_LEFT)
            Kitronik_Move_Motor.motor_on(Kitronik_Move_Motor.Motors.MOTOR_RIGHT,
                Kitronik_Move_Motor.MotorDirection.FORWARD,
                10)
    else:
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.FORWARD, 10)
basic.forever(on_forever)

```

## Challenge:

Create a track and start the robot to drive it. Check if it can handle complex shapes. Check at what max speed it can react to turns.







# Race Timing System Introduction

## Introduction

In this lesson we will use the micro:bit to record the speed of a car

## Necessary:

- Micro:bit controller
- Kitronik :MOVE motor kit or other robot or toy car which can be driven
- USB cable
- Micro:bit program or internet link in which to do programming

## Process!

1. At the beginning, you need to create a part of the track from which the driving speed will be measured when driving to which place. It should choose a specific distance.

2. A **table, floor or cardboard** **sheet** can be used for this purpose. And for this you will need **foil or foil tape**.

3. You need to **stick four strips of foil** that will get the data you need. **Every two strips** should be glued as **close** to the two **together as possible**, this will depend on how efficiently the data will be obtained.

![Alt text](/images/11.1.jpg)

4. You also need to **equip** the **robot or toy car** with a **foil strip**. For this to work, the **strip needs to touch the ground**. The foil that is attached to the robot **must be wide enough** so that **both sheets of foil** that are glued next to each other **can be touched** **at the same time** when driving.

**Note:** 
- We taped the wheels on the heavier robot and it worked, but the lighter robot didn't, so we had to improvise and find a solution to make it work.
- **Warning:** Connect the foil to the robot carefully and do it when the robot is turned off to avoid short circuits.

![Alt text](/images/11.2.jpg)![Alt text](/images/11.3.jpg)

![Alt text](/images/11.4.jpg)

5. Next, create a data collection system by **connecting** the **adhesive foil tapes** to the **micro:bit controller** using **crocodile wires**:
   - One side: connected to micro:bit **pin 0** and **GND** (start)
   - Other side: connected to **pin 1** and **GND** (finish)

![Alt text](/images/11.5.jpg)

6. Programming steps:
   - From **basic** take block **on start** 
   - Input block **show leds** 
   - Mark the **middle LED**

7. Choose block **on pin P0 pressed** from input

8. Create variables: **time 0, time 1, diffTime(ms)**

9-20. Follow the block programming steps in the image

![Alt text](/images/11.6.png)

21. **Download** in micro:bit controller

Python:

![Alt text](/images/11.7.png)
```
def on_pin_pressed_p0():
    global time_0
    time_0 = control.event_timestamp()
    basic.show_leds(
        """
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        """
    )

input.on_pin_pressed(TouchPin.P0, on_pin_pressed_p0)

def on_pin_pressed_p1():
    global time_1, diffimes
    time_1 = control.event_timestamp()
    basic.show_leds(
        """
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        """
    )
    diffimes = time_1 - time_0
    basic.show_number(diffimes)

input.on_pin_pressed(TouchPin.P1, on_pin_pressed_p1)

diffimes = 0
time_1 = 0
time_0 = 0
basic.show_leds(
    """
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    """
)


```
## Challenge:

Improve the code so that pressing the B button restarts the code. Then you won't have to recompile the code every time after making a trip.


# Kitronik Ultrasonic Sensor

## Introduction

In this lecture we will get acquainted with Kitronik :move motor extension for micro:bit. How to use ultrasonic sensor.

## Necessary:

- Micro:bit controller
- Kitronik :MOVE motor kit
- USB cable
- Micro:bit program or internet link in which to do programming

## Process!

1. Kitronik robots are equipped with an ultrasonic sensor.

2. Put **Forever** loop

3. Creating new variable **distance**

4. From Variables choose **set distance to 0** and input them in **forever** loop

5. Take **measure distance** from **MOVE Motor ...Sensors**

6. In **forever** loop insert **if -- else** block

7. Then insert **0 > 0** block in **if** block and then insert **distance > 10**

8. In **if** loop insert block **move forward at speed 35**

9. In **else** block insert **distance < 10** and

10. in **else if** loop insert **stop, pause(ms) 500, move reverse at speed 20, pause (ms) 1000, spin left at speed 50, pause (ms), stop**

Now your code will look like this:

![Alt text](/images/12.1.png)

11. **Download** in micro:bit controller.

12. **Save** this **code** as a **hex** file as you will need it for the **next lesson.**

![Alt text](/images/12.2.png)

Python code:

![Alt text](/images/12.3.png)
```
distance = 0

def on_forever():
    global distance
    distance = Kitronik_Move_Motor.measure()
    if distance > 15:
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.FORWARD, 35)
    elif distance > 5 and distance <= 15:
        Kitronik_Move_Motor.stop()
        basic.pause(500)
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.REVERSE, 20)
        basic.pause(1000)
        Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.LEFT, 50)
        basic.pause(500)
        Kitronik_Move_Motor.stop()
basic.forever(on_forever)


```
## Challenge:

Improve the code so that:
- Green lights are on when driving forward
- Red lights are on when stopping and reversing
- The horn is working when reversing


# Kitronik Ultrasonic Sensor + Servo Motor

## Introduction

In this lecture we will get acquainted with Kitronik :move motor extension for micro:bit. How to use servo motor to destroy an obstacle that interferes with driving.

## Necessary Equipment:

- Micro:bit controller
- Kitronik :MOVE motor kit
- USB cable
- Micro:bit program or internet link for programming

## Process

1. At **kitronik :move motor kit glue the servo** motor with double-sided adhesive tape, another method can be used (improvise).

![Alt text](/images/13.1.jpg)
![Alt text](/images/13.2.jpg)

2. **Connect** the **servo** to the **connectors provided for it.** If you use the one on the reverse side, then make changes to the code.

![Alt text](/images/13.3.jpg)

3. **Add some part to the servo motor**, you can screw it up or glue it with adhesive tape to the original wings of the servo or make a pantry to the gear, depending on what options are available to you. It can be from any material.

4. **Open the folder** where you **saved the code** for the **previous lesson**. **Reduce** the folder and micro:bit programming **platform** so you **can see both** at the same time. With the mouse, **take** the **file** from the folder and **drag** it into the **programming window**, the previous code will open there.

![Alt text](/images/13.4.png)

5. Now your code will look like this:

![Alt text](/images/13.5.png)

6. To **add** a **servo action,** we create a **function servoBlow.**

7. From **loops** insert **repeat 3 times** in **function**. It will repeat the action three times, you can choose a different number of repetitions.

8. From **Pins** take **servo write pin P0 to 0**. **Look** at the chip at what pin your servo motor is connected to (P15 or P16), **enter** it into the code instead of **P0**. **Enter** the **starting position** of the servo **in degrees**, it will depend on the existing state of your servo and the condition of the connected part. Choose an **angle** so that the **part is raised**.

9. Insert **pause** in (ms), you can experiment with time and choose the most suitable.

10. Again from **Pins** take **servo write pin P0 to 0**. **Enter** the **same** **pin** into the code instead of **P0**. **Enter** the **end position** of the servo **in degrees**, it will depend on the existing state of your servo and the condition of the connected part. Choose an **angle** so that the **part is down**.

11. Insert **pause** in (ms), you can experiment with time and choose the most suitable.

12. **In** your **existing code** after first stop insert **pause (ms) 500** and from **function** insert **call servoBlow**.

![Alt text](/images/13.6.png)

> **Warning:** The servo motor has limited power abilities, so choose an area with soft toy obstacles or adjust the angles of position of the motor so that it does not have an excessive load when trying to perform the action. Overload, the motor may burn out.

13. **Download** in micro:bit controller

Python code:

![Alt text](/images/13.7.png)
```
distance = 0

def servoBlow():
    for index in range(3):
        pins.servo_write_pin(AnalogPin.P15, 70)
        basic.pause(300)
        pins.servo_write_pin(AnalogPin.P15, 25)
        basic.pause(300)

def on_forever():
    global distance
    distance = Kitronik_Move_Motor.measure()
    if distance > 15:
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.FORWARD, 35)
    elif distance > 5 and distance < 15:
        Kitronik_Move_Motor.stop()
        basic.pause(500)
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.REVERSE, 20)
        basic.pause(1000)
        Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.LEFT, 50)
        basic.pause(500)
        Kitronik_Move_Motor.stop()

basic.forever(on_forever)


```



## Challenge

Create a code in which to add the sound of beats during the time the servo makes beats.





# Huskylens AI Vision Sensor

## Introduction

In this lecture we will get acquainted with Huskylens AI Vision Sensor

## Necessary Equipment:

- Huskylens AI vision sensor

## Process

1. **Overview**

![Alt text](/images/14.1.jpg)
![Alt text](/images/14.2.jpg)


3. **Open the folder** where you **saved the code** for the **previous lesson**. **Reduce** the folder and micro:bit programming **platform** so you **can see both** at the same time. With the mouse, **take** the **file** from the folder and **drag** it into the **programming window**, the previous code will open there.

![Alt text](/images/14.3.png)

4. Now your code will look like this:

![Alt text](/images/14.4.png)

5. To **add** a **servo action,** we create a **function servoBlow.**

6. From **loops** insert **repeat 3 times** in **function**. It will repeat the action three times, you can choose a different number of repetitions.

7. From **Pins** take **servo write pin P0 to 0**. **Look** at the chip at what pin your servo motor is connected to (P15 or P16), **enter** it into the code instead of **P0**. **Enter** the **starting position** of the servo **in degrees**, it will depend on the existing state of your servo and the condition of the connected part. Choose an **angle** so that the **part is raised**.

8. Insert **pause** in (ms), you can experiment with time and choose the most suitable.

9. Again from **Pins** take **servo write pin P0 to 0**. **Enter** the **same** **pin** into the code instead of **P0**. **Enter** the **end position** of the servo **in degrees**, it will depend on the existing state of your servo and the condition of the connected part. Choose an **angle** so that the **part is down**.

10. Insert **pause** in (ms), you can experiment with time and choose the most suitable.

11. **In** your **existing code** after first stop insert **pause (ms) 500** and from **function** insert **call servoBlow**.

![Alt text](/images/14.5.png)

> **Warning:** The servo motor has limited power abilities, so choose an area with soft toy obstacles or adjust the angles of position of the motor so that it does not have an excessive load when trying to perform the action. Overload, the motor may burn out.

12. **Download** in micro:bit controller

Python code:

![Alt text](/images/14.6.png)
```
distance = 0

def servoBlow():
    for index in range(3):
        pins.servo_write_pin(AnalogPin.P15, 70)
        basic.pause(300)
        pins.servo_write_pin(AnalogPin.P15, 25)
        basic.pause(300)

def on_forever():
    global distance
    distance = Kitronik_Move_Motor.measure()
    if distance > 15:
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.FORWARD, 35)
    elif distance > 5 and distance < 15:
        Kitronik_Move_Motor.stop()
        basic.pause(500)
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.REVERSE, 20)
        basic.pause(1000)
        Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.LEFT, 50)
        basic.pause(500)
        Kitronik_Move_Motor.stop()

basic.forever(on_forever)

```
## Challenge

Create a code in which to add the sound of beats during the time the servo makes beats.


