import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BudgetItem } from 'src/shared/budget-item';


@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})


export class AddItemComponent implements OnInit {

  @Input() item: BudgetItem = new BudgetItem('',0);
  @Output() formSubmit : EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>() ; 
  
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form : NgForm){
    this.formSubmit.emit(form.value);
    form.reset();
  }

}
