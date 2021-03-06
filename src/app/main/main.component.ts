import { Component, OnInit } from '@angular/core';
import { BudgetItem } from 'src/shared/budget-item';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  budgetItems : BudgetItem[] =new Array<BudgetItem>();

  constructor() { }

  ngOnInit(): void {
  }

  addItem(newItem : BudgetItem){
        this.budgetItems.push(newItem);
  }

  deleteItem(item : BudgetItem){
     let index = this.budgetItems.indexOf(item);
    this.budgetItems.splice(index,1);
  }

}
