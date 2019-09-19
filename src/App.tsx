import React, {Component} from 'react';

interface AppProps {
  name: string
}
interface AppState {
  age: number
}

class App extends Component<AppProps, AppState>{
  constructor(props: AppProps){
    super(props);
    this.state = {
      age: 22
    };
    setInterval(() => {
      this.setState({
        age: this.state.age + 1
      })
    }, 2000)
  }

  render() {
    return (
        <div>
          {this.props.name} Hi!
          I'm {this.state.age}
          <StatelessComponent name="Anna">Hi!</StatelessComponent>
        </div>
    );
  }
}

const StatelessComponent: React.FC<AppProps> = (props) => {
  return (
      <h2>{props.name} {props.children}</h2>
  )
}

export default App;
