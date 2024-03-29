import { Foodable as FoodListable } from "./interfaces"
import { Score } from "./score"

export class Food implements FoodListable {
    constructor(public element: HTMLDivElement) {
        element.addEventListener('click', this.clickEventHandler.bind(this));

    }
    clickEventHandler() {
        console.log(this)
        this.element.classList.toggle('food--active');
        const score = Score.getInstance();
        score.render();
    }

}
