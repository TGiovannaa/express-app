const updateUser = (users, res, req)=>
{
    const userId = parseInt(req.params.id, 10);
    const user = users.find(user => user.id === userId);

    if (user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        res.send(user);
    } else {
        res.status(404).send('User not found');
    }
}
exports.updateUser = updateUser;
