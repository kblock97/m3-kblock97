import React from 'react';
import './Main.css';
import {NavLink, Switch, Route} from 'react-router-dom';

// This is the website's menu page
export default class Main extends React.Component {

    render() { 

        return (
        <div class="a">
            <h1>Hello World!</h1>

<a href="Test" target="_blank" class="button button1">Take The Test!</a>
<a href="SignIn" target="_blank" class="button button2">Log in</a>
</div>
);
    }

}