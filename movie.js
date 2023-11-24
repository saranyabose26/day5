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
       const movi=["Movie1 PG","Movie2 PG","Movie3 PG"];
       return movi;

    }
}
var m =new Movie("Casino Royale", "Eon Productions","PG­13");
console.log(m.getPG());