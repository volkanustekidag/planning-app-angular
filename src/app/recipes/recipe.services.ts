import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListServices } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";


@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe("Kebap",
        "",
        "https://im.haberturk.com/2020/09/30/ver1601442026/2819427_810x458.jpg",
        [
            new Ingredient('meat',1)
        ]),
        new Recipe("Mantı", "", "https://im.haberturk.com/2020/11/28/ver1606574471/2885324_810x458.jpg",
        [
            new Ingredient("Fame",1),
            new Ingredient("meat",1)
        ]),
    ];

    constructor(private slService: ShoppingListServices){

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

}