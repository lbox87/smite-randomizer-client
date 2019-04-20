import {API_BASE_URL} from '../components/config';

export const TOGGLE_GOD = 'TOGGLE_GOD';
export const toggleGod = (god) => ({
    type: TOGGLE_GOD,
    payload: god
})

// export const GET_GOD_SUCCESS = 'GET_GOD_SUCCESS';
// export const getGodSuccess = (godRandomed) => ({
//     type: GET_GOD_SUCCESS,
//     godRandomed
// })

// export const getGod = classFilters => dispatch => {
//     return fetch(API_BASE_URL + 'random3', {
//         method: "POST",
//         body: JSON.stringify(classFilters),
//         headers: { "Content-Type": "application/json" },
//       })
//       .then(res => {
//         if (!res.ok) {
//             return Promise.reject(res.statusText);
//         }
//         return res.json();
//     })
//     .then(godRandomed => {
//         dispatch(getGodSuccess(godRandomed));
//     });
// };

