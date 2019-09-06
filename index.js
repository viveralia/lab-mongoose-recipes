const mongoose = require('mongoose')
const Recipe = require('./models/Recipe') // Import of the model Recipe from './models/Recipe'
const data = require('./data.js') // Import of the data from './data.js'

/******************************/
/*********** SEEDS ************/
/******************************/
// mongoose
//   .connect('mongodb://localhost/recipeApp', { useNewUrlParser: true })
//   .then(() => {
//     console.log('Connected to Mongo!')
//     Recipe.create(data).then(docs => {
//       console.log(`${docs.length} recipes created`)
//       mongoose.connection.close()
//     })
//   })
//   .catch(err => {
//     console.error('Error connecting to mongo', err)
//   })

/******************************/
/*********** CREATE ************/
/******************************/
// const myRecipe = {
//   title: 'Pozole',
//   cuisine: 'No sé que es cuisine'
// }

// mongoose
//   .connect('mongodb://localhost/recipeApp', { useNewUrlParser: true })
//   .then(() => {
//     console.log('Connected to Mongo!')
//     Recipe.create(myRecipe).then(docs => {
//       console.log(`${docs.length} recipes created`)
//       mongoose.connection.close()
//     })
//   })
//   .catch(error => {
//     console.error('Error connecting to mongo', err)
//   })

/******************************/
/*********** UPDATE ************/
/******************************/
// mongoose
//   .connect('mongodb://localhost/recipeApp', { useNewUrlParser: true })
//   .then(() => {
//     console.log('Connected to Mongo!')
//     Recipe.findOneAndUpdate({ title: 'Rigatoni alla Genovese' }, { $set: { duration: 100 } }).then(docs => {
//       mongoose.connection.close()
//     })
//   })
//   .catch(error => {
//     console.error('Error connecting to mongo', err)
//   })

/******************************/
/*********** DELETE ************/
/******************************/
// mongoose
//   .connect('mongodb://localhost/recipeApp', { useNewUrlParser: true })
//   .then(() => {
//     console.log('Connected to Mongo!')
//     Recipe.deleteOne({ title: 'Carrot Cake' }).then(docs => {
//       mongoose.connection.close()
//     })
//   })
//   .catch(error => {
//     console.error('Error connecting to mongo', err)
//   })
