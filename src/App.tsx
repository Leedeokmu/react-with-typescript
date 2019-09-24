import React, {Component} from 'react';

interface AppProps {
  name: string;
  company?: string;
}
interface AppState {
  age: number
}

class App extends Component<AppProps, AppState>{
  static defaultProps = {
    company: 'bluehole'
  }
  constructor(props: AppProps){
    super(props);
    this.state = {
      age: 22
    };
  }
  componentDidMount(): void {
    console.log(`App componentDidMount`);
    setInterval(() => {
      this.setState({
        age: this.state.age + 1
      })
    }, 2000)
  }

  private _rollback = (): void => {
    this.setState({
      age: 20
    })
  }


  render() {
    const name = {
      name: 'Anna'

    }

    return (
        <div>
          <p>
            {this.props.name} Hi!
            I'm {this.state.age} In {this.props.company}
          </p>
          <div><button onClick={this._rollback}>회춘</button></div>

          <StatelessComponent {...name}>Hi! I'm child</StatelessComponent>
        </div>
    );
  }
}

const StatelessComponent: React.FC<AppProps> = ({...props}) => {
  return (
      <h2>{props.name} {props.company} {props.children}</h2>
  )
}
StatelessComponent.defaultProps = {
  company: 'Home'
}

export default App;