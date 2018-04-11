import React from 'react';
import PlanningCard from './PlanningCard';
import PlanningCardHolder from './PlanningCardHolder';

export default class Game extends React.Component {
    render () {
        let values = [1, 2, 3, 5, 8, 13, "?"]
        let cards = values.map( val => {
            return <PlanningCard value={val} />
        });
        return (
            <div>
                <div class="game-window">
                    <div class="card-table">
                        <div class="place player-1"></div>
                        <div class="place player-2"></div>
                        <div class="place player-3"></div>
                        <div class="place player-4"></div>
                    </div>
                </div>
                <PlanningCardHolder cards={cards}/>
            </div>
        )
    }
}