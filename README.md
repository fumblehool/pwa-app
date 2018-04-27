# IPL Dashboard
[Demo](http://fumblehool.github.io/pwa-app/)

### Data Pre-processing
The given Kaggle Data set cannot be used directly, so I have processed it and have used some records from IPL's official website.

### Stacks Used

**React.js**: Framework used to create the web-app.

**Recharts**: Used to create Charts (linecharts).

**bootstrap**: I have used bootstrap to make this web-app responsive.

**react-router**: Routing Library used.

**webpack**: Bundling tool used.

### Run Locally

1. Clone this repositoy using ```$ git clone git@github.com:fumblehool/pwa-app.git```
2. Install dependencies by running ```$npm install```
3. Start Local webpack-dev-server using ```$ npm run start```
4. Open Web browser at ```localhost:8080```


### To-do

1. Add support to compare player stats using visual charts.
2. Currently webpack is splitting bundle in two parts. Further optimise loading time.
3. Convert this into a Progressive Web App.
