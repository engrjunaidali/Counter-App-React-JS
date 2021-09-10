import React, { Component } from 'react'

export class Counter extends Component {
    state = {
        value: this.props.counter.value
        // tags: ['tag1','tag2','tag3']
    };

    // renderTags(){
    //     if (this.state.tags.length === 0) return <p>There are no products</p>

    //     return <ul>{this.state.tags.map(tag=> <li key={tag}>{tag}</li> )}</ul>
    // }

    handleIncrement = () => {
        this.setState({value:this.state.value + 1})
    }

    handleDecrement = () => {
        this.setState({value:this.state.value - 1})
    }

    render() {
        let classes = this.getBadgeClasses();
        return (
            <div>
                {/* Two ways for if else condition */}
                {/* {this.state.tags.length === 0 && "Please enter tags"}
                {this.renderTags()} */}

                
                <span className={classes}>{this.formatCounter()}</span>
                <button onClick={this.handleDecrement} className="btn btn-secondary btn-sm m-2">-</button>
                
                <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm m-2">+</button>

                <button 
                onClick={()=> this.props.onDelete(this.props.counter.id)} 
                className="btn btn-danger btn-sm m-2">Delete</button>
                
                
                
            </div> 
        )
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCounter(){
        return this.state.value === 0 ? 'Zero' : this.state.value;
    }
}

export default Counter

