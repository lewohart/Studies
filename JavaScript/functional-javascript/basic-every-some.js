function checkUsersValid(goodUsers) {
  var result = function(submittedUsers) {
    return submittedUsers.every(function(u) {
      return goodUsers.some(function(g) {
        return g.id === u.id;
      })
    });
  };

  return result;
}

module.exports = checkUsersValid
