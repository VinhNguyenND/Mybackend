const User = require("../model/users");
const { faker, da } = require("@faker-js/faker");
const Product = require("../model/users");
const createNewUser = async (req, res) => {
  const user = new User({
    Name: req.body.Name,
    Email: req.body.Email,
    PassWord: req.body.PassWord,
  });
  const exist = await User.findOne({ Email: req.body.Email });
  if (exist) {
    req.session.message = {
      type: "warning",
      message: "user added fail",
    };
    res.redirect("/");
  } else {
    try {
      const success = await user.save();
      if (success) {
        req.session.message = {
          type: "success",
          message: "user added successfully",
        };
        res.redirect("/");
      } else {
        req.session.message = {
          type: "warning",
          message: "user added fail",
        };
        res.redirect("/");
      }
    } catch (error) {
      console.log(error);
      req.session.message = {
        type: "warning",
        message: "user added fail",
      };
      res.redirect("/");
    }
  }
};

const fakedata = async (req, res, next) => {
  for (var i = 0; i < 90; i++) {
    var product = new Product();

    product.Email = faker.internet.email();
    product.Name = faker.internet.userName();
    product.PassWord = faker.internet.password();

    try {
      await product.save();
    } catch (err) {
      console.error(err);
    }
  }
  res.redirect("/");
};

const updateUser = async (req, res) => {
  try {
    const query = { Email: req.body.Email };
    const newQuery = { Name: req.body.Name, PassWord: req.body.PassWord };
    const success = await User.findOneAndUpdate(query, newQuery, {
      new: true,
      runValidators: true,
    });
    if (success) {
      req.session.message = {
        type: "success",
        message: "update successfully",
      };
      res.redirect("/");
    } else {
      req.session.message = {
        type: "warning",
        message: "update fail",
      };
      res.redirect("/");
    }
  } catch (error) {}
};

const deleteUser = async (req, res) => {
  try {
    User.findOneAndDelete({ Email: req.body.Email })
      .then((success) => {
        if (success) {
          req.session.message = {
            type: "success",
            message: "delete successfully " + req.body.Email,
          };
          console.log(req.session.previousPage);
          res.redirect("/");
        } else {
          req.session.message = {
            type: "warning",
            message: "delete  fail because not " ,
          };
          console.log(success);
          res.redirect("/");
        }
      })
  } catch (error) {}
};

const getUser = async (req, res) => {
  try {
    var perPage = 5;
    var page = req.params.page || 1;
    User.find({})
      .skip(perPage * page - perPage)
      .limit(perPage)
      .exec(function (err, products) {
        User.count().exec(function (err, count) {
          if (err) return next(err);
          res.render("userpage.ejs", {
            products: products,
            current: page,
            pages: Math.ceil(count / perPage),
            message: req.session.message,
          });
        });
      });
  } catch (error) {}
};

module.exports = {
  createNewUser,
  updateUser,
  deleteUser,
  getUser,
  fakedata,
};
