# Sissejuhatus Micro:biti

## **Sissejuhatus**

Selles õppetükis õpime, kuidas kasutada Micro:bit programmeerimiskeskkonda. Loome lihtsa LED-joonistuse ja laadime selle Micro:bit kontrollerisse.

## **Vajalik:**

- Micro:bit kontroller
- USB kaabel 
- Micro:bit programm või internetilink programmeerimiseks

## **Protsess:**

1. Järgi linki: [Microsoft MakeCode for micro:bit](https://makecode.microbit.org/)

2. Vali uus projekt
![Alt text](/images/1.1.png)
3. Avaneb aken, kuhu tuleb sisestada projekti nimi, seejärel vajuta nuppu **Create**
![Alt text](/images/1.2.png)
4. Järgmisena avaneb aken, kus saad juba alustada programmeerimist. Programm pakub kolme tüüpi programmeerimist: plokk-programmeerimine, JavaScript ja Python.
![Alt text](/images/1.3.png)
5. Loo suvaline pilt ja salvesta projekt:
   - Valikust **Basic**, võta käsk **on start**
   - Samast **Basic** valikust võta käsk **show leds**
   - LED-tulesid saab süüdata **vajutades** otse vastavale **LED-ruudule** käsu **show leds** sees 
![Alt text](/images/1.4.png)

6. **Python-koodi keeles**:
   Joonistuse kuvamiseks on vaja luua massiiv, mis esindab kogu LED-plokki. Põlevad LED-lambid tähistatakse trellide (#) ja mittepõlevad punktidega (.). Esimesel real on käsk **basic.show_leds**, mis tähendab, et kontroller näitab põlevaid tulesid kogu aeg. Käsu järel avatakse sulud ja sulgude sees moodustatakse massiiv.
![Alt text](/images/1.5.png) 
```python
from microbit import *
basic.show_leds("""
    . # . # .
    # . # . #  
    . # . # .
    # . # . #
    . # . # .
""")
```

7. Kui vajutad nuppu **save**, salvestatakse projekt automaatselt arvutisse, kuid programm pakub ka võimalust ühendada Micro:bit kontroller USB-juhtme abil arvutiga ja luua paar, mis võimaldab koodi kohe kontrollerisse panna.

---

# Vilkuv Süda

## **Sissejuhatus**

Selles õppetükis õpime, kuidas animeerida joonistusi, samuti ajavahemike (millisekundites) kasutamist, et pikendada või lühendada aega, mil pilt ilmub.

## **Vajalik:**

- Micro:bit kontroller
- USB-kaabel
- Micro:bit programm või internetilink programmeerimiseks

## **Protsess:**

1. Programmi **Basic** valikust võta plokk **forever**

2. Võta käsk **show icon** samast **Basic** valikust (selles on juba valmis joonistused, mida saab valida) -- vali see, millel on kujutatud **big heart**.

3. Vali **pause** plokk koos **milliseconds**, et lasta südamel hetke särada (saad muuta **milliseconds** hulka, veendudes, et süda vilgub kiiremini või aeglasemalt).

4. Vali **show icon** plokk, seekord **small heart** 

5. Määra vilkumisaeg uuesti.

6. Virtuaalse Micro:bit kontrolleri all on valikuline riba, seal on roheline nool. Kui vajutad seda, käivitatakse programm virtuaalsel Micro:bit kontrolleril.
![Alt text](/images/2.1.png)

## **Väljakutse:**

Proovi animatsioone ka teiste ikoonidega. Loo oma joonistused ja proovi neid animeerida.

### **Python kood:**

1. Avab **forever** tsükli, mis tähendab, et vilkumine toimub kogu aeg, kuni seade on välja lülitatud või laetakse sellele teine programm.

2. Järgmisena salvesta käsk, mis kuvab ekraanil valitud ikooni. Neil on programmis juba nimed olemas, nii et neid ei pea massiivist joonistama.

3. Paus, et ikoon põleks natuke aega enne, kui see asendatakse teise ikooniga

4. Korda mõlemat sammu, valides koodi neljandal real erineva ikooni

5. Sulge **forever** tsükkel

![Alt text](/images/2.2.png)
```python
def on_forever():
    basic.show_icon(IconNames.HEART)
    basic.pause(500)
    basic.show_icon(IconNames.SMALL_HEART)
    basic.pause(500)

basic.forever(on_forever)
```

---

# JOOKSEV TEKST! 

## **Sissejuhatus**
Selles õppetükis õpime, kuidas kuvada jooksvat teksti Micro:biti LED-ekraanil.

## **Vajalik** 
- Micro:bit kontroller
- USB-kaabel
- Micro:bit programm või internetilink programmeerimiseks 

## **Protsess**

1. Valikust **Basic** võta käsk **forever**
2. Valikust **Basic** võta käsk **show string** ja pane see **forever** tsüklisse
3. Kirjuta sinna, mida iganes soovid. Tekst, mis salvestatakse üks täht korraga, jookseb üle ekraani ja seda saab lugeda.

## **Väljakutse**
Proovi kirjutada teksti nii suur- kui väiketähtedega. Mis tundub paremini loetav? Proovi tähti pehmendus- ja pikkusmärkidega. Katse, kui pikka teksti saab igat tüüpi programmeerimisega sisestada!

![Alt text](/images/3.1.png)

Nüüd kirjutame sama asja Python koodis.
![Alt text](/images/3.2.png)
```python
def on_forever():
    basic.show_string("TERE!") 

basic.forever(on_forever)
```

---

# Täringuvise

## **Sissejuhatus** 

Selles õppetükis õpime kasutama ühte Micro:biti sisseehitatud andurit - liikumisandurit. Ja teeme sellest juhusliku täringu programmi.

## **Vajalik:**

- Micro:bit kontroller 
- USB-kaabel
- Micro:bit programm või internetilink programmeerimiseks
- Patareid Micro:bit kontrolleriga ühendamiseks

## **Kuidas see töötab:**

Micro:bit kontrolleril on mitu andurit, sealhulgas liikumisandur. Raputamisel reageerib see liikumisele. Kui koodis on nõue liikumisele reageerida (antud juhul keerutamisele), siis käsk täidetakse, kui kontrollerit raputatakse.

## **Protsess:**

1. Valikust **Input** võta käsk **on shake** 

2. Valikust **Basic** võta käsk **show number** ja sisesta see **on shake** tsüklisse.

3. Valikust **Math** võta käsk **pick random ...to...** ja sisesta see käsku **show number**.

4. **Salvesta numbrid**, mille valid. Kui soovid imiteerida täringu viskamist, siis pead valima numbrid **1** kuni **6**.
![Alt text](/images/4.1.png)

## **Väljakutse** 

Tee katse ja uuri välja, kui sageli iga tulemus ilmub teatud arvu keerutuste korral. Ja kui katset korrata, kas tulemus ühtib eelmisega?

### **Python kood:**

![Alt text](/images/4.2.png)
```python
def on_gesture_shake():
    basic.show_number(randint(1, 6))

input.on_gesture(Gesture.SHAKE, on_gesture_shake)
```

---

# Sammulugeja

## **Sissejuhatus**

Selles õppetükis täiustame teadmisi, kuidas liikumisandurit saab rakendada, ja õpime looma ning kasutama muutujaid.

## **Vajalik:** 

- Micro:bit kontroller
- USB-kaabel
- Micro:bit programm või internetilink programmeerimiseks 
- Patareid Micro:bit kontrolleriga ühendamiseks

## **Kuidas see töötab:** 

Micro:biti kontrollerisse sisestame sammulugemise programmi, mis paneb mikrokontrolleri reageerima sammude liikumisele. Parema efekti saavutamiseks kinnita mikrokontroller jala külge ja kõnni sellega.

## **Protsess:**

1. Valikust **Basic** võta käsk **on start**

2. Valikust **Variables** loo muutuja **steps** ja võta käsk **set steps to** ning sisesta see **on start** tsüklisse.
![Alt text](/images/5.1.png)
3. **Salvesta** sammude algloendur, see on null, sest sa pole veel kuhugi läinud.

4. Valikust **Input** võta käsk tsükkel **on shake**

5. Valikust **Variables** võta käsk **change steps by** ja sisesta see **on shake** tsüklisse

6. **Salvesta number 1**, et alustada sammude lugemist ühest.

7. Valikust **Basic** võta käsk **show numbers** ja sisesta see samuti **on shake** tsüklisse

8. Valikust **Variable** võta muutuja **steps** ja sisesta see käsku **show number**. Nii määrame, et loendatav ühik on sammud.
![Alt text](/images/5.2.png)

## **Väljakutse**

Proovi kõndida erineva kiirusega. Mõõda eri inimeste sammude arvu teatud vahemaa tagant. Proovi, kas ka muud liigutused mõjutavad loendatud sammude arvu. Katse, kas jalgrattaga sõit või muu sõiduriist mõjutab sammude arvu. 

### **Python kood:**
![Alt text](/images/5.3.png)
```python
def on_gesture_shake():
    global Steps
    Steps += 1
    basic.show_number(Steps) 

input.on_gesture(Gesture.SHAKE, on_gesture_shake)

Steps = 0 
Steps = 0
```

--- 

# KIVI PABER KÄÄRID

## **Sissejuhatus**
Selles õppetükis täiustame oma teadmisi selle kohta, kuidas liikumisandurit saab rakendada.

### **Vajalik:**
- Micro:bit kontroller 
- USB-kaabel
- Micro:bit programm või internetilink programmeerimiseks
- Patareid Micro:bit kontrolleriga ühendamiseks

## **Protsess**
Kõigepealt peame tegema muutuja, et jälgida, kas meil on käes Kivi, Paber või Käärid. Muutuja on konteiner väärtuste säilitamiseks.

1. Klõpsa tööriistakastis kategoorial **Variables**.
2. Klõpsa nupul **Make a Variable**.
3. Anna oma uuele muutujale nimi **"hand"** ja klõpsa nupul **Ok**.
![Alt text](/images/6.1.png)
Klõpsa tööriistakastis uuesti kategoorial **Variables**. Märkad, et on ilmunud mõned uued plokid. 

Lohista **set hand** plokk **on shake** ploki sisse. Alustame oma Kivi-Paber-Käärid mängu, kui raputame oma micro:biti.
![Alt text](/images/6.2.png)
```python
hand = 0

def on_gesture_shake():
    global hand
    hand = 0

input.on_gesture(Gesture.SHAKE, on_gesture_shake)
```

Klõpsa tööriistakastis kategoorial **Math**.

Lohista **pick random** plokk ja aseta see **set hand** plokki, asendades numbri 0. Nüüd, kui raputame oma micro:biti, sisaldab muutuja hand juhuslikku numbrit 1 ja 3 vahel.
![Alt text](/images/6.3.png)

```python
hand = 0

def on_gesture_shake():
    global hand
    hand = randint(1, 3)

input.on_gesture(Gesture.SHAKE, on_gesture_shake)
```

Klõpsa tööriistakastis kategoorial **Logic**.

Lohista **if true then else** plokk tööpinnale ja aseta see **on shake** plokki alla **set hand** ploki.


# BANAANI KLAVIATUUR

## Sissejuhatus
Selles õppetükis loome oma muusikainstrumendi, kasutades banaani ja apelsini.

### Vajalik:
- micro:bit, patareihoidik ja 2 AAA patareid
- Banaan
- Apelsin
- Krokodilliklamber

## Protsess

1. **Ühendage maandus juhe**

   ![Alt text](/images/7.1.png)
   
2. **Ühendage heli juhe**

   Kasutades 2. krokodilliklambrit, ühendage krokodilliklambri ots micro:biti viigule 0.
   
   ![Alt text](/images/7.2.png)
   
3. **Ühendage kõrvaklapid maandusega**

   Kasutades 1. krokodilliklambrit, ühendage krokodilliklambri teine ots kõrvaklapipesa alusele.
   
   ![Alt text](/images/7.3.png)
   
4. **Ühendage kõrvaklappide heli kontakt**

   Kasutades 2. krokodilliklambrit, ühendage krokodilliklambri teine ots kõrvaklapipesa tipule.
   
   ![Alt text](/images/7.4.png)
   ![Alt text](/images/7.5.png)
5. **Ühendage vilja juhe**

   Kasutades 3. krokodilliklambrit, ühendage krokodilliklambri ots 1. krokodilliklambrile, mis on juba ühendatud **GND**-ga.
   
   ![Alt text](/images/7.6.png)
   
6. **Ühendage apelsin maandusega**

   Kasutades 3. krokodilliklambrit, ühendage krokodilliklambri vaba ots apelsiniga.
   
   ![Alt text](/images/7.7.png)
   
7. **Ühendage teine vilja juhe**

   Kasutades 4. krokodilliklambrit, ühendage krokodilliklambri ots micro:biti viigule 1.
   
   
8. **Ühendage banaan**

   Kasutades 4. krokodilliklambrit, ühendage krokodilliklambri vaba ots banaaniga.
   
   ![Alt text](/images/7.8.png)

   Teie banaani klaviatuur on valmis!

9. **Ühendage oma micro:bit USB-kaabli abil arvutiga ja käivitage testimiseks see skript:**

   ![Alt text](/images/7.9.png)
```python
def on_pin_pressed_p1():
    music.play_tone(Note.C, music.beat(BeatFraction.QUARTER))

input.on_pin_pressed(TouchPin.P1, on_pin_pressed_p1)
```


10. **Kirjutame täieliku koodi, mis suurendab heli kõrgust, kui puudutatakse P1, ja vähendab, kui puudutatakse P2. Selle kasutamiseks hoidke ühes käes apelsini ja teise käega puudutage banaani või mõnda muud valitud objekti, mis tuleb ühendada P2-ga.**

    ![Alt text](/images/7.10.png)
    ![Alt text](/images/7.11.png)
```python
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

# Liikumise põhitõed

## Sissejuhatus

Selles loengus tutvume Kitronik :MOVE mootori laiendusega micro:bit jaoks.

## Vajalik:

- Micro:bit kontroller
- Kitronik :MOVE mootori komplekt
- USB kaabel 
- Micro:bit programm või internetilink programmeerimiseks

## Protsess!

1. Esmalt **connect** **:MOVE motor kit** osad, luues jooksva roboti ja lisa sellele **micro:bit controller**.

2. Programmis vali **Extensions**.

![Alt text](/images/8.1.png)

3. Sisesta otsingumootorisse "**kitronik**" ja vali **kitronik-move-motor**

![Alt text](/images/8.2.png)

Nüüd on sul uued plokid.

![Alt text](/images/8.3.png)

4. Loome koodi roboti liikumise testimiseks nuppudega. Esmalt lisame ploki **on button A pressed** valikulisest **input** ja lisame **move forward at speed 0** **MOVE motor ...motors** alt ning määrame sõidukiiruse **0 -- 100**.

![Alt text](/images/8.4.png)

5. Vali plokk **on button B pressed** **input** alt ja lisa **stop** **MOVE motor ...motors** alt.

Saad järgmise koodi:

![Alt text](/images/8.5.png)

**Note:** Määra mõistlik liikumiskiirus, sest roboti peatamiseks peate vajutama nuppu B kontrolleril, mis tähendab, et peate esmalt roboti kinni püüdma.

6. **Download** see **micro:bit controller**'isse. **Push button A** kontrolleril -- robot **start** liikumist. **Press the B button** roboti **stop**'iks.

**Python:**

![Alt text](/images/8.6.png)
```python
def on_button_pressed_a():
    Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.LEFT, 20)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    Kitronik_Move_Motor.stop()  
input.on_button_pressed(Button.B, on_button_pressed_b)
```

7. Nüüd proovi robotit **rotate**, lahtides sama koodi, **change** plokk **move** plokiks **spin**.

![Alt text](/images/8.7.png)

8. **Download** see micro:bit controller'isse.

**Python:**

![Alt text](/images/8.8.png)
```python
def on_button_pressed_a():
    Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.LEFT, 20)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():  
    Kitronik_Move_Motor.stop()
