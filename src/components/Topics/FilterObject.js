import React, {Component} from 'react'

class FilterObject extends Component{
        constructor(){
            super()
            this.state = {
                cars: [
                    {
                        make: 'Volkswagen',
                        model: 'Jetta TDI',
                        mileage: 98000
                    },
                    {
                        make: 'Toyota',
                        color: 'silver',
                        transmission: 'automatic'
                    },
                    {
                        make: 'Honda',
                        model: 'Civic',
                        transmission: 'manual'
                    }
                ],
                userInput: '',
                filteredCars: []
            }
        }
        changeInput(value){
            this.setState({userInput: value})
        }
        filterCars(prop){
            let cars = this.state.cars
            let filteredCars = []
            for(let i = 0; i < cars.length; i++){
                if(cars[i].hasOwnProperty(prop)){
                    filteredCars.push(cars[i])
                }
            }
            this.setState({filteredCars: filteredCars})
        }
        render(){
            return(
                <div className='puzzleBox filterObjectPB'>
                    <h4>Filter Object</h4>
                    <span className='puzzleText'>Original: {JSON.stringify(this.state.cars, null, 10)}</span>
                    <input className='inputLine' onChange={(e) => this.changeInput(e.target.value)}/>
                    <button className='confirmationButton' onClick={() => {this.filterCars(this.state.userInput)}}>Filter</button>
                    <span className='resultsBox filterObjectRB'>Filtered: {JSON.stringify(this.state.filteredCars, null, 10)}</span>
                </div>
            )
        }











}

export default FilterObject


