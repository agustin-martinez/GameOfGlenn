export function splitOnSpecialChars(text, specialChars) {
  const result = [];
  let buffer = "";

  for (const char of text) {
    if (specialChars.includes(char)) {
      if (buffer) {
        result.push({ chunk: buffer, isSpecialChars: false });
        buffer = "";
      }
      result.push({ chunk: char, isSpecialChars: true });
    } else {
      buffer += char;
    }
  }
  if (buffer) {
    result.push({ chunk: buffer, isSpecialChars: false });
  }
  return result;
}
