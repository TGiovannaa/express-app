const addNewUser = (users, req) => {
    console.log('Markooo car');
    const newUser = {
        id: users.length + 1, 
        name: req.body.name,
        email: req.body.email
    };

    users.push(newUser);

    return newUser;
}
exports.addNewUser = addNewUser;