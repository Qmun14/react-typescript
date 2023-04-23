import { Component } from 'react'

type CounterProps = {
  message: string
}

type CounterState = {
  count: number
}

// Nilai count harusnya 5
export class Counter extends Component<CounterProps, CounterState> {           // ... extends  Component<{}, CounterState> kalo cuma butuh state aja
  state = {                                                                    // ... extends  Component<CounterProps, {}> kalo cuma butuh Props aja
    count: 0,
  }

  handleClick = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }))
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Increment</button>
        {this.props.message} {this.state.count}
      </div>
    )
  }
}
