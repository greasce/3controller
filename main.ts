buttonClicks.onButtonHeld(buttonClicks.AorB.A, function () {
    radio.sendNumber(0.1)
})
basic.forever(function () {
    radio.setGroup(99)
})
