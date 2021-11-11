import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient, } from 'src/app/shared/ingredient.model';
import { ShoppingListServices } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {



  constructor(private slService: ShoppingListServices) { }
  @ViewChild('f', {static:false}) slForm?: NgForm;
  subcription?: Subscription;
  editMode = false;
  editItemIndex: number = 0;
  editedItem?: Ingredient;

  ngOnInit(): void {
    this.subcription = this.slService.startedEditing.subscribe(
      (index: number) => {
        this.editItemIndex = index;
        this.editMode = true;
        this.editedItem = this.slService.getIngredient(index);
        this.slForm?.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount,
        })
      }
    );
  }

  onAddItem(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if(this.editMode) {
      this.slService.updateIngredient(this.editItemIndex, newIngredient);
    } else {
      this.slService.addIngredient(newIngredient);
    }
    
    form.onReset();
    this.editMode = false;
  }

  onClear(){
    this.slForm?.reset();
    this.editMode = false;
  }

  onDelete(){
    this.slService.deleteIngredient(this.editItemIndex);
    this.onClear();
  }

  ngOnDestroy() {
    this.subcription?.unsubscribe();
  }


}
