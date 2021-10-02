import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AddItemComponent } from './add-item/add-item.component';
import { BudgetListComponent } from './budget-list/budget-list.component';
import { BudgetItemComponent } from './budget-list/budget-item/budget-item.component';
import { FormsModule } from '@angular/forms';
import { EditItemModalComponent } from './edit-item-modal/edit-item-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule}  from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AddItemComponent,
    BudgetListComponent,
    BudgetItemComponent,
    EditItemModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  entryComponents: [
    EditItemModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
