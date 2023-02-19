import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { BoxComponent } from 'src/app/components/box/box.component';
import { CardsComponent } from 'src/app/components/cards/cards.component';
import { CheckBoxComponent } from 'src/app/components/check-box/check-box.component';
import { CheckListComponent } from 'src/app/components/check-list/check-list.component';
import { TitleComponent } from 'src/app/components/title/title.component';
import { Todo } from 'src/app/interfaces/todo';
import { ApiService } from 'src/app/services/api.service';

import { ToDoListComponent } from './to-do-list.component';

describe('ToDoListComponent', () => {
  let component: ToDoListComponent;
  let service: ApiService;
  let fixture: ComponentFixture<ToDoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [
        ToDoListComponent,
        TitleComponent,
        BoxComponent,
        CheckListComponent,
        CardsComponent,
        CheckBoxComponent,
      ],
    }).compileComponents();
    service = TestBed.get(ApiService);
    fixture = TestBed.createComponent(ToDoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create ToDoList component', () => {
    expect(component).toBeTruthy();
  });
  it(`should have a username 'Sujith Sudhakaran'`, () => {
    expect(component.userName).toEqual('Sujith Sudhakaran');
  });

  it('should call getUsers and return list of users', async(() => {
    const response: Todo = {
      todos: [
        {
          id: 1,
          todo: 'Do something nice for someone I care about',
          completed: true,
          userId: 26,
        },
        {
          id: 2,
          todo: 'Memorize the fifty states and their capitals',
          completed: false,
          userId: 48,
        },
      ],
    };
    spyOn(service, 'getList').and.returnValue(of(response));
    component.fetchTodoList();
    fixture.detectChanges();
    expect(component.list$).toEqual(response);
  }));
});
