import React, { Component } from 'react';
import './App.css';
import store from './store.js';
import { Provider } from "react-redux";
import SpottingsList from './components/spottings/SpottingsList';
import SubmitSpotting from './components/spottings/SubmitSpotting';
import SubmitSpottingButton from './components/spottings/SubmitSpottingButton';
import BirdTypeFilters from './components/filters/BirdTypeFilters';
import ConfidenceFilters from './components/filters/ConfidenceFilters';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
            <SubmitSpottingButton />
            <SubmitSpotting />
            <ConfidenceFilters />
            <BirdTypeFilters />
            <SpottingsList />
        </div>
      </Provider>
    );
  }
}

export default App;
