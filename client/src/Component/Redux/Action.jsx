// export function setAllDetails(dispatch, payload) {
//   dispatch({
//     type: "SET_ALL_DETAILS",
//     payload: payload,
//   });
// }
// export function ActionCart(dispatch, payload) {
//   dispatch({
//     type: "PUT_CART",
//     payload: payload,
//   });
// }

// export function ActionOrder(dispatch, payload) {
//   dispatch({
//     type: "PATCH_ORDER",
//     payload: payload,
//   });
// }

// export function ActionDelete(dispatch, payload) {
//   dispatch({
//     type: "DELETE",
//     payload: payload,
//   });
// }
export const setAllDetails = (payload) => ({
  type: "SET_ALL_DETAILS",
  payload: payload,
});

export const deleteRecord = (payload) => ({
  type: "DELETE",
  payload: payload,
});
