import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ToDoListComponent } from "./pages/to-do-list/to-do-list.component";

const routes: Routes = [
  { path: "to-do-list", component: ToDoListComponent },
  { path: "", redirectTo: "/to-do-list", pathMatch: "full" },
  { path: "**", component: ToDoListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
