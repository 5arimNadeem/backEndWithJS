const express = require("express")
const { handleGetAllUser, handleGetUsersById, handleUpdateUserById, handleDeleteUserById, handleCreateNewUser } = require('../controllres/user')

const user = express.Router();

// routes of mine 

// REST API'S 
// for mobile users 
user.route("/")
    .get(handleGetAllUser)
    .post(handleCreateNewUser)

// router's with same baseURL
user.route('/:id')
    .get(handleGetUsersById)
    .patch(handleUpdateUserById)
    .delete(handleDeleteUserById)


module.exports = user;