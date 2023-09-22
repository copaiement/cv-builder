const currKeys = [];

export function generateKey() {
  let nextKey = currKeys.length
  currKeys.push(nextKey);
  return nextKey;
}