const getQuantityUsers = function(arr) {
  if (arr !== undefined) {
    const names = arr.map(item => item.user);
    const result = names.filter(function(item, index) {
      return names.indexOf(item) === index;
    });
    return result.length;
  }
  return;
};

export default getQuantityUsers;
