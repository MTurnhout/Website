import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "/blog", pathMatch: "full" },
  {
    path: "blog",
    loadChildren: () => import("./blog/blog.module").then(mod => mod.BlogModule)
  },
  {
    path: "login",
    loadChildren: () =>
      import("./login/login.module").then(mod => mod.LoginModule)
  },
  { path: "**", redirectTo: "/blog" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
