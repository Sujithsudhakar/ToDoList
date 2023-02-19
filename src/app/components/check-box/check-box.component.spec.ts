import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { CheckBoxComponent } from './check-box.component';

describe('CheckBoxComponent', () => {
  let component: CheckBoxComponent;
  let fixture: ComponentFixture<CheckBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CheckBoxComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CheckBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create CheckBox component', () => {
    expect(component).toBeTruthy();
  });

  it('should select the todo item to complete', fakeAsync(() => {
    component.todo = {
      id: 1,
      todo: 'Do something nice for someone I care about',
      completed: false,
      userId: 26,
    };
    component.onCheckboxChange(component.todo);
    tick(600);
    fixture.detectChanges();
    expect(component.todo.completed).toEqual(true);
  }));
});
