const db = require("../models");
var User = db.user;

var addUser = async (req, res) => {
  const postData = req.body;
  const data = await User.create(postData);
  res.status(200).json({ data: data });
};

const getUsers = async (req, res) => {
  const users = await User.findAll({});

  console.log(users.every((user) => user instanceof User)); // true
  console.log("All users:", JSON.stringify(users, null));
  res.status(200).json({ users: users });
};

const getUser = async (req, res) => {
  const users = await User.findOne({
    where: {
      id: req.params.id
    }
  });

  res.status(200).json({ users: users });
};

const deleteUser =async (req, res) => {
    const user = await User.destroy({
        where: {
            id: req.params.id
        }
    })

    res.status(200).json({user: user})
};

const queryUser =async (req, res) =>{
    
}

module.exports = { addUser, getUsers, getUser, deleteUser, queryUser };
