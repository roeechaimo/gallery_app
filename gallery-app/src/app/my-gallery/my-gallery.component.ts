import { Component, OnInit, Input } from "@angular/core";
import { FeedService } from "./services/feed/feed.service";
import { Image } from "./models/image.model";

@Component({
  selector: "app-my-gallery",
  templateUrl: "./my-gallery.component.html",
  styleUrls: ["./my-gallery.component.scss"]
})
export class MyGalleryComponent implements OnInit {
  @Input() feed: string;

  public images: Image[];

  constructor(private _feedService: FeedService) {}

  ngOnInit() {
    this.getFeed();
  }

  public getFeed() {
    this._feedService.getFeed(this.feed).subscribe((data: Image[]) => {
      this.images = data;
    });
  }
}
