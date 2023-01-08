import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export abstract class BrowserStorageService {

  constructor(
    private readonly storage: Storage,
  ) { }

  protected get<T>(key: string): T | null {
    const item = this.storage.getItem(key);
    if (item === null) {
      return null;
    }
    const parsedItem = this.tryParse<T>(item);
    return parsedItem;
  }

  protected set<T>(key: string, value: T): void {
    this.storage.setItem(key, JSON.stringify(value));
  }

  protected remove(key: string): void {
    this.storage.removeItem(key);
  }

  private tryParse<T>(item: string): T | null {
    try {
      JSON.parse(item) as T;
    } catch (e) {
      return null;
    }
    return JSON.parse(item) as T;
  }

}
