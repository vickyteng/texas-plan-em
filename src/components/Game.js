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
        return (
            <div className="game">
                <div className="game__stage">
                    <div className="game__table">
                        {
                            this.props.game.submitted &&
                            Object.keys(this.props.game.submitted).map((key, index) => 
                                <PlanningCard key={index} faceDown={!this.props.game.cardsUp} 
                                    value={this.props.game.submitted[key].card} name={this.props.game.players[key].name} />)
                        }
                        {
                            Object.keys(this.props.game.players).map((key, index) => 
                                ((!submittedUsers || !submittedUsers[key]) && <div key={index} className="place"></div>))
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
                        resetGame={this.props.resetGame.bind(this, this.props.session)}
                        submitted={!!submittedUsers[this.props.user.id]} 
                        cardsUp={this.props.game.cardsUp}/>
                </div>
                <Users />
            </div>
        )
    }
}