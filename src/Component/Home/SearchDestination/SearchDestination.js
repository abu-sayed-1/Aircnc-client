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
//         city: 'dhaka',
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
//         city: "cox's bazar",
//         name: 'bangladesh',
//         experiences: [
//             {
//                 id: 1,
//                 img: "https://images.pexels.com/photos/6507122/pexels-photo-6507122.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - bangladesh",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '43',
//                 person: 'per person',
//                 review: '7'
//             },
//             {
//                 id: 2,
//                 img: "https://images.pexels.com/photos/4997898/pexels-photo-4997898.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - bangladesh",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '13',
//                 person: 'per person',
//                 review: '9'
//             },
//             {
//                 id: 3,
//                 img: "https://images.pexels.com/photos/6062504/pexels-photo-6062504.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
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
//                 img: "https://images.pexels.com/photos/441379/pexels-photo-441379.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - bangladesh",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '188',
//                 person: 'per person',
//                 review: '64'
//             },
//             {
//                 id: 2,
//                 img: "https://images.pexels.com/photos/326787/pexels-photo-326787.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - bangladesh",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '129',
//                 person: 'per person',
//                 review: '44'
//             },
//             {
//                 id: 3,
//                 img: "https://images.pexels.com/photos/2957461/pexels-photo-2957461.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - bangladesh",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '210',
//                 person: 'per person',
//                 review: '90'
//             },
//         ]

//     }, {
//         id: 3,
//         city: 'sundarban',
//         name: 'bangladesh',
//         experiences: [
//             {
//                 id: 1,
//                 img: "https://images.pexels.com/photos/5490178/pexels-photo-5490178.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - bangladesh",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '43',
//                 person: 'per person',
//                 review: '7'
//             },
//             {
//                 id: 2,
//                 img: "https://images.pexels.com/photos/5064866/pexels-photo-5064866.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
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
//                 img: "https://images.pexels.com/photos/4997899/pexels-photo-4997899.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
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
//                 img: "https://images.pexels.com/photos/428427/pexels-photo-428427.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - bangladesh",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '188',
//                 person: 'per person',
//                 review: '64'
//             },
//             {
//                 id: 2,
//                 img: "https://images.pexels.com/photos/2091166/pexels-photo-2091166.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - bangladesh",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '129',
//                 person: 'per person',
//                 review: '44'
//             },
//             {
//                 id: 3,
//                 img: "https://images.pexels.com/photos/371404/pexels-photo-371404.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - bangladesh",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '210',
//                 person: 'per person',
//                 review: '90'
//             },
//         ]

//     },
//     // Bangladesh 
//     {
//         id: 4,
//         city: 'new york',
//         name: 'us',
//         experiences: [
//             {
//                 id: 1,
//                 img: "https://images.pexels.com/photos/2260784/pexels-photo-2260784.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - US",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '40',
//                 person: 'per person',
//                 review: '27'
//             },
//             {
//                 id: 2,
//                 img: "https://images.pexels.com/photos/2888108/pexels-photo-2888108.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - US",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '10',
//                 person: 'per person',
//                 review: '9'
//             },
//             {
//                 id: 3,
//                 img: "https://images.pexels.com/photos/3889867/pexels-photo-3889867.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - US",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '28',
//                 person: 'per person',
//                 review: '12'
//             },
//             {
//                 id: 4,
//                 img: "https://images.pexels.com/photos/237697/pexels-photo-237697.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
//                 place: "nightlife - US",
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
//                 place: "nightlife - US",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '300',
//                 person: 'per person',
//                 review: '22'
//             },
//             {
//                 id: 2,
//                 img: "https://images.pexels.com/photos/221506/pexels-photo-221506.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - US",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '128',
//                 person: 'per person',
//                 review: '55'
//             },
//             {
//                 id: 3,
//                 img: "https://images.pexels.com/photos/314937/pexels-photo-314937.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - US",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '240',
//                 person: 'per person',
//                 review: '77'
//             },
//         ]

