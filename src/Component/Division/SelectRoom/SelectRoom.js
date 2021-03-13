import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

// const roomData = [

//     {
//         id: 1,
//         name: 'bangladesh',
//         city: 'Dhaka',
//         rooms: [
//             {
//                 id: 1,
//                 img: 'https://images.pexels.com/photos/3773570/pexels-photo-3773570.png?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 building: 'https://images.pexels.com/photos/65438/pexels-photo-65438.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 title: 'Light bright airy stylish apt & safe peaceful stay',
//                 GuestsAndRoomDetail: '4 guests 2 bedrooms 2 beds 2 baths',
//                 internat: "Wifi Air conditioning Kitchen",
//                 cancellation: "cancellation flexibility available",
//                 review: '4.9 (20)',
//                 price: '34',
//                 totalPrice: '168'
//             },
//             {
//                 id: 2,
//                 img: 'https://images.pexels.com/photos/3773576/pexels-photo-3773576.png?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 building: 'https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 title: 'Apartment in Lost Panorama',
//                 GuestsAndRoomDetail: '4 guests 3 bedrooms 3 beds 3 baths',
//                 internat: "Wifi Air conditioning Kitchen",
//                 cancellation: "cancellation flexibility available",
//                 review: '3.10 (19)',
//                 price: '28',
//                 totalPrice: '150'
//             },
//             {
//                 id: 3,
//                 img: 'https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 building: 'https://images.pexels.com/photos/273209/pexels-photo-273209.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 title: 'AR Lounge & Pool (r&r +b&b)',
//                 GuestsAndRoomDetail: '4 guests 2 bedrooms 2 beds 2 baths',
//                 internat: "Wifi Air conditioning Kitchen",
//                 cancellation: "cancellation flexibility available",
//                 review: '4.9 (20)',
//                 price: '50',
//                 totalPrice: '220'
//             },
//             {
//                 id: 4,
//                 img: 'https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 building: 'https://images.pexels.com/photos/417273/pexels-photo-417273.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 title: 'Light bright airy stylish apt & safe peaceful stay',
//                 GuestsAndRoomDetail: '5 guests 3 bedrooms 3 beds 3 baths',
//                 internat: "Wifi Air conditioning Kitchen",
//                 cancellation: "cancellation flexibility available",
//                 review: '7.9 (30)',
//                 price: '39',
//                 totalPrice: '180'
//             },
//             {
//                 id: 5,
//                 img: 'https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 building: 'https://images.pexels.com/photos/136413/pexels-photo-136413.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 title: 'Lorem ipsum dolor sit amet consectetur.',
//                 GuestsAndRoomDetail: '4 guests 2 bedrooms 2 beds 2 baths',
//                 internat: "Wifi Air conditioning Kitchen",
//                 cancellation: "cancellation flexibility available",
//                 review: '6.10 (11)',
//                 price: '40',
//                 totalPrice: '178'
//             },
//             {
//                 id: 6,
//                 img: 'https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 building: 'https://images.pexels.com/photos/258160/pexels-photo-258160.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 title: 'AR Lounge & Pool (r&r +b&b) nice',
//                 GuestsAndRoomDetail: '4 guests 2 bedrooms 2 beds 2 baths',
//                 internat: "Wifi Air conditioning Kitchen",
//                 cancellation: "cancellation flexibility available",
//                 review: '9.9 (26)',
//                 price: '66',
//                 totalPrice: '250'
//             },
//         ]
//     },
//     {
//         id: 2,
//         name: 'netherland',
//         city: 'Rotterdam',
//         rooms: [
//             {
//                 id: 7,
//                 img: 'https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 building: 'https://images.pexels.com/photos/87223/pexels-photo-87223.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 title: 'Light bright airy stylish apt & safe peaceful stay',
//                 GuestsAndRoomDetail: '2 guests 2 bedrooms 2 beds 2 baths',
//                 internat: "Wifi Air conditioning Kitchen",
//                 cancellation: "cancellation flexibility available",
//                 review: '7.9 (30)',
//                 price: '44',
//                 totalPrice: '130'
//             },
//             {
//                 id: 8,
//                 img: 'https://images.pexels.com/photos/533157/pexels-photo-533157.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 building: 'https://images.pexels.com/photos/1534411/pexels-photo-1534411.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 title: 'Apartment in Lost Panorama',
//                 GuestsAndRoomDetail: '4 guests 3 bedrooms 3 beds 3 baths',
//                 internat: "Wifi Air conditioning Kitchen",
//                 cancellation: "cancellation flexibility available",
//                 review: '3.10 (19)',
//                 price: '28',
//                 totalPrice: '150'
//             },
//             {
//                 id: 9,
//                 img: 'https://images.pexels.com/photos/3741314/pexels-photo-3741314.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 building: 'https://images.pexels.com/photos/2188882/pexels-photo-2188882.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 title: 'AR Lounge & Pool (r&r +b&b)',
//                 GuestsAndRoomDetail: '4 guests 2 bedrooms 2 beds 2 baths',
//                 internat: "Wifi Air conditioning Kitchen",
//                 cancellation: "cancellation flexibility available",
//                 review: '4.9 (20)',
//                 price: '50',
//                 totalPrice: '220'
//             },
//             {
//                 id: 10,
//                 img: 'https://images.pexels.com/photos/1454805/pexels-photo-1454805.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 building: 'https://images.pexels.com/photos/1330753/pexels-photo-1330753.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 title: 'Light bright airy stylish apt & safe peaceful stay',
//                 GuestsAndRoomDetail: '5 guests 3 bedrooms 3 beds 3 baths',
//                 internat: "Wifi Air conditioning Kitchen",
//                 cancellation: "cancellation flexibility available",
//                 review: '7.9 (30)',
//                 price: '39',
//                 totalPrice: '180'
//             },
//             {
//                 id: 11,
//                 img: 'https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 building: 'https://images.pexels.com/photos/3684943/pexels-photo-3684943.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 title: 'Lorem ipsum dolor sit amet consectetur.',
//                 GuestsAndRoomDetail: '4 guests 2 bedrooms 2 beds 2 baths',
//                 internat: "Wifi Air conditioning Kitchen",
//                 cancellation: "cancellation flexibility available",
//                 review: '6.10 (11)',
//                 price: '40',
//                 totalPrice: '178'
//             },
//             {
//                 id: 12,
//                 img: 'https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 building: 'https://images.pexels.com/photos/4606714/pexels-photo-4606714.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 title: 'AR Lounge & Pool (r&r +b&b) nice',
//                 GuestsAndRoomDetail: '4 guests 2 bedrooms 2 beds 2 baths',
//                 internat: "Wifi Air conditioning Kitchen",
//                 cancellation: "cancellation flexibility available",
//                 review: '9.9 (26)',
//                 price: '66',
//                 totalPrice: '250'
//             },
//         ]
//     },
//     {
//         id: 3,
//         name: 'new York',
//         city: 'Newburgh',
//         rooms: [
//             {
//                 id: 13,
//                 img: 'https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 building: 'https://images.pexels.com/photos/323772/pexels-photo-323772.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 title: 'Light bright airy stylish apt & safe peaceful stay',
//                 GuestsAndRoomDetail: '4 guests 2 bedrooms 2 beds 2 baths',
//                 internat: "Wifi Air conditioning Kitchen",
//                 cancellation: "cancellation flexibility available",
//                 review: '4.9 (20)',
//                 price: '34',
//                 totalPrice: '168'
//             },
//             {
//                 id: 14,
//                 img: 'https://images.pexels.com/photos/1668860/pexels-photo-1668860.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 building: 'https://images.pexels.com/photos/770218/pexels-photo-770218.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 title: 'Apartment in Lost Panorama',
//                 GuestsAndRoomDetail: '4 guests 3 bedrooms 3 beds 3 baths',
//                 internat: "Wifi Air conditioning Kitchen",
//                 cancellation: "cancellation flexibility available",
//                 review: '3.10 (19)',
//                 price: '28',
//                 totalPrice: '150'
//             },
//             {
//                 id: 15,
//                 img: 'https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 building: 'https://images.pexels.com/photos/5845674/pexels-photo-5845674.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 title: 'AR Lounge & Pool (r&r +b&b)',
//                 GuestsAndRoomDetail: '4 guests 2 bedrooms 2 beds 2 baths',
//                 internat: "Wifi Air conditioning Kitchen",
//                 cancellation: "cancellation flexibility available",
//                 review: '4.9 (20)',
//                 price: '50',
//                 totalPrice: '220'
//             },
//             {
//                 id: 16,
//                 img: 'https://images.pexels.com/photos/1358900/pexels-photo-1358900.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 building: 'https://images.pexels.com/photos/4997546/pexels-photo-4997546.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 title: 'Light bright airy stylish apt & safe peaceful stay',
//                 GuestsAndRoomDetail: '5 guests 3 bedrooms 3 beds 3 baths',
//                 internat: "Wifi Air conditioning Kitchen",
//                 cancellation: "cancellation flexibility available",
//                 review: '7.9 (30)',
//                 price: '39',
//                 totalPrice: '180'
//             },
//             {
//                 id: 17,
//                 img: 'https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 building: 'https://images.pexels.com/photos/398638/pexels-photo-398638.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 title: 'Lorem ipsum dolor sit amet consectetur.',
//                 GuestsAndRoomDetail: '4 guests 2 bedrooms 2 beds 2 baths',
//                 internat: "Wifi Air conditioning Kitchen",
//                 cancellation: "cancellation flexibility available",
//                 review: '6.10 (11)',
//                 price: '40',
//                 totalPrice: '178'
//             },
//             {
//                 id: 18,
//                 img: 'https://images.pexels.com/photos/5824883/pexels-photo-5824883.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 building: 'https://images.pexels.com/photos/1146053/pexels-photo-1146053.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 title: 'AR Lounge & Pool (r&r +b&b) nice',
//                 GuestsAndRoomDetail: '4 guests 2 bedrooms 2 beds 2 baths',
//                 internat: "Wifi Air conditioning Kitchen",
//                 cancellation: "cancellation flexibility available",
//                 review: '9.9 (26)',
//                 price: '66',
//                 totalPrice: '250'
//             },
//         ]
//     },
//     {
//         id: 4,
//         name: 'england',
//         city: 'London',
//         rooms: [
//             {
//                 id: 19,
//                 img: 'https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 building: 'https://images.pexels.com/photos/443400/pexels-photo-443400.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 title: 'Light bright airy stylish apt & safe peaceful stay',
//                 GuestsAndRoomDetail: '4 guests 2 bedrooms 2 beds 2 baths',
//                 internat: "Wifi Air conditioning Kitchen",
//                 cancellation: "cancellation flexibility available",
//                 review: '4.9 (20)',
//                 price: '34',
//                 totalPrice: '168'
//             },
//             {
//                 id: 20,
//                 img: 'https://images.pexels.com/photos/2398375/pexels-photo-2398375.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 building: 'https://images.pexels.com/photos/443398/pexels-photo-443398.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 title: 'Apartment in Lost Panorama',
//                 GuestsAndRoomDetail: '4 guests 3 bedrooms 3 beds 3 baths',
//                 internat: "Wifi Air conditioning Kitchen",
//                 cancellation: "cancellation flexibility available",
//                 review: '3.10 (19)',
//                 price: '28',
//                 totalPrice: '150'
//             },
//             {
//                 id: 21,
//                 img: 'https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 building: 'https://images.pexels.com/photos/443398/pexels-photo-443398.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 title: 'AR Lounge & Pool (r&r +b&b)',
//                 GuestsAndRoomDetail: '4 guests 2 bedrooms 2 beds 2 baths',
//                 internat: "Wifi Air conditioning Kitchen",
//                 cancellation: "cancellation flexibility available",
//                 review: '4.9 (20)',
//                 price: '50',
//                 totalPrice: '220'
//             },
//             {
//                 id: 22,
//                 img: 'https://images.pexels.com/photos/6207948/pexels-photo-6207948.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 building: 'https://images.pexels.com/photos/412515/pexels-photo-412515.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 title: 'Light bright airy stylish apt & safe peaceful stay',
//                 GuestsAndRoomDetail: '5 guests 3 bedrooms 3 beds 3 baths',
//                 internat: "Wifi Air conditioning Kitchen",
//                 cancellation: "cancellation flexibility available",
//                 review: '7.9 (30)',
//                 price: '39',
//                 totalPrice: '180'
//             },
//             {
//                 id: 23,
//                 img: 'https://images.pexels.com/photos/6283960/pexels-photo-6283960.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 building: 'https://images.pexels.com/photos/435904/pexels-photo-435904.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 title: 'Lorem ipsum dolor sit amet consectetur.',
//                 GuestsAndRoomDetail: '4 guests 2 bedrooms 2 beds 2 baths',
//                 internat: "Wifi Air conditioning Kitchen",
//                 cancellation: "cancellation flexibility available",
//                 review: '6.10 (11)',
//                 price: '40',
//                 totalPrice: '178'
//             },
//             {
//                 id: 24,
//                 img: 'https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 building: 'https://images.pexels.com/photos/438381/pexels-photo-438381.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 title: 'AR Lounge & Pool (r&r +b&b) nice',
//                 GuestsAndRoomDetail: '4 guests 2 bedrooms 2 beds 2 baths',
//                 internat: "Wifi Air conditioning Kitchen",
//                 cancellation: "cancellation flexibility available",
//                 review: '9.9 (26)',
//                 price: '66',
//                 totalPrice: '250'
//             },
//         ]
//     },
//     {
//         id: 5,
//         name: 'france',
//         city: 'Paris',
//         rooms: [
//             {
//                 id: 25,
//                 img: 'https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 building: 'https://images.pexels.com/photos/258160/pexels-photo-258160.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 title: 'Light bright airy stylish apt & safe peaceful stay',
//                 GuestsAndRoomDetail: '4 guests 2 bedrooms 2 beds 2 baths',
//                 internat: "Wifi Air conditioning Kitchen",
//                 cancellation: "cancellation flexibility available",
//                 review: '4.9 (20)',
//                 price: '34',
//                 totalPrice: '168'
//             },
//             {
//                 id: 26,
//                 img: 'https://images.pexels.com/photos/3773576/pexels-photo-3773576.png?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 building: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 title: 'Apartment in Lost Panorama',
//                 GuestsAndRoomDetail: '4 guests 3 bedrooms 3 beds 3 baths',
//                 internat: "Wifi Air conditioning Kitchen",
//                 cancellation: "cancellation flexibility available",
//                 review: '3.10 (19)',
//                 price: '28',
//                 totalPrice: '150'
//             },
//             {
//                 id: 27,
//                 img: 'https://images.pexels.com/photos/6283960/pexels-photo-6283960.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 building: 'https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 title: 'AR Lounge & Pool (r&r +b&b)',
//                 GuestsAndRoomDetail: '4 guests 2 bedrooms 2 beds 2 baths',
//                 internat: "Wifi Air conditioning Kitchen",
//                 cancellation: "cancellation flexibility available",
//                 review: '4.9 (20)',
//                 price: '50',
//                 totalPrice: '220'
//             },
//             {
//                 id: 28,
//                 img: 'https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 building: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 title: 'Light bright airy stylish apt & safe peaceful stay',
//                 GuestsAndRoomDetail: '5 guests 3 bedrooms 3 beds 3 baths',
//                 internat: "Wifi Air conditioning Kitchen",
//                 cancellation: "cancellation flexibility available",
//                 review: '7.9 (30)',
//                 price: '39',
//                 totalPrice: '180'
//             },
//             {
//                 id: 29,
//                 img: 'https://images.pexels.com/photos/6297088/pexels-photo-6297088.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 building: 'https://images.pexels.com/photos/415687/pexels-photo-415687.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 title: 'Lorem ipsum dolor sit amet consectetur.',
//                 GuestsAndRoomDetail: '4 guests 2 bedrooms 2 beds 2 baths',
//                 internat: "Wifi Air conditioning Kitchen",
//                 cancellation: "cancellation flexibility available",
//                 review: '6.10 (11)',
//                 price: '40',
//                 totalPrice: '178'
//             },
//             {
//                 id: 30,
//                 img: 'https://images.pexels.com/photos/5824498/pexels-photo-5824498.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 building: 'https://images.pexels.com/photos/5524165/pexels-photo-5524165.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 title: 'AR Lounge & Pool (r&r +b&b) nice',
//                 GuestsAndRoomDetail: '4 guests 2 bedrooms 2 beds 2 baths',
//                 internat: "Wifi Air conditioning Kitchen",
//                 cancellation: "cancellation flexibility available",
//                 review: '9.9 (26)',
//                 price: '66',
//                 totalPrice: '250'
//             },
//         ]
//     },
//     {
//         id: 6,
//         name: 'morocco',
//         city: 'Rabat',
//         rooms: [
//             {
//                 id: 31,
//                 img: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 building: 'https://images.pexels.com/photos/5524164/pexels-photo-5524164.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 title: 'Light bright airy stylish apt & safe peaceful stay',
//                 GuestsAndRoomDetail: '4 guests 2 bedrooms 2 beds 2 baths',
//                 internat: "Wifi Air conditioning Kitchen",
//                 cancellation: "cancellation flexibility available",
//                 review: '4.9 (20)',
//                 price: '34',
//                 totalPrice: '168'
//             },
//             {
//                 id: 32,
//                 img: 'https://images.pexels.com/photos/6186507/pexels-photo-6186507.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 building: 'https://images.pexels.com/photos/3639504/pexels-photo-3639504.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 title: 'Apartment in Lost Panorama',
//                 GuestsAndRoomDetail: '4 guests 3 bedrooms 3 beds 3 baths',
//                 internat: "Wifi Air conditioning Kitchen",
//                 cancellation: "cancellation flexibility available",
//                 review: '3.10 (19)',
//                 price: '28',
//                 totalPrice: '150'
//             },
//             {
//                 id: 33,
//                 img: 'https://images.pexels.com/photos/6283973/pexels-photo-6283973.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 building: 'https://images.pexels.com/photos/3195644/pexels-photo-3195644.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
//                 title: 'AR Lounge & Pool (r&r +b&b)',
//                 GuestsAndRoomDetail: '4 guests 2 bedrooms 2 beds 2 baths',
//                 internat: "Wifi Air conditioning Kitchen",
//                 cancellation: "cancellation flexibility available",
//                 review: '4.9 (20)',
//                 price: '50',
//                 totalPrice: '220'
//             },
//             {
//                 id: 34,
//                 img: 'https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 building: 'https://images.pexels.com/photos/2923418/pexels-photo-2923418.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 title: 'Light bright airy stylish apt & safe peaceful stay',
//                 GuestsAndRoomDetail: '5 guests 3 bedrooms 3 beds 3 baths',
//                 internat: "Wifi Air conditioning Kitchen",
//                 cancellation: "cancellation flexibility available",
//                 review: '7.9 (30)',
//                 price: '39',
//                 totalPrice: '180'
//             },
//             {
//                 id: 35,
//                 img: 'https://images.pexels.com/photos/5825693/pexels-photo-5825693.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 building: 'https://images.pexels.com/photos/3225602/pexels-photo-3225602.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
//                 title: 'Lorem ipsum dolor sit amet consectetur.',
//                 GuestsAndRoomDetail: '4 guests 2 bedrooms 2 beds 2 baths',
//                 internat: "Wifi Air conditioning Kitchen",
//                 cancellation: "cancellation flexibility available",
//                 review: '6.10 (11)',
//                 price: '40',
//                 totalPrice: '178'
//             },
//             {
//                 id: 36,
//                 img: 'https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 building: 'https://images.pexels.com/photos/770607/pexels-photo-770607.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 title: 'AR Lounge & Pool (r&r +b&b) nice',
//                 GuestsAndRoomDetail: '4 guests 2 bedrooms 2 beds 2 baths',
//                 internat: "Wifi Air conditioning Kitchen",
//                 cancellation: "cancellation flexibility available",
//                 review: '9.9 (26)',
//                 price: '66',
//                 totalPrice: '250'
//             },
//         ]
//     },
//     {
//         id: 7,
//         name: 'oman',
//         city: 'Muscat',
//         rooms: [
//             {
//                 id: 37,
//                 img: 'https://images.pexels.com/photos/210604/pexels-photo-210604.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 building: 'https://images.pexels.com/photos/5886380/pexels-photo-5886380.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 title: 'Light bright airy stylish apt & safe peaceful stay',
//                 GuestsAndRoomDetail: '4 guests 2 bedrooms 2 beds 2 baths',
//                 internat: "Wifi Air conditioning Kitchen",
//                 cancellation: "cancellation flexibility available",
//                 review: '4.9 (20)',
//                 price: '34',
//                 totalPrice: '168'
//             },
//             {
//                 id: 38,
//                 img: 'https://images.pexels.com/photos/6312361/pexels-photo-6312361.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 building: 'https://images.pexels.com/photos/5738970/pexels-photo-5738970.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 title: 'Apartment in Lost Panorama',
//                 GuestsAndRoomDetail: '4 guests 3 bedrooms 3 beds 3 baths',
//                 internat: "Wifi Air conditioning Kitchen",
//                 cancellation: "cancellation flexibility available",
//                 review: '3.10 (19)',
//                 price: '28',
//                 totalPrice: '150'
//             },
//             {
//                 id: 39,
//                 img: 'https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 building: 'https://images.pexels.com/photos/5747939/pexels-photo-5747939.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 title: 'AR Lounge & Pool (r&r +b&b)',
//                 GuestsAndRoomDetail: '4 guests 2 bedrooms 2 beds 2 baths',
//                 internat: "Wifi Air conditioning Kitchen",
//                 cancellation: "cancellation flexibility available",
//                 review: '4.9 (20)',
//                 price: '50',
//                 totalPrice: '220'
//             },
//             {
//                 id: 40,
//                 img: 'https://images.pexels.com/photos/6316058/pexels-photo-6316058.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 building: 'https://images.pexels.com/photos/6650984/pexels-photo-6650984.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 title: 'Light bright airy stylish apt & safe peaceful stay',
//                 GuestsAndRoomDetail: '5 guests 3 bedrooms 3 beds 3 baths',
//                 internat: "Wifi Air conditioning Kitchen",
//                 cancellation: "cancellation flexibility available",
//                 review: '7.9 (30)',
//                 price: '39',
//                 totalPrice: '180'
//             },
//             {
//                 id: 41,
//                 img: 'https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 building: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 title: 'Lorem ipsum dolor sit amet consectetur.',
//                 GuestsAndRoomDetail: '4 guests 2 bedrooms 2 beds 2 baths',
//                 internat: "Wifi Air conditioning Kitchen",
//                 cancellation: "cancellation flexibility available",
//                 review: '6.10 (11)',
//                 price: '40',
//                 totalPrice: '178'
//             },
//             {
//                 id: 42,
//                 img: 'https://images.pexels.com/photos/6316065/pexels-photo-6316065.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 building: 'https://images.pexels.com/photos/2506988/pexels-photo-2506988.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 title: 'AR Lounge & Pool (r&r +b&b) nice',
//                 GuestsAndRoomDetail: '4 guests 2 bedrooms 2 beds 2 baths',
//                 internat: "Wifi Air conditioning Kitchen",
//                 cancellation: "cancellation flexibility available",
//                 review: '9.9 (26)',
//                 price: '57',
//                 totalPrice: '244'
//             },
//         ]
//     },
//     {
//         id: 8,
//         name: 'malaysia',
//         city: 'Kuala Lumpur',
//         rooms: [
//             {
//                 id: 43,
//                 img: 'https://images.pexels.com/photos/3144580/pexels-photo-3144580.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 building: 'https://images.pexels.com/photos/2506990/pexels-photo-2506990.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 title: 'Light bright airy stylish apt & safe peaceful stay',
//                 GuestsAndRoomDetail: '4 guests 2 bedrooms 2 beds 2 baths',
//                 internat: "Wifi Air conditioning Kitchen",
//                 cancellation: "cancellation flexibility available",
//                 review: '4.9 (20)',
//                 price: '34',
//                 totalPrice: '168'
//             },
//             {
//                 id: 44,
//                 img: 'https://images.pexels.com/photos/3773576/pexels-photo-3773576.png?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 building: 'https://images.pexels.com/photos/2227787/pexels-photo-2227787.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
//                 title: 'Apartment in Lost Panorama',
//                 GuestsAndRoomDetail: '4 guests 3 bedrooms 3 beds 3 baths',
//                 internat: "Wifi Air conditioning Kitchen",
//                 cancellation: "cancellation flexibility available",
//                 review: '3.10 (19)',
//                 price: '28',
//                 totalPrice: '150'
//             },
//             {
//                 id: 45,
//                 img: 'https://images.pexels.com/photos/4993079/pexels-photo-4993079.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 building: 'https://images.pexels.com/photos/2064742/pexels-photo-2064742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 title: 'AR Lounge & Pool (r&r +b&b)',
//                 GuestsAndRoomDetail: '4 guests 2 bedrooms 2 beds 2 baths',
//                 internat: "Wifi Air conditioning Kitchen",
//                 cancellation: "cancellation flexibility available",
//                 review: '4.9 (20)',
//                 price: '50',
//                 totalPrice: '220'
//             },
//             {
//                 id: 46,
//                 img: 'https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 building: 'https://images.pexels.com/photos/2793451/pexels-photo-2793451.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 title: 'Light bright airy stylish apt & safe peaceful stay',
//                 GuestsAndRoomDetail: '5 guests 3 bedrooms 3 beds 3 baths',
//                 internat: "Wifi Air conditioning Kitchen",
//                 cancellation: "cancellation flexibility available",
//                 review: '7.9 (30)',
//                 price: '39',
//                 totalPrice: '180'
//             },
//             {
//                 id: 47,
//                 img: 'https://images.pexels.com/photos/3634740/pexels-photo-3634740.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 building: 'https://images.pexels.com/photos/2986231/pexels-photo-2986231.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 title: 'Lorem ipsum dolor sit amet consectetur.',
//                 GuestsAndRoomDetail: '4 guests 2 bedrooms 2 beds 2 baths',
//                 internat: "Wifi Air conditioning Kitchen",
//                 cancellation: "cancellation flexibility available",
//                 review: '6.10 (11)',
//                 price: '40',
//                 totalPrice: '178'
//             },
//             {
//                 id: 48,
//                 img: 'https://images.pexels.com/photos/3634739/pexels-photo-3634739.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 building: 'https://images.pexels.com/photos/1268871/pexels-photo-1268871.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 title: 'AR Lounge & Pool (r&r +b&b) nice',
//                 GuestsAndRoomDetail: '4 guests 2 bedrooms 2 beds 2 baths',
//                 internat: "Wifi Air conditioning Kitchen",
//                 cancellation: "cancellation flexibility available",
//                 review: '9.9 (26)',
//                 price: '66',
//                 totalPrice: '250'
//             },
//         ]
//     },
//     {
//         id: 9,
//         name: 'Lebanon',
//         city: 'Beirut',
//         rooms: [
//             {
//                 id: 49,
//                 img: 'https://images.pexels.com/photos/1095127/pexels-photo-1095127.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 building: 'https://images.pexels.com/photos/2344264/pexels-photo-2344264.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 title: 'Light bright airy stylish apt & safe peaceful stay',
//                 GuestsAndRoomDetail: '4 guests 2 bedrooms 2 beds 2 baths',
//                 internat: "Wifi Air conditioning Kitchen",
//                 cancellation: "cancellation flexibility available",
//                 review: '4.9 (20)',
//                 price: '34',
//                 totalPrice: '168'
//             },
//             {
//                 id: 50,
//                 img: 'https://images.pexels.com/photos/5378405/pexels-photo-5378405.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 building: 'https://images.pexels.com/photos/3714727/pexels-photo-3714727.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 title: 'Apartment in Lost Panorama',
//                 GuestsAndRoomDetail: '4 guests 3 bedrooms 3 beds 3 baths',
//                 internat: "Wifi Air conditioning Kitchen",
//                 cancellation: "cancellation flexibility available",
//                 review: '3.10 (19)',
//                 price: '27',
//                 totalPrice: '170'
//             },
//             {
//                 id: 51,
//                 img: 'https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 building: 'https://images.pexels.com/photos/261395/pexels-photo-261395.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 title: 'AR Lounge & Pool (r&r +b&b)',
//                 GuestsAndRoomDetail: '4 guests 2 bedrooms 2 beds 2 baths',
//                 internat: "Wifi Air conditioning Kitchen",
//                 cancellation: "cancellation flexibility available",
//                 review: '17.9 (20)',
//                 price: '58',
//                 totalPrice: '245'
//             },
//             {
//                 id: 52,
//                 img: 'https://images.pexels.com/photos/2089696/pexels-photo-2089696.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 building: 'https://images.pexels.com/photos/2983472/pexels-photo-2983472.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 title: 'Light bright airy stylish apt & safe peaceful stay',
//                 GuestsAndRoomDetail: '5 guests 3 bedrooms 3 beds 3 baths',
//                 internat: "Wifi Air conditioning Kitchen",
//                 cancellation: "cancellation flexibility available",
//                 review: '15.9 (30)',
//                 price: '60',
//                 totalPrice: '260'
//             },
//             {
//                 id: 53,
//                 img: 'https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 building: 'https://images.pexels.com/photos/5371484/pexels-photo-5371484.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 title: 'Lorem ipsum dolor sit amet consectetur.',
//                 GuestsAndRoomDetail: '4 guests 2 bedrooms 2 beds 2 baths',
//                 internat: "Wifi Air conditioning Kitchen",
//                 cancellation: "cancellation flexibility available",
//                 review: '6.10 (11)',
//                 price: '40',
//                 totalPrice: '178'
//             },
//             {
//                 id: 54,
//                 img: 'https://images.pexels.com/photos/4713243/pexels-photo-4713243.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 building: 'https://images.pexels.com/photos/6016679/pexels-photo-6016679.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 title: 'AR Lounge & Pool (r&r +b&b) nice',
//                 GuestsAndRoomDetail: '4 guests 2 bedrooms 2 beds 2 baths',
//                 internat: "Wifi Air conditioning Kitchen",
//                 cancellation: "cancellation flexibility available",
//                 review: '9.9 (26)',
//                 price: '49',
//                 totalPrice: '240'
//             },
//         ]
//     },
//     {
//         id: 10,
//         name: 'india',
//         city: 'Mumbai',
//         rooms: [
//             {
//                 id: 55,
//                 img: 'https://images.pexels.com/photos/2873951/pexels-photo-2873951.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
//                 building: 'https://images.pexels.com/photos/4566719/pexels-photo-4566719.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 title: 'Light bright airy stylish apt & safe peaceful stay',
//                 GuestsAndRoomDetail: '4 guests 2 bedrooms 2 beds 2 baths',
//                 internat: "Wifi Air conditioning Kitchen",
//                 cancellation: "cancellation flexibility available",
//                 review: '6.9 (24)',
//                 price: '30',
//                 totalPrice: '168'
//             },
//             {
//                 id: 56,
//                 img: 'https://images.pexels.com/photos/3773576/pexels-photo-3773576.png?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 building: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 title: 'Apartment in Lost Panorama',
//                 GuestsAndRoomDetail: '4 guests 3 bedrooms 3 beds 3 baths',
//                 internat: "Wifi Air conditioning Kitchen",
//                 cancellation: "cancellation flexibility available",
//                 review: '5.10 (19)',
//                 price: '32',
//                 totalPrice: '394'
//             },
//             {
//                 id: 57,
//                 img: 'https://images.pexels.com/photos/534151/pexels-photo-534151.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
//                 building: 'https://images.pexels.com/photos/96444/pexels-photo-96444.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 title: 'AR Lounge & Pool (r&r +b&b)',
//                 GuestsAndRoomDetail: '4 guests 2 bedrooms 2 beds 2 baths',
//                 internat: "Wifi Air conditioning Kitchen",
//                 cancellation: "cancellation flexibility available",
//                 review: '4.9 (20)',
//                 price: '77',
//                 totalPrice: '340'
//             },
//             {
//                 id: 58,
//                 img: 'https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 building: 'https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 title: 'Light bright airy stylish apt & safe peaceful stay',
//                 GuestsAndRoomDetail: '5 guests 3 bedrooms 3 beds 3 baths',
//                 internat: "Wifi Air conditioning Kitchen",
//                 cancellation: "cancellation flexibility available",
//                 review: '14.9 (30)',
//                 price: '44',
//                 totalPrice: '187'
//             },
//             {
//                 id: 59,
//                 img: 'https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 building: 'https://images.pexels.com/photos/121689/pexels-photo-121689.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 title: 'Lorem ipsum dolor sit amet consectetur.',
//                 GuestsAndRoomDetail: '4 guests 2 bedrooms 2 beds 2 baths',
//                 internat: "Wifi Air conditioning Kitchen",
//                 cancellation: "cancellation flexibility available",
//                 review: '11.10 (11)',
//                 price: '55',
//                 totalPrice: '210'
//             },
//             {
//                 id: 60,
//                 img: 'https://images.pexels.com/photos/4078614/pexels-photo-4078614.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 building: 'https://images.pexels.com/photos/425016/pexels-photo-425016.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 title: 'AR Lounge & Pool (r&r +b&b) nice',
//                 GuestsAndRoomDetail: '4 guests 2 bedrooms 2 beds 2 baths',
//                 internat: "Wifi Air conditioning Kitchen",
//                 cancellation: "cancellation flexibility available",
//                 review: '9.9 (26)',
//                 price: '66',
//                 totalPrice: '250'
//             },
//         ]
//     },
//     {
//         id: 11,
//         name: 'canada',
//         city: 'Ontario',
//         rooms: [
//             {
//                 id: 61,
//                 img: 'https://images.pexels.com/photos/929969/pexels-photo-929969.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 building: 'https://images.pexels.com/photos/225680/pexels-photo-225680.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 title: 'Light bright airy stylish apt & safe peaceful stay',
//                 GuestsAndRoomDetail: '4 guests 2 bedrooms 2 beds 2 baths',
//                 internat: "Wifi Air conditioning Kitchen",
//                 cancellation: "cancellation flexibility available",
//                 review: '4.9 (20)',
//                 price: '34',
//                 totalPrice: '168'
//             },
//             {
//                 id: 62,
//                 img: 'https://images.pexels.com/photos/3773576/pexels-photo-3773576.png?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 building: 'https://images.pexels.com/photos/939962/pexels-photo-939962.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 title: 'Apartment in Lost Panorama',
//                 GuestsAndRoomDetail: '4 guests 3 bedrooms 3 beds 3 baths',
//                 internat: "Wifi Air conditioning Kitchen",
//                 cancellation: "cancellation flexibility available",
//                 review: '15.10 (19)',
//                 price: '88',
//                 totalPrice: '469'
//             },
//             {
//                 id: 63,
//                 img: 'https://images.pexels.com/photos/6297085/pexels-photo-6297085.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 building: 'https://images.pexels.com/photos/1200457/pexels-photo-1200457.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 title: 'AR Lounge & Pool (r&r +b&b)',
//                 GuestsAndRoomDetail: '4 guests 2 bedrooms 2 beds 2 baths',
//                 internat: "Wifi Air conditioning Kitchen",
//                 cancellation: "cancellation flexibility available",
//                 review: '4.9 (20)',
//                 price: '50',
//                 totalPrice: '220'
//             },
//             {
//                 id: 64,
//                 img: 'https://images.pexels.com/photos/1454805/pexels-photo-1454805.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 building: 'https://images.pexels.com/photos/2100678/pexels-photo-2100678.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 title: 'Light bright airy stylish apt & safe peaceful stay',
//                 GuestsAndRoomDetail: '5 guests 3 bedrooms 3 beds 3 baths',
//                 internat: "Wifi Air conditioning Kitchen",
//                 cancellation: "cancellation flexibility available",
//                 review: '8.9 (39)',
//                 price: '38',
//                 totalPrice: '199'
//             },
//             {
//                 id: 65,
//                 img: 'https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 building: 'https://images.pexels.com/photos/1444450/pexels-photo-1444450.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 title: 'Lorem ipsum dolor sit amet consectetur.',
//                 GuestsAndRoomDetail: '4 guests 2 bedrooms 2 beds 2 baths',
//                 internat: "Wifi Air conditioning Kitchen",
//                 cancellation: "cancellation flexibility available",
//                 review: '6.10 (11)',
//                 price: '40',
//                 totalPrice: '178'
//             },
//             {
//                 id: 66,
//                 img: 'https://images.pexels.com/photos/6941851/pexels-photo-6941851.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 building: 'https://images.pexels.com/photos/1553327/pexels-photo-1553327.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 title: 'AR Lounge & Pool (r&r +b&b) nice',
//                 GuestsAndRoomDetail: '4 guests 2 bedrooms 2 beds 2 baths',
//                 internat: "Wifi Air conditioning Kitchen",
//                 cancellation: "cancellation flexibility available",
//                 review: '17.9 (26)',
//                 price: '88',
//                 totalPrice: '450'
//             },
//         ]
//     },
//     {
//         id: 12,
//         name: 'pakistan',
//         city: 'Karachi',
//         rooms: [
//             {
//                 id: 67,
//                 img: 'https://images.pexels.com/photos/1879069/pexels-photo-1879069.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 building: 'https://images.pexels.com/photos/1337278/pexels-photo-1337278.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 title: 'Light bright airy stylish apt & safe peaceful stay',
//                 GuestsAndRoomDetail: '4 guests 3 bedrooms 3 beds 3 baths',
//                 internat: "Wifi Air conditioning Kitchen",
//                 cancellation: "cancellation flexibility available",
//                 review: '4.9 (20)',
//                 price: '34',
//                 totalPrice: '168'
//             },
//             {
//                 id: 68,
//                 img: 'https://images.pexels.com/photos/1879069/pexels-photo-1879069.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 building: 'https://images.pexels.com/photos/1117138/pexels-photo-1117138.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 title: 'Apartment in Lost Panorama',
//                 GuestsAndRoomDetail: '4 guests 3 bedrooms 3 beds 3 baths',
//                 internat: "Wifi Air conditioning Kitchen",
//                 cancellation: "cancellation flexibility available",
//                 review: '8.10 (22)',
//                 price: '32',
//                 totalPrice: '155'
//             },
//             {
//                 id: 69,
//                 img: 'https://images.pexels.com/photos/916337/pexels-photo-916337.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 building: 'https://images.pexels.com/photos/3355561/pexels-photo-3355561.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 title: 'AR Lounge & Pool (r&r +b&b)',
//                 GuestsAndRoomDetail: '4 guests 2 bedrooms 2 beds 2 baths',
//                 internat: "Wifi Air conditioning Kitchen",
//                 cancellation: "cancellation flexibility available",
//                 review: '4.9 (20)',
//                 price: '58',
//                 totalPrice: '277'
//             },
//             {
//                 id: 70,
//                 img: 'https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 building: 'https://images.pexels.com/photos/594077/pexels-photo-594077.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 title: 'Light bright airy stylish apt & safe peaceful stay',
//                 GuestsAndRoomDetail: '5 guests 3 bedrooms 3 beds 3 baths',
//                 internat: "Wifi Air conditioning Kitchen",
//                 cancellation: "cancellation flexibility available",
//                 review: '10.9 (30)',
//                 price: '45',
//                 totalPrice: '190'
//             },
//             {
//                 id: 71,
//                 img: 'https://images.pexels.com/photos/3992776/pexels-photo-3992776.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 building: 'https://images.pexels.com/photos/161758/governor-s-mansion-montgomery-alabama-grand-staircase-161758.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 title: 'Lorem ipsum dolor sit amet consectetur.',
//                 GuestsAndRoomDetail: '4 guests 2 bedrooms 2 beds 2 baths',
//                 internat: "Wifi Air conditioning Kitchen",
//                 cancellation: "cancellation flexibility available",
//                 review: '6.10 (11)',
//                 price: '40',
//                 totalPrice: '178'
//             },
//             {
//                 id: 72,
//                 img: 'https://images.pexels.com/photos/1467435/pexels-photo-1467435.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 building: 'https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 title: 'AR Lounge & Pool (r&r +b&b) nice',
//                 GuestsAndRoomDetail: '4 guests 4 bedrooms 4 beds 4 baths',
//                 internat: "Wifi Air conditioning Kitchen",
//                 cancellation: "cancellation flexibility available",
//                 review: '9.9 (20)',
//                 price: '70',
//                 totalPrice: '500'
//             },
//         ]
//     }
// ];

