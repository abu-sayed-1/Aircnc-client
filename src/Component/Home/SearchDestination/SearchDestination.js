import React, { useEffect, useState } from 'react';
import './SearchDestination.css'
import { FormControl } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import CountMembersAndSetDates from './CountMembersAndSetDates/CountMembersAndSetDates';

// const homeData = [
//     {
//         id: 1,
//         name: 'bangladesh',
//         experiences: [
//             {
//                 id: 1,
//                 img: "https://images.pexels.com/photos/5543257/pexels-photo-5543257.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - bangladesh",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '43',
//                 person: 'per person',
//                 review: '7'
//             },
//             {
//                 id: 2,
//                 img: "https://images.pexels.com/photos/2888108/pexels-photo-2888108.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - bangladesh",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '13',
//                 person: 'per person',
//                 review: '9'
//             },
//             {
//                 id: 3,
//                 img: "https://images.pexels.com/photos/1477535/pexels-photo-1477535.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - bangladesh",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '19',
//                 person: 'per person',
//                 review: '12'
//             },
//             {
//                 id: 4,
//                 img: "https://images.pexels.com/photos/448754/pexels-photo-448754.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - bangladesh",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '50',
//                 person: 'per person',
//                 review: '33'
//             },
//         ],
//         homes: [
//             {
//                 id: 1,
//                 img: "https://images.pexels.com/photos/2157404/pexels-photo-2157404.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - bangladesh",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '188',
//                 person: 'per person',
//                 review: '64'
//             },
//             {
//                 id: 2,
//                 img: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - bangladesh",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '129',
//                 person: 'per person',
//                 review: '44'
//             },
//             {
//                 id: 3,
//                 img: "https://images.pexels.com/photos/1546166/pexels-photo-1546166.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - bangladesh",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '210',
//                 person: 'per person',
//                 review: '90'
//             },
//         ]

//     },
//     {
//         id: 2,
//         name: 'newyork',
//         experiences: [
//             {
//                 id: 1,
//                 img: "https://images.pexels.com/photos/2260784/pexels-photo-2260784.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - new york",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '40',
//                 person: 'per person',
//                 review: '27'
//             },
//             {
//                 id: 2,
//                 img: "https://images.pexels.com/photos/2888108/pexels-photo-2888108.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - new york",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '10',
//                 person: 'per person',
//                 review: '9'
//             },
//             {
//                 id: 3,
//                 img: "https://images.pexels.com/photos/3889867/pexels-photo-3889867.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - new york",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '28',
//                 person: 'per person',
//                 review: '12'
//             },
//             {
//                 id: 4,
//                 img: "https://images.pexels.com/photos/237697/pexels-photo-237697.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
//                 place: "nightlife - new york",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '100',
//                 person: 'per person',
//                 review: '66'
//             },
//         ],
//         homes: [
//             {
//                 id: 1,
//                 img: "https://images.pexels.com/photos/2187605/pexels-photo-2187605.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - new york",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '300',
//                 person: 'per person',
//                 review: '22'
//             },
//             {
//                 id: 2,
//                 img: "https://images.pexels.com/photos/221506/pexels-photo-221506.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - new york",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '128',
//                 person: 'per person',
//                 review: '55'
//             },
//             {
//                 id: 3,
//                 img: "https://images.pexels.com/photos/314937/pexels-photo-314937.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - new york",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '240',
//                 person: 'per person',
//                 review: '77'
//             },
//         ]

