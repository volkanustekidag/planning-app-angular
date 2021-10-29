import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe("A Test Recipe","This is basic a test","https://im.haberturk.com/2020/09/30/ver1601442026/2819427_810x458.jpg"),
    new Recipe("A Test Recipe","This is basic a test","https://im.haberturk.com/2020/09/30/ver1601442026/2819427_810x458.jpg"),
    new Recipe("A Test Recipe","This is basic a test","https://im.haberturk.com/2020/09/30/ver1601442026/2819427_810x458.jpg"),

  ];

  constructor() { }

  ngOnInit(): void {

  }

}
