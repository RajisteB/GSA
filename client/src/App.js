import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import { AppHeader } from './components/header/header';
import Footer from './components/footer/footer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: '',
      isSignedIn: false,
      isMenuActive: false,
      screenSize: window.innerWidth
    }
  }

  isUserSignedIn = () => {
    let token = window.localStorage.getItem('token');
    let user = window.localStorage.getItem('user');
    if (token) this.setState({ isSignedIn: true, user})
  }

  toggleMenu = () => {
    this.setState({
      isMenuActive: !this.state.isMenuActive
    })
  }

  componentDidMount() {
    window.addEventListener('resize', (e) => {
      let screenSize = e.target.screen.width;
      this.setState({
        screenSize
      });
    })
  }

  render() {
    let { screenSize, isMenuActive } = this.state;
    return (
      <div className="App">
        <Switch>
          <Fragment>
            <Route exact path="/" component={()=> (
              <div>
                <AppHeader toggle={this.toggleMenu} active={isMenuActive} size={screenSize}/>
                <Home />
                <Footer />
              </div>
            )}/>
          </Fragment>
        </Switch>
      </div>
    );
  }
}

export default App;