//     },
//     {
//         id: 3,
//         name: 'france',
//         experiences: [
//             {
//                 id: 1,
//                 img: "https://images.pexels.com/photos/6062501/pexels-photo-6062501.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
//                 place: "nightlife - france",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '49',
//                 person: 'per person',
//                 review: '13'
//             },
//             {
//                 id: 2,
//                 img: "https://images.pexels.com/photos/207920/pexels-photo-207920.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
//                 place: "nightlife - france",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '43',
//                 person: 'per person',
//                 review: '17'
//             },
//             {
//                 id: 3,
//                 img: "https://images.pexels.com/photos/1272392/pexels-photo-1272392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - france",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '80',
//                 person: 'per person',
//                 review: '39'
//             },
//             {
//                 id: 4,
//                 img: "https://images.pexels.com/photos/448754/pexels-photo-448754.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - france",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '70',
//                 person: 'per person',
//                 review: '33'
//             },
//         ],
//         homes: [
//             {
//                 id: 1,
//                 img: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - france",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '166',
//                 person: 'per person',
//                 review: '69'
//             },
//             {
//                 id: 2,
//                 img: "https://images.pexels.com/photos/3958954/pexels-photo-3958954.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - france",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '187',
//                 person: 'per person',
//                 review: '22'
//             },
//             {
//                 id: 3,
//                 img: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
//                 place: "nightlife - france",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '199',
//                 person: 'per person',
//                 review: '300'
//             },
//         ]

//     },
//     {
//         id: 4,
//         name: 'lebanon',
//         experiences: [
//             {
//                 id: 1,
//                 img: "https://images.pexels.com/photos/1703314/pexels-photo-1703314.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
//                 place: "nightlife - lebanon",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '7',
//                 person: 'per person',
//                 review: '7'
//             },
//             {
//                 id: 2,
//                 img: "https://images.pexels.com/photos/6669440/pexels-photo-6669440.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
//                 place: "nightlife - lebanon",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '17',
//                 person: 'per person',
//                 review: '10'
//             },
//             {
//                 id: 3,
//                 img: "https://images.pexels.com/photos/5638677/pexels-photo-5638677.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - lebanon",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '43',
//                 person: 'per person',
//                 review: '69'
//             },
//             {
//                 id: 4,
//                 img: "https://images.pexels.com/photos/5638730/pexels-photo-5638730.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - lebanon",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '33',
//                 person: 'per person',
//                 review: '39'
//             },
//         ],
//         homes: [
//             {
//                 id: 1,
//                 img: "https://images.pexels.com/photos/2157404/pexels-photo-2157404.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - lebanon",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '183',
//                 person: 'per person',
//                 review: '64'
//             },
//             {
//                 id: 2,
//                 img: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - lebanon",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '155',
//                 person: 'per person',
//                 review: '44'
//             },
//             {
//                 id: 3,
//                 img: "https://images.pexels.com/photos/1546166/pexels-photo-1546166.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - lebanon",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '200',
//                 person: 'per person',
//                 review: '90'
//             },
//         ]

//     },
//     {
//         id: 5,
//         name: 'england',
//         experiences: [
//             {
//                 id: 1,
//                 img: "https://images.pexels.com/photos/5929/food-salad-dinner-eating.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - england",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '90',
//                 person: 'per person',
//                 review: '66'
//             },
//             {
//                 id: 2,
//                 img: "https://images.pexels.com/photos/2888108/pexels-photo-2888108.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - england",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '15',
//                 person: 'per person',
//                 review: '9'
//             },
//             {
//                 id: 3,
//                 img: "https://images.pexels.com/photos/667221/pexels-photo-667221.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - england",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '23',
//                 person: 'per person',
//                 review: '12'
//             },
//             {
//                 id: 4,
//                 img: "https://images.pexels.com/photos/448754/pexels-photo-448754.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - england",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '71',
//                 person: 'per person',
//                 review: '33'
//             },
//         ],
//         homes: [
//             {
//                 id: 1,
//                 img: "https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - england",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '177',
//                 person: 'per person',
//                 review: '64'
//             },
//             {
//                 id: 2,
//                 img: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - england",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '157',
//                 person: 'per person',
//                 review: '44'
//             },
//             {
//                 id: 3,
//                 img: "https://images.pexels.com/photos/667221/pexels-photo-667221.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - england",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '209',
//                 person: 'per person',
//                 review: '88'
//             },
//         ]

