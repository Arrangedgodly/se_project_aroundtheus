import { profileName, profileDesc } from "../utils/constants.js";

export class UserInfo {
  constructor({ userName, userJob }) {
    this._userName = userName;
    this._userJob = userJob;
  }

  getUserInfo() {
    return { userName: profileName.textContent, userJob: profileDesc.textContent };
  }

  setUserInfo() {
    profileName.textContent = this._userName;
    profileDesc.textContent = this._userJob;
  }
}