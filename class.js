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

class Person {
    constructor(name, age, wife) {
        this.name = name;
        this.age = age;
        this.wife = wife;
    }

    show() {
        console.log(this.name + '::' + this.age);
    }

    getAge() {
        return this.age;
    }

    growUp() {
        this.age++;
    }
}
