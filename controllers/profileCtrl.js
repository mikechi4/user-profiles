var profiles = [
  {
    name: 'Preston McNeil',
    pic: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash2/1117694_1614542_108355616_q.jpg',
    status: 'Everything is bigger in Texas'
  },
  {
    name: 'Ryan Rasmussen',
    pic: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash4/211536_7938705_80713399_q.jpg',
    status: 'RR Rules'
  },
  {
    name: 'Terri Ruff',
    pic: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash3/41368_8222994_4799_q.jpg',
    status: 'Wow, I typed out hunter2 and all you saw was ******?!?!??'
  },
  {
    name: 'Lindsey Mayer',
    pic: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash3/173210_10024969_2137324550_q.jpg',
    status: 'OMG MITTENS DID THE CUTEST THING TODAY'
  }
];

module.exports = {
  getFriends: function(req, res, next){
    var currentUser = req.session.currentUser;
    var userFriends = [];
    console.log('current user: ' + currentUser);
    // var friendsProfile = profiles.filter(function(value){
    //   for(var i = 0; i < currentUser.friends.length; i++){
    //     if(currentUser.friends[i] === value.name){
    //       userFriends.push(value);
    //       returnObj.friends = userFriends;
    //     }
    //   }
    // })
    for(var i = 0; i < currentUser.friends.length; i++) {
      for(j = 0; j < profiles.length; j++){
        if(currentUser.friends[i] === profiles[j].name){
          userFriends.push(profiles[j]);
        }
      }
    }
    var returnObj = {
      currentUser: req.session.currentUser,
      friends: userFriends
    }

    res.send(returnObj);
  }
}
