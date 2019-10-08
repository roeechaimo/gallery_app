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
  @Input() search: boolean = true;
  @Input() pagination: boolean = true;
  @Input() resultsPerPage: number = 10;
  @Input() sorting: boolean = true;
  @Input() transitionTime: number = 4;

  public images: Image[];
  public filteredImages: Image[];
  public searchValue: string = "";

  constructor(private _feedService: FeedService) {}

  ngOnInit() {
    this.getFeed();
  }

  public getFeed() {
    this._feedService.getFeed(this.feed).subscribe((data: Image[]) => {
      this.images = data;
      this.filteredImages = data;
    });
  }

  public onSearchClick() {
    this.filteredImages = this.images.filter(image =>
      image.title.includes(this.searchValue)
    );
  }
}
