import { Component, Input } from '@angular/core';
import { Type } from 'src/app/interfaces/todo';

@Component({
  selector: 'app-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.scss'],
})
export class CheckBoxComponent {
  @Input() todo:Type | undefined;
  
  //Select checkbox todo item to complete
  onCheckboxChange(t: any) {
    setTimeout(() => {
      t['completed'] = true;
    }, 500);
  }
}
