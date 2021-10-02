export class BudgetItem{
     amount!: number;
     description!: string;

     constructor(description : string,amount : number){
          this.amount = amount;
          this.description = description;
     }
}