import React, { Component } from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import Home from './components/Home/Home';
import Events from './components/Events/Events';
import NotFound from './components/NotFound';

import App from './App';

const MOMENT_NAMES = ['Morning', 'Afternoon', 'Evening', 'Night'];
const DAY_NAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const mockMoods = [
  {
    tagline: 'I have no life and I still need to study.',
    mood: 'study',
  }, {
    tagline: 'Artistic evening.',
    mood: 'artsy'
  }, {
    tagline: 'Artistic evening.',
    mood: 'artsy'
  },
];

function hoursToMoment(hours) {
  if (hours > 4 && hours < 12 ) {
    return 0;
  } else if (hours < 4) {
    return 1;
  } else if (hours < 21) {
    return 2;
  } else {
    return 3;
  }
}

export default class Routes extends Component {
  constructor(props) {
    super(props);

    const currentDate = new Date();
    const currentDay = currentDate.getDay();
    const currentMoment = hoursToMoment(currentDate.getHours());
    this.state = {
      day: currentDay,
      days: DAY_NAMES.map((label, value) => ({label, value})),
      moment: currentMoment,
      moments: MOMENT_NAMES.map((label, value) => ({label, value})),
      moods:mockMoods,
    };

    this.selectDay = this.selectDay.bind(this);
    this.selectMoment = this.selectMoment.bind(this);
  }

  selectDay(id) {
    this.setState({day: id.value});
  }
  selectMoment(id) {
    this.setState({moment: id.value});
  }

  render() {
    return (
      <Router {...this.props}>
        <Route path="/" component={App}>
          <IndexRoute component={() => <Home
            day={this.state.day}
            days={this.state.days}
            moment={this.state.moment}
            moments={this.state.moments}
            selectDay={this.selectDay}
            selectMoment={this.selectMoment}
            moods={this.state.moods}
          />}/>
          <Route path='/events' component={() => <Events/>}/>
          <Route path="*" component={NotFound}/>
        </Route>
      </Router>
    );
  }
}
