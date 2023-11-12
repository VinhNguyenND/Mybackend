const express = require("express");
const homeController = require("../controller/PageController");
const userController = require("../controller/UserController");
const ProductsController = require("../controller/ProductsController");
let router = express.Router();

let initWebRoutes = (app) => {
  router.get("/", homeController.getUserPage);
  router.get("/products/:page", homeController.getUserPage)
  router.get("/categoryPage",ProductsController.getShoesApi)
  router.get("/categoryPage/:page",ProductsController.getShoesApi);
  router.get("/branch", homeController.getBranchPage);
  router.get("/addNewUser", homeController.addNewUser);
  router.get("/addNewProducts", homeController.addNewProduct);
  
  router.get("/DeletPage/:Name", homeController.DeletPageP);
  router.get("/UpdatePage/:Name", homeController.UpdateProductP);
  router.get("/detailPage/:Name", homeController.detailPage);
  router.get("/user/update/:Email", homeController.updateUser);
  router.get("/user/deleteUser/:Email", homeController.DeleteUser);
  //postrouter
  router.post("/user/post", userController.createNewUser);
  router.post("/product/post", ProductsController.createNewProduct);
  //getrouter
  router.get("/MyProducts/getProducts/:page", ProductsController.getShoes);
  router.get("/MyProducts/getAllProducts", ProductsController.getAllShoes);
  //deleterouter
  router.post("/user/delete", userController.deleteUser);
  router.post("/product/delete", ProductsController.DeleteProduct);
  //updaterouter
  router.post("/user/update",userController.updateUser);
  router.post("/product/update", ProductsController.UpdateProduct);

  //fake data
  router.get("/generate-fake-data", userController.fakeData);
  router.get("/generate-Shoes-data", ProductsController.fake_shoes);
  
  return app.use("/", router);
};

module.exports = initWebRoutes;
