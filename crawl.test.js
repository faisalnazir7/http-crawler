const {normalizeURL, getURLsFromHTML} = require("./crawl.js")
const {test, expect} = require("@jest/globals")

test("normalizeURL strip protocol", () => {
    const input = 'https://faisalnazir.tech/about'
    const actual = normalizeURL(input)
    const expected = 'faisalnazir.tech/about'
    expect(actual).toEqual(expected)
})

test("normalizeURL strip trailing slash", () => {
    const input = 'https://faisalnazir.tech/about/'
    const actual = normalizeURL(input)
    const expected = 'faisalnazir.tech/about'
    expect(actual).toEqual(expected)
})

test("normalizeURL capitals", () => {
    const input = 'https://FAISALNAZIR.tech/about'
    const actual = normalizeURL(input)
    const expected = 'faisalnazir.tech/about'
    expect(actual).toEqual(expected)
})

test("normalizeURL strip http", () => {
    const input = 'http://faisalnazir.tech/about'
    const actual = normalizeURL(input)
    const expected = 'faisalnazir.tech/about'
    expect(actual).toEqual(expected)
})

test("getURLsFromHTML absolute", () => {
    const inputHTML = `
    <html>
        <body>
            <a href="https://faisalnazir.tech/about/">
                Faisal Nazir
            </a>    
        </body>
    </html>
    `
    const inputBaseURL = "https://faisalnazir.tech/about/"
    const actual = getURLsFromHTML(inputHTML, inputBaseURL)
    const expected = ["https://faisalnazir.tech/about/"]
    expect(actual).toEqual(expected)
})

test("getURLsFromHTML relative", () => {
    const inputHTML = `
    <html>
        <body>
            <a href="/about/">
                Faisal Nazir
            </a>
        </body>
    </html>
    `
    const inputBaseURL = "https://faisalnazir.tech"
    const actual = getURLsFromHTML(inputHTML, inputBaseURL)
    const expected = ["https://faisalnazir.tech/about/"]
    expect(actual).toEqual(expected)
})

test("getURLsFromHTML both", () => {
    const inputHTML = `
    <html>
        <body>
            <a href="/about/">
                Faisal Nazir
            </a>
            <a href="/stats/">
                Faisal Nazir
            </a>
        </body>
    </html>
    `
    const inputBaseURL = "https://faisalnazir.tech"
    const actual = getURLsFromHTML(inputHTML, inputBaseURL)
    const expected = ["https://faisalnazir.tech/about/", "https://faisalnazir.tech/stats/"]
    expect(actual).toEqual(expected)
})