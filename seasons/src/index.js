import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);

        //This is the ONLY time you do direct assignment of state
        this.state = { lat: null, errorMessage: '' };

        window.navigator.geolocation.getCurrentPosition(
            position => {
            //we called setState!
            this.setState({ lat: position.coords.latitude  });
        },
            err => {
                this.setState({ errorMessage: err.message });
        }
        );
    }
    render() {
        if(this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        } else if(!this.state.errorMessage && !this.state.lat) {
            return <div>Loading...</div>
        } else {
            return <div>Latitude: {this.state.lat}</div>
        }
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));