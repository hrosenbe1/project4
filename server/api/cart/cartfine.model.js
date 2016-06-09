'use strict';

import mongoose from 'mongoose';

var CartFineSchema = new mongoose.Schema({
  fine : {
    type : mongoose.Schema.Types.ObjectId,
    ref: 'Fine'
  },
  qty : Number
});

export default mongoose.model('CartFine', CartFineSchema);