//     },
//     {
//         id: 6,
//         name: 'pakistan',
//         experiences: [
//             {
//                 id: 1,
//                 img: "https://images.pexels.com/photos/5543257/pexels-photo-5543257.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - pakistan",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '43',
//                 person: 'per person',
//                 review: '7'
//             },
//             {
//                 id: 2,
//                 img: "https://images.pexels.com/photos/2888108/pexels-photo-2888108.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - pakistan",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '8',
//                 person: 'per person',
//                 review: '9'
//             },
//             {
//                 id: 3,
//                 img: "https://images.pexels.com/photos/1477535/pexels-photo-1477535.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - pakistan",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '24',
//                 person: 'per person',
//                 review: '12'
//             },
//             {
//                 id: 4,
//                 img: "https://images.pexels.com/photos/448754/pexels-photo-448754.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - pakistan",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '75',
//                 person: 'per person',
//                 review: '33'
//             },
//         ],
//         homes: [
//             {
//                 id: 1,
//                 img: "https://images.pexels.com/photos/2157404/pexels-photo-2157404.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - pakistan",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '128',
//                 person: 'per person',
//                 review: '64'
//             },
//             {
//                 id: 2,
//                 img: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - pakistan",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '150',
//                 person: 'per person',
//                 review: '44'
//             },
//             {
//                 id: 3,
//                 img: "https://images.pexels.com/photos/1546166/pexels-photo-1546166.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - pakistan",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '200',
//                 person: 'per person',
//                 review: '90'
//             },
//         ]

//     },
//     {
//         id: 7,
//         name: 'canada',
//         experiences: [
//             {
//                 id: 1,
//                 img: "https://images.pexels.com/photos/2260784/pexels-photo-2260784.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - canada",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '37',
//                 person: 'per person',
//                 review: '27'
//             },
//             {
//                 id: 2,
//                 img: "https://images.pexels.com/photos/2888108/pexels-photo-2888108.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - canada",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '11',
//                 person: 'per person',
//                 review: '9'
//             },
//             {
//                 id: 3,
//                 img: "https://images.pexels.com/photos/3889867/pexels-photo-3889867.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - canada",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '32',
//                 person: 'per person',
//                 review: '12'
//             },
//             {
//                 id: 4,
//                 img: "https://images.pexels.com/photos/237697/pexels-photo-237697.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
//                 place: "nightlife - canada",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '105',
//                 person: 'per person',
//                 review: '66'
//             },
//         ],
//         homes: [
//             {
//                 id: 1,
//                 img: "https://images.pexels.com/photos/2187605/pexels-photo-2187605.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - canada",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '198',
//                 person: 'per person',
//                 review: '22'
//             },
//             {
//                 id: 2,
//                 img: "https://images.pexels.com/photos/221506/pexels-photo-221506.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - canada",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '130',
//                 person: 'per person',
//                 review: '55'
//             },
//             {
//                 id: 3,
//                 img: "https://images.pexels.com/photos/314937/pexels-photo-314937.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - canada",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '196',
//                 person: 'per person',
//                 review: '77'
//             },
//         ]

//     },
//     {
//         id: 8,
//         name: 'morocco',
//         experiences: [
//             {
//                 id: 1,
//                 img: "https://images.pexels.com/photos/5543257/pexels-photo-5543257.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - morocco",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '40',
//                 person: 'per person',
//                 review: '7'
//             },
//             {
//                 id: 2,
//                 img: "https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - morocco",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '10',
//                 person: 'per person',
//                 review: '9'
//             },
//             {
//                 id: 3,
//                 img: "https://images.pexels.com/photos/1477535/pexels-photo-1477535.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - morocco",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '26',
//                 person: 'per person',
//                 review: '12'
//             },
//             {
//                 id: 4,
//                 img: "https://images.pexels.com/photos/448754/pexels-photo-448754.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - morocco",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '70',
//                 person: 'per person',
//                 review: '33'
//             },
//         ],
//         homes: [
//             {
//                 id: 1,
//                 img: "https://images.pexels.com/photos/2157404/pexels-photo-2157404.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - morocco",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '128',
//                 person: 'per person',
//                 review: '64'
//             },
//             {
//                 id: 2,
//                 img: "https://images.pexels.com/photos/209315/pexels-photo-209315.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - morocco",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '90',
//                 person: 'per person',
//                 review: '33'
//             },
//             {
//                 id: 3,
//                 img: "https://images.pexels.com/photos/1546166/pexels-photo-1546166.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - morocco",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '200',
//                 person: 'per person',
//                 review: '90'
//             },
//         ]

