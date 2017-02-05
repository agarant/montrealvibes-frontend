import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Home from './components/Home/Home';
import Events from './components/Events/Events';
import NotFound from './components/NotFound';
import api from './services/api';

import App from './App';

const MOMENT_NAMES = ['Morning', 'Afternoon', 'Evening', 'Late Night'];
const DAY_NAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const mockMoods = [
  {
    tagline: 'I have no life and I still need to study.',
    mood: 'sport',
  }, {
    tagline: 'Artistic evening.',
    mood: 'learn',
  }, {
    tagline: 'Artistic evening.',
    mood: 'money'
  },
  {
    tagline: 'I have no life and I still need to study.',
    mood: 'lunch',
  }, {
    tagline: 'Artistic evening.',
    mood: 'work'
  }, {
    tagline: 'Artistic evening.',
    mood: 'animals'
  },
];

const mockEvents = [{"name":"O.Noir","tagline":"Eat in total darkness.","mood":["lunch","adventurous"],"popularDays":[],"popularMoment":[],"url":"https://maps.google.com/?cid=10846218657902340389","rating":4.2,"lat":45.5150844,"long":-73.5713464,"opened":{"0":["3"],"1":["3"],"2":["3"],"3":["3"],"4":["3"],"5":["3"],"6":["3"]}},{"name":"Restaurant 3734","tagline":"Trendy resto-bar.","mood":["date","lunch"],"popularDays":[],"popularMoment":[],"url":"https://maps.google.com/?cid=4010323157375628188","rating":4.1,"lat":45.47901909999999,"long":-73.5817833,"opened":{"0":[],"1":[],"2":[],"3":[],"4":[],"5":[],"6":[],"7":[],"8":[],"9":[],"10":[],"11":[]}},{"name":"Fameux Viande Fumée Et Charcuterie","tagline":"Best Smoked meet in town","mood":["lunch","cheap"],"popularDays":[],"popularMoment":[],"url":"https://maps.google.com/?cid=18372544678616410886","rating":3.4,"lat":45.52386099999999,"long":-73.583154,"opened":{"0":["3"],"1":["3"],"2":["3"],"3":["3"],"4":["3"]}},{"name":"La Banquise","tagline":"Breakfasts, poutines and all day, all night.","mood":["lunch","cheap"],"popularDays":[],"popularMoment":[3],"url":"https://maps.google.com/?cid=10356172211970105105","rating":4.3,"lat":45.5253521,"long":-73.5747681,"opened":{"0":["1","2","3","4"]}},{"name":"CINKO","tagline":"Cheap meals for only 5$.","mood":["lunch","cheap","date","work"],"popularDays":[],"popularMoment":[1,2],"url":"https://maps.google.com/?cid=652266601461190956","rating":4,"lat":45.515122,"long":-73.56310119999999,"opened":{"0":["3"],"1":["3"],"2":["3"],"3":["3"],"4":["3"],"5":["3"],"6":["3"]}},{"name":"L’Entrepôt Mont-Royal","tagline":"Delicious beers, cocktails and 5$ food.","mood":["lunch","cheap","bar"],"popularDays":[],"popularMoment":[],"url":"https://maps.google.com/?cid=9468178804528085060","rating":4.2,"lat":45.5276679,"long":-73.579773,"opened":{"0":["3"],"1":["3"],"2":["3"],"3":["3"],"4":["3"],"5":["3"],"6":["3"]}},{"name":"Pizzeria Napoletana","tagline":"Marvelous italien meal","mood":["lunch"],"popularDays":[],"popularMoment":[],"url":"https://maps.google.com/?cid=15802365865580095740","rating":4,"lat":45.5343649,"long":-73.61256139999999,"opened":{"0":["1","2"],"1":["1","2"],"2":["1","2"],"3":["1","2"],"4":["1","2"],"5":["1","2"],"6":["1","2"]}},{"name":"McCarold's","tagline":"Many beers and whiskies ","mood":["lunch","bar","work"],"popularDays":[],"popularMoment":[],"url":"https://maps.google.com/?cid=8333270201535707635","rating":4.2,"lat":45.4966909,"long":-73.6236735,"opened":{"0":["3"],"1":["3"],"2":["3"],"3":["3"],"4":["3"],"5":["3"],"6":["3"]}},{"name":"Restaurant Boustan","tagline":"Montreal's Best Middle‑Eastern Fast Food","mood":["lunch","cheap","work"],"popularDays":[],"popularMoment":[3],"url":"https://maps.google.com/?cid=9633948780008571981","rating":4.1,"lat":45.4980227,"long":-73.5778574,"opened":{"0":[],"1":[],"2":[],"3":[],"4":[],"5":[],"6":[]}},{"name":"Au Pied de Cochon","tagline":"Cooking class or simply eat MEAT","mood":["lunch","money","date","adventurous","learn"],"popularDays":[],"popularMoment":[],"url":"https://maps.google.com/?cid=3500039342510136284","rating":4.4,"lat":45.5221677,"long":-73.5744489,"opened":{"0":["3"],"1":["3"],"2":["3"],"3":["3"],"4":["3"]}}
];

function openInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}

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
      moods:[],
      selectedMood: '',
      events:[],
      selectedEvent: '',
      routeEvents: [],
    };

    this.selectDay = this.selectDay.bind(this);
    this.selectMoment = this.selectMoment.bind(this);
    this.selectMood = this.selectMood.bind(this);
    this.setMoods = this.setMoods.bind(this);
    this.getEvents = this.getEvents.bind(this);
    this.selectEvent = this.selectEvent.bind(this);

    this.setMoods(currentMoment);
  }

  selectDay(id) {
    this.setState({day: id.value});
    this.setMoods(this.state.moment);
  }
  selectMoment(id) {
    this.setState({moment: id.value});
    this.setMoods(id.value);
  }

  selectMood(mood) {
    this.setState({selectedMood: mood});
    this.getEvents(mood);
  }

  selectEvent(route, url) {
    if (route) {
      browserHistory.push('/routes');
      const routeName = url;
      api.routes(routeName).then((routeEvents) => {
        this.setState({routeEvents})
      });
    }
    openInNewTab(url);
  }

  getEvents(mood) {
    api.events(mood, this.state.day, this.state.moment).then((events) => {
      this.setState({events});
      browserHistory.push('/events');
    })
  }

  setMoods(moment) {
    api.moods(moment).then((moods) => {
      this.setState({moods});
    });
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
            selectMood={this.selectMood}
          />}/>
          <Route path='/events' onEnter={this.checkIfEvents} component={() => <Events
            events={this.state.events}
            selectEvent={this.selectEvent}
          />}/>
          <Route path="*" component={NotFound}/>
        </Route>
      </Router>
    );
  }
}
