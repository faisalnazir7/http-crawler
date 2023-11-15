const { sortPages } = require("./report.js")
const {test, expect} = require("@jest/globals")

test("sortPages 2 pages", () => {
    const input = {
        'https://faisalnazir.tech/about': 1,
        'https://faisalnazir.tech': 3
    }
    const actual = sortPages(input)
    const expected = [
        ['https://faisalnazir.tech', 3],
        ['https://faisalnazir.tech/about', 1]
    ]
    expect(actual).toEqual(expected)
})