input.onButtonPressed(Button.A, function () {
    music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.ForeverInBackground)
    music.setTempo(80)
    game_status = 1
    score = 0
    timer = 30
})
let timer = 0
let score = 0
let game_status = 0
pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
basic.showIcon(IconNames.Yes)
loops.everyInterval(1000, function () {
    timer += -1
})
basic.forever(function () {
    if (game_status == 1) {
        basic.showIcon(IconNames.EigthNote)
        // GND to Pin 0 = playing;  Disconnected = not playing
        if (pins.digitalReadPin(DigitalPin.P1) == 0) {
            music.setVolume(127)
            score += 1
        } else {
            music.setVolume(0)
            score += -1
        }
        if (timer <= 0) {
            music.stopAllSounds()
            basic.showIcon(IconNames.SmallDiamond)
            basic.showIcon(IconNames.Diamond)
            basic.showIcon(IconNames.SmallDiamond)
            basic.pause(500)
            basic.showString("s= " + convertToText(score))
            game_status = 0
        }
    }
})
