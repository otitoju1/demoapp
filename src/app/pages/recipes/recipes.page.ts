import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  
  public recipes = [
    {
    title: "Rice and Beans", img: "../../../assets/tower.jpg", content: "Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836."
  },
  {
    title: "Amala", img: "../../../assets/tower.jpg", content: "Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836."
  },
  {
    title: "Semovita", img: "../../../assets/tower.jpg", content: "Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836."
  },
  {
    title: "Spaghetti", img: "../../../assets/tower.jpg", content: "Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836....."
  },
  {
    title: "Smoke Fish", img: "../../../assets/tower.jpg", content: "Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836."
  },
  {
    title: "Indomie", img: "../../../assets/tower.jpg", content: "Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836....."
  },
]

  constructor() { }

  ngOnInit() {
    console.log(this.recipes)
  }

}
