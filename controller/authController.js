const usermodel = require('../model/user')

exports.createUser = async  (req, res) => {
    try {
        const { username, password, passwordConfirm, email } = req.body
        const user = await usermodel.create({
            username: username,
            password: password,
            passwordConfrim: passwordConfirm,
            email:email
        })
        res.status(200).json({
            status: 200,
            dataSent:user
        })
    } catch (err) {
        res.status(404).json({
            status: 404,
            dataSent:err.message
        })
    }
}