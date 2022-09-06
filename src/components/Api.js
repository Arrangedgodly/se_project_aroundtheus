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

    submitUserEdit(data) {
        return fetch(`${this.url}users/me`, {
            method: "PATCH",
            headers: this.headers,
            body: JSON.stringify({
                name: data.name,
                about: data.about
            })
        })
        .then(res => res.ok ? res.json() : Promise.reject(`Error: ${res.status}`))
        .catch(err => console.log(err))
    }

    postNewCard(data) {
        return fetch(`${this.url}cards`, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify({
                name: data.name,
                link: data.link
            })
        })
    }

    addCardLike(id) {
        return fetch(`${this.url}cards/${id}`, {
            method: "PUT",
            headers: this.headers
        })
    }

    removeCardLike(id) {
        return fetch(`${this.url}cards/${id}`, {
            method: "DELETE",
            headers: this.headers
        })
    }
}