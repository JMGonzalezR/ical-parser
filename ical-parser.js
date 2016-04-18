/**
 * @author Juan González <juanmml93@gmail.com>  on 4/18/2016.
 */

'use strict';

var RRule = require('rrule').RRule

var ical = require('ical-generator');

var rule = new RRule({
    freq: RRule.WEEKLY,
    interval: 5,
    byweekday: [RRule.MO, RRule.FR],
    dtstart: new Date(2012, 1, 1, 10, 30),
    until: new Date(2012, 12, 31)
});

var strin = rule.toString();

var cal = ical({domain: 'github.com', name: 'my first iCal'});
var event = cal.createEvent({
    start: new Date(),
    end: new Date(new Date().getTime() + 3600000),
    summary: 'Example Event',
    description: 'It works ;)',
    location: 'my room',
    url: 'http://sebbo.net/'
});

var icalString = cal.toString();

console.log(icalString);
console.log(strin);

