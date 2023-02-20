import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Type } from "src/app/interfaces/todo";

@Component({
  selector: "app-check-box",
  templateUrl: "./check-box.component.html",
  styleUrls: ["./check-box.component.scss"],
})
export class CheckBoxComponent {
  @Input() todo: Type | undefined;
  @Output() emitCheckEvent: EventEmitter<Type> = new EventEmitter();

  //Select checkbox todo item to complete
  onCheckboxChange(t: any) {
    this.emitCheckEvent.emit(t);
  }
}
