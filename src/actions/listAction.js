import listModule from '../modules/list'
import axios from 'axios'
import get from 'lodash/get'
import isEmpty from 'lodash/isEmpty'

const updateSpecificListAction = ({ listName, newList }) => {
    return async (dispatch, getState) => {
        try {
            const list = getState().list
            list[listName] = newList

            dispatch(
            listModule.setDataList({
                data: { ...list }
            })
            )
        } catch (error) {
            alert(error)
        }
    }
}

const clearListAction = (listName) => {
    return async (dispatch, getState) => {
        try {
            const list = getState().list
            if (!isEmpty(listName)) delete list[listName]

            dispatch(listModule.setDataList({
            data: {...list}
            }))
        } catch (error) {
            alert(error)
        }
    }
}

const getUserListAction = () => {
    return async (dispatch, getState) => {
        try {
            const list = getState().list
            const userList = await axios.get('https://jsonplaceholder.typicode.com/users')
            dispatch(listModule.setDataList({
                data: {
                    ...list,
                    'users': get(userList, 'data', [])
                }
            })
            )
        } catch (error) {
            alert(error)
        }
    }
}

export {
    updateSpecificListAction,
    getUserListAction,
    clearListAction
  }