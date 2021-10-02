import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BudgetItem } from 'src/shared/budget-item';

@Component({
  selector: 'app-budget-item',
  templateUrl: './budget-item.component.html',
  styleUrls: ['./budget-item.component.scss']
})
export class BudgetItemComponent implements OnInit {

  @Input()
  item!: BudgetItem;

  @Output() Buttonclick : EventEmitter<any> = new EventEmitter<any>();
  @Output() oncardclick : EventEmitter<any> = new EventEmitter<any>();
  
  constructor() { }

  ngOnInit(): void {
  }

  ButtonClick(){
    this.Buttonclick.emit();
  }

  onCardClick(){
    this.oncardclick.emit();
  }

}
