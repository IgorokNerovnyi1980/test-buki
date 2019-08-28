export const Type = {
  FETCHALLPOSTS: "FETCHALLPOSTS"
};

export function getAllPostsSuccess(data) {
  return {
    type: Type.FETCHALLPOSTS,
    payload: data
  };
}
