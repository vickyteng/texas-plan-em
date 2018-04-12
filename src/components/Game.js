import React from 'react';
import PlanningCard from './PlanningCard';
import PlanningCardHolder from './PlanningCardHolder';

// import {
//     submitCard,
//     selectCard,
//     flipCards,
//     clearTable
// } from '../actions/gameActions';

export default class Game extends React.Component {

    constructor(props) {
        super(props);
        this.state = Object.assign(this.initialState);
    }

    initialState = {
        selectedValue: undefined,
        values: [1, 2, 3, 5, 8, 13, "?"],
        players: 1,
        table: [],
        cardsUp: false,
        submitted: false
    }

    onCardSelect = val => {
        if (this.state.submitted) {
            return;
        }
        if (val === this.state.selectedValue) {
            val = undefined;
        }
        this.setState({ 
            selectedValue: val
        });
    }

    onSubmitCard = () => {
        let values = this.state.values.filter( val => val !== this.state.selectedValue );
        let table = [].concat(this.state.table, [ this.state.selectedValue ]);
        this.setState({
            values: values,
            selectedValue: undefined,
            table: table,
            // submitted: true
        });
    }

    onFlipCards = () => {
        this.setState({
            cardsUp: !this.state.cardsUp
        });
    }

    clearTable = () => {
        this.setState(
            Object.assign({}, this.initialState)
        )
    }

    render () {
        let cards = this.state.values.map( (val, i) => {
            return <PlanningCard key={i} value={val} onclick={ this.onCardSelect.bind(this, val) } selected={val === this.state.selectedValue }/>
        });
        return (
            <div className="game">
                <div className="game__stage">
                    <div className="game__table">
                        { this.state.table.map( (val, i) => <PlanningCard key={i} faceDown={!this.state.cardsUp} value={val} />)}
                        { (new Array(Math.max(this.state.players - this.state.table.length, 0))).fill(0).map( (val, i) => <div key={i} className="place"></div> ) }
                    </div>
                </div>
                <div className="game__card-holder">
                    <PlanningCardHolder 
                        cards={cards} 
                        ready={!!this.state.selectedValue} 
                        onSubmitCard={this.onSubmitCard} 
                        onFlipCards={this.onFlipCards}
                        canFlipCards={true || this.state.players === this.state.table.length }
                        submitted={this.state.submitted} />
                </div>
            </div>
        )
    }
}