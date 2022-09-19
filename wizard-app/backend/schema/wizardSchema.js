const mongoose = require('mongoose');

// Schema model //
const wizardSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    ipAddress: {
        type: String,
        required: true,
    }
});

// create new collection object model

const WizardData = new mongoose.model('WizardInfo', wizardSchema);
module.exports = WizardData;