input.on_button_pressed(Button.B, on_button_pressed_b)
```

9. Nüüd proovime asja ümber minna.

10. Selleks peame looma **function**. Mine **Advanced -- Functions -- Make a function** ja kirjuta **function name** ning vajuta **Done**.

![Alt text](/images/8.9.png)

11. Võta plokk **set turn radius** ja määra raadiuseks **standard** **MOVE motor ...motors** alt, sisesta see **function**'i.

12. Võta plokk **move right**/left **at speed 75** ja sisesta see **function**'i.

13. Võta plokk **pause (ms)** ja määra väärtuseks **500ms** ning sisesta see **function**'i.

14. Sisesta plokk **stop** **function**'i.

15. Loo kood, mis **call the function**. Võta plokk **on button A pressed** **Input** alt ja **Functions** alt sisesta **call bigCircle**

![Alt text](/images/8.10.png)

16. **Download** see micro:bit controller'isse ja proovi.

Python kood:

![Alt text](/images/8.11.png)
```python
def on_button_pressed_a():
    bigCircle()

input.on_button_pressed(Button.A, on_button_pressed_a)

def bigCircle():
    Kitronik_Move_Motor.turn_radius(Kitronik_Move_Motor.TurnRadii.TIGHT)
    Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.RIGHT, 100)
    basic.pause(500)
    Kitronik_Move_Motor.stop()
