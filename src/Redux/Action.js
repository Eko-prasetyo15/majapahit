import axios from 'axios'


const URL = "https://jsonplaceholder.typicode.com/posts"
const request = axios.create({
    baseURL: URL,
});

const loadDataSuccess = (datas) => ({
    type: "LOAD_DATA_SUCCESS",
    datas
})
export const loadData = () => {
    return (dispatch) => {
        return request.get(URL, {})
            .then(function (response) {
                dispatch(loadDataSuccess(response.data))

            })
            .catch(function (err) {
                console.error(err)
            })
    }
}