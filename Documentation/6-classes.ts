class Point {
    x: number;
    y: number;
}

const pt = new Point();

pt.x = 0;
pt.y = 0;

console.log(pt);

class BadGreeter {
    name: string;
}

class GoodGreeter {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

class OKGreeter {
    // Not initialized, but no error
    name!: string;
}

// readonly

class Greeter {
    readonly name: string = "World";

    constructor(otherName?: string) {
        if(otherName !== undefined) {
            this.name = otherName;
        }
    }

    err() {
        // Cannot assign to 'name' because it is a read-only property.
        //this.name = "not ok"
    }
}

const g = new Greeter();

//g.name = "also not ok";

// Constructor are very similar to functions. You can add parameters with types and default values.

class PointWithConstructor {
    x: number;
    y: number;

    // Normal signature with defaults
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
}

// Getters and Setters

class C {
    _length = 0;
    get length() {
        return this._length;
    }
    set length(value) {
        this._length = value;
    }
}

interface Pingable {
    ping(): void;
}

class Sonar implements Pingable {
    ping() {
        console.log("ping!");
    }
}

// Ball incorrectly implements interface 'Pingable'
/*
class Ball implements Pingable {
    pong() {
        console.log("pong!");
    }
}
*/








