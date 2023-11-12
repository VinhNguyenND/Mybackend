const CRUDUserService = require("../services/CRUDUserService");
const User = require('../model/users');
const shoes = require('../model/shoes');

const getBranchPage = async (req, res) => {
  try {
   return res.render("branch.ejs");
  } catch (e) {
    console.log(e);
  }
};

const getUserPage = async (req, res) => {
  try {
    CRUDUserService.getUser(req,res)
  } catch (e) {
    console.log(e);
  }
};
const getCategoryPage = async (req, res) => {
  try {
    return res.render("categoryPage.ejs");
  } catch (e) {
    console.log(e);
  }
}
const addNewUser= async (req, res) => {
  try {
    return res.render("addUser.ejs");
  } catch (e) {
    console.log(e);
  }
}
const updateUser = async (req, res) => {
    try {
        User.findOne({ Email: req.params.Email })
            .then((data) => {
             res.render("UpdateUser.ejs",{Data:data});
        })
  } catch (e) {
    console.log(e);
    }
}

const DeleteUser= async (req, res) => {
    try {
        User.findOne({ Email: req.params.Email })
            .then((data) => {
             res.render("DeleteUser.ejs",{Data:data});
        })
  } catch (e) {
    console.log(e);
    }
}
const addNewProduct = (req, res) => {
  try {
    return res.render("addNewProducts.ejs");
  } catch (e) {
    console.log(e);
  }
}

const detailPage = (req, res) => {
  try {
        shoes.findOne({ name: req.params.Name })
            .then((data) => {
              res.render("detail.ejs", { Data: data });
              console.log(data);
        })
  } catch (e) {
    console.log(e);
  }
}

const UpdatePageShoes =(req, res) => {
    try {
        shoes.findOne({ name: req.params.Name })
            .then((data) => {
              res.render("UpdateShoes.ejs", { Data: data });
              console.log(data);
        })
  } catch (e) {
    console.log(e);
  }
}

const DeletePageShoes = (req, res) => {
    try {
        shoes.findOne({ name: req.params.Name })
            .then((data) => {
              res.render("DeleteProduct.ejs", { Data: data });
              console.log(data);
            })
          .catch((err) => {
               res.status(400).json(err);
            })
  } catch (e) {
      console.log(e);
  }
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
  UpdatePageShoes,
  DeletePageShoes
};
