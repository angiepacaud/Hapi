const Joi = require('joi');
exports.register = function (server, options, next){

    server.route({
        method: 'GET',
        path: '/todo',
        handler: Handlers.example
    });

server.route({										//Construction de la route 
    method: ['PUT', 'POST'],
    path: '/todo',
 //    config: {
 //    	payload : {
 //    		parse: true
 //    	},
 //        validate: {
 //            playload : Joi.object({
 //    		  user: Joi.number().min(1),
 //    		  test: Joi.bool()
 //    		})
 //    	}
	// },
    handler: Handlers.etna
	});
        next();
};

const Handlers = {};

Handlers.example = (request, reply) => {
    reply('todo');
}

Handlers.etna = (request, reply) => {reply('toto')}

exports.register.attributes = {
    name: 'todo',

};