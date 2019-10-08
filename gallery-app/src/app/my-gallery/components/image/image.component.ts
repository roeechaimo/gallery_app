import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-image",
  templateUrl: "./image.component.html",
  styleUrls: ["./image.component.scss"]
})
export class ImageComponent implements OnInit {
  @Input() title: string;
  @Input() url: string;
  @Input() date: string;

  constructor() {}

  ngOnInit() {
    console.log(`${this.title},  ${this.url},  ${this.date}`);
  }
}
