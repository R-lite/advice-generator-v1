const { Module } = require("module");
const axios = require('axios');

const getAdvice = async () => {
    try {
        return await axios.get('https://api.adviceslip.com/advice');
    } catch {
        const data = {
            "id": -1,
            "advice": "Could not retrieve advice from the server... Sometimes trying multiple times may be the solution"
        }
        return data;
    }
}

result = getAdvice();
console.log(result)
Module.export = getAdvice;