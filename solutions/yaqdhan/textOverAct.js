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
  if (typeof text != "string" || text.trim() === "") throw Error("Value given is not a string");
  
  const regex = new RegExp(`[${Object.keys(uniqChar).join("")}]`, "g");
  return text.replace(regex, (match) => uniqChar[match]);
}

// dont change the code below
exports.textOverAct = textOverAct
  