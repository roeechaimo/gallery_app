import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { MyGalleryComponent } from "./my-gallery.component";
import { ImageComponent } from "./components/image/image.component";
import { FeedService } from "./services/feed/feed.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [MyGalleryComponent, ImageComponent],
  imports: [CommonModule, HttpClientModule, FormsModule],
  providers: [FeedService],
  exports: [MyGalleryComponent]
})
export class MyGalleryModule {}
