const UserModel = require("../model/user-model")

module.exports.addUser = function (req, res) {
    let firstName = req.body.firstName
    let email = req.body.email
    let password = req.body.password
    let role = req.body.role

    let user = new UserModel({
        firstName: firstName,
        email: email,
        password: password,
        role: role
    })

    user.save(function (err, data) {
        if (err) {
            res.json({ msg: "something went wrong", data: errr, status: -1 })
        } else {
            res.json({ msg: "signup done", data: data, status: 200 }) //http status code
        }
    })
}
//list
module.exports.getAllUsers = function (req, res) {
    UserModel.find().populate("role").exec(function (err, data) {
        if (err) {
            res.json({ msg: "Something went wrong", data: err, status: -1 })
        } else {
            res.json({ msg: "users ret....", data: data, status: 200 })

        }
    })
}
module.exports.deleteUser = function (req, res) {
    let userId = req.params.userId
    UserModel.deleteOne({ "_id": userId }, function (err, data) {
        if (err) {
            res.json({ msg: "Something went wrong", data: err, status: -1 })
        } else {
            res.json({ msg: "users removed....", data: data, status: 200 })
        }
    })
}
module.exports.updateUser = function (req, res) {
    let userId = req.body.userId
    let firstName = req.body.firstName
    let email = req.body.email
    let password = req.body.password

    RoleModel.updateOne({ _id:userId}, { firstName: firstName },{email : email} ,{password,password},function (err, data) {
        if (err) {
            res.json({ msg: "Somethig went wrong !!", status: -1, data: err })
        }
        else {
            res.json({ msg: "updated", status: 200, data: data })
        }
    })
}
