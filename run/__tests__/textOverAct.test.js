const { textOverAct } = require("../../textOverAct")

describe("Functional Test", () => {
  it("textOverAct should be defined", () => {
    expect(textOverAct).toBeDefined()
  })

  it("textOverAct should not throw any error", () => {
    expect(textOverAct("abc")).not().toThrowError()
    expect(textOverAct("abcdefghijklmnopqrstuvwxyz")).not().toThrowError()
  })

  it("toThrowError should throw error if input not a string", () => {
    expect(() => textOverAct(1)).toThrowError()
    expect(() => textOverAct(true)).toThrowError()
    expect(() => textOverAct(null)).toThrowError()
    expect(() => textOverAct(undefined)).toThrowError()
    expect(() => textOverAct({})).toThrowError()
    expect(() => textOverAct([])).toThrowError()
  })

  it("textOverAct should return a string", () => {
    expect(textOverAct("abc")).toBeType("string")
    expect(textOverAct("abcdefghijklmnopqrstuvwxyz")).toBeType("string")
  })

  it("textOverAct should throw error if input empty", () => {
    expect(() => textOverAct()).toThrowError()
    expect(() => textOverAct("")).toThrowError()
  })

  it("textOverAct should return not the same with inputed text", () => {
    expect(textOverAct("abc")).not().toBe("abc")
    expect(textOverAct("abcdefghijklmnopqrstuvwxyz"))
      .not()
      .toBe("abcdefghijklmnopqrstuvwxyz")
  })
})

describe("Basic Test", () => {
  it("Test Case #1", () => {
    expect(textOverAct("abc")).toEqual("abtj")
  })

  it("Test Case #2", () => {
    expect(textOverAct("abcdefghijklmnopqrstuvwxyz")).toEqual(
      "abtjdef9hyjklmnopqlctuvwxyz"
    )
  })

  it("Test Case #3", () => {
    expect(textOverAct("ini adalah contoh text")).toEqual(
      "yny adalah tjontoh text"
    )
  })

  it("Test Case #4", () => {
    expect(textOverAct("budi orang baik")).toEqual("budy olan9 bayk")
  })

  it("Test Case #5", () => {
    expect(textOverAct("pada suatu hari")).toEqual("pada cuatu haly")
  })
})

describe("Deep Test", () => {
  it("Test Case #1", () => {
    expect(textOverAct("PaDA SENIN BeSOK")).toStrictEqual("PaD4 53N1N Be50K")
  })

  it("Test Case #2", () => {
    expect(textOverAct("Aku Seorang Pemuda YanG Baik HatI")).toStrictEqual(
      "4ku 5eolan9 Pemuda Yan6 Bayk Hat1"
    )
  })

  it("Test Case #3", () => {
    expect(textOverAct("naik NAIK kE PunCAk GunuNG")).toStrictEqual(
      "nayk N41K k3 PunC4k 6unuN6"
    )
  })

  it("Test Case #4", () => {
    expect(textOverAct("K3mb4lI k3 Rum4h")).toStrictEqual("K3mb4l1 k3 Rum4h")
  })

  it("Test Case #5", () => {
    expect(textOverAct("The quick brown fox jumps over the lazy dog")).toStrictEqual("The quytjk blown fox jumpc ovel the lazy do9")
  })
})
