'use strict';

import mongoose from 'mongoose';

var FineSchema = new mongoose.Schema({
  title:       String,
  category:    String,
  price:       { type: Number, min: 0, max: 9999.99 },
  qty:         { type: Number, min: 0, max: 999 },
  description: String,
  imageFile:   String
});

export default mongoose.model('Fine', FineSchema);
