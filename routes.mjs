import { resolve } from 'path';
import axios from 'axios';


export default function routes(app) {
  app.post('/searchGitHubTopic', async (request, response) => {
    try {
      const { toSearch } = request.body;

      axios.get(`https://api.github.com/search/topics?q=${toSearch}&per_page=100`)
        .then((results) => {
          response.send(results.data);
        }).catch((error) => {
          console.log(error);
        })
      // Response should be 
      // 1) to use the search term to send query to Github Search API using GET
      // 2) open a new window to the side to show the results 

    } catch (error) {
      console.log(error);
    }
  });


  // special JS page. Include the webpack index.html file
  app.get('/home', (request, response) => {
    response.sendFile(resolve('dist', 'main.html'));
  });
}
