import React from 'react';
import PetView from './PetView';
import InteractiveButtons from './InteractiveButtons';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      tamagotchi:
      {
        age: 10,
        weight: 10,
        hunger: 5,
        happiness: 5,
        energy: 10,
        sleeping: false,
        alive: true
      }
    };
    this.handleUpdateStats = this.handleUpdateStats.bind(this);
  }



  handleUpdateStats() {
    let updatedStats = Object.assign({}, this.state.tamagotchi);
    updatedStats.hunger--;
    this.setState({tamagotchi: updatedStats});
  }

  render(){
    return(
      <div>
        <PetView tamagotchi={this.state.tamagotchi}/>
        <InteractiveButtons onUpdateStats={this.handleUpdateStats} />
      </div>
    );
  }
}

export default App;
