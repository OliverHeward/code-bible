// Updating Lifecycle Methods 

/* 
	There are two categories not yet discussed -> Updating and Unmounting Lifecycle Methods. 

	What is updating? 

	The first time that a component instance renders, it does not update. A component updates every time that it renders, starting with the second render.

	There ar efive updating lifecycling methods: 

		- componentWillReceiveProps
		- shouldComponentUpdate
		- ComponentWillUpdate
		- render
		- componentDidUpdate

	Whenever a component instance updates, it automatically calls all five of these methods, in order.

*/

/* 
	componentWillRecieveProps 

	The first updating lifecycle method is called componentWillRecieveProps.

	When a component instance updates, componentWillReceiveProps gets called before the rendering begins

	As one might expect, 'componentWillRecieveProps' only gets called if the component will receive 'props':
*/

// componentWillRecieveProps will get called here:
ReactDOM.render(
    <Example prop="myVal" />
    document.getElementById('app');
);

// componentWillReceiveProps will NOT get called here:
ReactDOM.render(
    <Example />
    document.getElementByID('app')
);

/* In the example below, 

	componentWillReceiveProps automatically gets passed one argument: an object called 'nextProps'.
	'nextProps' is a preview of the upcoming 'props' object that the component is about to receive.
	on line 56 nextProps.text will evaluate too "Hello, World".

*/

// from Example.js
import React from 'react';

export class Example extends React.Component {
    componentWillReceiveProps(nextProps) {
        alert("Check out the new props.text that " +
            "I'm about to get:  " + nextProps.text);
    }

    render() {
        return <h1>{this.props.text}</h1>;
    }
}


// The first render won't trigger
// componentWillReceiveProps:
ReactDOM.render(
    <Example text="Hello world" />,
    document.getElementById('app')
);

// After the first render, 
// subsequent renders will trigger
// componentWillReceiveProps:
setTimeout(() => {
    ReactDOM.render(
        <Example text="Hello world" />,
        document.getElementById('app')
    );
}, 1000);

// from App.js
import React from 'react';
import ReactDOM from 'react-dom';
import { TopNumber } from './TopNumber';
import { Display } from './Display';
import { Target } from './Target';
import { random, clone } from './helpers';

const fieldStyle = {
    position: 'absolute',
    width: 250,
    bottom: 60,
    left: 10,
    height: '60%',
};

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            game: false,
            targets: {},
            latestClick: 0
        };

        this.intervals = null;

        this.hitTarget = this.hitTarget.bind(this);
        this.startGame = this.startGame.bind(this);
        this.endGame = this.endGame.bind(this);
    }

    createTarget(key, ms) {
        ms = ms || random(500, 2000);
        this.intervals.push(setInterval(function() {
            let targets = clone(this.state.targets);
            let num = random(1, 1000 * 1000);
            targets[key] = targets[key] != 0 ? 0 : num;
            this.setState({ targets: targets });
        }.bind(this), ms));
    }

    hitTarget(e) {
        if (e.target.className != 'target') return;
        let num = parseInt(e.target.innerText);
        for (let target in this.state.targets) {
            let key = Math.random().toFixed(4);
            this.createTarget(key);
        }
        this.setState({ latestClick: num });
    }

    startGame() {
        this.createTarget('first', 750);
        this.setState({
            game: true
        });
    }

    endGame() {
        this.intervals.forEach((int) => {
            clearInterval(int);
        });
        this.intervals = [];
        this.setState({
            game: false,
            targets: {},
            latestClick: 0
        });
    }

    componentWillMount() {
        this.intervals = [];
    }

    render() {
        let buttonStyle = {
            display: this.state.game ? 'none' : 'inline-block'
        };
        let targets = [];
        for (let key in this.state.targets) {
            targets.push(
                <Target 
          number={this.state.targets[key]} 
          key={key} />
            );
        }
        return (
            <div>
        <TopNumber number={this.state.latestClick} game={this.state.game} />
        <Display number={this.state.latestClick} />
        <button onClick={this.startGame} style={buttonStyle}>
          New Game 
        </button>
        <div style={fieldStyle} onClick={this.hitTarget}>
          {targets}
        </div>
      </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);

//from TopNumber.js 

import React from 'react';
import ReactDOM from 'react-dom';
const yellow = 'rgb(255, 215, 18)';

export class TopNumber extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 'highest': 0 };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.number > this.state.highest) {
            this.setState({
                highest: nextProps.number
            });
        }
    }

    render() {
        return (
            <h1>
        Top Number: {this.state.highest}
      </h1>
        );
    }
}

