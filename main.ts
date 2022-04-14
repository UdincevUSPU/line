function стоп () {
    pins.analogWritePin(AnalogPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)
    pins.analogWritePin(AnalogPin.P1, 0)
}
function Вперед () {
    pins.analogWritePin(AnalogPin.P1, лево)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 1)
    pins.analogWritePin(AnalogPin.P0, право)
}
function вдоль_линии () {
    while (true) {
        if (pins.analogReadPin(AnalogPin.P2) < 0) {
            Лево()
        } else {
            Право()
        }
        basic.pause(1)
    }
}
function Право () {
    pins.analogWritePin(AnalogPin.P0, право)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P16, 0)
    pins.analogWritePin(AnalogPin.P1, лево)
}
function назад () {
    pins.analogWritePin(AnalogPin.P0, право)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 1)
    pins.analogWritePin(AnalogPin.P1, лево)
}
function Лево () {
    pins.analogWritePin(AnalogPin.P0, право)
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)
    pins.analogWritePin(AnalogPin.P1, лево)
}
function до_линии () {
    while (pins.analogReadPin(AnalogPin.P2) < 0) {
        Вперед()
        basic.pause(1)
    }
    стоп()
}
let лево = 0
let право = 0
право = 300
лево = 300
basic.forever(function () {
    while (!(input.buttonIsPressed(Button.B))) {
        if (pins.analogReadPin(AnalogPin.P2) < 500) {
            Лево()
        } else {
            Право()
        }
        basic.pause(1)
    }
})
