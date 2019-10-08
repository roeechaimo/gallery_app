import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class FeedService {
  constructor(private _httpClient: HttpClient) {}

  public getFeed(feedPath: string) {
    return this._httpClient.get(feedPath);
  }
}
