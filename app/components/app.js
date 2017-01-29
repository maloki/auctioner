import React, {Component} from 'react';
import List from './list';
import Header from './header';
import AddTag from './addTag';
import TagList from './tagList';

class App extends Component {
    render() {
        return (
            <div className="app">
                <Header/>
                <div className="container">
                    <List/>
                    <AddTag/>
                    <TagList/>
                </div>
            </div>
        );
    }
}

export default App;
