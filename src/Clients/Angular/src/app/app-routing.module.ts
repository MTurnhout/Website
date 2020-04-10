import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ApplicationClaimType, AuthenticationGuard } from "@core/security";

const routes: Routes = [
  { path: "", redirectTo: "/blog", pathMatch: "full" },
  {
    path: "blog",
    loadChildren: () =>
      import("./pages/blog/blog.module").then((mod) => mod.BlogModule),
    data: { title: "Blog" },
  },
  {
    path: "login",
    loadChildren: () =>
      import("./pages/login/login.module").then((mod) => mod.LoginModule),
    data: { title: "Login" },
  },
  {
    path: "admin",
    loadChildren: () =>
      import("./pages/admin/admin.module").then((mod) => mod.AdminModule),
    canActivate: [AuthenticationGuard],
    data: { claimType: ApplicationClaimType.CanViewAdminPage, title: "Admin" },
  },
  { path: "**", redirectTo: "/blog" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
