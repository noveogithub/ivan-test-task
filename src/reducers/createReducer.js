/**
 * helps to create reducers like an objects (key is action type, value is action handler)
 * It's faster and cleaner than switch approach
 * @param initialState
 * @param handlers
 * @return {function}
 */
export const createReducer = (initialState, handlers) => (
  state = initialState,
  action
) => (handlers[action.type] ? handlers[action.type](state, action) : state)
