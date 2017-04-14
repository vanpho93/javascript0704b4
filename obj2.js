function Point(x, y) {
    this.x = x;
    this.y = y;
}

function Line(diemA, diemB) {
    this.diemA = diemA;
    this.diemB = diemB;
    this.getLength = function() {
        const dx = this.diemA.x - this.diemB.x;
        const dy = this.diemA.y - this.diemB.y;
        return Math.sqrt(dx*dx + dy*dy);
    }
}

const A = new Point(0, 1);
const B = new Point(1, 0);

const AB = new Line(A, B);
console.log(AB.getLength());
