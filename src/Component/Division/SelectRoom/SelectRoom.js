import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';

// const roomData = [

//     {
//         id: 1,
//         name: 'bangladesh',
//         city: 'Dhaka',
//         rooms: [
//             {
//                 id: 1,
//                 img: 'https://images.pexels.com/photos/3773570/pexels-photo-3773570.png?auto=compress&cs=tinysrgb&dpr=1&w=500',
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
//                 id: 1,
//                 img: 'https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 title: 'Light bright airy stylish apt & safe peaceful stay',
//                 GuestsAndRoomDetail: '2 guests 2 bedrooms 2 beds 2 baths',
//                 internat: "Wifi Air conditioning Kitchen",
//                 cancellation: "cancellation flexibility available",
//                 review: '7.9 (30)',
//                 price: '44',
//                 totalPrice: '130'
//             },
//             {
//                 id: 2,
//                 img: 'https://images.pexels.com/photos/533157/pexels-photo-533157.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
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
//                 img: 'https://images.pexels.com/photos/3741314/pexels-photo-3741314.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
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
//                 img: 'https://images.pexels.com/photos/1454805/pexels-photo-1454805.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
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
//                 id: 1,
//                 img: 'https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
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
//                 img: 'https://images.pexels.com/photos/1668860/pexels-photo-1668860.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
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
//                 img: 'https://images.pexels.com/photos/1358900/pexels-photo-1358900.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
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
//                 img: 'https://images.pexels.com/photos/5824883/pexels-photo-5824883.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
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
//                 id: 1,
//                 img: 'https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
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
//                 img: 'https://images.pexels.com/photos/2398375/pexels-photo-2398375.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
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
//                 img: 'https://images.pexels.com/photos/6207948/pexels-photo-6207948.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
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
//                 img: 'https://images.pexels.com/photos/6283960/pexels-photo-6283960.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
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
//                 id: 1,
//                 img: 'https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
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
//                 img: 'https://images.pexels.com/photos/6283960/pexels-photo-6283960.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
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
//                 img: 'https://images.pexels.com/photos/6297088/pexels-photo-6297088.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
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
//                 img: 'https://images.pexels.com/photos/5824498/pexels-photo-5824498.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
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
//                 id: 1,
//                 img: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
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
//                 img: 'https://images.pexels.com/photos/6186507/pexels-photo-6186507.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
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
//                 img: 'https://images.pexels.com/photos/6283973/pexels-photo-6283973.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
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
//                 img: 'https://images.pexels.com/photos/5825693/pexels-photo-5825693.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
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
//                 id: 1,
//                 img: 'https://images.pexels.com/photos/210604/pexels-photo-210604.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
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
//                 img: 'https://images.pexels.com/photos/6312361/pexels-photo-6312361.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
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
//                 img: 'https://images.pexels.com/photos/6316058/pexels-photo-6316058.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
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
//                 img: 'https://images.pexels.com/photos/6316065/pexels-photo-6316065.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
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
//                 id: 1,
//                 img: 'https://images.pexels.com/photos/3144580/pexels-photo-3144580.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
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
//                 img: 'https://images.pexels.com/photos/4993079/pexels-photo-4993079.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
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
//                 img: 'https://images.pexels.com/photos/3634740/pexels-photo-3634740.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
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
//                 img: 'https://images.pexels.com/photos/3634739/pexels-photo-3634739.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
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
//                 id: 1,
//                 img: 'https://images.pexels.com/photos/1095127/pexels-photo-1095127.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
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
//                 img: 'https://images.pexels.com/photos/5378405/pexels-photo-5378405.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 title: 'Apartment in Lost Panorama',
//                 GuestsAndRoomDetail: '4 guests 3 bedrooms 3 beds 3 baths',
//                 internat: "Wifi Air conditioning Kitchen",
//                 cancellation: "cancellation flexibility available",
//                 review: '3.10 (19)',
//                 price: '27',
//                 totalPrice: '170'
//             },
//             {
//                 id: 3,
//                 img: 'https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 title: 'AR Lounge & Pool (r&r +b&b)',
//                 GuestsAndRoomDetail: '4 guests 2 bedrooms 2 beds 2 baths',
//                 internat: "Wifi Air conditioning Kitchen",
//                 cancellation: "cancellation flexibility available",
//                 review: '17.9 (20)',
//                 price: '58',
//                 totalPrice: '245'
//             },
//             {
//                 id: 4,
//                 img: 'https://images.pexels.com/photos/2089696/pexels-photo-2089696.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 title: 'Light bright airy stylish apt & safe peaceful stay',
//                 GuestsAndRoomDetail: '5 guests 3 bedrooms 3 beds 3 baths',
//                 internat: "Wifi Air conditioning Kitchen",
//                 cancellation: "cancellation flexibility available",
//                 review: '15.9 (30)',
//                 price: '60',
//                 totalPrice: '260'
//             },
//             {
//                 id: 5,
//                 img: 'https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
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
//                 img: 'https://images.pexels.com/photos/4713243/pexels-photo-4713243.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
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
//                 id: 1,
//                 img: 'https://images.pexels.com/photos/2873951/pexels-photo-2873951.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
//                 title: 'Light bright airy stylish apt & safe peaceful stay',
//                 GuestsAndRoomDetail: '4 guests 2 bedrooms 2 beds 2 baths',
//                 internat: "Wifi Air conditioning Kitchen",
//                 cancellation: "cancellation flexibility available",
//                 review: '6.9 (24)',
//                 price: '30',
//                 totalPrice: '168'
//             },
//             {
//                 id: 2,
//                 img: 'https://images.pexels.com/photos/3773576/pexels-photo-3773576.png?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 title: 'Apartment in Lost Panorama',
//                 GuestsAndRoomDetail: '4 guests 3 bedrooms 3 beds 3 baths',
//                 internat: "Wifi Air conditioning Kitchen",
//                 cancellation: "cancellation flexibility available",
//                 review: '5.10 (19)',
//                 price: '32',
//                 totalPrice: '394'
//             },
//             {
//                 id: 3,
//                 img: 'https://images.pexels.com/photos/534151/pexels-photo-534151.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
//                 title: 'AR Lounge & Pool (r&r +b&b)',
//                 GuestsAndRoomDetail: '4 guests 2 bedrooms 2 beds 2 baths',
//                 internat: "Wifi Air conditioning Kitchen",
//                 cancellation: "cancellation flexibility available",
//                 review: '4.9 (20)',
//                 price: '77',
//                 totalPrice: '340'
//             },
//             {
//                 id: 4,
//                 img: 'https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 title: 'Light bright airy stylish apt & safe peaceful stay',
//                 GuestsAndRoomDetail: '5 guests 3 bedrooms 3 beds 3 baths',
//                 internat: "Wifi Air conditioning Kitchen",
//                 cancellation: "cancellation flexibility available",
//                 review: '14.9 (30)',
//                 price: '44',
//                 totalPrice: '187'
//             },
//             {
//                 id: 5,
//                 img: 'https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 title: 'Lorem ipsum dolor sit amet consectetur.',
//                 GuestsAndRoomDetail: '4 guests 2 bedrooms 2 beds 2 baths',
//                 internat: "Wifi Air conditioning Kitchen",
//                 cancellation: "cancellation flexibility available",
//                 review: '11.10 (11)',
//                 price: '55',
//                 totalPrice: '210'
//             },
//             {
//                 id: 6,
//                 img: 'https://images.pexels.com/photos/4078614/pexels-photo-4078614.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
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
//                 id: 1,
//                 img: 'https://images.pexels.com/photos/929969/pexels-photo-929969.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
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
//                 title: 'Apartment in Lost Panorama',
//                 GuestsAndRoomDetail: '4 guests 3 bedrooms 3 beds 3 baths',
//                 internat: "Wifi Air conditioning Kitchen",
//                 cancellation: "cancellation flexibility available",
//                 review: '15.10 (19)',
//                 price: '88',
//                 totalPrice: '469'
//             },
//             {
//                 id: 3,
//                 img: 'https://images.pexels.com/photos/6297085/pexels-photo-6297085.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
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
//                 img: 'https://images.pexels.com/photos/1454805/pexels-photo-1454805.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 title: 'Light bright airy stylish apt & safe peaceful stay',
//                 GuestsAndRoomDetail: '5 guests 3 bedrooms 3 beds 3 baths',
//                 internat: "Wifi Air conditioning Kitchen",
//                 cancellation: "cancellation flexibility available",
//                 review: '8.9 (39)',
//                 price: '38',
//                 totalPrice: '199'
//             },
//             {
//                 id: 5,
//                 img: 'https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
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
//                 img: 'https://images.pexels.com/photos/6941851/pexels-photo-6941851.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
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
//                 id: 1,
//                 img: 'https://images.pexels.com/photos/1879069/pexels-photo-1879069.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 title: 'Light bright airy stylish apt & safe peaceful stay',
//                 GuestsAndRoomDetail: '4 guests 3 bedrooms 3 beds 3 baths',
//                 internat: "Wifi Air conditioning Kitchen",
//                 cancellation: "cancellation flexibility available",
//                 review: '4.9 (20)',
//                 price: '34',
//                 totalPrice: '168'
//             },
//             {
//                 id: 2,
//                 img: 'https://images.pexels.com/photos/1879069/pexels-photo-1879069.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 title: 'Apartment in Lost Panorama',
//                 GuestsAndRoomDetail: '4 guests 3 bedrooms 3 beds 3 baths',
//                 internat: "Wifi Air conditioning Kitchen",
//                 cancellation: "cancellation flexibility available",
//                 review: '8.10 (22)',
//                 price: '32',
//                 totalPrice: '155'
//             },
//             {
//                 id: 3,
//                 img: 'https://images.pexels.com/photos/916337/pexels-photo-916337.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 title: 'AR Lounge & Pool (r&r +b&b)',
//                 GuestsAndRoomDetail: '4 guests 2 bedrooms 2 beds 2 baths',
//                 internat: "Wifi Air conditioning Kitchen",
//                 cancellation: "cancellation flexibility available",
//                 review: '4.9 (20)',
//                 price: '58',
//                 totalPrice: '277'
//             },
//             {
//                 id: 4,
//                 img: 'https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//                 title: 'Light bright airy stylish apt & safe peaceful stay',
//                 GuestsAndRoomDetail: '5 guests 3 bedrooms 3 beds 3 baths',
//                 internat: "Wifi Air conditioning Kitchen",
//                 cancellation: "cancellation flexibility available",
//                 review: '10.9 (30)',
//                 price: '45',
//                 totalPrice: '190'
//             },
//             {
//                 id: 5,
//                 img: 'https://images.pexels.com/photos/3992776/pexels-photo-3992776.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
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
//                 img: 'https://images.pexels.com/photos/1467435/pexels-photo-1467435.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
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
// ]

const SelectRoom = () => {
    const [roomsData, setRoomsData] = useState(null);
    // useEffect(() => {
    //     fetch('http://localhost:4000/roomsInfo', {
    //         method: 'POST',
    //         headers: { 'content-type': 'application/json' },
    //         body: JSON.stringify(roomData)
    //     })
    //         .then(result => console.log(result));
    // }, [])
    // const city = sessionStorage.getItem("city");


    let convert = JSON.parse(sessionStorage.getItem('countryAndDatesAndMembers'))
    const city = convert && convert[0].city;
    useEffect(() => {
        fetch(`http://localhost:4000/roomsByData${city}`)
            .then(res => res.json())
            .then(result => {
                setRoomsData(result)
            })
    }, [city])
    return (
        <div className="pl-lg-5">
            <div>
                <p>252 stays   guests</p>
                <h2>Stay in {roomsData && roomsData[0].city} Division</h2>
            </div>
            {
                roomsData ? roomsData[0].rooms.map(item => <Row key={item.id} className='border-bottom py-5 rooms_container'>
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
                </Row>) : 'loading....'
            }
        </div>
    );
};

export default SelectRoom;