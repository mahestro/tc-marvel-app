import superagent from 'superagent';

const tokenPlugin = req => {
    req.set('authorization', `Bearer ${process.env.REACT_APP_LOCAL_API_TOKEN}`);
}

const requests = {
  get: url =>
    superagent.get(url).use(tokenPlugin),
  post: (url, body) =>
    superagent.post(url, body).use(tokenPlugin),
  put: (url, body) =>
    superagent.put(url, body).use(tokenPlugin),
  delete: url =>
    superagent.delete(url).use(tokenPlugin)
};

export default {
  requests
};