//     },
//     {
//         id: 5,
//         city: 'chicago',
//         name: 'us',
//         experiences: [
//             {
//                 id: 1,
//                 img: "https://images.pexels.com/photos/3617460/pexels-photo-3617460.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - US",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '40',
//                 person: 'per person',
//                 review: '27'
//             },
//             {
//                 id: 2,
//                 img: "https://images.pexels.com/photos/2346006/pexels-photo-2346006.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - US",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '10',
//                 person: 'per person',
//                 review: '9'
//             },
//             {
//                 id: 3,
//                 img: "https://images.pexels.com/photos/5638838/pexels-photo-5638838.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - US",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '28',
//                 person: 'per person',
//                 review: '12'
//             },
//             {
//                 id: 4,
//                 img: "https://images.pexels.com/photos/237697/pexels-photo-237697.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
//                 place: "nightlife - US",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '100',
//                 person: 'per person',
//                 review: '66'
//             },
//         ],
//         homes: [
//             {
//                 id: 1,
//                 img: "https://images.pexels.com/photos/2346001/pexels-photo-2346001.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - US",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '300',
//                 person: 'per person',
//                 review: '22'
//             },
//             {
//                 id: 2,
//                 img: "https://images.pexels.com/photos/1334605/pexels-photo-1334605.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - US",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '128',
//                 person: 'per person',
//                 review: '55'
//             },
//             {
//                 id: 3,
//                 img: "https://images.pexels.com/photos/2555992/pexels-photo-2555992.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - US",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '240',
//                 person: 'per person',
//                 review: '77'
//             },
//         ]

//     },
//     {
//         id: 6,
//         city: '	los angeles',
//         name: 'us',
//         experiences: [
//             {
//                 id: 1,
//                 img: "https://images.pexels.com/photos/2260784/pexels-photo-2260784.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - US",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '40',
//                 person: 'per person',
//                 review: '27'
//             },
//             {
//                 id: 2,
//                 img: "https://images.pexels.com/photos/5728332/pexels-photo-5728332.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - US",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '10',
//                 person: 'per person',
//                 review: '9'
//             },
//             {
//                 id: 3,
//                 img: "https://images.pexels.com/photos/128408/pexels-photo-128408.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - US",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '28',
//                 person: 'per person',
//                 review: '12'
//             },
//             {
//                 id: 4,
//                 img: "https://images.pexels.com/photos/5638837/pexels-photo-5638837.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - US",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '100',
//                 person: 'per person',
//                 review: '66'
//             },
//         ],
//         homes: [
//             {
//                 id: 1,
//                 img: "https://images.pexels.com/photos/2670273/pexels-photo-2670273.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - US",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '300',
//                 person: 'per person',
//                 review: '22'
//             },
//             {
//                 id: 2,
//                 img: "https://images.pexels.com/photos/3131971/pexels-photo-3131971.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - US",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '128',
//                 person: 'per person',
//                 review: '55'
//             },
//             {
//                 id: 3,
//                 img: "https://images.pexels.com/photos/2181230/pexels-photo-2181230.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - US",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '240',
//                 person: 'per person',
//                 review: '77'
//             },
//         ]

//     },
//     // us
//     {
//         id: 7,
//         city: 'paris',
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
//         id: 8,
//         city: 'marseille',
//         name: 'france',
//         experiences: [
//             {
//                 id: 1,
//                 img: "https://images.pexels.com/photos/3214958/pexels-photo-3214958.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - france",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '49',
//                 person: 'per person',
//                 review: '13'
//             },
//             {
//                 id: 2,
//                 img: "https://images.pexels.com/photos/3225529/pexels-photo-3225529.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
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
//                 img: "https://images.pexels.com/photos/1058958/pexels-photo-1058958.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
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
//                 img: "https://images.pexels.com/photos/2265881/pexels-photo-2265881.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
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
//                 img: "https://images.pexels.com/photos/2187605/pexels-photo-2187605.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - france",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '199',
//                 person: 'per person',
//                 review: '300'
//             },
//         ]

