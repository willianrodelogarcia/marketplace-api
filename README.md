# MarketPlace - API

through this api you can consult the products of the trade, in addition to consulting by name and category.

### Routes

* /api/products - List all products - GET
* /api/products - Receive product data to store in the database - POST
* /api/search/:name - Search for a product by name - GET
* /api/filter/:category - Search the products by category - GET

### Technologies used

This API uses several technologies such as:

* [express] - Express is the most popular Node web framework, and is the underlying library for a number of other popular Node web frameworks.
* [node.js] - evented I/O for the backend
* [mongoose] - It is a JavaScript library that allows you to define schemas with strongly typed data
* [heroku] - Heroku is a platform as a cloud computing service that supports different programming languages.
* [mlab] - mLab is a fully managed cloud database service that hosts MongoDB databases.

### Installation
Install the dependencies and devDependencies and start the server.

When running the server starts on http://localhost:1337/

```sh
$ npm install
$ npm start
```
   [express]: <https://expressjs.com/>
   [node.js]: <http://nodejs.org>
   [mongoose]:<https://mongoosejs.com/>
   [heroku]: <https://www.heroku.com/>
   [mlab]: <https://www.heroku.com/>
   
   
   
