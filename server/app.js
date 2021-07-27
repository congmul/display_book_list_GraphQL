const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require("mongoose");


const app = express();

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/graphQLPractice", { useNewUrlParser: true });
mongoose.connection.once('open', () => {
    console.log('conneted to database')
})

app.use('/graphql', graphqlHTTP({
    // pass Schema
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('now listening for requests on port 4000')
});

