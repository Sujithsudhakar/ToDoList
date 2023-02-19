import { Component, Input, OnInit } from '@angular/core';
import { Todo, Type } from 'src/app/interfaces/todo';

@Component({
  selector: 'app-check-list',
  templateUrl: './check-list.component.html',
  styleUrls: ['./check-list.component.scss'],
})
export class CheckListComponent implements OnInit {
  @Input() boxColor: string | undefined;
  @Input() todos: Type[] | undefined;
  constructor() {}
  ngOnInit(): void {}
}
