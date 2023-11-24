class uberPrice
{
    constructor(a,b,c,d,de)
    {
        this.fare=a;
        this.km=b;
        this.time=c;
        this.distance=d;
        this.duration=de;
    }
    getPrice()
    {
        var distcost=this.distance*this.km;
        var timecost=this.duration*this.time;
        var total=this.fare +distcost+timecost;
        return total;
    }
}
var uber=new uberPrice(6,2.4,0.8,10,2.5);
console.log(uber.getPrice());