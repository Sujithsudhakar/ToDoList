import { Component, Input } from '@angular/core';
import { Todo, Type } from 'src/app/interfaces/todo';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss'],
})
export class BoxComponent {
  @Input() boxColor: string | undefined;
  @Input() todos: Type[] | undefined
}
