import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() public recipe: Recipe = new Recipe("a","","");
  @Output() recipeSelected = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void { 
  }

  onSelected(){
    this.recipeSelected.emit();
    console.log(this.recipe.name);
    
  }

}
