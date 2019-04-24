import React from 'react';
import PetView from './PetView';
import InteractiveButtons from './InteractiveButtons';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      petInfo: [
      {
      age: 10,
      weight: 10,
      hunger: 5,
      happiness: 5
      }
      ]
    };
    this.updateWeight = this.updateWeight.bind(this);
  }



  updateWeight() {
    let newPetInfo = this.state.petInfo.slice();
    newPetInfo[0].weight--;
    this.setState({petInfo: newPetInfo});

  }

  render(){
    return(
      <div>
        <PetView petInfo={this.state.petInfo}/>
        <InteractiveButtons onUpdateWeight={this.updateWeight} />
      </div>
    );
  }
}

export default App;
