import React from 'react';
import Header from './header/Header';
import Nav from './nav/Nav';

class App extends React.Component {

    render() {
        return (
            <div className="mainContainer">
                <Header />
                <Nav />
            </div>
        );
    }
};


export default App;