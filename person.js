class Person
{
    constructor(a,b,c,d)
    {
        this.name=a;
        this.age=b;
        this.email=c;
        this.address=d
    }
}
var details=new Person("Raman",24,"saran@gmail.com","bharathi nagar")
for(var k in details)
{
    console.log(k,details[k]);
}