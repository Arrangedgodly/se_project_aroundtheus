export class Api {
    constructor(promiseInformation) {
        this.url = promiseInformation.baseUrl;
        this.headers = promiseInformation.headers;
    }

    getUserData() {
       return fetch(`${this.url}users/me`, {
            headers: this.headers
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }

                return Promise.reject(`Error: ${res.status}`);
            })
    }

    getInitialCards() {
        return fetch(`${this.url}cards`, {
            headers: this.headers
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }

                return Promise.reject(`Error: ${res.status}`);
            })
    }
}