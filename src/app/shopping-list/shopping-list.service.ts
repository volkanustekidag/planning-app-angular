import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListServices {

    ingredientsChannged = new EventEmitter<Ingredient[]>();

    ingredients: Ingredient[] = [
        new Ingredient("Apples", 5),
        new Ingredient("Melon", 5),

    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChannged.emit(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
    //     for (let ingredient of ingredients) {
    //         this.addIngredient(ingredient);
    //     }
    // }
    this.ingredients.push(...ingredients);
    this.ingredientsChannged.emit(this.ingredients.slice());
    }
}