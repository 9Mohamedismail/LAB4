const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SquirrelSchema = new Schema({
    squirrel_id: {
        type: Number,
        required: true,
        unique: true,
    },
    time: {
        type: String,
    },
    date: {
        type: String,
    },
    age: {
        type: String,
    },
    primary_fur_color: {
        type: String,
    },
    highlight_fur_color: {
        type: String,
    },
    nearby_building: {
        type: String,
    },
    above_ground: {
        type: Boolean,
    },
});

const Squirrel = mongoose.model('squirrel',SquirrelSchema);

module.exports = Squirrel;