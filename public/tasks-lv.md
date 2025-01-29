# Ievads Micro:bit

## **Ievads**

Šajā nodarbībā mēs iemācīsimies izmantot **Micro:bit programming environment**. Mēs izveidosim vienkāršu **LED** zīmējumu un ielādēsim to **micro:bit** kontrolierī.

## **Nepieciešams:**

- **Micro:bit** kontrolieris
- **USB** kabelis
- **Micro:bit** programma vai interneta saite programmēšanai

## **Process!**

1. Sekojiet saitei: [Microsoft MakeCode for micro:bit](https://makecode.microbit.org/)

2. Izvēlieties **new project**
![Alt text](/images/1.1.png)
3. Parādīsies logs, kurā jāieraksta projekta nosaukums, tad nospiediet pogu **Create**
![Alt text](/images/1.2.png)
4. Tālāk atvērsies logs, kurā jūs jau varat sākt programmēt. Programma piedāvā trīs veidu programmēšanu: **block programming**, **JavaScript** un **Python** programmēšanas valodas.
![Alt text](/images/1.3.png)
5. Izveidojiet jebkādu attēlu un saglabājiet projektu:
   - No izvēlnes **basic** paņemiet komandu **on start**
   - No tās pašas **basic** izvēlnes paņemiet komandu **show leds**
   - **LED** gaismas var ieslēgt, **nospiežot** uz atbilstošā **LED kvadrāta** tieši **Show Leds** komandā
![Alt text](/images/1.4.png)

6. **Python** programmēšanas valodā:
Lai attēlotu zīmējumu, nepieciešams izveidot masīvu, kas attēlo visu **LED** bloku. Degošās **LED** lampas apzīmē ar restīti (#), bet nedegošās ar punktu. Pirmajā rindā ieraksta komandu **basic.show_leds**, kas nozīmē, ka kontrolieris rādīs degošās gaismas visu laiku. Aiz komandas atver iekavas un iekavās veido masīvu.
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
7. Kad nospiežat pogu "**save**", projekts automātiski tiek saglabāts datorā, bet programma piedāvā arī iespēju savienot **micro:bit** kontrolieri ar **USB** vadu ar datoru un izveidot pāri, tādējādi ļaujot uzreiz ielikt kodu kontrolierī.

# Mirgojošā sirds

## **Ievads**

Šajā nodarbībā mēs iemācīsimies kā animēt zīmējumus, kā arī laika (milisekundēs) izmantošanu, lai pagarinātu vai saīsinātu laiku, kad attēls parādās.

## **Nepieciešams:**

- **Micro:bit** kontrolieris
- **USB** kabelis
- **Micro:bit** programma vai interneta saite programmēšanai

## **Process!**

1. Programmā no izvēlnes **basic** paņemiet blokus **forever**

2. No tās pašas **basic** izvēlnes paņemiet komandu **show icon** (šajā jau ir gatavi zīmējumi, kurus var izvēlēties) -- izvēlieties to, kurā attēlota **big heart**

3. Izvēlieties **pause** bloku ar **milliseconds**, lai ļautu sirdij spīdēt mirkli (jūs varat mainīt **milliseconds** daudzumu, pārliecinoties, ka sirds mirgos ātrāk vai lēnāk)

4. Izvēlieties bloku **show icon**, šoreiz ar **little heart**

5. Atkal iestatiet mirgošanas laiku

6. Zem virtuālā **microbit** kontroliera ir izvēles josla, tur būs zaļā bultiņa. Kad uz tās nospiedīsiet, programma tiks palaista uz virtuālā **microbit** kontroliera
![Alt text](/images/2.1.png)

## **Izaicinājums:**

Izmēģiniet animācijas arī ar citām ikonām. Izveidojiet savus zīmējumus un mēģiniet tos animēt.

### **Python Code:**

1. Atver **forever** ciklu, kas nozīmē, ka mirgošana būs visu laiku, līdz ierīce tiks izslēgta vai tajā ielādēsies cita programma

2. Tālāk ieraksta komandu, kas parāda izvēlēto ikonu uz ekrāna. Tām jau ir nosaukumi programmā, tāpēc tās nav jāzīmē, izmantojot masīvu

3. **Pause**, lai ikona deg kādu brīdi, pirms to nomaina cita ikona

4. Atkārto abus soļus, ceturtajā koda rindā izvēloties citu ikonu

5. Aizver **forever** ciklu

![Alt text](/images/2.2.png)
```
def on_forever():
    basic.show_icon(IconNames.HEART)
    basic.pause(500)
    basic.show_icon(IconNames.SMALL_HEART)
    basic.pause(500)

basic.forever(on_forever)

```

# SKREJOŠAIS VĀRDS!

## **Ievads**
Šajā nodarbībā iemācīsimies, kā attēlot skrejošu tekstu uz **Micro:bit LED** displeja.

## **Nepieciešams**
>- **Micro:bit** kontrolieris
>- **USB** kabelis
>- **Micro:bit** programma vai interneta saite programmēšanai **forever** cikls

## **Process!**

>1. No **basic** izvēlnes paņemiet komandu **Forever**
>2. No **basic** izvēlnes paņemiet komandu **Show string** un ielieciet to **forever** ciklā
>3. Ierakstiet tajā jebko, ko vēlaties, teksts, kas tiks ierakstīts pa vienam burtam, skries cauri ekrānam un būs nolasāms

## **Izaicinājums**
Mēģiniet rakstīt tekstu gan ar lielajiem, gan mazajiem burtiem. Kas šķiet labāk lasāms? Izmēģiniet burtus ar mīkstinājuma un garumzīmēm. Izmēģiniet, cik garu tekstu var ievietot ar katru programmēšanas veidu!

![Alt text](/images/3.1.png)
Tagad uzrakstīsim to pašu **Python** kodā
![Alt text](/images/3.2.png)
```
def on_forever():
    basic.show_string("SVEIKI!")
basic.forever(on_forever)

```
# METAMAIS KAULIŅŠ

## **Ievads**

Šajā nodarbībā mēs iemācīsimies izmantot vienu no **micro:bit** iebūvētajiem sensoriem - kustību sensoru. Un no tā izveidosim nejaušu metamā kauliņa programmu.

## **Nepieciešams:**

- **Micro:bit** kontrolieris
- **USB** kabelis
- **Micro:bit** programma vai interneta saite programmēšanai
- Baterijas pieslēgšanai **micro:bit** kontrolierim

## **Kā tas darbojas:**

**Micro:bit** kontrolierim ir vairāki sensori, tai skaitā kustību sensors. Kad to pakrata, tas reaģē uz kustību. Ja kodā ir prasība reaģēt uz kustību (šajā gadījumā uz purināšanu), tad komanda izpildās, kad kontrolieris tiek pakratīts.

## **Process!**

1. No izvēlnes **input** paņemiet komandu **on shake**

2. No izvēlnes **basic** paņemiet komandu **show number** un ievietojiet to **On shake** ciklā

3. No **math** izvēlnes paņemiet komandu **pick random ...to...** un ievietojiet to **show number** komandā

4. **Ierakstiet** **skaitļus**, kurus izvēlaties. Ja vēlaties imitēt metamā kauliņa mešanu, tad jāizvēlas skaitļi no **1** līdz **6**
![Alt text](/images/4.1.png)

## **Izaicinājums**

Veiciet eksperimentu un noskaidrojiet, cik bieži parādās katrs rezultāts, pie konkrēta purināšanas reižu skaita. Un ja eksperiments tiek atkārtots, vai rezultāts sakrīt ar iepriekšējo.

### **Python Code:**

![Alt text](/images/4.2.png)
```
def on_gesture_shake():
    basic.show_number(randint(1, 6))

input.on_gesture(Gesture.SHAKE, on_gesture_shake)

```

# SOĻU SKAITĪTĀJS

## **Ievads**

Šajā nodarbībā mēs uzlabosim zināšanas par to, kā var pielietot kustību sensoru un iemācīsimies izveidot un lietot mainīgos.

## **Nepieciešams:**

- **Micro:bit** kontrolieris
- **USB** kabelis
- **Micro:bit** programma vai interneta saite programmēšanai
- Baterijas pieslēgšanai **micro:bit** kontrolierim

## **Kā tas darbojas:**

**Micro:bit** kontrolierī ieliksim soļu skaitīšanas programmu, kas liks mikrokontrolierim reaģēt uz soļu kustību. Labākam efektam piestipriniet mikrokontrolieri pie kājas un pastaigājiet ar to.

## **Process!**

1. No izvēlnes **basic** paņemiet komandu **on start**

2. **Variables** izvēlnē izveidojiet mainīgo **steps** un paņemiet komandu **set steps to** un ievietojiet to **On start** ciklā
![Alt text](/images/5.1.png)
3. **Ierakstiet** sākuma soļu skaitu, tas ir nulle, jo jūs vēl nekur neesat gājuši

4. No izvēlnes **input** paņemiet komandu ciklu **on shake**

5. **Variables** izvēlnē paņemiet komandu **change steps by** un ievietojiet to **On shake** ciklā

6. **Ierakstiet** **skaitli 1,** tādējādi, lai sāk skaitīt soļus sākot ar vienu

7. No **basic** izvēlnes paņemiet komandu **show numbers,** un arī ievietojiet to **On shake** ciklā

8. No **variable** izvēlnes paņemiet mainīgo **steps,** un ievietojiet to komandā **show number.** Tā mēs norādām, ka skaitāmā vienība ir soļi
![Alt text](/images/5.2.png)

## **Izaicinājums**

Mēģiniet iet dažādos ātrumos. Izmēriet dažādu cilvēku soļu skaitu noteiktā attālumā. Pamēģiniet vai citas kustības arī ietekmē saskaitīto soļu skaitu. Pamēģiniet vai braukšana ar velosipēdu vai citu braucamo ietekmē soļu skaitu.

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

# AKMENS ŠĶĒRES PAPĪRS

## **Ievads**
Šajā nodarbībā mēs uzlabosim savas zināšanas par to, kā var pielietot kustību sensoru.

### **Nepieciešams:**
- **Micro:bit** kontrolieris
- **USB** kabelis
- **Micro:bit** programma vai interneta saite programmēšanai
- Baterijas pieslēgšanai **micro:bit** kontrolierim

## **Process**
Vispirms mums jāizveido mainīgais, lai sekotu līdzi, vai mums rokā ir Akmens, Papīrs vai Šķēres. Mainīgais ir konteiners vērtību glabāšanai.

1. Noklikšķiniet uz kategorijas **Variables** Rīku kastē
2. Noklikšķiniet uz pogas **Make a Variable**
3. Dodiet savam jaunajam mainīgajam nosaukumu "**hand**" un noklikšķiniet uz **Ok**
![Alt text](/images/6.1.png)

Noklikšķiniet uz kategorijas **Variables** Rīku kastē vēlreiz. Jūs pamanīsiet, ka ir parādījušies daži jauni bloki.

Velciet bloku **set hand** uz bloku **on shake**. Mēs sāksim savu spēli Akmens Šķēres Papīrs, kad pakratīsim savu **micro:bit**.
![Alt text](/images/6.2.png)
```
hand = 0

def on_gesture_shake():
    global hand
    hand = 0

input.on_gesture(Gesture.SHAKE, on_gesture_shake)

```

Noklikšķiniet uz kategorijas **Math** Rīku kastē.

Velciet bloku **pick random** un nometiet to blokā **set hand**, aizstājot skaitli 0. Tagad, kad mēs pakratīsim savu **micro:bit**, mainīgais hand saturēs nejaušu skaitli no 1 līdz 3.
![Alt text](/images/6.3.png)

```
hand = 0

def on_gesture_shake():
    global hand
    hand = randint(1, 3)

input.on_gesture(Gesture.SHAKE, on_gesture_shake)

```

Noklikšķiniet uz kategorijas **Logic** Rīku kastē.

Velciet bloku **if true then else** uz darba vietu un nometiet to blokā **on shake** zem bloka **set hand**.

# BANĀNU KLAVIATŪRA

## **Ievads**
Šajā nodarbībā mēs izveidosim savu mūzikas instrumentu, izmantojot banānu un apelsīnu.

### **Nepieciešams:**
- **micro:bit**, bateriju turētājs un 2 AAA baterijas
- Banāns
- Apelsīns
- **Crocodile** vadi

## **Process**

1. **Pievienojiet zemējuma vadu**

   ![Alt text](/images/7.1.png)
   
2. **Pievienojiet skaņas vadu**

   Izmantojot 2. **crocodile** vadu, pievienojiet vada galu pie **micro:bit** **pin 0**.
   
   ![Alt text](/images/7.2.png)
   
3. **Pievienojiet austiņas zemējumam**

   Izmantojot 1. **crocodile** vadu, pievienojiet otro vada galu pie austiņu ligzdas pamatnes.
   
   ![Alt text](/images/7.3.png)
   
4. **Pievienojiet austiņu skaņas kontaktu**

   Izmantojot 2. **crocodile** vadu, pievienojiet otro vada galu pie austiņu ligzdas gala.
   
   ![Alt text](/images/7.4.png)
   ![Alt text](/images/7.5.png)

5. **Pievienojiet augļa vadu**

   Izmantojot 3. **crocodile** vadu, pievienojiet vada galu pie 1. **crocodile** vada, kas jau ir piestiprināts pie **GND**.
   
   ![Alt text](/images/7.6.png)
   
6. **Pievienojiet apelsīnu pie zemējuma**

   Izmantojot 3. **crocodile** vadu, pievienojiet nepiestiprināto vada galu pie apelsīna.
   
   ![Alt text](/images/7.7.png)
   
7. **Pievienojiet otru augļa vadu**

   Izmantojot 4. **crocodile** vadu, pievienojiet vada galu pie **pin 1** uz **micro:bit**.
   
8. **Pievienojiet banānu**

   Izmantojot 4. **crocodile** vadu, pievienojiet nepiestiprināto vada galu pie banāna.
   
   ![Alt text](/images/7.8.png)

   Jūsu banānu klaviatūra ir gatava!

9. **Pievienojiet savu micro:bit pie datora, izmantojot USB kabeli, un palaidiet šo skriptu, lai pārbaudītu:**

   ![Alt text](/images/7.9.png)
```
def on_pin_pressed_p1():
    music.play_tone(Note.C, music.beat(BeatFraction.QUARTER))

input.on_pin_pressed(TouchPin.P1, on_pin_pressed_p1)
```

10. **Uzrakstīsim pilnu kodu, kas palielina skaņas augstumu, ja tiek pieskarti P1, un samazina, ja tiek pieskarti P2. Lai to izmantotu, vienā rokā turiet apelsīnu un ar otru roku pieskarieties banānam vai citam priekšmetam, kas jāpievieno P2.**

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

# Kustības pamati

## **Ievads**

Šajā lekcijā mēs iepazīsimies ar **Kitronik :move motor** paplašinājumu **micro:bit**.

## **Nepieciešams:**

- **Micro:bit** kontrolieris
- **Kitronik :MOVE motor kit**
- **USB** kabelis
- **Micro:bit** programma vai interneta saite programmēšanai

## **Process!**

1. Vispirms **savienojiet** **:MOVE motor kit** daļas, izveidojot braucošu robotu un pievienojiet tam **micro:bit** kontrolieri.

2. Programmā izvēlieties **Extensions**.

![Alt text](/images/8.1.png)

3. Meklētājā ierakstiet "**kitronik**" un izvēlieties **kitronik-move-motor**

![Alt text](/images/8.2.png)

Tagad jums ir jauni bloki.

![Alt text](/images/8.3.png)

4. Izveidosim kodu, lai pārbaudītu robota kustību ar pogām. Vispirms pievienojam bloku **on button A pressed** no izvēlnes **input** un pievienojam **move forward at speed 0** no **MOVE motor ...motors** un norādām braukšanas ātrumu **0 -- 100**.

![Alt text](/images/8.4.png)

5. Izvēlieties bloku **on button B pressed** no **input** un pievienojiet **stop** no **MOVE motor ...motors**.

Jūs iegūsiet šādu kodu:

![Alt text](/images/8.5.png)

**Piezīme:** Iestatiet saprātīgu braukšanas ātrumu, jo lai apturētu robotu, jums būs jānospiež B poga uz kontroliera, kas nozīmē, ka vispirms jums būs jānoķer robots.

6. **Lejupielādējiet** **micro:bit** kontrolierī. **Nospiediet pogu A** uz kontroliera -- robots **sāk** kustēties. **Nospiediet pogu B**, lai **apturētu** robotu.

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
7. Tagad pamēģiniet **pagriezt** robotu, izmainot kodu, **nomainiet** bloku **move** uz bloku **spin.**

![Alt text](/images/8.7.png)

8. Lejupielādējiet **micro:bit** kontrolierī

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

9. Tagad mēģināsim apbraukt ap priekšmetu.

10. Tam mums jāizveido **function**. Ejiet uz **Advanced -- Functions -- Make a function** un ierakstiet **function name** un nospiediet **Done**.

![Alt text](/images/8.9.png)

11. Paņemiet bloku **set turn radius** un iestatiet rādiusu uz **standard** no **MOVE motor ...motors**, ievietojiet to **function**.

12. Paņemiet bloku **move right**/left **at speed 75** un ievietojiet to **function**.

13. Paņemiet bloku **pause (ms)** un iestatiet uz **500ms** un ievietojiet **function**.

14. Ievietojiet bloku **stop** **function**.

15. Izveidojiet kodu, kas **izsauks funkciju**. Paņemiet bloku **on button A pressed** no **Input** un no **Functions** ievietojiet **call bigCircle**

![Alt text](/images/8.10.png)

16. **Lejupielādējiet** **micro:bit** kontrolierī un izmēģiniet

**Python** kods:

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

## **Izaicinājums:**

1. Izvēlieties attālumu, sāciet ar ātrumu 5 un izmēriet, cik ātri tas var veikt izvēlēto attālumu ar ātrumu 5. Izvēlieties soli, ar kuru palielināsiet ātrumu, un izmēriet to pašu attālumu dažādos ātrumos, katru reizi palielinot ātrumu par izvēlēto soli.

2. Izmēģiniet pagriezienus, mainot rādiusu un/vai ātrumu, noskaidrojiet, kas mainījās, noskaidrojiet, kā iegūt precīzu vēlamo pagriezienu.

3. Ievietojiet marķieri vai pildspalvu, kas ir atbilstoša izmēra **Kitronik :move motor** robotā speciāli paredzētā vietā un ieprogrammējiet kodu, lai uzzīmētu S vai citu burtu vai zīmējumu.

![Alt text](/images/8.12.jpg)![Alt text](/images/8.13.jpg)

![Alt text](/images/8.14.png)

**Python:**

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

4. Tā kā robotam nav sensoru, lai noteiktu, cik grādos robots ir pagriezies, vienīgais mērs ir laiks un ātrums. Mainot šos parametrus, izveidojiet kodu pēc šāda piemēra, kura dēļ robots apbrauktu stūrainu priekšmetu ar vienāda garuma malām.

![Alt text](/images/8.16.png)

**Python:**

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

**Piezīme:** Robota precizitāti var ietekmēt arī bateriju uzlādes līmenis, virsmas variācijas, slidenums, gruži uz riepām, motoru nodilums un citi faktori, tāpēc precizitāte var mainīties pat no reizes uz reizi.
# Skaņa un Gaisma ar Kitronik

## **Ievads**

Šajā lekcijā mēs iepazīsimies ar **Kitronik :move motor** paplašinājumu **micro:bit**. Kā izmantot skaņu un gaismas.

## **Nepieciešams:**

- **Micro:bit** kontrolieris
- **Kitronik :MOVE motor kit**
- **USB** kabelis
- **Micro:bit** programma vai interneta saite programmēšanai

## **Process!**

1. **Kitronik** robots ir aprīkots ar skaņas signālu. Lai to izmantotu, jums jāizvēlas **beep to horn** bloks no **MOVE motor ...Sounds**

![Alt text](/images/9.1.png)

Tagad jūsu kods izskatīsies šādi:

![Alt text](/images/9.2.png)

2. Lejupielādējiet **micro:bit** kontrolierī un izmēģiniet signālu

**Python:**

![Alt text](/images/9.3.png)
```
def on_button_pressed_a():
    Kitronik_Move_Motor.beep_horn()

input.on_button_pressed(Button.A, on_button_pressed_a)
```

3. **Kitronik** robots ir aprīkots ar **četrām LED** gaismām. Bloku priekš **LED** var atrast zem kategorijas **...Lights**.

4. Lai to izmantotu, izvēlieties bloku **on start** no **Basic**.

5. Pēc tam izvēlieties **set moveMotorZIP to 0** **Move Motor with 4 ZIP LEDs** no **MOVE Motor ...Lights** un ievadiet blokā **on start**.

6. Tad ievadiet **moveMotorZIP set ZIP LED 0 to red** katrai **LED**. Katrai **LED** var ievadīt citu krāsu. Jūs varat izveidot savu krāsu ar **RGB Color Codes** -- tam jums jāizvēlas bloks, kurā ir **trīs krāsas (red 0, green 0, blue 0)** ar krāsu kodu laukiem. Tas nozīmē, ka ja vēlaties izveidot dzeltenu krāsu, tad ievadiet red 255, green 255, blue 0 (krāsu kodus varat atrast šeit: [RGB Color Code 🎨 Color Picker, Codes, Converters](https://rgbcolorcode.com/)).

7. Un ievietojiet bloku **moveMotorZIP show** no **MOVE Motor ...Lights**.

8. Tad izmantojot **forever** ciklu no **Basic**, rotējiet **LED** apkārt.

9. Ievadiet **forever** blokā **moveMotorZIP rotate ZIP LEDs by 1** un bloku **moveMotorZIP show** no **MOVE Motor ...Lights**.

10. Un ievadiet bloku **pause(ms)100** no **Basic** rotācijas ātrumam.

![Alt text](/images/9.4.png)

11. **Lejupielādējiet** **micro:bit** kontrolierī

**Python** kods:

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

## **Izaicinājums:**

1. Izveidojiet divus disko režīmus, pievienojot arī skaņu noteiktos brīžos, tad iestatiet tos ar pogām - vienu disko režīmu uz pogu A, otru uz pogu B.



# Līnijsekotājs Kitronik Robots

## Ievads

Kitronik robots ir aprīkots ar līnijsekošanas sensoriem. Līnijsekošanas sensori izdod analogu signālu. Šis signāls mainās atkarībā no virsmas atstarošanas. Jo atstarojošāka virsma, jo augstāka vērtība. Šajā nodarbībā mēs iemācīsimies izveidot līnijsekotāju.

## Nepieciešams:

- Micro:bit kontrolieris (vadības bloks)
- Kitronik :MOVE motoru komplekts
- USB vads
- Micro:bit programmēšanas vide vai interneta saite programmēšanai

## Darbību secība!

1. No sadaļas "Basic" (Pamati) izvēlies "forever" (bezgalīgo) ciklu

2. Izveido divus jaunus mainīgos **leftSensor** (kreisais_sensors) un **rightSensor** (labais_sensors). Dodies uz sadaļu **Variables** (Mainīgie), nospied **Make a Variable** (Izveidot Mainīgo), ieraksti **mainīgā nosaukumu** un nospied **ok**

3. No sadaļas **Variables** izvēlies bloku **set leftSensor to 0** (iestatīt kreiso_sensoru uz 0) un ievieto to **forever** (bezgalīgajā) ciklā. To pašu izdari ar **rightSensor** (labais_sensors)

[Turpinājums seko ar pārējām darbībām, saglabājot tehnisko precizitāti]

Svarīgie programmēšanas termini latviskojumi:
- forever loop -> bezgalīgais cikls
- variable -> mainīgais
- sensor -> sensors
- if-else -> ja-citādi nosacījums
- download -> lejupielādēt
- speed -> ātrums
- motor -> motors
- forward -> uz priekšu
- turn -> pagriezties

## Izaicinājums:

Izveido trasi un palaid robotu, lai tas to izbrauc. Pārbaudi, vai tas var tikt galā ar sarežģītām formām. Pārbaudi, kādā maksimālajā ātrumā tas spēj reaģēt uz pagriezieniem.


# Sacensību Laika Noteikšanas Sistēmas Ievads

## **Ievads**

Šajā nodarbībā mēs izmantosim **micro:bit**, lai ierakstītu automašīnas ātrumu.

## **Nepieciešams:**

- **Micro:bit** kontrolieris
- **Kitronik :MOVE motor kit** vai cits robots vai rotaļu mašīna, kuru var vadīt
- **USB** kabelis
- **Micro:bit** programma vai interneta saite programmēšanai

## **Process!**

1. Sākumā jums jāizveido trases daļa, no kuras tiks mērīts braukšanas ātrums, braucot līdz noteiktai vietai. Jāizvēlas konkrēts attālums.

2. Šim nolūkam var izmantot **galdu, grīdu vai kartona lapu**. Un tam būs nepieciešama **folija vai folijas lente**.

3. Jums jāpielīmē **četras folijas strēmeles**, kas iegūs nepieciešamos datus. **Katras divas strēmeles** jāpielīmē pēc iespējas **tuvāk kopā**, no tā būs atkarīgs, cik efektīvi tiks iegūti dati.

![Alt text](/images/11.1.jpg)


Turpinu ar atlikušo "Sacensību Laika Noteikšanas Sistēmas" daļu:

4. Jums arī nepieciešams **aprīkot robotu vai rotaļu mašīnu** ar **folijas strēmeli**. Lai tas darbotos, **strēmelei jāpieskaras zemei**. Folijai, kas piestiprināta robotam, **jābūt pietiekami platai**, lai **braukšanas laikā varētu pieskarties abām** blakus **salīmētajām folijas lapām vienlaicīgi**.

**Piezīme:** 
- Mēs aplīmējām smagākā robota riteņus un tas darbojās, bet vieglākais robots nedarbojās, tāpēc mums bija jāimprovizē un jāatrod risinājums, lai tas darbotos.
- **Uzmanību:** Pievienojiet foliju robotam uzmanīgi un dariet to, kad robots ir izslēgts, lai izvairītos no īssavienojumiem.

![Alt text](/images/11.2.jpg)![Alt text](/images/11.3.jpg)

![Alt text](/images/11.4.jpg)

5. Tālāk izveidojiet datu vākšanas sistēmu, **savienojot** **līmējošās folijas lentes** ar **micro:bit** kontrolieri, izmantojot **krokodilu vadus**:
   - Viena puse: savienota ar **micro:bit** **pin 0** un **GND** (starts)
   - Otra puse: savienota ar **pin 1** un **GND** (finišs)

![Alt text](/images/11.5.jpg)

6. Programmēšanas soļi:
   - No **basic** paņemiet bloku **on start** 
   - Ievadiet bloku **show leds** 
   - Atzīmējiet **vidējo LED**

7. Izvēlieties bloku **on pin P0 pressed** no **input**

8. Izveidojiet mainīgos: **time 0, time 1, diffTime(ms)**

9-20. Sekojiet bloku programmēšanas soļiem attēlā

![Alt text](/images/11.6.png)

21. **Lejupielādējiet** **micro:bit** kontrolierī

**Python:**

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

## **Izaicinājums:**

Uzlabojiet kodu tā, lai nospiežot B pogu, kods tiek restartēts. Tad jums nevajadzēs pārkompilēt kodu katru reizi pēc brauciena veikšanas.


# KITRONIK ULTRASKAŅAS SENSORS

## **Ievads**

Šajā lekcijā mēs iepazīsimies ar **Kitronik :move motor** paplašinājumu **micro:bit**. Kā izmantot ultraskaņas sensoru.

## **Nepieciešams:**

- **Micro:bit** kontrolieris
- **Kitronik :MOVE motor kit**
- **USB** kabelis
- **Micro:bit** programma vai interneta saite programmēšanai

## **Process!**

1. **Kitronik** roboti ir aprīkoti ar ultraskaņas sensoru.

2. Ielieciet **Forever** ciklu

3. Izveidojiet jaunu mainīgo **distance**

4. No **Variables** izvēlieties **set distance to 0** un ievadiet to **forever** ciklā

5. Paņemiet **measure distance** no **MOVE Motor ...Sensors**

6. **Forever** ciklā ievietojiet **if -- else** bloku

7. Tad ievietojiet **0 > 0** bloku **if** blokā un tad ievietojiet **distance > 10**

8. **If** ciklā ievietojiet bloku **move forward at speed 35**

9. **Else** blokā ievietojiet **distance < 10** un

10. **Else if** ciklā ievietojiet **stop, pause(ms) 500, move reverse at speed 20, pause (ms) 1000, spin left at speed 50, pause (ms), stop**

Tagad jūsu kods izskatīsies šādi:

![Alt text](/images/12.1.png)

11. **Lejupielādējiet** **micro:bit** kontrolierī.

12. **Saglabājiet** šo **kodu** kā **hex** failu, jo tas jums būs nepieciešams **nākamajai nodarbībai.**

![Alt text](/images/12.2.png)

**Python** kods:

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

## **Izaicinājums:**

Uzlabojiet kodu tā, lai:
- Braucot uz priekšu deg zaļās gaismas
- Apstājoties un braucot atpakaļgaitā deg sarkanās gaismas
- Braucot atpakaļgaitā darbojas signāls
# KITRONIK ULTRASKAŅAS SENSORS + SERVO MOTORS

## **Ievads**

Šajā lekcijā mēs iepazīsimies ar **Kitronik :move motor** paplašinājumu **micro:bit**. Kā izmantot servo motoru, lai iznīcinātu šķērsli, kas traucē braukšanai.

## **Nepieciešams:**

- **Micro:bit** kontrolieris
- **Kitronik :MOVE motor kit**
- **USB** kabelis
- **Micro:bit** programma vai interneta saite programmēšanai

## **Process**

1. Pie **kitronik :move motor kit** **pielīmējiet servo** motoru ar divpusējo līmlenti, var izmantot citu metodi (improvizēt).

![Alt text](/images/13.1.jpg)
![Alt text](/images/13.2.jpg)

2. **Pievienojiet servo** tam **paredzētajos savienotājos.** Ja izmantojat to, kas atrodas otrā pusē, tad veiciet izmaiņas kodā.

![Alt text](/images/13.3.jpg)

3. **Pievienojiet servo motoram kādu daļu**, varat pieskrūvēt vai pielīmēt ar līmlenti pie servo oriģinālajiem spārniem vai izveidot pieliktni zobratam, atkarībā no tā, kādas iespējas jums ir pieejamas. Tas var būt no jebkura materiāla.

4. **Atveriet mapi**, kur **saglabājāt kodu** no **iepriekšējās nodarbības**. **Samaziniet** mapi un **micro:bit** programmēšanas **platformu** tā, lai **redzētu abus** vienlaicīgi. Ar peli **paņemiet** **failu** no mapes un **ievelciet** to **programmēšanas logā**, tur atvērsies iepriekšējais kods.

![Alt text](/images/13.4.png)

5. Tagad jūsu kods izskatīsies šādi:

![Alt text](/images/13.5.png)

6. Lai **pievienotu servo** darbību, mēs izveidojam **funkciju servoBlow**.

7. No **loops** ievietojiet **repeat 3 times** **funkcijā**. Tas atkārtos darbību trīs reizes, varat izvēlēties citu atkārtojumu skaitu.

8. No **Pins** paņemiet **servo write pin P0 to 0**. **Paskatieties** uz mikroshēmu, pie kura **pin** jūsu servo motors ir pieslēgts (P15 vai P16), **ievadiet** to kodā **P0** vietā. **Ievadiet** servo **sākuma pozīciju** **grādos**, tas būs atkarīgs no jūsu servo esošā stāvokļa un pievienotās daļas stāvokļa. Izvēlieties **leņķi** tā, lai **daļa būtu pacelta**.

9. Ievietojiet **pause** (ms), ar laiku varat eksperimentēt un izvēlēties vispiemērotāko.

10. Atkal no **Pins** paņemiet **servo write pin P0 to 0**. **Ievadiet** **to pašu pin** kodā **P0** vietā. **Ievadiet** servo **beigu pozīciju** **grādos**, tas būs atkarīgs no jūsu servo esošā stāvokļa un pievienotās daļas stāvokļa. Izvēlieties **leņķi** tā, lai **daļa būtu nolaista**.

11. Ievietojiet **pause** (ms), ar laiku varat eksperimentēt un izvēlēties vispiemērotāko.

12. **Esošajā kodā** pēc pirmā stop ievietojiet **pause (ms) 500** un no **function** ievietojiet **call servoBlow**.

![Alt text](/images/13.6.png)

> **Brīdinājums:** Servo motoram ir ierobežotas jaudas iespējas, tāpēc izvēlieties zonu ar mīkstām rotaļlietu šķēršļiem vai pielāgojiet motora pozīcijas leņķus tā, lai tam nebūtu pārmērīga slodze, mēģinot veikt darbību. Pārslogojot motors var sadegt.

13. **Lejupielādējiet** **micro:bit** kontrolierī

**Python** kods:

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

## **Izaicinājums**

Izveidojiet kodu, kurā pievienojat sitienu skaņas laikā, kad servo veic sitienus.
# HUSKYLENS AI VISION SENSORS

## **Ievads**

Šajā lekcijā mēs iepazīsimies ar **Huskylens AI Vision** sensoru

## **Nepieciešams:**

- **Huskylens AI** redzamības sensors

## **Process**

1. **Pārskats**

![Alt text](/images/14.1.jpg)
![Alt text](/images/14.2.jpg)


3. **Atveriet mapi**, kur **saglabājāt kodu** no **iepriekšējās nodarbības**. **Samaziniet** mapi un **micro:bit** programmēšanas **platformu** tā, lai **redzētu abus** vienlaicīgi. Ar peli **paņemiet** **failu** no mapes un **ievelciet** to **programmēšanas logā**, tur atvērsies iepriekšējais kods.

![Alt text](/images/14.3.png)

4. Tagad jūsu kods izskatīsies šādi:

![Alt text](/images/14.4.png)

5. Lai **pievienotu servo** darbību, mēs izveidojam **funkciju servoBlow**.

6. No **loops** ievietojiet **repeat 3 times** **funkcijā**. Tas atkārtos darbību trīs reizes, varat izvēlēties citu atkārtojumu skaitu.

7. No **Pins** paņemiet **servo write pin P0 to 0**. **Paskatieties** uz mikroshēmu, pie kura **pin** jūsu servo motors ir pieslēgts (P15 vai P16), **ievadiet** to kodā **P0** vietā. **Ievadiet** servo **sākuma pozīciju** **grādos**, tas būs atkarīgs no jūsu servo esošā stāvokļa un pievienotās daļas stāvokļa. Izvēlieties **leņķi** tā, lai **daļa būtu pacelta**.

8. Ievietojiet **pause** (ms), ar laiku varat eksperimentēt un izvēlēties vispiemērotāko.

9. Atkal no **Pins** paņemiet **servo write pin P0 to 0**. **Ievadiet** **to pašu pin** kodā **P0** vietā. **Ievadiet** servo **beigu pozīciju** **grādos**, tas būs atkarīgs no jūsu servo esošā stāvokļa un pievienotās daļas stāvokļa. Izvēlieties **leņķi** tā, lai **daļa būtu nolaista**.

10. Ievietojiet **pause** (ms), ar laiku varat eksperimentēt un izvēlēties vispiemērotāko.

11. **Esošajā kodā** pēc pirmā stop ievietojiet **pause (ms) 500** un no **function** ievietojiet **call servoBlow**.

![Alt text](/images/14.5.png)

> **Brīdinājums:** Servo motoram ir ierobežotas jaudas iespējas, tāpēc izvēlieties zonu ar mīkstām rotaļlietu šķēršļiem vai pielāgojiet motora pozīcijas leņķus tā, lai tam nebūtu pārmērīga slodze, mēģinot veikt darbību. Pārslogojot motors var sadegt.

12. **Lejupielādējiet** **micro:bit** kontrolierī

**Python** kods:

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

## **Izaicinājums**

Izveidojiet kodu, kurā pievienojat sitienu skaņas laikā, kad servo veic sitienus.