```

## Väljakutse:

1. Vali vahemaa, alusta kiirusega 5 ja mõõda, kui kiiresti see suudab valitud vahemaa kiirusega 5 läbida. Vali samm, mille võrra kiirust suurendad ja mõõda sama vahemaa erinevatel kiirustel, suurendades iga kord kiirust valitud sammu võrra.

2. Proovi pöördeid, muutes raadiust ja/või kiirust, uuri välja, mis muutus, leia välja, kuidas saada täpselt soovitud pööre.

3. Sisesta marker või pliiats, mis on Kitronik :MOVE mootorile sobiva suurusega, robotisse spetsiaalselt selleks ettenähtud kohta ja programmeeri kood joonistama S-i või mõnda muud tähte või joonistust.

![Alt text](/images/8.12.jpg)![Alt text](/images/8.13.jpg)

![Alt text](/images/8.14.png)

Python:

![Alt text](/images/8.15.png)
```python
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

4. Kuna robotil puuduvad andurid, et määrata, mitu kraadi robot on pööranud, on ainsaks mõõduks aeg ja kiirus. Muutes neid parameetreid, loo kood vastavalt järgmisele näitele, mille tõttu robot liiguks ümber nurkse objekti, mille küljed on võrdse pikkusega.

![Alt text](/images/8.16.png)

