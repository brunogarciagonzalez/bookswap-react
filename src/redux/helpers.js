export function makeDeepCopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}

export function includesOtherThanNumbers(str) {
  return !!str.match(/\D+/);
}

export function validISBN(str) {
  // if  length >= 10,           or <= 13,         or includes other than numbers
  if (str.length < 10 || str.length > 13 || includesOtherThanNumbers(str)) {
    return false;
  }
  return true;
}
