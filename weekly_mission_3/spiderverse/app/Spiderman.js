class Spiderman{
    constructor(name, age, realName, movies, company){
        this.name = name;
        this.age = age;
        this.realName = realName;
        this.movies = movies;
        this.company = company;
    }

    getInfo(){
        return `Hey , Im ${this.name} from ${this.company}`;
    }
}

module.exports = Spiderman;