import { animate, style, transition, trigger } from "@angular/animations";
import { Component, Input, OnInit, setTestabilityGetter } from "@angular/core";
import { Todo, Type } from "src/app/interfaces/todo";

@Component({
  selector: "app-check-list",
  templateUrl: "./check-list.component.html",
  styleUrls: ["./check-list.component.scss"]
})
export class CheckListComponent implements OnInit {
  @Input() boxColor: string | undefined;
  @Input() todos: Type[] = [];
  count: number | undefined;
  constructor() {}
  ngOnInit(): void {
    this.todoCount();
  }

  submitCheckBox(t: any) {
    setTimeout(() => {
      t["completed"] = true;
      this.todoCount();
    }, 500);
  }
  todoCount() {
    this.count = this.todos.filter((obj) => obj.completed === false).length;
  }
}
