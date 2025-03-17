import { Component } from "@angular/core";
import { DeckComponent } from "../deck/deck.component";

@Component({
    selector: 'as-board',
    standalone: true,
    templateUrl: './board.component.html',
    styleUrls: ['./board.component.scss'],
    imports: [DeckComponent]
})
export class BoardComponent {

}