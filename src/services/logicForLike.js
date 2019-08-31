export const add = function(id, name, arrAllPosts) {
  let result = [];

  for (let i = 0; i < arrAllPosts.length; i += 1) {
    let item = arrAllPosts[i];
    if (item.id === id) {
      if (item['like']) {
        item = { ...item, like: [...item.like, name] };

        result.push(item);
      } else {
        item = { ...item, like: [name] };
        result.push(item);
      }
    } else result.push(item);
  }
  return result;
};

export const remove = function(id, name, arrAllPosts) {
  let result = [];

  for (let i = 0; i < arrAllPosts.length; i += 1) {
    let item = arrAllPosts[i];
    if (item.id === id) {
      item = { ...item, like: item.like.filter(item => item !== name) };
      result.push(item);
    } else result.push(item);
  }
  return result;

  // const arr = arrAllPosts.find(item => item.id === id);
  // let obj = arr[0];

  // obj = { ...obj, like: obj.like.find(item => item.user !== name) };

  // console.log(obj);
  // return obj;
};
