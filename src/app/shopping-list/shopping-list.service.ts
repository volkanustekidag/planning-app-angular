import { Subject } from "rxjs";

import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListServices {

    ingredientsChannged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();

    ingredients: Ingredient[] = [
        new Ingredient("Apples", 5),
        new Ingredient("Melon", 5),

    ];

    getIngredient(index: number){
        return this.ingredients[index];
    }

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChannged.next(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
    //     for (let ingredient of ingredients) {
    //         this.addIngredient(ingredient);
    //     }
    // }
    this.ingredients.push(...ingredients);
    this.ingredientsChannged.next(this.ingredients.slice());
    }

    updateIngredient(index: number, newIngredient: Ingredient){
    this.ingredients[index] = newIngredient;
    this.ingredientsChannged.next(this.ingredients.slice())
    }

    deleteIngredient(index: number){
        this.ingredients.splice(index,1);
        this.ingredientsChannged.next(this.ingredients.slice());
    }

}