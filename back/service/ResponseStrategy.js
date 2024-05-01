const fs = require('fs');
const path = require('path');
const BaseResponse = require('../responseTypes/BaseResponse')

class ResponseStrategy {
    constructor() {
        this.registry = new Map();
        this.instantiateResponseTypes();
    }

    getKeywordsFromResponseTypes() {
        const keywords = [];
        const currentProjectPath = path.resolve(__dirname, '..');
        const strategiesFolderPath =  path.join(currentProjectPath, "/responseTypes/impl");

        fs.readdirSync(strategiesFolderPath).forEach((file) => {
            const strategyFilePath = path.join(strategiesFolderPath, file);
            const StrategyClass = require(strategyFilePath);
            const strategyInstance = new StrategyClass();
            const strategyKeywords = strategyInstance.getKeywords();
            keywords.push(...strategyKeywords);
        });

        return keywords;
    }

    instantiateResponseTypes() {
        const currentProjectPath = path.resolve(__dirname, '..');
        // console.log('Current project path:', currentProjectPath); "./service/QuestManager"
        const strategiesFolderPath =  path.join(currentProjectPath, "/responseTypes/impl");

        fs.readdirSync(strategiesFolderPath)
            .forEach((file) => {
                const strategyFilePath = path.join(strategiesFolderPath, file);
                const StrategyClass = require(strategyFilePath);
                const strategyInstance = new StrategyClass();
                const keywords = strategyInstance.getKeywords();
                keywords.forEach((keyword) => {
                    this.registry.set(keyword, strategyInstance);
                });
            });
    }

    getResponseType(userInput) {
        if (!this.registry.has(userInput)) {
            return new BaseResponse();
        }
        return this.registry.get(userInput);
    }
}

module.exports = ResponseStrategy;
