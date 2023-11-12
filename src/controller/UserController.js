const CRUDUserService =require('../services/CRUDUserService')

const createNewUser = (req, res) => {
    CRUDUserService.createNewUser(req, res);
}
const updateUser = (req, res) => {
    CRUDUserService.updateUser(req, res);
}
const deleteUser = (req, res) => {
    CRUDUserService.deleteUser(req, res);
}
const getUser = (req, res) => {
    
}
const getUserByEmail = (req, res) => {
    CRUDUserService.getUserByEmail(req, res);
}
const fakeData =  (req, res, next) => {
    CRUDUserService.fakedata(req, res, next);
}
module.exports = {
   createNewUser, updateUser,deleteUser,getUser,getUserByEmail,fakeData
}