const play = require("./spies")


test("spies test", () => {
    const video = {
        play
    }

    const spy = jest.spyOn(video, 'play')
    
    video.play()

    expect(spy).toHaveBeenCalled();

    spy.mockRestore()
})