Python:

![Alt text](/images/8.17.png)
```python
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

**Note:** Roboti täpsust võivad mõjutada ka aku laetus, pinna erinevused, libedus, prügi rehvidel, mootori kulumine ja muud tegurid, seega täpsus võib ajas isegi kõikuda.

# Heli ja valgus Kitronikiga

## Sissejuhatus

Selles loengus tutvume Kitronik :MOVE mootori laiendusega micro:bit jaoks. Kuidas kasutada heli ja tulesid.

## Vajalik:

- Micro:bit kontroller
- Kitronik :MOVE mootori komplekt
- USB kaabel
- Micro:bit programm või internetilink programmeerimiseks

## Protsess!

1. Kitronik robot on varustatud helisummeriga. Selle kasutamiseks peate valima ploki **beep to horn** **MOVE motor ...Sounds** alt.

![Alt text](/images/9.1.png)

Nüüd näeb teie kood välja selline:

![Alt text](/images/9.2.png)

2. **Download** see micro:bit controller'isse ja proovige helisignaali.

Python:

![Alt text](/images/9.3.png)
```python
def on_button_pressed_a():
    Kitronik_Move_Motor.beep_horn()

input.on_button_pressed(Button.A, on_button_pressed_a)
```

3. Kitronik robot on varustatud **nelja** **LED**-iga. Plokk LED-ide jaoks on leitav kategooria **...Lights** alt.

4. Selle kasutamiseks valige plokk **on start** **Basic** alt.

5. Seejärel valige **set moveMotorZIP to 0** **Move Motor with 4 ZIP LEDs** **MOVE Motor ...Lights** alt ja sisestage see plokki **on start**.

6. Seejärel sisestage **moveMotorZIP set ZIP LED 0 to red** iga LED-i jaoks. Saate sisestada iga LED-i jaoks erineva värvi. Saate luua oma värvi **RGB Color Codes** abil -- selleks peate valima ploki, kus on **kolm värvi (punane 0, roheline 0, sinine 0)** värvikoodi väljadega. See tähendab, et kui soovite luua kollast värvi, siis sisestage punane 255, roheline 255, sinine 0 (värvikoode leiate siit: [RGB Color Code 🎨 Color Picker, Codes, Converters](https://rgbcolorcode.com/)).

7. Ja sisestage plokk **moveMotorZIP show** **MOVE Motor ...Lights** alt.

8. Seejärel kasutades **forever** tsüklit **Basic** alt, pöörake LED-e ringi.

9. Sisestage **forever** plokki **moveMotorZIP rotate ZIP LEDs by 1** ja plokk **moveMotorZIP show** **MOVE Motor ...Lights** alt.

10. Ja sisestage plokk **pause(ms)100** **Basic** alt pöörlemiskiiruse jaoks.

![Alt text](/images/9.4.png)

11. **Download** see micro:bit controller'isse.

Python kood:

![Alt text](/images/9.5.png)
```python
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