const SelectRoom = () => {
    const [roomsData, setRoomsData] = useState(null);
    const history = useHistory();
    // useEffect(() => {
    //     fetch('http://localhost:4000/roomsInfo', {
    //         method: 'POST',
    //         headers: { 'content-type': 'application/json' },
    //         body: JSON.stringify(roomData)
    //     })
    //         .then(result => console.log(result));
    // }, [])
    // const city = sessionStorage.getItem("city");

    const gustsAndDate = JSON.parse(sessionStorage.getItem("gustsAndDates"));
    const convert = JSON.parse(sessionStorage.getItem('countryAndCity'))
    const city = convert && convert[0].city;
    useEffect(() => {
        fetch(`http://localhost:4000/roomsByData${city}`)
            .then(res => res.json())
            .then(result => {
                setRoomsData(result)
            })
    }, [city]);

    const roomDetail = (id) => {
        history.push(`roomDetail${id}`)
    };
    return (
        <div className="pl-lg-5">
            <div>
                <h6 className="pb-2">
                    252 stays {gustsAndDate && gustsAndDate[0].Month} {gustsAndDate && gustsAndDate[0].numericStartDay}-{gustsAndDate && gustsAndDate[0].numericEndDay}  {gustsAndDate && gustsAndDate[0].gusts} Gusts
                    </h6>
                <h2>Stay in {roomsData && roomsData[0].city} Division</h2>
            </div>
            {
                roomsData ? roomsData[0].rooms.map(item =>
                    <Link key={item.id} style={{ cursor: 'pointer' }} onClick={() => roomDetail(item.id)}>
                        <Row className='border-bottom py-5 rooms_container'>
                            <Col sm={12} md={12} lg={12} xl={6}>
                                <img className="img-fluid rooms_img" src={item.img} alt="" />
                            </Col>
                            <Col sm={12} md={12} lg={12} xl={6}>
                                <div>
                                    <h4>{item.title}</h4>
                                    <p className="m-1">{item.GuestsAndRoomDetail}</p>
                                    <p className="pt-1">{item.internat}</p>
                                    <p className="pt-2">{item.cancellation}</p>
                                    <div className="d-flex">
                                        <h6 className="m-md-0 review_content">
                                            <FontAwesomeIcon icon={faStar} className="rooms_reviewIcon" /> {item.review}
                                        </h6>
                                        <div className="pl-5">
                                            <div className="pl-5">
                                                <h6 className="m-0"><span className="rooms_price">${item.price}/</span>night</h6>
                                                <small className='p-0 m-0 fw-light'>${item.totalPrice} total</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Link>
                )
                    : 'loading....'
            }
        </div >
    );
};

export default SelectRoom;