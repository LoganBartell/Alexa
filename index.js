var Alexa = require('alexa-sdk');

exports.handler = function(event, context, callback){
    var alexa = Alexa.handler(event, context, callback);
};

var handlers = {
  'LaunchRequest': function () {
        this.emit('LightsOnIntent');
    },

    'LightsOnIntent': function () {
        this.emit(':tell', 'Lights On!');
        //api call for lights on
    }

};

exports.handler = function(event, context, callback) {
     var alexa = Alexa.handler(event, context, callback);
     alexa.registerHandlers(handlers);
     alexa.execute();
 };
