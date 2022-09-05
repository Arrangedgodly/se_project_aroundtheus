import { promiseInformation } from "./constants";

fetch(`${promiseInformation.baseUrl}users/me`, {
    headers: {
        authorization: promiseInformation.authorizationToken,
        "content-type": "application/json"
    }
})
    .then(res => res.json())
    .then(result => {
        console.log(result)
    });