'use strict';

const Hapi = require('hapi');
const Config = require('config');
const Joi = require('joi');
const Index = require('./Vue_front/store/index.js');
const mongojs = require('mongojs'); 
const todo = require('./routes/todo')
const crime = require('./routes/crime')
const options = 
{
    ops: {
        interval: 1000
    },
    reporters: {
        myConsoleReporter: [{
            module: 'good-squeeze',
            name: 'Squeeze',
            args: [{ log: '*', response: '*' }]
        }, {
            module: 'good-console'
        }, 'stdout']
    }
}

const server = new Hapi.Server();
server.connection(Config.get('api'));


const handler = (request, reply) => {reply('Goku');}

server.app.db = mongojs('db', ['crime']);

server.register([
    {
    register: require('good'),
    options,
    }, 
    {
        register: crime,
        options : {},
    },
], (err) => {

server.route({                                      //Construction de la route 
    method: 'GET',
    path: '/crime',
    handler: function (request, reply) {
        db.crime.find((err, docs) => {
            if (err) {
                return reply('error');
            }

            reply(docs);
        });
    }
});

server.route({                                      //Construction de la route 
    method: 'GET',
    path: '/crime/{id}',
    handler: function (request, reply) {
        db.crime.findOne({
            _id: request.params.id
        }, (err, doc) => {
            if (err) {
                return reply('error');
            }
            if (!doc) {
                return reply(Boom.notFound());
            }
            reply(doc);
        });
    }
});

server.start((err) => 
    {

    if (err) {
        throw err;
    }
    server.log('info', `Server running at: ${server.info.uri}`);
    })

}); 

server.ext({
    type: 'onRequest',
    method: function (request, reply) {

        // Change all requests to '/test'
        server.log('info', 'onRequest')
        return reply.continue();
    }
});

server.ext({
    type: 'onPreAuth',
    method: function (request, reply) {

        // Change all requests to '/test'
        server.log('info', 'onPreAuth')
        return reply.continue();
    }
});

