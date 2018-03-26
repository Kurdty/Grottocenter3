import fetch from 'isomorphic-fetch';

export function get(url, specificParameters, onSuccess, onFailure) {
  return fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
    //TODO add specificParameters
  })
  .then((response) => {
    if (response.status >= 400) {
      throw new Error('Bad response from server'); // TODO Add better error management
    }
    return response.text();
  })
  .then(result => onSuccess(result))
  .catch(error =>onFailure(error));
}

export function post(url, specificParameters, data, onSuccess, onFailure) {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    },
    body: JSON.stringify(data)
    //TODO add specificParameters
  })
  .then((response) => {
    if (response.status >= 400) {
      throw new Error('Bad response from server'); // TODO Add better error management
    }
    return response.text();
  })
  .then(result => onSuccess(result))
  .catch(error =>onFailure(error));
}
