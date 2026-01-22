const User = require('../models/user')

async function handleGetAllUser(req, res) {
    const allDbUsers = await User.find({})
    return res.json(allDbUsers)
}

async function handleGetUsersById(req, res) {
    const id = await User.findById(req.params.id)
    if (!user) return res.status(404).json({ error: "user not found" })
    return res.json(user)
}

async function handleUpdateUserById(req, res) {
    await User.findByIdAndUpdate(req.params.id, { gender: "Changed" })
    // Respond with the updated user object
    return res.json({ status: "Success" });
}

async function handleDeleteUserById(req, res) {
    await User.findByIdAndDelete(req.params.id)

    res.json({ message: "Data deleted successfully" });
}

async function handleCreateNewUser(req, res) {
    const body = req.body;
    if (
        !body ||
        !body.name ||
        !body.gender ||
        !body.email ||
        !body.company
    ) {
        return res.status(400).json({ msg: "All Fields are req..." });
    }
    const result = await User.create({
        name: body.name,
        gender: body.gender,
        email: body.email,
        company: body.company
    })
    // console.log(result);
    return res.status(201).json({ msg: "success", id: result._id })
}

module.exports = {
    handleGetAllUser,
    handleGetUsersById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateNewUser
}