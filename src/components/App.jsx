import React from 'react';
import PetStats from './PetStats';
import InteractiveButtons from './InteractiveButtons';
import DynamicImage from './DynamicImage';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      tamagotchi:
      {
        age: 0,
        weight: 10,
        hunger: 30,
        happiness: 50,
        energy: 100,
        sleeping: false,
        alive: true
      }
    };
    this.handleUpdateEnergy = this.handleUpdateEnergy.bind(this);
    this.handleFeed = this.handleFeed.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    this.handleSleep = this.handleSleep.bind(this);
  }

  componentDidMount() {
    this.intervalEnergy = setInterval(() =>
      this.handleUpdateEnergy(),
    1000
    );
  }

  //need to clearInterval for functions at some point

  handleUpdateEnergy() {
    let updatedStats = Object.assign({}, this.state.tamagotchi);
    if(updatedStats.energy != 0 && updatedStats.sleeping === false) {
      updatedStats.energy-=10;
    } else if (updatedStats.energy != 0 && updatedStats.sleeping === true && updatedStats.energy != 100) {
      updatedStats.energy+=10;
    } else if (updatedStats.energy <= 0) {
      updatedStats.alive = false;
    }
    this.setState({tamagotchi: updatedStats});
  }

  handleFeed() {
    let updatedStats = Object.assign({}, this.state.tamagotchi);
    if(updatedStats.hunger >= 0 && updatedStats.sleeping === false && updatedStats.alive === true) {
      updatedStats.hunger-=10;
      this.setState({tamagotchi: updatedStats});
    }
  }

  handlePlay() {
    let updatedStats = Object.assign({}, this.state.tamagotchi);
    if( updatedStats.happiness != 100 && updatedStats.sleeping === false && updatedStats.alive === true) {
      updatedStats.happiness+=10;
      updatedStats.energy-=10;
      this.setState({tamagotchi: updatedStats});
    }
  }

  handleSleep() {
    let updatedStats = Object.assign({}, this.state.tamagotchi);
    updatedStats.sleeping = !updatedStats.sleeping;
    this.setState({tamagotchi: updatedStats});
  }

  render(){
    return(
      <div>
        <DynamicImage />
        <PetStats tamagotchi={this.state.tamagotchi}/>
        <InteractiveButtons
          tamagotchi={this.state.tamagotchi}
          onFeed={this.handleFeed}
          onPlay={this.handlePlay}
          onSleep={this.handleSleep} />
      </div>
    );
  }
}

export default App;
