import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BudgetItem } from 'src/shared/budget-item';
import { EditItemModalComponent } from '../edit-item-modal/edit-item-modal.component';

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.scss']
})
export class BudgetListComponent implements OnInit {

  @Input() budgetItems: BudgetItem[] = [];
  @Output() delete : EventEmitter<BudgetItem> = new EventEmitter<BudgetItem >();

  constructor(public dialog : MatDialog) { }

  ngOnInit(): void {
  }

  ondelete(item : BudgetItem){
    this.delete.emit(item);
  }

  onCardClick( item: BudgetItem){
      const dialogRef = this.dialog.open(EditItemModalComponent, {
        width : '580px',
        data : item
      });

      dialogRef.afterClosed().subscribe(result =>{
        if (result){
          this.budgetItems[this.budgetItems.indexOf(item)] = result;
        }
      })
    }

}
