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
};

function textOverAct(text) {
  if (!text || typeof text !== "string") throw new Error();

  const arrayOfChars = text.split("");
  const key = Object.keys(uniqChar);

  arrayOfChars.forEach((char, index) => {
    if (key.includes(char)) {
      arrayOfChars[index] = uniqChar[char];
    }
  });

  return arrayOfChars.join("");
}

// dont change the code below
exports.textOverAct = textOverAct;
