// import { useEffect } from "react";
// import { ROOM_DETAIL, ROOMS_INFO } from "../actions/actions";

// const initialState = {
//     roomsInfo: [],
//     roomByDetail: []
// }
// console.log(initialState)


// const roomsReducers = (state = initialState, action) => {
//     switch (action.type) {
//         case ROOMS_INFO:
//             const city = action.payload
//             // useEffect(() => {
//             fetch(`http://localhost:4000/roomsByData${city}`)
//                 .then(res => res.json())
//                 .then(result => {
//                     if (result) {
//                         return { ...state, roomsInfo: result };
//                         // addRoomsInfo(result);
//                     };
//                 });
//         // }, [city]);
//         // case ROOM_DETAIL:
//         //     const id = action.id;
//         //     console.log(id);
//         //     const checkout = state.roomsInfo ? state.roomsInfo[0].rooms.find(item => item.id == id) : 'loading';
//         //     return { ...state, roomByDetail: checkout };
//         default:
//             return state;
//     }
// };

// export default roomsReducers;