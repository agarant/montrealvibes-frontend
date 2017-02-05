
function status(response) {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response)
  } else {
    return Promise.reject(new Error(response.statusText))
  }
}

function json(response) {
  console.log(response);
  return response.json()
}

export default {
  moods(moment) {
    return fetch(`moods?moment=${moment}`)
      .then(status)
      .then(json);
  },
  events(mood, day, moment) {
    return fetch(`events?mood=${encodeURIComponent(mood)}&day=${day}&moment=${moment}`)
      .then(status)
      .then(json)
      .then(res => res.filter(a => a));
  },
  routes(name) {
    return fetch(`routes?name=${encodeURIComponent(name)}`)
      .then(status)
      .then(json);
  }
};
