import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthenticationGuard } from "@core/security";

const routes: Routes = [
  { path: "", redirectTo: "/blog", pathMatch: "full" },
  {
    path: "blog",
    loadChildren: () => import("./pages/blog/blog.module").then(mod => mod.BlogModule)
  },
  {
    path: "login",
    loadChildren: () => import("./pages/login/login.module").then(mod => mod.LoginModule)
  },
  {
    path: "admin",
    loadChildren: () => import("./pages/admin/admin.module").then(mod => mod.AdminModule),
    canActivate: [AuthenticationGuard]
  },
  { path: "**", redirectTo: "/blog" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
