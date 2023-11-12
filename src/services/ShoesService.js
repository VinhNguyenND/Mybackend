const { faker } = require("@faker-js/faker");
const shoes = require("../model/shoes");

const fake_shoes = async (req, res) => {
  for (var i = 0; i < 90; i++) {
    var product = new shoes();
    product.name = faker.commerce.productName();
    product.brand = faker.company.name();
    product.description = faker.commerce.productDescription();
    product.price = faker.commerce.price();
    product.image = faker.image.urlLoremFlickr({ category: "shoes" });
    product.stock = faker.number.int({ max: 1000 });

    try {
      await product.save();
    } catch (err) {
      console.error(err);
    }
  }
  res.redirect("/");
};

const getShoeWeb = async (req, res) => {
  try {
    var perPage = 16;
    var page = req.params.page || 1;
    await shoes
      .find({})
      .skip(perPage * page - perPage)
      .limit(perPage)
      .exec(function (err, products) {
        shoes.count().exec(async function (err, count) {
          if (err) return next(err);
          await shoes.find({}).then((data) => {
            var a = [];
            a = data&&data.length>0&&data;
            var b = 0;
            b = a && a.length > 0 && (a.length/perPage);
            res.json({
              data: products,
              total: b,
            });
          });
        });
      });
  } catch (error) {}
};

const getShoes = async (req, res) => {
  try {
    var perPage = 5;
    var page = req.params.page || 1;
    shoes.find({})
      .skip(perPage * page - perPage)
      .limit(perPage)
      .exec(function (err, products) {
        shoes.count().exec(function (err, count) {
          if (err) return next(err);
          res.render("categoryPage.ejs", {
            products: products,
            current: page,
            pages: Math.ceil(count / perPage),
            message: req.session.message,
          });
          console.log(products);
        });
      });
  } catch (error) {

  }
};

// const getShoeWeb=async(req,res)=>{
//   try {
//     var perPage = 16;
//     var page = req.params.page || 1;
//    await shoes.find({})
//       .exec(async function (err, products) {
//       await shoes.find({})
//       .skip(perPage * page - perPage)
//       .limit(perPage)
//       .exec(function (err1, products1) {
//         shoes.count().exec(function (err1, count) {
//           if (err1) return next(err1);
//           res.send(products1);
//           console.log(products1);
//         });
//       });
//       });
//   } catch (error)
//   { }
// }

const getAllShoes = async (req, res) => {
  try {
    await shoes.find({}).then((data) => {
      res.send(products);
    });
  } catch (err) {
    console.log(err);
  }
};

const createNewProducts= async (req, res) => {
  const Shoes = new shoes({
    name: req.body.Name,
    brand: req.body.Brand,
    description: req.body.Description,
    price: req.body.Price,
    image: req.body.Image,
    stock: req.body.Stock,
  });
  const exist = await shoes.findOne({ name: req.body.Name });
  if (exist) {
    req.session.message = {
      type: "warning",
      message: "product added fail",
    };
    res.redirect("/categoryPage/1");
  } else {
    try {
      const success = await Shoes.save();
      if (success) {
        req.session.message = {
          type: "success",
          message: "product added successfully",
        };
        res.redirect("/categoryPage/1");
      } else {
        req.session.message = {
          type: "warning",
          message: "user added fail",
        };
        res.redirect("/categoryPage/1");
      }
    } catch (error) {
      console.log(error);
      req.session.message = {
        type: "warning",
        message: "user added fail",
      };
      res.redirect("/categoryPage/1");
    }
  }
};

const updateProduct = async (req, res) => {
  try {
    const query = { _id: req.body.Id };
    const newQuery = {
      name: req.body.Name,
      brand: req.body.Brand,
      description: req.body.Description,
      price: req.body.Price,
      image: req.body.Image,
      stock: req.body.Stock,
    };
    const success = await shoes.findOneAndUpdate(query, newQuery, {
      new: true,
      runValidators: true,
    });
    if (success) {
      req.session.message = {
        type: "success",
        message: "update product successfully",
      };
      res.redirect("/categoryPage/1");
    } else {
      req.session.message = {
        type: "warning",
        message: "update product fail",
      };
      res.redirect("/categoryPage/1");
    }
  } catch (error) {}
};


const deleteProduct = async (req, res) => {
  try {
    shoes.findOneAndDelete({ _id: req.body.Id })
      .then((success) => {
        if (success) {
          req.session.message = {
            type: "success",
            message: "delete successfully " + req.body.Name,
          };
          console.log(req.session.previousPage);
          res.redirect("/categoryPage/1");
        } else {
          req.session.message = {
            type: "warning",
            message: "delete  fail because not " ,
          };
          console.log(success);
          res.redirect("/categoryPage/1");
        }
      })
  } catch (error) {}
};

module.exports = {
  fake_shoes,
  getShoeWeb,
  getAllShoes,
  getShoes,
  createNewProducts,
  updateProduct,
  deleteProduct,
};
