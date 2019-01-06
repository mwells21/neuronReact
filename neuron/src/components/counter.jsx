import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
        tags: ['tag1','tag2','tag3']
    };

//    constructor(){
//        super();
//        this.handleIncrement = this.handleIncrement.bind(this);
//        console.log("Constructor", this );
//   }
// Event Handeling 

//    handleIncrement(){
//        console.log("Increment Clicked",this);
//    }
// 
// or 

    handleIncrement = () => {
        console.log("Increment Clicked", this);
        // this.state.count++ // wont work, doesnt know anything changed 
        // this.setState tells react the dom needs to change 
        this.setState({ count: this.state.count + 1});
    };



    styles = {
        fontSize: '50px',
        fontWeight: 'bold'
    };

    renderTags(){
        if(this.state.tags.length === 0) return <p>Therea are no tags!</p>;
        return <ul>{ this.state.tags.map(tag => <li key = {tag}>{tag}</li>) }</ul>;
    }

    // state and styles are properties 
    // Below you count rewrite the style tag with style = {{fontSize: '50px'}}


    render() { 
        // let is used instead of const because it is being changed 
        // let classes = this.getBadgeClasses();

        return (
        // React Fragments is use to hide the <div> that was previously used
        // key is the uuid
        <div> 
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>       
            <button 
                onClick={this.handleIncrement} 
                className ="btn btn-secondary btn-sm"
            >
                Increment
            </button>
            {this.state.tags.length === 0 && 'Please Create a New Tag'}
            {this.renderTags()}
        </div> 
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary ";
        return classes;
    }

    // className => class 
    //      state = {
    //          count: 0,
    //          imageURl: "https://picsum.photos/200"
    //      };
    //
    //      <img src={this.state.imageURl} alt=""/>
    //       
    //


    //  Function(){                 // Declare the function 
    //      const { } = this.state  // define variable
    //      retrun                  // return output 
    //  }
    formatCount(){
        const { count } = this.state;
        return count === 0 ? "Zero" : count;
    }
}
 
export default Counter;
