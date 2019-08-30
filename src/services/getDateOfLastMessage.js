const getDateOfLastMessage = function(arr) {
  const result = arr[arr.length - 1];
  return result.created_at;
};

export default getDateOfLastMessage;
