const getDateOfLastMessage = function(arr) {
  if (arr !== undefined) {
    const result = arr[arr.length - 1];
    return result.created_at;
  }
  return;
};

export default getDateOfLastMessage;
