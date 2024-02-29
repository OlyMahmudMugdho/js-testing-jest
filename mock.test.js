test("mock testing", () => {
    const mock = jest.fn(x => x*x)

    expect(mock(2)).toBe(4)

    expect(mock).toHaveBeenCalledWith(2)
})