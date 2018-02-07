import React, {Component} from 'react'

class App extends Component {
    render() {
      return (
        <div>
            <article>
                <h1 className="title">Mi primer App en {this.props.name}</h1>
                <img src="https://facebook.github.io/react/img/logo.svg" />
            </article>
        </div>
      )
    }
}

export default App