/**
 * Fine model events
 */

'use strict';

import {EventEmitter} from 'events';
import Fine from './fine.model';
var FineEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
FineEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Fine.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    FineEvents.emit(event + ':' + doc._id, doc);
    FineEvents.emit(event, doc);
  }
}

export default FineEvents;
