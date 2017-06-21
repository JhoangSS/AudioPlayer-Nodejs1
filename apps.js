'use strict';

var alexa = require('alexa-sdk');

var APP_ID = "amzn1.ask.skill.b5c95058-7134-4044-9e77-a4279e0adaf7";

var PAUSE_MESSAGE = "paused!";
var RESUME_MESSAGE = "resumed!";

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'play' : function (audioURL, offsetInMilliseconds) {
        var response = {
            version: "1.0",
            response: {
                shouldEndSession: true,
                directives: [
                    {
                        type: "AudioPlayer.Play",
                        playBehavior: "REPLACE_ALL",
                        audioItem: {
                            stream: {
                                url: 'https://feeds.soundcloud.com/stream/275202399-amazon-web-services-306355661-amazon-web-services.mp3',
                                offsetInMilliseconds: 10
                            }
                        }
                    }
                ]
            }
        }
        this.context.succeed(response);
    },
    'AMAZON.PauseIntent': function () {
        this.emit(':tell', PAUSE_MESSAGE);
    },
    'AMAZON.ResumeIntent': function () {
        this.emit(':tell', RESUME_MESSAGE);
    }
};