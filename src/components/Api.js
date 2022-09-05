class Api {
    constructor(promiseInformation) {
        this.url = promiseInformation.baseUrl;
        this.headers = promiseInformation.headers;
    }

    getUserData() {
        fetch(`${this.url}users/me`, {
            headers: this.headers
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }

                return Promise.reject("Error");
            })
    }
}