import React, {Component} from 'react'

class Sum extends Component{
    constructor(){
        super()
        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }
    enterNumber1(value){
        this.setState({number1: parseInt(value, 10)})
    }
    enterNumber2(value){
        this.setState({number2: parseInt(value, 10)})
    }
    calculateSum(num1, num2){
        this.setState({sum: num1 + num2})
    }
    render(){
        return(
            <div className='puzzleBox sumPB'>
                <h4>Sum</h4>
                <input className='inputLine' onChange={(e) => this.enterNumber1(e.target.value)}></input>
                <input className='inputLine' onChange={(e) => this.enterNumber2(e.target.value)}></input>
                <button className='confirmationButton' onClick={() => this.calculateSum(this.state.number1, this.state.number2)}>Enter</button>
                <span className='resultsBox'>{(this.state.sum)}</span>
            </div>
        )
    }
}





export default Sum