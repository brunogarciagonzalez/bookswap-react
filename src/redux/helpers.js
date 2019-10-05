export function makeDeepCopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}

export function validISBN(string) {
  // if  length >= 10,           or <= 13,         or includes other than numbers
  if (string.length < 10 || string.length > 13 || string.match(/\D+/)) {
    return false;
  }
  return true;
}
