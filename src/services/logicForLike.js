export const add = function(id, name, arr) {
  const result = arr.map(item => {
    if (item.id === id) {
      if (item['like']) {
        item = { ...item, like: [...item.like, name] };
        return item;
      }
      return (item = { ...item, like: [name] });
    }
    return item;
  });
  return result;
};

export const remove = function(id, name, arr) {
  const result = arr.map(item => {
    if (item.id === id) {
      item.like = item.like.filter(item => item !== name);
      return item;
    }
    return item;
  });
  return result;
};
