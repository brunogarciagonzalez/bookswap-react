export function makeDeepCopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}
