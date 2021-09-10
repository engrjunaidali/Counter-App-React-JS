import React, { Component } from 'react'
import Counter from './counter'

export class counters extends Component {
    state ={
        counters: [
            {id:1, value:3},
            {id:2, value:0},
            {id:3, value:0},
            {id:4, value:0},
            {id:5, value:0}
        ]
    };

    handleDelete = CounterId => {
        const counters = this.state.counters.filter(c => c.id !==CounterId);
        this.setState({counters});
    }

    render() { 
        return (
            <div>
                {this.state.counters.map(counter => 
                <Counter 
                key={counter.id} // Internally used
                onDelete={this.handleDelete} 
                counter={counter}/>)
                }
            </div>
        )
    }
}

export default counters
