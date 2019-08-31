const createNewMessage = function(objUser, obj) {
  const message = {
    ...objUser,
    id: obj.id,
    created_at: obj.created_at,
    message: obj.message,
  };
  return message;
};
export default createNewMessage;
