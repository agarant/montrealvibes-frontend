
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
    return fetch(`api/moods?moment=${moment}`)
      .then(status)
      .then(json);
  },
  events(mood, day, moment) {
    return fetch(`api/events?mood=${encodeURIComponent(mood)}&day=${day}&moment=${moment}`)
      .then(status)
      .then(json);
  },
  routes(name) {
    return fetch(`api/routes?name=${encodeURIComponent(name)}`)
      .then(status)
      .then(json);
  }
};
