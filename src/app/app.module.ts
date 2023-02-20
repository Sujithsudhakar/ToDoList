import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ToDoListComponent } from "./pages/to-do-list/to-do-list.component";
import { CheckListComponent } from "./components/check-list/check-list.component";
import { CheckBoxComponent } from "./components/check-box/check-box.component";
import { HttpClientModule } from "@angular/common/http";
import { BoxComponent } from "./components/box/box.component";
import { CardsComponent } from "./components/cards/cards.component";
import { TitleComponent } from "./components/title/title.component";

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    CheckListComponent,
    CheckBoxComponent,
    BoxComponent,
    CardsComponent,
    TitleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
