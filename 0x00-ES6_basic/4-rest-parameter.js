export default function returnHowManyArguments(...params) {
  let count = 0;
  for (const param of params) {
    if (param) count += 1;
  }
  return count;
}
