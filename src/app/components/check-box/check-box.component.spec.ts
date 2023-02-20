import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from "@angular/core/testing";
import { CheckBoxComponent } from "./check-box.component";

describe("CheckBoxComponent", () => {
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

  it("should create CheckBox component", () => {
    expect(component).toBeTruthy();
  });

  it("should emit checkbox event", () => {
    spyOn(component.emitCheckEvent, "emit");
    const todo = {
      id: 1,
      todo: "Do something nice for someone I care about",
      completed: true,
      userId: 26,
    };
    component.onCheckboxChange(todo);
    fixture.detectChanges();
    expect(component.emitCheckEvent.emit).toHaveBeenCalledWith(todo);
  });
});
