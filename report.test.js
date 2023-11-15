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

test("sortPages 5 pages", () => {
    const input = {
        'https://faisalnazir.tech/stats': 7,
        'https://faisalnazir.tech/contact': 9,
        'https://faisalnazir.tech/skills': 1,
        'https://faisalnazir.tech/about': 5,
        'https://faisalnazir.tech': 3
    }
    const actual = sortPages(input)
    const expected = [
        ['https://faisalnazir.tech/contact', 9],
        ['https://faisalnazir.tech/stats', 7],
        ['https://faisalnazir.tech/about', 5],
        ['https://faisalnazir.tech', 3],
        ['https://faisalnazir.tech/skills', 1]
    ]
    expect(actual).toEqual(expected)
})