## Väljakutse:

1. Looge kaks diskorežiimi, lisades ka heli teatud aegadel, seejärel määrake need nuppudega - üks diskorežiim nupul A, teine nupul B.

# Kitroniku joonejälgimise robot

## Sissejuhatus

Kitroniku robot on varustatud joonejälgimise anduritega. Joonejälgimise andurid väljutavad analoogsignaali. See muutub sõltuvalt pinna peegeldusest. Mida peegeldavam on pind, seda kõrgem on väärtus. Selles õppetükis õpime, kuidas luua joonejälgijat.

## Vajalik:

- Micro:bit kontroller
- Kitronik :MOVE mootori komplekt
- USB kaabel
- Micro:bit programm või internetilink programmeerimiseks

## Protsess!

1. Valige **forever** tsükkel **Basic** alt.

2. Tehke kaks uut muutujat **leftSensor** ja **rightSensor**. Minge **Variables** juurde, vajutage **Make a Variable**, kirjutage **variable name** ja vajutage **ok**.

![Alt text](/images/10.1.png)

3. Valige **set leftSensor to 0** plokk **Variables** alt ja sisestage see **forever** tsüklisse, tehke seda uuesti, kuid muutke **leftSensor** asemel **rightSensor**.

4. Võtke plokk **left line following sensor value** ja sisestage see plokki **set leftSensor to 0**.

