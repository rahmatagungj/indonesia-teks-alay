// use this dictionary to replace the character
const uniqChar = {
  A: "4",
  I: "1",
  i: "y",
  c: "tj",
  s: "c",
  r: "l",
  E: "3",
  O: "0",
  g: "9",
  S: "5",
  G: "6",
}

function textOverAct(text) {
  if (typeof text !== "string" || !text) throw new Error("input is not a string or empty")

  const charArr = [...text]
  charArr.forEach(c => uniqChar.hasOwnProperty(c) ? text = text.replace(c, uniqChar[c]) : '')

  return text
}

// dont change the code below
exports.textOverAct = textOverAct