TopNumber.propTypes = {
    number: React.PropTypes.number,
    game: React.PropTypes.bool
};

/* componentWillReceiveProps is passed a parameter of nextProps 
	a conditional is used to check whether the new number (nextProps.number) is greater than this.state.highest 
	if true, it will set the state to be the highest number.
*/


/* 	shouldComponentUpdate 

	The second updating lifecycle method is callde shouldComponentUpdate

	When a component updates, 'shouldComponentUpdate' gets called after 'componentWillReceiveProps', but still before the rendering begins.

*/

shouldComponentUpdate(nextProps, nextState) {
    if ((this.props.text == nextProps.text) &&
        (this.state.subtext == nextState.subtext)) {
        alert("Props and state haven't changed, so I'm not gonna update!");
        return false;
    } else {
        alert("Okay fine I will update.")
        return true;
    }
}

/* In the code above, shouldComponentUpdate is passed to parameters of nextProps and nextState
	a conditional is used to check whether this.props.text is equal to nextProps.text 
	and the same for the subtext
		if it is equal then it is returned as a 'false' and an alert is shown

	if it is not equal then the props will be updated as they will return 'true' and an alert will show
*/

/* 
	if 'shouldComponentUpdate' returns 'true', then nothing noticeabe happens. But if 'shouldComponentUpdate' returns 'false', then the component will not update! None of the remaining lifecycle methods for that updating peroid will be called, including render.

	The est way to use 'shouldComponentUpdate' is to have it return 'false' only under certain conditions. If those conditions are met, then your component will update.

	'shouldComponentUpdate' automatically receives two arguments: nextProps and nextState Its typical to compare 'nextProps' and 'nextState' to the current this.props and this.state, and use the results to decide what to do. 

*/


// Target.js
import React from 'react';
import { random } from './helpers';

export class Target extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.number != nextProps.number;
    }

    render() {
        let visibility = this.props.number ? 'visible' : 'hidden';
        let style = {
            position: 'absolute',
            left: random(0, 100) + '%',
            top: random(0, 100) + '%',
            fontSize: 40,
            cursor: 'pointer',
            visibility: visibility
        };

        return (
            <span style={style} className="target">
        {this.props.number}
      </span>
        )
    }
}

Target.propTypes = {
    number: React.PropTypes.number.isRequired
};

// class Target is given a shouldComponentUpdate function that takes in nextProps and nextState as parameters


/* 	'componentWillUpdate'

	The third updating lifecycle method is 'componentWillUpdate'

	'componentWillUpdate' gets called in between 'shouldComponentUpdate' and 'render'

	'componentWillUpdate' receives two arguments: 'nextProps' and 'nextState'. Read Code below to see it in action 
*/

import React from 'react';

export class Example extends React.Component {
    componentWillUpdate(nextProps, nextState) {
        alert('Component is about to update!  Any second now!');
    }

    render() {
        return <h1>Hello world</h1>;
    }
}

/*	You cannot call this.setState from the body of 'componentWillUpdate!
		Which begs the question, why would use it?!

	The main purpose of 'componentWillUpdate' is to interact with things outside of the React architecture. If you need to do non-React setup before a component renders, such as checking the 'window' size or interacting with an API, then 'componentWillUpdate' is a good place to do that.

	If that sounds abstract, thats okay! all of the lifecycle methods might feel a bit theorectical, until youve used them in real-life scenarios. You'll be doing more of that in the next part :) 
*/

import React from 'react';
import ReactDOM from 'react-dom';
const yellow = 'rgb(255, 215, 18)';

export class TopNumber extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 'highest': 0 };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.number > this.state.highest) {
            this.setState({
                highest: nextProps.number
            });
        }
    }

    componentWillUpdate(nextProps, nextState) {
        if (document.body.style.background != yellow && this.state.highest >= 950 * 1000) {
            document.body.style.background = yellow;
        } else if (!this.props.game && nextProps.game) {
            document.body.style.background = 'white';
        }
    }

    render() {
        return (
            <h1>
        Top Number: {this.state.highest}
      </h1>
        );
    }
}

