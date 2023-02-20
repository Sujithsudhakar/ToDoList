import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from "@angular/core/testing";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { Todo } from "src/app/interfaces/todo";

import { CheckListComponent } from "./check-list.component";

describe("CheckListComponent", () => {
  let component: CheckListComponent;
  let fixture: ComponentFixture<CheckListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule],
      declarations: [CheckListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CheckListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create CheckList component", () => {
    expect(component).toBeTruthy();
  });

  it("should select the todo item to complete", fakeAsync(() => {
    const list: Todo = {
      todos: [
        {
          id: 1,
          todo: "Do something nice for someone I care about",
          completed: true,
          userId: 26,
        },
        {
          id: 2,
          todo: "Memorize the fifty states and their capitals",
          completed: false,
          userId: 48,
        },
      ],
    };
    component.submitCheckBox(list.todos[1]);
    tick(600);
    fixture.detectChanges();
    expect(list.todos[1].completed).toEqual(true);
  }));

  it("should count todo list", () => {
    component.todos = [
      {
        id: 1,
        todo: "Do something nice for someone I care about",
        completed: true,
        userId: 26,
      },
      {
        id: 2,
        todo: "Memorize the fifty states and their capitals",
        completed: false,
        userId: 48,
      },
    ];
    component.todoCount();
    expect(component.count).toEqual(1);
  });
});
