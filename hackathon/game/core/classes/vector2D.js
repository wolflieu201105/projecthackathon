class Vector2D {
    constructor (x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
    set(otherVector2D) {
        this.x = otherVector2D.x;
        this.y = otherVector2D.y;
        return this;
    }
    add(otherVector2D) {
        this.x += otherVector2D.x;
        this.y += otherVector2D.y;
        return this;
    }
    subtract(otherVector2D) {
        this.x -= otherVector2D.x;
        this.y -= otherVector2D.y;
        return this;
    }
    scale(rate) {
        this.x *= rate;
        this.y *= rate;
        return this;
    }
    getLength() {
        return Math.sqrt(this.x ** 2 + this.y ** 2)
    }
    setLength(newLength) {
        const oldLength = this.getLength();
        const rate = newLength / oldLength;
        this.scale(rate);
        return this;
    }
    getAngle() {
        return Math.atan(this.y / this.x)
    }
}