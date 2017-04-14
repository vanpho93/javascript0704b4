const khoa = { name: 'Khoa Pham', age: 30 };
const huong = { name: 'Huong', age: 29 };

function Nguoi(ten, tuoi) {
    this.name = ten;
    this.age = tuoi;
    this.show = function() {
        console.log(this.name + '::' + this.age);
    }
}

const phat = new Nguoi('Phat', 18);

phat.show();

console.log(phat.age);
// console.log(khoa.name);
// console.log(huong);

function Point(x, y) {
    this.x = x;
    this.y = y;
}

const diemO = new Point(0, 0);