5. Sama tehke **rightSensor** plokiga, kuid muutke **left sensor** asemel **rightSensor**.

6. Seejärel looge üks uuem **variable** -- **sensorDifference**.

7. Kui muutuja on valmis, valige **set sensorDifference to 0** ja sisestage see **forever** tsüklisse.

8. **Math** alt valige plokk **absolute of 0** ja sisestage see plokki **set sensorDifference to 0**.

9. Samuti valige **Math** alt plokk **0 -- 0** ja sisestage see plokki **absolute of 0**.

10. Seejärel sisestage **0 -- 0** ploki **ühele poolele** muutuja **leftSensor** ja **teisele poolele** muutuja **rightSensor**.

11. Seejärel sisestage **Logic** alt plokk **if-else** **forever** tsüklisse ja **Logic** alt sisestage plokk **0 > 0** plokki **if-else**.

![Alt text](/images/10.2.png)

12. Sisestage muutuja **sensorDifference** plokki **0 > 0** **esimesele positsioonile** ja **teisele positsioonile** kirjutage **10**.

13. Seejärel sisestage **if -- else** tsüklisse plokk **if** ja sisestage uuesti plokk **0 > 0** plokki **if**. Sisestage muutujad **leftSensor** ühele positsioonile ja **rightSensor** teisele positsioonile plokis **0 > 0**.

![Alt text](/images/10.3.png)

14. Seejärel sisestage plokk **turn off right motor** ja plokk **turn left motor on direction forward speed 30** **MOVE Motor .... Motors** alt **sisemisse if** tsüklisse.

15. Sisestage samad plokid uuesti, kuid **muutke** **mootoreid** ja pange need **sisemisse else** tsüklisse.

16. Sisestage **move Forward at speed 30** välimistesse else tsüklitesse.

![Alt text](/images/10.4.png)

17. **Download** see micro:bit controller'isse.

Python:

![Alt text](/images/10.5.png)

```python
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

## Väljakutse:

Looge rada ja pange robot seda läbima. Kontrollige, kas see suudab hakkama saada keeruliste kujunditega. Kontrollige, mis on maksimaalne kiirus, mille juures see suudab pööretele reageerida.

# Võidusõidu ajamõõtmissüsteemi sissejuhatus

## Sissejuhatus

Selles õppetükis kasutame micro:biti auto kiiruse salvestamiseks.

## Vajalik:

- Micro:bit kontroller
- Kitronik :MOVE mootori komplekt või muu robot või mänguauto, millega saab sõita
- USB-kaabel
- Micro:bit programm või internetilink programmeerimiseks

## Protsess!

1. Alguses peate looma osa rajast, millest sõitmise kiirus mõõdetakse sõites kindlasse kohta. See peaks valima kindla vahemaa.

2. Selleks võib kasutada **lauda, põrandat või pappi**. Ja selleks läheb teil vaja **fooliumit või fooliumteipi**.

3. Peate **kleepima neli fooliumriba**, mis saavad teile vajalikud andmed. **Iga kaks riba** tuleks kleepida **võimalikult lähestikku**, sellest sõltub, kui tõhusalt andmeid saadakse.

![Alt text](/images/11.1.jpg)

4. Samuti peate **varustama** **roboti või mänguauto** **fooliumribaga**. Selleks, et see toimiks, **peab riba puudutama maad**. Robotile kinnitatud foolium **peab olema piisavalt lai**, et sõites **saaks mõlemat kõrvuti kleebitud fooliumilehte puudutada samaaegselt**.

**Märkus:** 
- Kleepisime rattad raskema roboti külge ja see töötas, kuid kergem robot mitte, nii et pidime improviseerima ja leidma lahenduse, et see töötaks.
- **Hoiatus:** Ühendage foolium robotiga ettevaatlikult ja tehke seda siis, kui robot on välja lülitatud, et vältida lühiseid.

![Alt text](/images/11.2.jpg)![Alt text](/images/11.3.jpg)

![Alt text](/images/11.4.jpg)

5. Järgmisena looge andmekogumissüsteem, **ühendades** **kleepuvad fooliumteibid** **micro:bit kontrolleriga** **krokodilljuhtmete** abil:
   - Üks pool: ühendatud micro:biti **pin 0** ja **GND** (start)
   - Teine pool: ühendatud **pin 1** ja **GND** (finiš)

![Alt text](/images/11.5.jpg)

6. Programmeerimise sammud:
   - **Basic** alt võtke plokk **on start**
   - Sisestage plokk **show leds**
   - Märkige ära **keskmine LED**

7. Valige plokk **on pin P0 pressed** **Input** alt

8. Looge muutujad: **time 0, time 1, diffTime(ms)**

9-20. Järgige plokkskeemi samme pildil

![Alt text](/images/11.6.png)

21. **Download** see micro:bit controller'isse

Python:

![Alt text](/images/11.7.png)
```python
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

