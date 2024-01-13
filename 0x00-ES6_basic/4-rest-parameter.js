export default function returnHowManyArguments(...params) {
  let count = 0;
  for (const param of params) {
    count += 1;
  }
  return count;
}
