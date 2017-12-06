'use strict';

const Hapi = require('hapi');
const Config = require('config');
const Joi = require('joi');
const Index = require('./Vue_front/store/index.js');


const handler = (request, reply) => {reply(state.list);}

const todo = require('./routes/todo')

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

server.register([
	{
    register: require('good'),
    options,
	}, 
	{
		register: todo,
		options : {},
	},
], (err) => {

server.route({										//Construction de la route 
    method: 'GET',
    path: '/crime',
    handler: handler
	});


server.start((err) => 
	{

    if (err) {
        throw err;
    }
    server.log('info', `Server running at: ${server.info.uri}`);
	})

}); 