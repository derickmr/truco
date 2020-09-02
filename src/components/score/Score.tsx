import React, {Component} from 'react';
import Button from '../button/Button';

type ScoreState = {
    score: number;
}

type ButtonList = {
    buttons: Array<Button>
}

export default class Score extends Component<ButtonList, ScoreState> {
    constructor(props: any){
        super(props);
        this.state = ({
            score: 0
        });
    }

    increaseScore(quantity: number){
        this.setState({
            score: this.state.score + quantity
        });
    }

    listItems (buttons: ButtonList){
        return buttons.buttons.map((button: Button) =>
            <button onClick={() =>this.increaseScore(button.value)}>{button.text}</button>
        );
    }

    render() {
        return (
        <>
        <h1>{this.state.score}</h1>
        {this.listItems(this.props)}
        </>
        );
    }

}
