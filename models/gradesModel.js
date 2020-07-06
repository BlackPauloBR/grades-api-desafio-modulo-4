import { db } from '../models/index.js';

const gradesSchema = db.mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
    validate(value) {
      if (value < 0)
        throw new Error('Valor negativo para a nota não permitido.');
    },
  },
  lastModified: {
    type: Date,
    default: Date.now,
  },
});

//necessario repetir a paramentro 'grades', pois estamos forçando a ficar no singular,
//pois o mongoose, por padrão já coloca em plural os nomes das COLLECTIONS;
const gradesModel = db.mongoose.model('grades', gradesSchema);

export { gradesModel };
