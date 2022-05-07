const FizzBuzzService = require('../models/FizzBuzz');

class ExplorerController{
    static appliValidationInExplorer(score){
        return FizzBuzzService.appliValidationInExplorer(score);
    }

    static byMission(mission){
        const explorers = require('../../explorers.json');
        return explorers.filter(explorer => explorer.mission === mission).map(explorer => explorer.name);
    }
}

module.exports = ExplorerController;