//     }, {
//         id: 9,
//         city: 'toulouse',
//         name: 'france',
//         experiences: [
//             {
//                 id: 1,
//                 img: "https://images.pexels.com/photos/1272392/pexels-photo-1272392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
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
//                 img: "https://images.pexels.com/photos/4555526/pexels-photo-4555526.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
//                 place: "nightlife - france",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '80',
//                 person: 'per person',
//                 review: '39'
//             },
//             {
//                 id: 4,
//                 img: "https://images.pexels.com/photos/5490152/pexels-photo-5490152.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
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
//                 img: "https://images.pexels.com/photos/3051551/pexels-photo-3051551.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
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
//                 img: "https://images.pexels.com/photos/1586206/pexels-photo-1586206.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
//                 place: "nightlife - france",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '199',
//                 person: 'per person',
//                 review: '300'
//             },
//         ]

//     },
//     // france
//     {
//         id: 10,
//         city: 'jounieh',
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
//         id: 11,
//         city: 'baalbek',
//         name: 'lebanon',
//         experiences: [
//             {
//                 id: 1,
//                 img: "https://images.pexels.com/photos/904089/pexels-photo-904089.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
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
//                 img: "https://images.pexels.com/photos/2265876/pexels-photo-2265876.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
//                 place: "nightlife - lebanon",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '43',
//                 person: 'per person',
//                 review: '69'
//             },
//             {
//                 id: 4,
//                 img: "https://images.pexels.com/photos/3290069/pexels-photo-3290069.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
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

//     }, {
//         id: 12,
//         city: 'byblos',
//         name: 'lebanon',
//         experiences: [
//             {
//                 id: 1,
//                 img: "https://images.pexels.com/photos/1576937/pexels-photo-1576937.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - lebanon",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '7',
//                 person: 'per person',
//                 review: '7'
//             },
//             {
//                 id: 2,
//                 img: "https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - lebanon",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '17',
//                 person: 'per person',
//                 review: '10'
//             },
//             {
//                 id: 3,
//                 img: "https://images.pexels.com/photos/2555240/pexels-photo-2555240.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
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
//                 img: "https://images.pexels.com/photos/2506988/pexels-photo-2506988.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
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
//                 img: "https://images.pexels.com/photos/2873951/pexels-photo-2873951.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
//                 place: "nightlife - lebanon",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '200',
//                 person: 'per person',
//                 review: '90'
//             },
//         ]

//     },
//     // lebanon
//     {
//         id: 13,
//         city: 'liverpool',
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
//         id: 14,
//         city: 'manchester',
//         name: 'england',
//         experiences: [
//             {
//                 id: 1,
//                 img: "https://images.pexels.com/photos/1172840/pexels-photo-1172840.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - england",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '90',
//                 person: 'per person',
//                 review: '66'
//             },
//             {
//                 id: 2,
//                 img: "https://images.pexels.com/photos/3626749/pexels-photo-3626749.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
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
//                 img: "https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
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
//                 img: "https://images.pexels.com/photos/443383/pexels-photo-443383.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - england",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '177',
//                 person: 'per person',
//                 review: '64'
//             },
//             {
//                 id: 2,
//                 img: "https://images.pexels.com/photos/3534806/pexels-photo-3534806.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - england",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '157',
//                 person: 'per person',
//                 review: '44'
//             },
//             {
//                 id: 3,
//                 img: "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - england",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '209',
//                 person: 'per person',
//                 review: '88'
//             },
//         ]

//     },
//     {
//         id: 15,
//         city: 'london',
//         name: 'england',
//         experiences: [
//             {
//                 id: 1,
//                 img: "https://images.pexels.com/photos/9708/food-pizza-restaurant-eating.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - england",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '90',
//                 person: 'per person',
//                 review: '66'
//             },
//             {
//                 id: 2,
//                 img: "https://images.pexels.com/photos/2123535/pexels-photo-2123535.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
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
//                 img: "https://images.pexels.com/photos/3297800/pexels-photo-3297800.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
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
//                 img: "https://images.pexels.com/photos/256150/pexels-photo-256150.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - england",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '177',
//                 person: 'per person',
//                 review: '64'
//             },
//             {
//                 id: 2,
//                 img: "https://images.pexels.com/photos/443376/pexels-photo-443376.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - england",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '157',
//                 person: 'per person',
//                 review: '44'
//             },
//             {
//                 id: 3,
//                 img: "https://images.pexels.com/photos/1500459/pexels-photo-1500459.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - england",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '209',
//                 person: 'per person',
//                 review: '88'
//             },
//         ]

