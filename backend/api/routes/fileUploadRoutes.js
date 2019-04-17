// const router = require('express').Router();
// const multer = require('multer');
// const {
//     mongo,
//     connection
// } = require('mongoose');
// const Grid = require('gridfs-stream');
// Grid.mongo = mongo;
// var gfs = Grid(connection.db);
// // set up connection to db for file storage
// const storage = require('multer-gridfs-storage')({
//     db: connection.db,
//     file: (req, file) => {
//         return {
//             filename: file.originalname
//         }
//     }
// });