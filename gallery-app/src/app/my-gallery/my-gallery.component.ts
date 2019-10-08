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
  public sortValue: string = "";

  constructor(private _feedService: FeedService) {}

  ngOnInit() {
    this.getFeed();
  }

  public getFeed() {
    this._feedService.getFeed(this.feed).subscribe((data: Image[]) => {
      const images = data;
      this.images = [...images];
      this.filteredImages = [...images];
    });
  }

  public onSearchClick() {
    this.filteredImages = this.images.filter(image =>
      image.title.includes(this.searchValue)
    );
  }

  public onSortChange(value: string) {
    const images = [...this.images];

    if (value === "title") {
      return this.filteredImages.sort((a, b) => {
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }

        return 0;
      });
    }

    if (value === "date") {
      return this.filteredImages.sort((a, b) => {
        const bDate = new Date(b.date);
        const aDate = new Date(a.date);

        if (aDate < bDate) {
          return -1;
        }
        if (aDate > bDate) {
          return 1;
        }

        return 0;
      });
    }

    this.filteredImages = [...images];
  }
}
