import { EventEmitter, Injectable, OnInit } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListServices } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";


@Injectable()
export class RecipeService{

    recipesChanged = new Subject<Recipe[]>();


    // private recipes: Recipe[] = [
    //     new Recipe("Kebap",
    //     "a",
    //     "https://im.haberturk.com/2020/09/30/ver1601442026/2819427_810x458.jpg",
    //     [
    //         new Ingredient('meat',1)
    //     ]),
    //     new Recipe("Mantı", "a", "https://im.haberturk.com/2020/11/28/ver1606574471/2885324_810x458.jpg",
    //     [
    //         new Ingredient("Fame",1),
    //         new Ingredient("meat",1)
    //     ]),
    // ];

    private recipes: Recipe[] = [];

    constructor(private slService: ShoppingListServices){

    }


    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
      }
    

    getRecipes(){
        return this.recipes.slice();
    }

    getRecipe(index: number){
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe:Recipe){
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index,1);
        this.recipesChanged.next(this.recipes.slice());
    }
}