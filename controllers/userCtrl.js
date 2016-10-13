var users = [
  {
    name: 'Preston McNeil',
    password: 'password1',
    friends: ['Lindsey Mayer', 'Terri Ruff']
  },
  {
    name: 'Ryan Rasmussen',
    password: '$akgfl#',
    friends: ['Lindsey Mayer']
  },
  {
    name: 'Terri Ruff',
    password: 'hunter2',
    friends: ['Lindsey Mayer', 'Preston McNeil']
  },
  {
    name: 'Lindsey Mayer',
    password: '777mittens777',
    friends: ['Preston McNeil', 'Ryan Rasmussen', 'Terri Ruff']
  }
];

module.exports = {
  login: function(req, res){
    var name = req.body.name;
    var pw = req.body.password;
    for(var i = 0; i < users.length; i++){
      if(users[i].name === name && users[i].password === pw) {
        req.session.currentUser = users[i];
        console.log('OH TRUUUUUE')
         return res.status(200).send({userFound: true});

      }
    }
    res.status(200).send({userFound: false});
    console.log('NOOOOOPE');
  }
};
