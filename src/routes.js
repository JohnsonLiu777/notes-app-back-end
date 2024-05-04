/* eslint-disable linebreak-style */
/* eslint-disable object-curly-spacing */
/* eslint-disable linebreak-style */
/* eslint-disable key-spacing */
/* eslint-disable arrow-spacing */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable semi */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable linebreak-style */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable eol-last */
// eslint-disable-next-line import/no-extraneous-dependencies

const {
    addNoteHandler,
    getAllNotesHandler,
    getNoteByIdHandler,
    editNoteByIdHandler,
    deleteNoteByIdHandler,
  } = require('./handler');
const routes = [
    {
        method: 'POST',
        path: '/notes',
        handler: addNoteHandler,
    },
    {
        method:'GET',
        path: '/notes',
        handler: getAllNotesHandler,

        
    },
    {
        method:'GET',
        path: `/notes/{id}`,
        handler: getNoteByIdHandler,

    },
    {
        method:'PUT',
        path: `/notes/{id}`,
        handler:editNoteByIdHandler,

        
    },

    {
        method:'DELETE',
        path:`/notes/{id}`,
        handler:deleteNoteByIdHandler,
    }
]


module.exports = routes;