//     },
//     {
//         id: 9,
//         name: 'malaysia',
//         experiences: [
//             {
//                 id: 1,
//                 img: "https://images.pexels.com/photos/2260784/pexels-photo-2260784.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - malaysia",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '27',
//                 person: 'per person',
//                 review: '27'
//             },
//             {
//                 id: 2,
//                 img: "https://images.pexels.com/photos/4916556/pexels-photo-4916556.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - malaysia",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '10',
//                 person: 'per person',
//                 review: '9'
//             },
//             {
//                 id: 3,
//                 img: "https://images.pexels.com/photos/3889867/pexels-photo-3889867.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - malaysia",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '23',
//                 person: 'per person',
//                 review: '12'
//             },
//             {
//                 id: 4,
//                 img: "https://images.pexels.com/photos/237697/pexels-photo-237697.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
//                 place: "nightlife - malaysia",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '100',
//                 person: 'per person',
//                 review: '66'
//             },
//         ],
//         homes: [
//             {
//                 id: 1,
//                 img: "https://images.pexels.com/photos/2187605/pexels-photo-2187605.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - malaysia",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '199',
//                 person: 'per person',
//                 review: '22'
//             },
//             {
//                 id: 2,
//                 img: "https://images.pexels.com/photos/3935320/pexels-photo-3935320.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - malaysia",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '139',
//                 person: 'per person',
//                 review: '58'
//             },
//             {
//                 id: 3,
//                 img: "https://images.pexels.com/photos/314937/pexels-photo-314937.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - malaysia",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '270',
//                 person: 'per person',
//                 review: '77'
//             },
//         ]

//     },
//     {
//         id: 10,
//         name: 'oman',
//         experiences: [
//             {
//                 id: 1,
//                 img: "https://images.pexels.com/photos/6062501/pexels-photo-6062501.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
//                 place: "nightlife - oman",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '29',
//                 person: 'per person',
//                 review: '13'
//             },
//             {
//                 id: 2,
//                 img: "https://images.pexels.com/photos/4993114/pexels-photo-4993114.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - oman",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '80',
//                 person: 'per person',
//                 review: '17'
//             },
//             {
//                 id: 3,
//                 img: "https://images.pexels.com/photos/1272392/pexels-photo-1272392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - oman",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '80',
//                 person: 'per person',
//                 review: '39'
//             },
//             {
//                 id: 4,
//                 img: "https://images.pexels.com/photos/448754/pexels-photo-448754.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - oman",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '99',
//                 person: 'per person',
//                 review: '33'
//             },
//         ],
//         homes: [
//             {
//                 id: 1,
//                 img: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - oman",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '170',
//                 person: 'per person',
//                 review: '69'
//             },
//             {
//                 id: 2,
//                 img: "https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
//                 place: "nightlife - oman",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '189',
//                 person: 'per person',
//                 review: '29'
//             },
//             {
//                 id: 3,
//                 img: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
//                 place: "nightlife - oman",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '199',
//                 person: 'per person',
//                 review: '300'
//             },
//         ]

//     },
//     {
//         id: 11,
//         name: 'india',
//         experiences: [
//             {
//                 id: 1,
//                 img: "https://images.pexels.com/photos/1703314/pexels-photo-1703314.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
//                 place: "nightlife - india",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '7',
//                 person: 'per person',
//                 review: '7'
//             },
//             {
//                 id: 2,
//                 img: "https://images.pexels.com/photos/6210765/pexels-photo-6210765.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - india",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '17',
//                 person: 'per person',
//                 review: '10'
//             },
//             {
//                 id: 3,
//                 img: "https://images.pexels.com/photos/5638677/pexels-photo-5638677.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - india",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '60',
//                 person: 'per person',
//                 review: '69'
//             },
//             {
//                 id: 4,
//                 img: "https://images.pexels.com/photos/5638730/pexels-photo-5638730.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - india",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '33',
//                 person: 'per person',
//                 review: '39'
//             },
//         ],
//         homes: [
//             {
//                 id: 1,
//                 img: "https://images.pexels.com/photos/2157404/pexels-photo-2157404.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - india",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '128',
//                 person: 'per person',
//                 review: '64'
//             },
//             {
//                 id: 2,
//                 img: "https://images.pexels.com/photos/2587317/pexels-photo-2587317.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - india",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: "190",
//                 person: 'per person',
//                 review: '49'
//             },
//             {
//                 id: 3,
//                 img: "https://images.pexels.com/photos/1546166/pexels-photo-1546166.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - india",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '200',
//                 person: 'per person',
//                 review: '90'
//             },
//         ]

