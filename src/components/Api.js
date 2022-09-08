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
        .then(res => res.ok ? res.json() : Promise.reject(`Error: ${res.status}`))
        .catch(err => console.log(err))
    }

    addCardLike(id) {
        return fetch(`${this.url}cards/likes/${id}`, {
            method: "PUT",
            headers: this.headers
        })
        .then(res => res.ok ? res.json() : Promise.reject(`Error: ${res.status}`))
        .catch(err => console.log(err))
    }

    removeCardLike(id) {
        return fetch(`${this.url}cards/likes/${id}`, {
            method: "DELETE",
            headers: this.headers
        })
        .then(res => res.ok ? res.json() : Promise.reject(`Error: ${res.status}`))
        .catch(err => console.log(err))
    }

    deleteCard(id) {
        return fetch(`${this.url}cards/${id}`, {
            method: "DELETE",
            headers: this.headers
        })
        .then(res => res.ok ? res.json() : Promise.reject(`Error: ${res.status}`))
        .catch(err => console.log(err))
    }

    updateProfilePicture(url) {
        return fetch(`${this.url}users/me/avatar`, {
            method: "PATCH",
            headers: this.headers,
            body: JSON.stringify({
                avatar: url
            })
        })
        .then(res => res.ok ? res.json() : Promise.reject(`Error: ${res.status}`))
        .catch(err => console.log(err))
    }
}