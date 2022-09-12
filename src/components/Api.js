export class Api {
    constructor(promiseInformation) {
        this.url = promiseInformation.baseUrl;
        this.headers = promiseInformation.headers;
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Error ${res.status}`);
    }

    getUserData() {
       return fetch(`${this.url}users/me`, {
            headers: this.headers
        })
        .then(this._checkResponse)
    }

    getInitialCards() {
        return fetch(`${this.url}cards`, {
            headers: this.headers
        })
        .then(this._checkResponse)
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
        .then(this._checkResponse)
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
        .then(this._checkResponse)
    }

    addCardLike(id) {
        return fetch(`${this.url}cards/likes/${id}`, {
            method: "PUT",
            headers: this.headers
        })
        .then(this._checkResponse)
    }

    removeCardLike(id) {
        return fetch(`${this.url}cards/likes/${id}`, {
            method: "DELETE",
            headers: this.headers
        })
        .then(this._checkResponse)
    }

    deleteCard(id) {
        return fetch(`${this.url}cards/${id}`, {
            method: "DELETE",
            headers: this.headers
        })
        .then(this._checkResponse)
    }

    updateProfilePicture(url) {
        return fetch(`${this.url}users/me/avatar`, {
            method: "PATCH",
            headers: this.headers,
            body: JSON.stringify({
                avatar: url
            })
        })
        .then(this._checkResponse)
    }
}