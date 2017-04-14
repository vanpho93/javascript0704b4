class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class Line {
    constructor(diemA, diemB) {
        this.diemA = diemA;
        this.diemB = diemB;
    }
    getLength() {
        const dx = this.diemA.x - this.diemB.x;
        const dy = this.diemA.y - this.diemB.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
}

class Triangle {
    constructor(p1, p2, p3) {
        this.p1 = p1;
        this.p2 = p2;
        this.p3 = p3;
    }
    getChuVi() {
        const l1 = new Line(this.p1, this.p2);
        const l2 = new Line(this.p1, this.p3);
        const l3 = new Line(this.p3, this.p2);
        return l1.getLength() + l2.getLength() + l3.getLength();
    }
}

const A = new Point(0, 1);
const B = new Point(1, 0);
const C = new Point(0, 0);

const AB = new Line(A, B);
const ABC = new Triangle(A, B, C);
// console.log(AB.getLength());
console.log(ABC.getChuVi());