//     },
//     {
//         id: 12,
//         name: 'netherland',
//         experiences: [
//             {
//                 id: 1,
//                 img: "https://images.pexels.com/photos/5929/food-salad-dinner-eating.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - netherland",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '90',
//                 person: 'per person',
//                 review: '66'
//             },
//             {
//                 id: 2,
//                 img: "https://images.pexels.com/photos/2664443/pexels-photo-2664443.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - netherland",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '15',
//                 person: 'per person',
//                 review: '9'
//             },
//             {
//                 id: 3,
//                 img: "https://images.pexels.com/photos/667221/pexels-photo-667221.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - netherland",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '23',
//                 person: 'per person',
//                 review: '12'
//             },
//             {
//                 id: 4,
//                 img: "https://images.pexels.com/photos/448754/pexels-photo-448754.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - netherland",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '70',
//                 person: 'per person',
//                 review: '33'
//             },
//         ],
//         homes: [
//             {
//                 id: 1,
//                 img: "https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - netherland",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '128',
//                 person: 'per person',
//                 review: '64'
//             },
//             {
//                 id: 2,
//                 img: "https://images.pexels.com/photos/2523186/pexels-photo-2523186.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - netherland",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '156',
//                 person: 'per person',
//                 review: '44'
//             },
//             {
//                 id: 3,
//                 img: "https://images.pexels.com/photos/667221/pexels-photo-667221.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - netherland",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '209',
//                 person: 'per person',
//                 review: '88'
//             },
//         ]

//     },
// ];


const SearchDestination = ({ handleSearchResult }) => {
    const [search, setSearch] = useState({ searchBox: '' });
    // useEffect(() => {
    //     fetch('http://localhost:4000/homePagesAllData',{
    //         method: "POST",
    //         headers:{'content-type': 'application/json'},
    //         body: JSON.stringify(homeData)
    //     })
    // },[])

    useEffect(() => {
        const locationName = search.searchBox;
        const condition = locationName ? locationName : "bangladesh"
        fetch(`http://localhost:4000/destination${condition}`)
            .then(res => res.json())
            .then(result => {
                if (result.length > 0) {
                    sessionStorage.setItem("city", result[0].city)
                    handleSearchResult(result)
                };
                if (result.length == 0) {
                    alert("location not found")
                };
            });
    }, [search])

    // form func here ===================>
    const { register, errors, handleSubmit } = useForm();
    const onSubmit = data => {
        setSearch(data);
    };
    return (
        <>
            <h3 className="mb-5 pb-2 item">Where do you want to go</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="p-4 shadow-sm search_item">
                    <h5 className="pl-4 fw_bold">LOCATION</h5>
                    <FormControl className="p-4 border-0 search_input" list="datalistOptions" type="text" name="searchBox"
                        ref={register({ required: true })}
                        placeholder="Add city, Landmark, or address" />
                    <datalist id="datalistOptions">
                        <option value="Netherland" />
                        <option value="New York" />
                        <option value="Morocco" />
                        <option value="France" />
                        <option value="Lebanon" />
                        <option value="Bangladesh" />
                        <option value="India" />
                        <option value="England" />
                        <option value="Pakistan" />
                        <option value="Canada" />
                        <option value="Oman" />
                        <option value="malaysia" />
                    </datalist>
                    {errors.searchBox && <span classNane="text-danger">feild is required</span>}
                </div>
                <button
                    type="submit"
                    className="border-0 px-5 py-3 text-white"
                    id="search_btn">
                    <FontAwesomeIcon className="mr-2" icon={faSearch} /> Search
                 </button>
            </form>
            <CountMembersAndSetDates />
        </>
    );
};

export default SearchDestination;