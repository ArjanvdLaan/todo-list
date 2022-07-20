import {addNewTask} from './script.js';

const data = {description: "buy soup", done: false};

async function testLocalHost() {
    try {
        const apiUrl = "http://localhost:3000/";
        const response = await fetch(apiUrl, {
                method: "GET",
                // body: JSON.stringify(data),
                headers: {"Content-Type": "application/json"},
            })
        const returnValue = await response.json();
        return returnValue;
    } catch (error) {
        console.log(error);
    }
}

async function awaitTestLocalHost() {
    const testCall =  await testLocalHost();
    console.log(testCall);
}

awaitTestLocalHost();