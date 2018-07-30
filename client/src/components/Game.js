import React from 'react';
import PlanningCard from './PlanningCard';
import PlanningCardHolder from './PlanningCardHolder';
import Users from 'components/users/Users';

export default class Game extends React.Component {

    onSubmitCard = ( value ) => {
        let submittedUsers = this.props.game.submitted || {};
        if (value === (submittedUsers[this.props.user.id] || {}).card) {
            value = null;
        }
        this.props.setSubmitCard(this.props.session, this.props.user.id, value);
    };

    render () {
        let submittedUsers = this.props.game.submitted || {};
        let cards = this.props.values.map( (val, i) => {
            return <PlanningCard key={i} value={val} onclick={ this.onSubmitCard.bind(this, val) } selected={val === (submittedUsers[this.props.user.id] || {}).card }/>
        });
        let submittedCards = Object.keys(submittedUsers).map((key, index) => {
                return <PlanningCard key={index} faceDown={!this.props.game.cardsUp} value={this.props.game.submitted[key].card} name={this.props.game.players[key].name} />
        });
        let emptySlots = Object.keys(this.props.game.players).filter((key, index) => {
                return this.props.game.players[key].role === 'Participant' && !submittedUsers[key]
            }).map((key, index) =>  {
                return <div key={index} className="place"></div>;
            });
        console.log(submittedCards, emptySlots);
        return (
            <div className="game">
                <div className="game__stage">
                    <div className="game__table">
                        { submittedCards.length || emptySlots.length ? 
                            [...submittedCards, ...emptySlots]
                        :
                            <span className="text">Waiting for participants...</span>
                        }
                    </div>
                </div>
                <div className="game__card-holder">
                    <PlanningCardHolder 
                        cards={cards} 
                        ready={!!(submittedUsers[this.props.user.id] || {}).card} 
                        onSubmitCard={this.onSubmitCard} 
                        onFlipCards={this.props.setCardsUp.bind(this, this.props.session)}
                        canFlipCards={Object.keys(submittedUsers).length > 0 }
                        role={this.props.user.role}
                        resetGame={this.props.resetGame.bind(this, this.props.session)}
                        submitted={!!submittedUsers[this.props.user.id]} 
                        cardsUp={this.props.game.cardsUp}/>
                </div>
                <Users />
            </div>
        )
    }
}