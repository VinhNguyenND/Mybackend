const ShoesService = require("../services/ShoesService");

const fake_shoes = (req,res) => {
    try {
        ShoesService.fake_shoes(req,res);
    } catch (err) {
        console.log(err);
    }
}

const getShoes = (req, res) =>{
    try{
        ShoesService.getShoeWeb(req, res);
    }catch(err) {
        console.log(err);
    }
}

const getShoesApi = (req, res) => {
    try{
        ShoesService.getShoes(req, res);
    }catch(err) {
        console.log(err);
    }}

const getAllShoes = (req, res) =>{
    try{
        ShoesService.getAllShoes(req, res);
    }catch(err) {
        console.log(err);
    }
}

const createNewProduct = (req,res) => {
    try {
        ShoesService.createNewProducts(req, res);  
    } catch (err) {
        console.log(err);
    }
}

const UpdateProduct = (req, res) => {
    try {
        ShoesService.updateProduct(req, res);
    } catch (err) {
        console.log(err);
    }
}

const DeleteProduct = (req, res) => {
    try {
        ShoesService.deleteProduct(req, res);
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    fake_shoes,
    getShoes,
    getAllShoes,
    getShoesApi,
    createNewProduct,
    UpdateProduct,
    DeleteProduct
};