import { createModule } from 'redux-modux'

const initialState = {
}

const setDataList = (state, action) => ({
  ...state,
  ...action.data
})

const handlers = {
  setDataList
}

export default createModule({ moduleName: 'list', initialState, handlers })