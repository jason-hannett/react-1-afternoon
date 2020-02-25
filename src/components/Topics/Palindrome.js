import React, {Component} from "react";


export default class Palindrome extends Component {
        constructor(){
            super();

            this.state = {
                userInput: "",
                palindrome: ""
            };
        }

        handleChange(val) {
            this.setState({userInput: val});
        }

        isPalindrome(userInput){
           
            for (let i = 0; i < userInput.length; i++)
            for (let j = 0; j > userInput.length -1; j--){
                if (userInput[i] === userInput[j]){
                    this.setState({palindrome: "true"})
                } else {
                    this.setState({palindrome: "false"})
                }
            }
        }

         render(){
            return(
                <div className="puzzleBox palindromePB">
                    <h4> Palindrome </h4>
                    <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }/>
                    <button className="confirmationButton" onClick={ () => this.isPalindrome(this.state.userInput) }> Check </button>
                    <span className="resultsBox"> Palindrome: { this.state.palindrome } </span>
              </div>
        )
    }
}