const video = {
    play() {
        return true
    }
}

describe('spy test:', () => {
    it('should mock', () => {
        const spy = jest.spyOn(video, 'play')
        video.play()
        
        expect(spy).toHaveBeenCalledTimes(1)
    })
})