TopNumber.propTypes = {
    number: React.PropTypes.number,
    game: React.PropTypes.bool
};

/* 
	In this exercise - componentWillUpdate is passed two parameters of nextProps and nextState
		a condition checks if the background is yellow && if the this.state.highest is greater than or equal to 950,000
			if true it will turn the background yellow - from a saved variable

		and else if statement is used, that if the nextProps.game is a new game
			then the document.body.style.background is reverted to white.

*/


/* 
	'componentDidUpdate'

	The last updating lifecycle method is 'componentDidUpdate'

	When a component instance updates, 'componentDidUpdate' gets called after any rendered HTML has finished loading.

	See the example after this comment block to view 'componentDidUpdate'
*/
import React from 'react';

export class Example extends React.component {
    componentDidUpdate(prevProps, prevState) {
        alert('Component is done rendering!');
    }

    render() {
        return <h1>Hello world</h1>;
    }
}
/*
	'componentDidUpdate' automatically gets passed two arguments:
	'prevProps' and 'prevState'. 
	'prevProps' and 'prevState' are references to the component's 'props' and 'state' before the current updating period began. You can compare them to the current 'props' and 'state'.

	'componentDidUpdate' is usually used for interacting with things outside of the React environment, like the browser or API's. It's similar to 'componentWillUpdate' in that way, expect that it gets called after 'render' instead of before.
*/

// APP.JS FOR GAME RENDER 

import React from 'react';
import ReactDOM from 'react-dom';
import { TopNumber } from './TopNumber';
import { Display } from './Display';
import { Target } from './Target';
import { random, clone } from './helpers'; 

const fieldStyle = {
  position: 'absolute',
  width: 250,
  bottom: 60,
  left: 10,
  height: '60%',
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      game: false,
      targets: {},
      latestClick: 0
    };

    this.intervals = null;

    this.hitTarget = this.hitTarget.bind(this);
    this.startGame = this.startGame.bind(this);
    this.endGame = this.endGame.bind(this);
  }

  createTarget(key, ms) {
    ms = ms || random(500, 2000);
    this.intervals.push(setInterval(function(){
      let targets = clone(this.state.targets);
      let num = random(1, 1000*1000);
      targets[key] = targets[key] != 0 ? 0 : num;
      this.setState({ targets: targets });
    }.bind(this), ms));
  }

  hitTarget(e) {
    if (e.target.className != 'target') return;
    let num = parseInt(e.target.innerText);
    for (let target in this.state.targets) {
      let key = Math.random().toFixed(4);
      this.createTarget(key);
    }
    this.setState({ latestClick: num });
  }

  startGame() {
    this.createTarget('first', 750);
    this.setState({
      game: true
    });
  }

  endGame() {
    this.intervals.forEach((int) => {
      clearInterval(int);
    });
    this.intervals = [];
    this.setState({
      game: false,
      targets: {},
      latestClick: 0
    });
  }
  
  componentDidUpdate(prevProps, prevState) {
    if (this.state.latestClick < prevState.latestClick) {
      this.endGame();
    }
  }

  componentWillMount() {
    this.intervals = [];
  }

  render() {
    let buttonStyle = {
      display: this.state.game ? 'none' : 'inline-block'
    };
    let targets = [];
    for (let key in this.state.targets) {
      targets.push(
        <Target 
          number={this.state.targets[key]} 
          key={key} />
      );
    }
    return (
      <div>
        <TopNumber number={this.state.latestClick} game={this.state.game} />
        <Display number={this.state.latestClick} />
        <button onClick={this.startGame} style={buttonStyle}>
          New Game 
        </button>
        <div style={fieldStyle} onClick={this.hitTarget}>
          {targets}
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('app')
);


/* componentWillUnmount

	A component's unmounting peroid occurs when the component is removed from the DOM. THis could happen if the DOM is rerendered without the component, or if the user navigates to a different website or closes their web browser.

	componentWillUnmount is the only unmounting lifecycle method!

	componentWillUnmount gets called right before a component is removed form the DOM. If a component inititates any methods that require cleanup, then 'componentWillUnmount' is where you should put that cleanup. 

/*





