export class UserInfo {
  constructor({ userNameSelector, userJobSelector, userImageSelector }) {
    this._nameElement = document.querySelector(userNameSelector);
    this._jobElement = document.querySelector(userJobSelector);
    this._imageElement = document.querySelector(userImageSelector);
  }

  getUserInfo() {
    return {
      userName: this._nameElement.textContent,
      userJob: this._jobElement.textContent };
  }

  setUserInfo({userName, userJob}) {
    this._nameElement.textContent = userName;
    this._jobElement.textContent = userJob;
  }

  setUserImage({userImage}) {
    this._imageElement.src = userImage;
  }
}