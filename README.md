# Autocomplete-Backend Readme

This is a simple Node.js backend server to a ReactJs frontend ([autocomplete-frontend](https://github.com/R4Y815/autocomplete-frontend)) that autocompletes a search term for GitHub **Topics**. It is bootstrapped with [Create React App](https://github.com/facebook/create-react-app).<br>


Upon user selecting/completing the search term at the ReactJs frontend ([autocomplete-frontend](https://github.com/R4Y815/autocomplete-frontend)), **Autocomplete-Backend** sends an AJAX query to [GitHub Search API](https://docs.github.com/en/rest/search) to search through [GitHub Topics](https://github.com/topics).

The first 100 search results are returned in the front-end browser console as JavaScript objects in an array (`'results.data.items'`). See [autocomplete-frontend](https://github.com/R4Y815/autocomplete-frontend) for the frontend code. 

## **Instructions to run on Visual Code Studio:**
   1. In a new folder, git clone this repo onto the local machine.  <br>
      In the new bash terminal pane (you can use hotKey: Ctrl + Shift + `` ` `` to open a new terminal), type the following code:<br>
        `git clone https://github.com/R4Y815/autocomplete-backend.git`

   2. Change the working directory to the newly cloned repo directory containing the backend. <br>
        `cd autocomplete-backend`
   3. Install all dependencies for the backend locally:<br>
        `npm i`
   4. In the current bash terminal, run this backend Node.js server in development mode: <br>
        `npm run start`

        Readme ver. 1: 11/10/2022

