import fetch from 'isomorphic-fetch';

const checkStatus = response => {
  if (response.code === 200) {
    return response.data
  }

  var error = new Error(response.message)
  throw error
}

const parseJSON = response => response.json();

export default function request({ url, method, headers, host, data }) {

	// use default api host
	if (host) {
		url = `${host}${url}`;
	}

	if (!method) {
		method = 'get';
	}

	headers = headers || {};

	headers = {
		...headers,
		Accept: 'application/json',
    'Content-Type': 'application/json'
	};

	const options = {
    method,
    credentials: 'include',
    headers,
    body: JSON.stringify(data)
  };

	return fetch(url, options)
    .then(parseJSON)
    .then(checkStatus)
};