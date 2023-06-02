export function Action(dispatch, payload) {
  dispatch({
    type: "GET",
    payload: payload,
  });
}
export function ActionCart(dispatch, payload) {
  dispatch({
    type: "PUT_CART",
    payload: payload,
  });
}

export function ActionOrder(dispatch, payload) {
  dispatch({
    type: "PATCH_ORDER",
    payload: payload,
  });
}

export function ActionDelete(dispatch, payload) {
  dispatch({
    type: "DELETE",
    payload: payload,
  });
}