## Väljakutse:

Täiustage koodi nii, et B-nupu vajutamisel kood taaskäivituks. Siis ei pea pärast iga sõitu koodi uuesti kompileerima.

# Kitronik ultraheliandur

## Sissejuhatus

Selles loengus tutvume Kitronik :MOVE mootori laiendusega micro:bit jaoks. Kuidas kasutada ultraheliandurit.

## Vajalik:

- Micro:bit kontroller
- Kitronik :MOVE mootori komplekt
- USB kaabel
- Micro:bit programm või internetilink programmeerimiseks

## Protsess!

1. Kitronik robotid on varustatud ultrahelianduri

2. Pange **Forever** tsükkel

3. Looge uus muutuja **distance**

4. **Variables** alt valige **set distance to 0** ja sisestage need **forever** tsüklisse

5. Võtke **measure distance** **MOVE Motor ...Sensors** alt

6. **Forever** tsüklisse sisestage **if -- else** plokk

7. Seejärel sisestage **0 > 0** plokk **if** plokki ja seejärel sisestage **distance > 10**

8. **If** tsüklisse sisestage plokk **move forward at speed 35**

9. **Else** plokki sisestage **distance < 10** ja

10. **Else if** tsüklisse sisestage **stop, pause(ms) 500, move reverse at speed 20, pause (ms) 1000, spin left at speed 50, pause (ms), stop**

Nüüd näeb teie kood välja selline:

![Alt text](/images/12.1.png)

11. **Download** see micro:bit controller'isse.

12. **Salvestage** see **kood** **hex** failina, kuna vajate seda **järgmises õppetükis.**

![Alt text](/images/12.2.png)

Pythoni kood:

