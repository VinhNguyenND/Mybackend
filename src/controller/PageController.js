const PageController = require("../services/PageService");

const getBranchPage =  (req, res) => {
  PageController.DeleteUser(req, res);
};

const getUserPage =  (req, res) => {
  PageController.getUserPage(req, res);
};
const getCategoryPage =  (req, res) => {
  PageController.getCategoryPage(req, res);
}
const addNewUser= async (req, res) => {
  PageController.addNewUser(req, res);
}
const updateUser = (req, res) => {
  PageController.updateUser(req, res);
}

const DeleteUser= async (req, res) => {
  PageController.DeleteUser(req, res);
}

const addNewProduct = (req, res) => {
  PageController.addNewProduct(req, res);
}
const detailPage = (req, res) => {
  PageController.detailPage(req, res);
}
const UpdateProductP = (req, res) => {
  PageController.UpdatePageShoes(req, res);
}

const DeletPageP = (req, res) => {
  PageController.DeletePageShoes(req, res);
}

module.exports = {
  getBranchPage,
  getUserPage,
  getCategoryPage,
  addNewUser,
  updateUser,
  DeleteUser,
  addNewProduct,
  detailPage,
  UpdateProductP,
  DeletPageP,
};
