const khoa = { name: 'Khoa Pham', age: 30 };
const huong = { name: 'Huong', age: 29 };

function Nguoi(ten, tuoi, vo) {
    this.name = ten;
    this.age = tuoi;
    this.wife = vo;
    this.show = function() {
        console.log(this.name + '::' + this.age);
    }
    this.getAge = function() {
        return this.age;
    }
    this.growUp = function() {
        this.age++;
    }
}

const phat = new Nguoi('Phat', 18, huong);
phat.growUp();
console.log(JSON.stringify(phat));

// phat.show();

// console.log(phat.age);
// // console.log(khoa.name);
// // console.log(huong);

// function Point(x, y) {
//     this.x = x;
//     this.y = y;
// }

// const diemO = new Point(0, 0);
