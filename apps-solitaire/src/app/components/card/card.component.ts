import { Component } from "@angular/core";
import { Suit } from "../../enums/suit";
import { Value } from "../../enums/value";

@Component({
    selector: 'as-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
    standalone: true,
})
export class Card {
    constructor(suit: Suit, value: Value) {
        this.suit = suit;
        this.value = value;
    }
    suit: Suit ;
    value: Value;

    public getLabel() : string {
        return `${this.valueToString()} of ${this.suitToString()}`
    }

    suitToString() : string {
        var suitLabel = '';
        switch (this.suit) {
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

    valueToString() : string {
        var valueLabel = '';
        switch (this.value) {
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
                valueLabel = 'Jack';
            break
            case Value.Queen:
                valueLabel = 'Queen';
            break
            case Value.King:
                valueLabel = 'King';
            break
        }
        return valueLabel;
    }
}