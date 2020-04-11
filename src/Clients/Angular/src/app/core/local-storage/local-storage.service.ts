import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class LocalStorageService {
  private static readonly userKeysKey: string = "UserKeys";

  private readonly userKeys: string[];

  constructor() {
    this.userKeys = this._getItem<string[]>(LocalStorageService.userKeysKey);
    if (!this.userKeys) {
      this.userKeys = [];
    }
  }

  /**
   * Retrieve value from local storage
   * Will return null if there is no value
   */
  public getItem<T>(key: string): T {
    return this._getItem<T>(key);
  }

  /**
   * Add value to local storage
   */
  public setItem(key: string, value: any) {
    this._setItem(key, value);
  }

  /**
   * Remove item from local storage
   */
  public removeItem(key: string) {
    const userKeyIndex = this.userKeys.indexOf(key);
    if (userKeyIndex >= 0) {
      this.userKeys.splice(userKeyIndex, 1);
      this._storeUserKeys();
    }

    this._removeItem(key);
  }

  /**
   * Add user item to local storage
   * User items will be cleared when another user uses the same browser cache
   */
  public setUserItem(key: string, value: any) {
    if (this.userKeys.indexOf(key) < 0) {
      this.userKeys.push(key);
      this._storeUserKeys();
    }

    this._setItem(key, value);
  }

  /**
   * Clears all stored user items
   */
  public clearUserItems() {
    while (this.userKeys.length > 0) {
      const key = this.userKeys.pop();
      this._removeItem(key);
    }

    this._storeUserKeys();
  }

  private _getItem<T>(key: string): T {
    const value = localStorage.getItem(key);

    return value ? JSON.parse(value) : null;
  }

  private _setItem(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  private _removeItem(key: string) {
    localStorage.removeItem(key);
  }

  private _storeUserKeys() {
    this._setItem(LocalStorageService.userKeysKey, this.userKeys);
  }
}
