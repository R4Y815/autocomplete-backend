import { resolve } from 'path';
import axios from 'axios';

// Modules: GitHub SDK
import { Octokit } from '@octokit/core';

// use .env process from dotenv as CRA react-scripts not running
import * as dotenv from 'dotenv';



// GLOBAL Auth from Octokit for GitHub API
dotenv.config()
const ghToken = process.env.REACT_APP_GH_TOKEN;


export default function routes(app) {
  app.post('/checkSearchRequests', async (request, response) => {
    try {
      const octokit = new Octokit({
        auth: ghToken
      })
      await octokit.request('GET /rate_limit', {})
        .then((response) => console.log(response.data.resources.search))
        .catch((error) => {
          console.log(error);
        })
    } catch (error) {
      console.log(error);
    }
  })


  app.post('/autocomplete', async (request, response) => {
    try {
      console.log(request.body);
      const { input } = request.body;
      const octokit = new Octokit({
        auth: ghToken
      })
      await octokit.request(`https://api.github.com/search/topics?q=${input}&per_page=5`, {})
        .then((results) => {
          const tempTitles = [];
          const items = results.data.items;
          items.forEach((x) => {
            if (x.name.includes(input)) { tempTitles.push(x.name) }
          });
          const retPossibles = { possibles: tempTitles }
          response.send(retPossibles);
        }).catch((error) => {
          console.log(error);
        })

    } catch (error) {
      console.log(error);
    }
  });




  app.post('/searchGitHubTopic', async (request, response) => {
    try {
      const { toSearch } = request.body;

      axios.get(`https://api.github.com/search/topics?q=${toSearch}&per_page=100`)
        .then((results) => {
          response.send(results.data);
        }).catch((error) => {
          console.log(error);
        })

    } catch (error) {
      console.log(error);
    }
  });

  // special JS page. Include the webpack index.html file
  app.get('/home', (request, response) => {
    response.sendFile(resolve('dist', 'main.html'));
  });
}
