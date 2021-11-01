import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  
  recipes: Recipe[] = [
    new Recipe("Kebap","","https://im.haberturk.com/2020/09/30/ver1601442026/2819427_810x458.jpg"),
    new Recipe("Mantı","","https://im.haberturk.com/2020/11/28/ver1606574471/2885324_810x458.jpg"),
    new Recipe("Baklava","","https://cdn.yemek.com/mncrop/940/625/uploads/2017/06/fistikli-baklava-yemekcom1.jpg"),

  ];

  constructor() { }

  ngOnInit(): void {

  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