//     },
//     // england
//     {
//         id: 16,
//         city: 'karachi',
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
//         id: 17,
//         city: 'faisalabad',
//         name: 'pakistan',
//         experiences: [
//             {
//                 id: 1,
//                 img: "https://images.pexels.com/photos/6211100/pexels-photo-6211100.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - pakistan",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '43',
//                 person: 'per person',
//                 review: '7'
//             },
//             {
//                 id: 2,
//                 img: "https://images.pexels.com/photos/931007/pexels-photo-931007.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - pakistan",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '8',
//                 person: 'per person',
//                 review: '9'
//             },
//             {
//                 id: 3,
//                 img: "https://images.pexels.com/photos/1895584/pexels-photo-1895584.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - pakistan",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '24',
//                 person: 'per person',
//                 review: '12'
//             },
//             {
//                 id: 4,
//                 img: "https://images.pexels.com/photos/5638834/pexels-photo-5638834.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
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
//                 img: "https://images.pexels.com/photos/164338/pexels-photo-164338.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - pakistan",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '128',
//                 person: 'per person',
//                 review: '64'
//             },
//             {
//                 id: 2,
//                 img: "https://images.pexels.com/photos/1637112/pexels-photo-1637112.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - pakistan",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '150',
//                 person: 'per person',
//                 review: '44'
//             },
//             {
//                 id: 3,
//                 img: "https://images.pexels.com/photos/734102/pexels-photo-734102.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - pakistan",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '200',
//                 person: 'per person',
//                 review: '90'
//             },
//         ]

//     },
//     {
//         id: 18,
//         city: 'lahore',
//         name: 'pakistan',
//         experiences: [
//             {
//                 id: 1,
//                 img: "https://images.pexels.com/photos/1250346/pexels-photo-1250346.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - pakistan",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '43',
//                 person: 'per person',
//                 review: '7'
//             },
//             {
//                 id: 2,
//                 img: "https://images.pexels.com/photos/939702/pexels-photo-939702.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
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
//                 img: "https://images.pexels.com/photos/3730950/pexels-photo-3730950.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
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
//                 img: "https://images.pexels.com/photos/171187/pexels-photo-171187.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - pakistan",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '128',
//                 person: 'per person',
//                 review: '64'
//             },
//             {
//                 id: 2,
//                 img: "https://images.pexels.com/photos/1795507/pexels-photo-1795507.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - pakistan",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '150',
//                 person: 'per person',
//                 review: '44'
//             },
//             {
//                 id: 3,
//                 img: "https://images.pexels.com/photos/3571200/pexels-photo-3571200.png?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - pakistan",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '200',
//                 person: 'per person',
//                 review: '90'
//             },
//         ]

//     },
//     // pakistan 
//     {
//         id: 19,
//         city: 'quebec',
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
//         id: 20,
//         city: 'vancouver',
//         name: 'canada',
//         experiences: [
//             {
//                 id: 1,
//                 img: "https://images.pexels.com/photos/2130134/pexels-photo-2130134.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - canada",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '37',
//                 person: 'per person',
//                 review: '27'
//             },
//             {
//                 id: 2,
//                 img: "https://images.pexels.com/photos/6510305/pexels-photo-6510305.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
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
//                 img: "https://images.pexels.com/photos/3756523/pexels-photo-3756523.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
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
//                 img: "https://images.pexels.com/photos/3684943/pexels-photo-3684943.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
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

