test('GLOBAL SCOPE', () => {

    let name = 'Eleanor'
    let age = 25

    const greet = () => `Hello, ${name}!`

    expect(greet()).toBe('Hello, Eleanor!')
})
