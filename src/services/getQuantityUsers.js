/* eslint-disable */
const unique = function(arr) {
  let result = [];
  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }
  return result;
};

const getQuantityUsers = function(arr) {
  let usersNames = [];
  arr.map(item => usersNames.push(item.user));
  let result = unique(usersNames);
  return result.length;
};

export default getQuantityUsers;
