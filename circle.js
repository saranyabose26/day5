class Circle
{
    constructor(radius,color)
    {
        this.radius=radius;
        this.color=color;
    }
    getcolor(){
        return this.color;
    }
    getradius(){
        return this.radius;
    }
    getarea(){
        var pi=3.14;
        var area=pi*Math.sqrt(this.radius);
        return area;

    }
    getcircumference()
    {
        var pi=3.14;
        var cir=2*pi*this.radius;
        return cir
    }
}
var c=new Circle("1.0","red")
console.log(c.getcolor());
console.log(c.getradius());
console.log(c.getarea());
console.log(c.getcircumference());
