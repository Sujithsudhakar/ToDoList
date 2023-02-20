import { Component, Input } from "@angular/core";
import { Type } from "src/app/interfaces/todo";

@Component({
  selector: "app-cards",
  templateUrl: "./cards.component.html",
  styleUrls: ["./cards.component.scss"],
})
export class CardsComponent {
  @Input() todo: Type | undefined;
  @Input() className: string | undefined;
}
