import { Component, OnInit } from "@angular/core";
import { Todo } from "src/app/interfaces/todo";
import { ApiService } from "src/app/services/api.service";

@Component({
  selector: "app-to-do-list",
  templateUrl: "./to-do-list.component.html",
  styleUrls: ["./to-do-list.component.scss"],
})
export class ToDoListComponent implements OnInit {
  constructor(private service: ApiService) {}
  userName: string = "Sujith Sudhakaran";
  title1: string = "I did it!";
  title2: string = "To Do";
  list$: Todo | undefined;
  bxGreen: string = "box-green";
  bxGrey: string = "box-grey";
  ngOnInit(): void {
    this.fetchTodoList();
  }

  //Fetching the todo list from service
  fetchTodoList() {
    this.service.getList().subscribe((data) => {
      this.list$ = data;
    });
  }
}
