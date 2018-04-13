import React from 'react';
import PlanningCard from './PlanningCard';
import PlanningCardHolder from './PlanningCardHolder';

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
    };

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
    };

    onSubmitCard = () => {
        this.props.setSubmitCard(this.props.session, this.props.user.id, this.state.selectedValue);
    };

    onFlipCards = () => {
        this.setState({
            cardsUp: !this.state.cardsUp
        });
    };

    clearTable = () => {
        this.setState(
            Object.assign({}, this.initialState)
        )
    };

    render () {
        let cards = this.state.values.map( (val, i) => {
            return <PlanningCard key={i} value={val} onclick={ this.onCardSelect.bind(this, val) } selected={val === this.state.selectedValue }/>
        });
        let submittedUsers = this.props.game.submitted || {};
        return (
            <div className="game">
                <div className="game__stage">
                    <div className="game__table">
                        {
                            this.props.game.submitted &&
                            Object.keys(this.props.game.submitted).map((key, index) => <PlanningCard key={index} faceDown={!this.state.cardsUp} value={this.props.game.submitted[key].card} name={this.props.game.players[key].name} />)
                        }
                        {
                            Object.keys(this.props.game.players).map((key, index) => ((!submittedUsers || !submittedUsers[key]) && <div key={index} className="place"></div>))
                        }
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