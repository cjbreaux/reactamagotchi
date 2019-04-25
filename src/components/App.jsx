import React from 'react';
import PetView from './PetView';
import InteractiveButtons from './InteractiveButtons';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      tamagotchi:
      {
        age: 0,
        weight: 10,
        hunger: 5,
        happiness: 5,
        energy: 10,
        sleeping: false,
        alive: true
      }
    };
    this.handleUpdateStats = this.handleUpdateStats.bind(this);
    this.handleFeed = this.handleFeed.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    this.handleSleep = this.handleSleep.bind(this);
  }

  componentDidMount() {
    this.intervalStats = setInterval(() =>
      this.handleUpdateStats(),
    2000
    );
  }

  handleUpdateStats() {
    let updatedStats = Object.assign({}, this.state.tamagotchi);
    if(updatedStats.energy != 0 && updatedStats.sleeping === false) {
      updatedStats.energy--;
    } else if (updatedStats.energy != 0 && updatedStats.sleeping === true && updatedStats.energy != 10) {
      updatedStats.energy++;
    }

    this.setState({tamagotchi: updatedStats});
  }

  handleFeed() {
    let updatedStats = Object.assign({}, this.state.tamagotchi);
    if(updatedStats.hunger != 0 ) {
      updatedStats.hunger--;
      this.setState({tamagotchi: updatedStats});
    }
  }

  handlePlay() {
    let updatedStats = Object.assign({}, this.state.tamagotchi);
    if( updatedStats.happiness != 10) {
      updatedStats.happiness++;
      updatedStats.energy--;
      this.setState({tamagotchi: updatedStats});
    }
  }

  handleSleep() {
    let updatedStats = Object.assign({}, this.state.tamagotchi);
    updatedStats.sleeping = !updatedStats.sleeping;
    // if(updatedStats.sleeping === true) {
    //   updatedStats.energy = 10;
    // }
    this.setState({tamagotchi: updatedStats});
  }

  render(){
    return(
      <div>
        <PetView tamagotchi={this.state.tamagotchi}/>
        <InteractiveButtons
          tamagotchi={this.state.tamagotchi}
          onUpdateStats={this.handleUpdateStats} onFeed={this.handleFeed}
          onPlay={this.handlePlay}
          onSleep={this.handleSleep} />
      </div>
    );
  }
}

export default App;