//     }, {
//         id: 21,
//         city: 'charlottetown',
//         name: 'canada',
//         experiences: [
//             {
//                 id: 1,
//                 img: "https://images.pexels.com/photos/5764952/pexels-photo-5764952.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - canada",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '37',
//                 person: 'per person',
//                 review: '27'
//             },
//             {
//                 id: 2,
//                 img: "https://images.pexels.com/photos/612999/pexels-photo-612999.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
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
//                 img: "https://images.pexels.com/photos/1266983/pexels-photo-1266983.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
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
//                 img: "https://images.pexels.com/photos/3790058/pexels-photo-3790058.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - canada",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '130',
//                 person: 'per person',
//                 review: '55'
//             },
//             {
//                 id: 3,
//                 img: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - canada",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '196',
//                 person: 'per person',
//                 review: '77'
//             },
//         ]

//     },
//     // canada 
//     {
//         id: 22,
//         city: 'rabat',
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
//                 img: "https://images.pexels.com/photos/2907034/pexels-photo-2907034.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
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
//         id: 23,
//         city: 'essaouira',
//         name: 'morocco',
//         experiences: [
//             {
//                 id: 1,
//                 img: "https://images.pexels.com/photos/4502972/pexels-photo-4502972.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
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
//                 img: "https://images.pexels.com/photos/5490140/pexels-photo-5490140.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
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
//                 img: "https://images.pexels.com/photos/1743555/pexels-photo-1743555.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - morocco",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '128',
//                 person: 'per person',
//                 review: '64'
//             },
//             {
//                 id: 2,
//                 img: "https://images.pexels.com/photos/371404/pexels-photo-371404.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - morocco",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '90',
//                 person: 'per person',
//                 review: '33'
//             },
//             {
//                 id: 3,
//                 img: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - morocco",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '200',
//                 person: 'per person',
//                 review: '90'
//             },
//         ]

//     },
//     {
//         id: 24,
//         city: 'meknes',
//         name: 'morocco',
//         experiences: [
//             {
//                 id: 1,
//                 img: "https://images.pexels.com/photos/6542795/pexels-photo-6542795.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
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
//                 img: "https://images.pexels.com/photos/5490188/pexels-photo-5490188.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - morocco",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '26',
//                 person: 'per person',
//                 review: '12'
//             },
//             {
//                 id: 4,
//                 img: "https://images.pexels.com/photos/2413238/pexels-photo-2413238.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
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
//                 img: "https://images.pexels.com/photos/161768/lafayette-park-washington-dc-c-architecture-161768.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - morocco",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '128',
//                 person: 'per person',
//                 review: '64'
//             },
//             {
//                 id: 2,
//                 img: "https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - morocco",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '90',
//                 person: 'per person',
//                 review: '33'
//             },
//             {
//                 id: 3,
//                 img: "https://images.pexels.com/photos/279100/pexels-photo-279100.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - morocco",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '200',
//                 person: 'per person',
//                 review: '90'
//             },
//         ]

//     },
//     // morocco 
//     {
//         id: 25,
//         city: 'kuala lumpur',
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
//         id: 26,
//         city: 'malacca',
//         name: 'malaysia',
//         experiences: [
//             {
//                 id: 1,
//                 img: "https://images.pexels.com/photos/1580112/pexels-photo-1580112.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
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
//                 img: "https://images.pexels.com/photos/6211094/pexels-photo-6211094.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
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
//                 img: "https://images.pexels.com/photos/1662159/pexels-photo-1662159.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - malaysia",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '199',
//                 person: 'per person',
//                 review: '22'
//             },
//             {
//                 id: 2,
//                 img: "https://images.pexels.com/photos/2475276/pexels-photo-2475276.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - malaysia",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '139',
//                 person: 'per person',
//                 review: '58'
//             },
//             {
//                 id: 3,
//                 img: "https://images.pexels.com/photos/425173/pexels-photo-425173.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - malaysia",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '270',
//                 person: 'per person',
//                 review: '77'
//             },
//         ]

