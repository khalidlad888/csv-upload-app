const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
  fileName: {
    type: String
  },
  filePath : {
    type:String
  },
  file: {
    type: String
  }
}, {
  timestamps: {
    options: { timeZone: 'Asia/Kolkata' }
  }
});




//making model dynamically
const Files = mongoose.model("Files", fileSchema);

//exporting model
module.exports = Files;