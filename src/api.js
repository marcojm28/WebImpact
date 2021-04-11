const BASE_URL = 'http://localhost:9000/api/';

async function callApi(endpoint, options = {}) {

  options.headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  const url = BASE_URL + endpoint;
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
}

const api = {
  clients: {
    list() {
      return callApi('/listclientes', {
        method: 'GET',
      });
    },
    create(clients) {
      return callApi('/creacliente', {
        method: 'POST',
        body: JSON.stringify(clients),
      });
      
    },
    getKpi() {
      return callApi('/kpideclientes', {
        method: 'GET',
      });
    },
  },
};

export default api;