//     },
//     {
//         id: 27,
//         city: 'kuantan',
//         name: 'malaysia',
//         experiences: [
//             {
//                 id: 1,
//                 img: "https://images.pexels.com/photos/303159/pexels-photo-303159.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - malaysia",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '27',
//                 person: 'per person',
//                 review: '27'
//             },
//             {
//                 id: 2,
//                 img: "https://images.pexels.com/photos/3714730/pexels-photo-3714730.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - malaysia",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '10',
//                 person: 'per person',
//                 review: '9'
//             },
//             {
//                 id: 3,
//                 img: "https://images.pexels.com/photos/4915528/pexels-photo-4915528.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - malaysia",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '23',
//                 person: 'per person',
//                 review: '12'
//             },
//             {
//                 id: 4,
//                 img: "https://images.pexels.com/photos/2351274/pexels-photo-2351274.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
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
//                 img: "https://images.pexels.com/photos/1708463/pexels-photo-1708463.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
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
//                 img: "https://images.pexels.com/photos/1650904/pexels-photo-1650904.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - malaysia",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '270',
//                 person: 'per person',
//                 review: '77'
//             },
//         ]

//     },
//     // malaysia

//     {
//         id: 28,
//         city: 'muscat ',
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
//         id: 29,
//         city: 'salalah',
//         name: 'oman',
//         experiences: [
//             {
//                 id: 1,
//                 img: "https://images.pexels.com/photos/2221925/pexels-photo-2221925.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
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
//                 img: "https://images.pexels.com/photos/408518/pexels-photo-408518.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
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
//                 img: "https://images.pexels.com/photos/4024912/pexels-photo-4024912.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - oman",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '170',
//                 person: 'per person',
//                 review: '69'
//             },
//             {
//                 id: 2,
//                 img: "https://images.pexels.com/photos/114294/pexels-photo-114294.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - oman",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '189',
//                 person: 'per person',
//                 review: '87'
//             },
//             {
//                 id: 3,
//                 img: "https://images.pexels.com/photos/569675/pexels-photo-569675.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - oman",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '199',
//                 person: 'per person',
//                 review: '300'
//             },
//         ]

//     },
//     {
//         id: 30,
//         city: 'bawshar',
//         name: 'oman',
//         experiences: [
//             {
//                 id: 1,
//                 img: "https://images.pexels.com/photos/1317374/pexels-photo-1317374.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - oman",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '29',
//                 person: 'per person',
//                 review: '13'
//             },
//             {
//                 id: 2,
//                 img: "https://images.pexels.com/photos/368893/pexels-photo-368893.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - oman",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '80',
//                 person: 'per person',
//                 review: '17'
//             },
//             {
//                 id: 3,
//                 img: "https://images.pexels.com/photos/698907/pexels-photo-698907.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
//                 place: "nightlife - oman",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '80',
//                 person: 'per person',
//                 review: '39'
//             },
//             {
//                 id: 4,
//                 img: "https://images.pexels.com/photos/4940751/pexels-photo-4940751.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
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
//                 img: "https://images.pexels.com/photos/4099299/pexels-photo-4099299.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - oman",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '170',
//                 person: 'per person',
//                 review: '69'
//             },
//             {
//                 id: 2,
//                 img: "https://images.pexels.com/photos/1028225/pexels-photo-1028225.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - oman",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '189',
//                 person: 'per person',
//                 review: '29'
//             },
//             {
//                 id: 3,
//                 img: "https://images.pexels.com/photos/3779816/pexels-photo-3779816.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - oman",
//                 title: " Lorem ipsum dolor sit consectetur",
//                 price: '199',
//                 person: 'per person',
//                 review: '300'
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
    // },[]);

    useEffect(() => {
        const locationName = search.searchBox;
        const condition = locationName ? locationName : "london"
        fetch(`http://localhost:4000/destination${condition}`)
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result.length > 0) {
                    const destination_countryAndCity = [{
                        country: result[0].name,
                        city: result[0].city
                    }];
                    sessionStorage.setItem("countryAndCity", JSON.stringify(destination_countryAndCity),);
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
                        <option value="US" />
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