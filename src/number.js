export default class numberReverse {
  constructor(number) {
    this.numberToReverse = number;
  }
  reverseNumber() {
    if (typeof this.numberToReverse === "number") {
      const numberArray = this.numberToReverse
        .toString()
        .split("")
        .reverse()
        .join("");
      return parseInt(numberArray);
    }
    return NaN;
  }
}
