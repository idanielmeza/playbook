class Repo {
    constructor(name,autor,lenguaje,numberOfCommits,stars,forks,issues_open,issues_close){
        this.name = name;
        this.author = autor;
        this.lenguaje = lenguaje;
        this.numberOfCommits = numberOfCommits;
        this.stars = stars;
        this.forks = forks;
        this.issues_open = issues_open;
        this.issues_close = issues_close;

    }

    getTotalIssues(){
        return this.issues_open + this.issues_close
    }

    getGeneralInfo(){
        return `This repository ${this.name} was created by ${this.author}`
    }
}

class Issues{
    constructor(title,author,dateCreated,lastUpdated,status,numberOfComments,labels, repositoryNameAsociated){
        this.title = title;
        this.repositoryNameAsociated = repositoryNameAsociated;
        this.status = status;
        this.numberOfComments = numberOfComments;
        this.labels = labels;
        this.author = author;
        this.dateCreated = dateCreated;
        this.lastUpdated = lastUpdated;
    }

    getTitleAndAutor(){
        return `${this.title} - ${this.author}`
    }

    getGeneralInfo(){
        return `${this.title} - ${this.author} - ${this.dateCreated} - ${this.lastUpdated} - Status: ${this.status} - numberOfComments: ${this.numberOfComments} - labels: ${this.labels}`
    }

    setTitle(title){
        this.title = title;
    }

    setAuthor(author){
        this.author = author;
    }
}

class PullRequest{
    constructor(title, brachName, dateCreated, status, repositoryNameAsociated, author){
        this.title = title;
        this.brachName = brachName;
        this.dateCreated = dateCreated;
        this.status = status;
        this.repositoryNameAsociated = repositoryNameAsociated;
        this.author = author;

    }

    getStatus(){
        return `${this.status}`
    }

    getTitleAndAuthor(){
        return `${this.title} - ${this.author}`
    }

    setTitle(title){
        this.title = title;
    }

    setAuthor(author){
        this.author = author;
    }

}

module.exports = {
    Repo,
    Issues,
    PullRequest
}