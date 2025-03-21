import { Component } from "@angular/core";
import { Card } from "../card/card.component";
import { AllSuits, Suit } from "../../enums/suit";
import { AllValues, Value } from "../../enums/value";
import { CommonModule } from "@angular/common";

@Component({
    selector: 'as-deck',
    templateUrl: './deck.component.html',
    styleUrls: ['./deck.component.scss'],
    standalone: true,
    imports: [CommonModule, Card],
    providers: [{provide: Card}]
})
export class DeckComponent {
    deck: any = [];

    constructor() {
        this.initializeDeck();
        this.shuffleDeck();
    }

    public initializeDeck() {
        AllSuits.forEach(suit => {
            AllValues.forEach(value => {
                this.deck.push({suit,value})
            });
        });
    }

    shuffleDeck() {
        for (let i = this.deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
          }
        
          return this.deck;
    }
}