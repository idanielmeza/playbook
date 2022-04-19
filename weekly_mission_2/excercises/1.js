const repo = {
    name: "LaunchX",
    author: "carlogilmar",
    language: "JavaScript",
    numberOfCommits: 100,
    stars: 199,
    forks: 299,
    issues_open: 10,
    issues_close: 10,
    getTotalIssues: function(){
      return this.issues_open + this.issues_close
    },
    getGeneralInfo: function(){
      return `This repository ${this.name} was created by ${this.author}`
    }
   }
   
console.log("Nombre del repo:" + repo.name)
console.log("Issues totales: " + repo.getTotalIssues())
console.log(repo.getGeneralInfo())

const issue = {
    title: "Error en el codigo",
    respositoryNameAsociated: "LaunchX",
    status: "open",
    numberOfComments: 10,
    labels: ["bug", "error"],
    author: 'idanielmeza',
    dateCreated: '2020-05-01',
    lastUpdated: '2020-05-02',
    getTitleAndAutor: function(){
        return `${this.title} - ${this.author}`
    },
    getGeneralInfo: function(){
        return `${this.title} - ${this.author} - ${this.dateCreated} - ${this.lastUpdated} - Status: ${this.status} - numberOfComments: ${this.numberOfComments} - labels: ${this.labels}`
    }

}

console.log("Titulo del issue:" + issue.title)
console.log(issue.getTitleAndAutor());
console.log(issue.getGeneralInfo());


const pullRequest = {
    title: "Error en el codigo",
    brachName: 'main',
    dateCreated: '2020-05-01',
    status: 'open',
    repositoryNameAsociated: 'LaunchX',
    author: 'idanielmeza',
    getStatus: function(){
        return `${this.status}`
    },
    getTitleAndAuthor: function(){
        return `${this.title} - ${this.author}`
    }
}

console.log(`Titulo del pullRequest: ${pullRequest.title}`)
console.log(`Branch: ${pullRequest.brachName}`)
console.log(`Status: ${pullRequest.getStatus()}`)
console.log(pullRequest.getTitleAndAuthor());

//Twitter

const twitterUser = {
    user: 'idanielmeza',
    followers: 100,
    following: 200,
    name: 'Daniel Meza',
    getFollowers: function(){
        return `${this.followers}`
    }
}

const twitterTT = {
    title: '#Edomex',
    numberOfTweets: 100,
    numberOfRetweets: 200,
    categories: ['politics', 'sports', 'entertainment'],
    getNumberOfTweets: function(){
        return `${this.numberOfTweets}`
    }
}

const twitterHashtag = {
    hashtag: '#Edomex',
    numberOfTweets: 100,
    numberOfRetweets: 200,
    categories: ['politics', 'sports', 'entertainment'],
}

//Facebook
const facebookUser = {
    name: 'Daniel Ledezma',
    user: 'idanielmeza',
    friends: 100,
    followers: 200,
    age: 22,
    numberOfStories: 10,
    getFriends: function(){
        return `${this.friends}`
    },
    getFollowers: function(){
        return `${this.followers}`
    }
}

const facebookPost = {
    author: 'idanielmeza',
    description: 'This is a post',
    type: 'text',
    numberOfLikes: 100,
    numberOfComments: 200,
    numberOfShares: 300,
    getNumberOfLikes: function(){
        return `${this.numberOfLikes}`
    },
    getNumberOfComments: function(){
        return `${this.numberOfComments}`
    }
}

const facebookBiography = {
    user: 'idanielmeza',
    name: 'Daniel Meza',
    age: 22,
    numberOfFriends: 100,
    numberOfFollowers: 200,
    numberOfStories: 10,
    banner: 'https://image.jpg',
    photo: 'https://image.jpg',
    setPhoto: function(url){
        this.photo = url;
    }
}

//Uber
const uberProfile = {
    name: 'Daniel Meza',
    user: 'idanielmeza',
    lenguage: 'es',
    numberOfTrips: 100,
    location: 'Mexico',	
    email: 'prueba@corroe.es',
    getNumberOfTrips: function(){
        return `${this.numberOfTrips}`
    }
}

const uberTravel = {
    user: 'idanielmeza',
    dateCreated: '2020-05-01',
    dateUpdated: '2020-05-02',
    origin: 'Veracruz',
    destination: 'Veracruz 2',
    distance: '100km',
    getDateCreated: function(){
        return `${this.dateCreated}`
    }
}
