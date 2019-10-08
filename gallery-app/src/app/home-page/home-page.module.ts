import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomePageComponent } from "./home-page.component";
import { MyGalleryModule } from "../my-gallery/my-gallery.module";

@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule, MyGalleryModule]
})
export class HomePageModule {}
