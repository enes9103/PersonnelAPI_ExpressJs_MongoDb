"use strict"
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
const { mongoose } = require('../configs/dbConnection')
/* ------------------------------------------------------- */

const DepartmentSchema = new mongoose.Schema({

    name: {
        type: String,
        trim: true,
        required: true,
        unique: true
    }

}, { collection: "departments", timestamps: true })
// collection: db name

/* ------------------------------------------------------- */
module.exports = mongoose.model('Department', DepartmentSchema)