![Alt text](/images/12.3.png)
```python
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

## Väljakutse:

Täiustage koodi nii, et:
- Edasi sõites oleksid rohelised tuled põlemas
- Seiskumisel ja tagurdamisel oleksid punased tuled põlemas
- Tagurdamisel töötaks signaal


# Kitronik ultraheliandur + servomootorid

## Sissejuhatus

Selles loengus tutvume Kitronik :MOVE mootori laiendusega micro:bit jaoks. Kuidas kasutada servomootorit, et hävitada takistus, mis segab sõitmist.

## Vajalik varustus:

- Micro:bit kontroller
- Kitronik :MOVE mootori komplekt
- USB kaabel
- Micro:bit programm või internetilink programmeerimiseks

## Protsess

1. **Kitronik :MOVE mootori komplektil kleepige servo**mootor kahepoolse teibiga, võib kasutada ka muud meetodit (improviseeri).

![Alt text](/images/13.1.jpg)
![Alt text](/images/13.2.jpg)

2. **Ühendage servo** selleks ettenähtud **pistikutesse.** Kui kasutate tagaküljel olevat, tehke koodis vajalikud muudatused.

![Alt text](/images/13.3.jpg)

3. **Lisage servomootorile mingi osa**, saate selle kruvida või kleepida teibiga servo originaaltiibadele või teha sahtel hammasrattale, olenevalt sellest, millised võimalused teil on. See võib olla ükskõik millisest materjalist.

4. **Avage kaust**, kuhu **salvestasite eelmise õppetüki koodi**. **Vähendage** kausta ja micro:bit programmeerimise **platvormi** nii, et **näete mõlemat korraga**. Hiirega **võtke fail** kaustast ja **vedage** see **programmeerimise aknasse**, seal avaneb eelmine kood.

![Alt text](/images/13.4.png)

5. Nüüd näeb teie kood välja selline:

![Alt text](/images/13.5.png)

6. **Servo tegevuse lisamiseks** loome **funktsiooni servoBlow.**

7. **Loops** alt sisestage **repeat 3 times** **funktsiooni**. See kordab tegevust kolm korda, võite valida erineva arvu kordusi.

8. **Pins** alt võtke **servo write pin P0 to 0**. **Vaadake** kiibilt, millisesse viiku teie servomootor on ühendatud (P15 või P16), **sisestage** see koodis **P0** asemele. **Sisestage servo algpositsioon kraadides**, see sõltub teie servo olemasolevast seisundist ja ühendatud osa seisukorrast. Valige **nurk** nii, et **osa oleks tõstetud**.

9. Sisestage **paus** (ms), saate katsetada ajaga ja valida kõige sobivama.

10. Taas **Pins** alt võtke **servo write pin P0 to 0**. **Sisestage** koodis **sama viik** **P0** asemele. **Sisestage servo lõppasend kraadides**, see sõltub teie servo olemasolevast seisundist ja ühendatud osa seisukorrast. Valige **nurk** nii, et **osa oleks all**.

11. Sisestage **paus** (ms), saate katsetada ajaga ja valida kõige sobivama.

12. **Teie olemasolevasse koodi** pärast esimest peatust sisestage **pause (ms) 500** ja **funktsioonist** sisestage **call servoBlow**.

![Alt text](/images/13.6.png)

> **Hoiatus:** Servomootor on piiratud võimsusega, nii et valige pehme mänguasja takistusega ala või reguleerige mootori asendinurki nii, et sellel ei oleks ülemäärast koormust tegevuse sooritamisel. Ülekoormuse tõttu võib mootor läbi põleda.

13. **Download** see micro:bit controller'isse

Pythoni kood:

![Alt text](/images/13.7.png)
```python
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

## Väljakutse

Looge kood, milles lisada löökide heli ajal, mil servo lööke teeb.

# Huskylens AI Vision Sensor

## Sissejuhatus

Selles loengus tutvume Huskylens AI Vision Sensoriga.

## Vajalikud seadmed:

- Huskylens AI vision sensor

## Protsess

1. **Ülevaade**

![Alt text](/images/14.1.jpg)
![Alt text](/images/14.2.jpg)

2. **(See samm tundub originaaldokumendis tühi olevat)**

3. **Ava kaust**, kuhu **salvestasid eelmise tunni koodi**. **Vähenda** kausta ja micro:bit programmeerimis**platvormi**, nii et **näed mõlemat** samal ajal. Hiirega **võta fail** kaustast ja **lohista** see **programmeerimisakna**, seal avaneb eelmine kood.

![Alt text](/images/14.3.png)

4. Nüüd näeb su kood välja selline:

![Alt text](/images/14.4.png)

5. **Servo tegevuse lisamiseks** loome **funktsiooni servoBlow.**

6. **Loops'ist** lisa **repeat 3 times** **funktsiooni**. See kordab tegevust kolm korda, võid valida ka teise korduste arvu.

7. **Pins'ist** võta **servo write pin P0 to 0**. **Vaata**, millises **pistikus** su servo mootor on (P15 või P16), **sisesta** see koodi **asemel P0**. **Sisesta** servo **algasend kraadides**, see sõltub olemasolevast servost ja ühendatud osa olukorrast. Vali **nurk**, nii et **osa tõstetaks**.

8. Lisa **pause** millisekundites (ms), saad aega katsetada ja valida sobivaima.

9. Jälle **Pins'ist** võta **servo write pin P0 to 0**. **Sisesta** **sama pistik** koodi **asemel P0**. **Sisesta** servo **lõppasend kraadides**, see sõltub olemasolevast servost ja ühendatud osa olukorrast. Vali **nurk**, nii et **osa on alla**.

10. Lisa **pause** millisekundites (ms), saad aega katsetada ja valida sobivaima.

11. **Sinu olemasolevas koodis** pärast esimest **stopp** lisa **pause (ms) 500** ja **funktsioonist** lisa **call servoBlow**.

![Alt text](/images/14.5.png)

> **Hoiatus:** Servo mootoril on piiratud võimsus, seega vali ala pehmete mänguasjade takistustega või kohanda mootori asendi nurgad nii, et see ei tekitaks liigset koormust. Ülekoormuse korral võib mootor läbi põleda.

12. **Lae** alla micro:bit kontrollerisse.

Python kood:

![Alt text](/images/14.6.png)
```python
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
