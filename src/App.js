//Dependencies
import React, {Component} from 'react'

class App extends Component {
    render() {
      return (
        <div>            
            <h1 className="title">Mi primer App en {this.props.name}</h1>
            <img src="https://cdn.worldvectorlogo.com/logos/react.svg" />            
        </div>
      )
    }
}

export default App