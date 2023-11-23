class Movie
{
    constructor(title,studio,rating)
    {
    this.title=title;
    this.studio=studio;
    this.rating=rating;
    }
    getPG()
    {
        return this.title + this.studio + this.rating;
    }
}
var m =new Movie("Casino Royale", "Eon Productions","PG­13");
console.log(m.getPG());