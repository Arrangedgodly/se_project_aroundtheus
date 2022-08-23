const profileName = document.querySelector(".profile__name");
const profileDesc = document.querySelector(".profile__desc");

export class UserInfo {
  constructor({ userName, userJob }) {
    this._userName = userName;
    this._userJob = userJob;
  }

  getUserInfo() {
    return { userName , userJob };
  }

  setUserInfo() {
    profileName.textContent = this._userName;
    profileDesc.textContent = this._userJob;
  }
}