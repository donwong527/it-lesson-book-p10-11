input.onGesture(Gesture.EightG, function () {
    basic.showIcon(IconNames.Sad)
    basic.pause(2000)
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
    basic.showString("" + input.lightLevel() + "%")
    basic.pause(200)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 1; index++) {
        basic.showNumber(10)
        basic.pause(500)
    }
    for (let index = 0; index < 1; index++) {
        basic.showNumber(9)
        basic.pause(500)
    }
    for (let index = 0; index < 1; index++) {
        basic.showNumber(8)
        basic.pause(500)
    }
    for (let index = 0; index < 1; index++) {
        basic.showNumber(7)
        basic.pause(500)
    }
    for (let index = 0; index < 1; index++) {
        basic.showNumber(6)
        basic.pause(500)
    }
    for (let index = 0; index < 1; index++) {
        basic.showNumber(5)
        basic.pause(500)
    }
    for (let index = 0; index < 1; index++) {
        basic.showNumber(4)
        basic.pause(500)
    }
    for (let index = 0; index < 1; index++) {
        basic.showNumber(3)
        basic.pause(500)
    }
    for (let index = 0; index < 1; index++) {
        basic.showNumber(2)
        basic.pause(500)
    }
    for (let index = 0; index < 1; index++) {
        basic.showNumber(1)
        basic.pause(500)
    }
    for (let index = 0; index < 1; index++) {
        basic.showNumber(0)
        basic.pause(500)
    }
    for (let index = 0; index < 10; index++) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.pause(100)
        basic.clearScreen()
        basic.pause(100)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + input.temperature() + "'C")
    basic.pause(200)
    basic.clearScreen()
})
