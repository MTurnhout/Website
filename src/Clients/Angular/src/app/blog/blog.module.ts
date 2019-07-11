import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BlogComponent } from "./blog.component";
import { PostListComponent } from "./post-list/post-list.component";
import { PostComponent } from "./post/post.component";

import { BlogRoutingModule } from "./blog-routing.module";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [BlogComponent, PostListComponent, PostComponent],
  imports: [CommonModule, BlogRoutingModule, SharedModule]
})
export class BlogModule {}
