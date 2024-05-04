/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable keyword-spacing */
/* eslint-disable space-before-blocks */
/* eslint-disable no-empty */
/* eslint-disable linebreak-style */
/* eslint-disable spaced-comment */
/* eslint-disable linebreak-style */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable linebreak-style */
/* eslint-disable object-curly-spacing */
/* eslint-disable padded-blocks */
/* eslint-disable comma-spacing */
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

const { nanoid } = require('nanoid');
const notes = require('./notes');


//Menambah Catatan
const addNoteHandler = (request, h) => {
  const { title, tags, body } = request.payload;
 
  const id = nanoid(16);
  const createdAt = new Date().toISOString();
  const updatedAt = createdAt;
  const newNote = {
    title,tags,body,id,createdAt,updatedAt,
  };

  notes.push(newNote);

  //Pengecekan apakah new note berhasil masuk ke dalam array notes
  const isSuccess = notes.filter((note) => note.id === id).length > 0;

  if(isSuccess){
    const response = h.response({
      status:'success',
      message:'Catatan berhasil ditambahkan',
      data: {
        notedId: id,
      }
    });

    response.code(201);
    return response;
    
  }

  const response = h.response({
    status: 'fail',
    message: 'Catatan gagal ditambahkan',
  });
  response.code(500);
  return response;

};


//Menampilkan note secara keselurahan
const getAllNotesHandler = () =>({
  status: 'success',
  data: {
    notes,
  },
})


//Menampilkan note secara spesifik
const getNoteByIdHandler = (request, h) => {
  const { id } = request.params;
 
  const note = notes.filter((n) => n.id === id)[0];
 
 if (note !== undefined) {
    return {
      status: 'success',
      data: {
        note,
      },
    };
  }
 
  const response = h.response({
    status: 'fail',
    message: 'Catatan tidak ditemukan',
  });
  response.code(404);
  return response;
};

//Menghapus Catatan
const editNoteByIdHandler = (request, h) => {
  const { id } = request.params;
 
  const { title, tags, body } = request.payload;
  const updatedAt = new Date().toISOString();
 

  //Untuk mendapatkan index
  const index = notes.findIndex((note) => note.id === id);
 
  if (index !== -1) {
    notes[index] = {
      ...notes[index],
      title,
      tags,
      body,
      updatedAt,
    };
 
    const response = h.response({
      status: 'success',
      message: 'Catatan berhasil diperbarui',
    });
    response.code(200);
    return response;
  }
 
  const response = h.response({
    status: 'fail',
    message: 'Gagal memperbarui catatan. Id tidak ditemukan',
  });
  response.code(404);
  return response;
};


//Menghapus Catatan
const deleteNoteByIdHandler = (request,h)=>{
  const {id} = request.params;
  const index = notes.findIndex((note) => note.id === id);

  if (index !== -1) {
    notes.splice(index, 1);
    const response = h.response({
      status: 'success',
      message: 'Catatan berhasil dihapus',
    });
    response.code(200);
    return response;
  }
 
 const response = h.response({
    status: 'fail',
    message: 'Catatan gagal dihapus. Id tidak ditemukan',
  });
  response.code(404);
  return response;

}
 
module.exports = {
  addNoteHandler,
  getAllNotesHandler,
  getNoteByIdHandler,
  editNoteByIdHandler,
  deleteNoteByIdHandler,
};




