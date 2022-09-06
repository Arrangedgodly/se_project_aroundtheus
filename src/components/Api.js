export class Api {
    constructor(promiseInformation) {
        this.url = promiseInformation.baseUrl;
        this.headers = promiseInformation.headers;
    }

    getUserData() {
       return fetch(`${this.url}users/me`, {
            headers: this.headers
        })
        .then(res => res.ok ? res.json() : Promise.reject(`Error: ${res.status}`))
        .catch(err => console.log(err))
    }

    getInitialCards() {
        return fetch(`${this.url}cards`, {
            headers: this.headers
        })
        .then(res => res.ok ? res.json() : Promise.reject(`Error: ${res.status}`))
        .catch(err => console.log(err))
    }

    submitUserEdit() {
        return fetch(`${this.url}users/me`, {
            method: "PATCH",
            headers: this.headers,
            body: JSON.stringify({
                name: "Grady Wasil",
                about: "Musician and Software Engineer in Training"
            })
        })
        .then(res => res.ok ? res.json() : Promise.reject(`Error: ${res.status}`))
        .catch(err => console.log(err))
    }

    postNewCard() {
        return fetch(`${this.url}cards`, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify({
                name: "Lava Pit",
                link: "https://images.unsplash.com/photo-1619266465172-02a857c3556d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80"
            })
        })
    }
}