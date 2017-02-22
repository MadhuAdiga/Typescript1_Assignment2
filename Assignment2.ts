class Animal {
    name: string;
    constructor(theName: string) { this.name = theName; }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
    behave(trait: string) {
        console.log(`${this.name} does a ${trait}.`);
    }
}

class Snake extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 5) {
        console.log("My Snake is Slithering...");
        super.move(distanceInMeters);
    }
    behave(trait = "hiss") {
        console.log("Hissing SCARILY!!..");
        super.behave(trait);
    }
}

class Dog extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 5) {
        console.log("My Dog is Jumping around..");
        super.move(distanceInMeters);
    }
    behave(trait) {
        console.log("Eating stuff...");
        super.behave(trait);
    }
}

class Cat extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters) {
        console.log("My Cat is Not moving");
        super.move(distanceInMeters);
    }
    behave(trait) {
        console.log("Doing nothing");
        super.behave(trait);
    }
}

class Horse extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 45) {
        console.log("That Horse is Galloping...");
        super.move(distanceInMeters);
    }
}

let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Horse");
let koko = new Dog("Koko the fluffy dog");
let meow= new Cat("Meow the lazy feline")

sam.behave();
tom.move(34);
koko.behave("Dog stunt");
meow.move(0);
meow.behave("NOTHING!")
