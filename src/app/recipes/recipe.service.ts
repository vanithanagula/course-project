import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";


import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  constructor(private slService: ShoppingListService) {}

  private recipes: Recipe[] = [
    new Recipe(
      'Tasty French Fries',
      'A super-tasty french fries just awesome!',
      'https://www.corriecooks.com/wp-content/uploads/2021/05/french-fries-instant-pot.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Schnitzel', 10)
      ]),

    new Recipe(
      'Big Fat Burger',
      'What else you need to say?',
      'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/mbtg1wsd3zdqu3v3rpgd',
      [
        new Ingredient('Buns', 10),
        new Ingredient('Meat', 1)
      ])
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

}
