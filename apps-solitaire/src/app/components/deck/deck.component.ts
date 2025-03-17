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
    imports: [CommonModule]
})
export class DeckComponent {
    deck: Card[] = [];

    constructor() {
        this.initializeDeck();
        this.shuffleDeck();
    }

    public initializeDeck() {
        AllSuits.forEach(suit => {
            AllValues.forEach(value => {
                this.deck.push(new Card(suit, value))
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

    public GetSuits(suit: Suit) : Card[] {
        return this.deck.filter(x => x.suit == suit);
    }

    suitToString(suit: Suit) : string {
        var suitLabel = '';
        switch (suit) {
            case Suit.Clubs:
                suitLabel = 'Clubs';
            break
            case Suit.Diamonds:
                suitLabel = 'Diamonds';
            break
            case Suit.Hearts:
                suitLabel = 'Hearts';
            break
            case Suit.Spades:
                suitLabel = 'Spades';
            break
        }
        return suitLabel;
    }

    valueToString(value: Value) : string {
            var valueLabel = '';
            switch (value) {
                case Value.Ace:
                    valueLabel = "Ace";
                break
                case Value.Two:
                    valueLabel = '2';
                break
                case Value.Three:
                    valueLabel = '3';
                break
                case Value.Four:
                    valueLabel = '4';
                break
                case Value.Five:
                    valueLabel = '5';
                break
                case Value.Six:
                    valueLabel = '6';
                break
                case Value.Seven:
                    valueLabel = '7';
                break
                case Value.Eight:
                    valueLabel = '8';
                break
                case Value.Nine:
                    valueLabel = '9';
                break
                case Value.Ten:
                    valueLabel = '10';
                break
                case Value.Jack:
                    valueLabel = 'J';
                break
                case Value.Queen:
                    valueLabel = 'Q';
                break
                case Value.King:
                    valueLabel = 'K';
                break
            }
            return valueLabel;
        }
}