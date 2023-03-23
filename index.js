class Polygon {
  constructor(sideArr) {
    this.sideArr = sideArr;
    this.count = this.sideArr.length;
  }

  get countSides() {
    return this.sideArr.length;
  }

  get perimeter() {
    if (!Array.isArray(this.sideArr)) return;
    let sum = 0;
    for (let int of this.sideArr) {
      sum += int;
    }
    return sum;
  }
}

class Triangle extends Polygon {
  get isValid() {
    if (!Array.isArray(this.sideArr)) return;
    if (this.count !== 3) return;
    let side1 = this.sideArr[0];
    let side2 = this.sideArr[1];
    let side3 = this.sideArr[2];
    return (
      side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1
    );
  }
}

class Square extends Polygon {
  get isValid() {
    if (!Array.isArray(this.sideArr)) return;
    if (this.count !== 4) return;
    let side1 = this.sideArr[0];
    let side2 = this.sideArr[1];
    let side3 = this.sideArr[2];
    let side4 = this.sideArr[3];
    return side1 === side2 && side1 === side3 && side1 === side4;
  }

  get area() {
    if (!Array.isArray(this.sideArr)) return;
    if (this.count !== 4) return;
    return this.sideArr[0] * this.sideArr[0];
  }
}
