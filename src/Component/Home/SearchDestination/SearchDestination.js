import React, { useEffect, useState } from 'react';
import './SearchDestination.css'
import { Col, Form, FormControl, Row, } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';

// const homeData = [
//     {
//         id: 1,
//         name: 'bangladesh',
//         experiences: [
//             {
//                 id: 1,
//                 img: "https://images.pexels.com/photos/5543257/pexels-photo-5543257.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - bangladesh",
//                 title: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
//                 price: '43',
//                 person: 'per person',
//                 review: '7'
//             },
//             {
//                 id: 2,
//                 img: "https://images.pexels.com/photos/2888108/pexels-photo-2888108.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - bangladesh",
//                 title: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
//                 price: '13',
//                 person: 'per person',
//                 review: '9'
//             },
//             {
//                 id: 3,
//                 img: "https://images.pexels.com/photos/1477535/pexels-photo-1477535.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - bangladesh",
//                 title: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
//                 price: '19',
//                 person: 'per person',
//                 review: '12'
//             },
//             {
//                 id: 4,
//                 img: "https://images.pexels.com/photos/448754/pexels-photo-448754.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - bangladesh",
//                 title: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
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
//                 title: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
//                 price: '188',
//                 person: 'per person',
//                 review: '64'
//             },
//             {
//                 id: 2,
//                 img: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - bangladesh",
//                 title: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
//                 price: '129',
//                 person: 'per person',
//                 review: '44'
//             },
//             {
//                 id: 3,
//                 img: "https://images.pexels.com/photos/1546166/pexels-photo-1546166.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - bangladesh",
//                 title: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
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
//                 title: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
//                 price: '40',
//                 person: 'per person',
//                 review: '27'
//             },
//             {
//                 id: 2,
//                 img: "https://images.pexels.com/photos/2888108/pexels-photo-2888108.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - new york",
//                 title: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
//                 price: '10',
//                 person: 'per person',
//                 review: '9'
//             },
//             {
//                 id: 3,
//                 img: "https://images.pexels.com/photos/3889867/pexels-photo-3889867.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - new york",
//                 title: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
//                 price: '28',
//                 person: 'per person',
//                 review: '12'
//             },
//             {
//                 id: 4,
//                 img: "https://images.pexels.com/photos/237697/pexels-photo-237697.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
//                 place: "nightlife - new york",
//                 title: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
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
//                 title: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
//                 price: '300',
//                 person: 'per person',
//                 review: '22'
//             },
//             {
//                 id: 2,
//                 img: "https://images.pexels.com/photos/221506/pexels-photo-221506.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - new york",
//                 title: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
//                 price: '128',
//                 person: 'per person',
//                 review: '55'
//             },
//             {
//                 id: 3,
//                 img: "https://images.pexels.com/photos/314937/pexels-photo-314937.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - new york",
//                 title: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
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
//                 title: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
//                 price: '49',
//                 person: 'per person',
//                 review: '13'
//             },
//             {
//                 id: 2,
//                 img: "https://images.pexels.com/photos/207920/pexels-photo-207920.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
//                 place: "nightlife - france",
//                 title: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
//                 price: '43',
//                 person: 'per person',
//                 review: '17'
//             },
//             {
//                 id: 3,
//                 img: "https://images.pexels.com/photos/1272392/pexels-photo-1272392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - france",
//                 title: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
//                 price: '80',
//                 person: 'per person',
//                 review: '39'
//             },
//             {
//                 id: 4,
//                 img: "https://images.pexels.com/photos/448754/pexels-photo-448754.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - france",
//                 title: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
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
//                 title: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
//                 price: '166',
//                 person: 'per person',
//                 review: '69'
//             },
//             {
//                 id: 2,
//                 img: "https://images.pexels.com/photos/3958954/pexels-photo-3958954.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - france",
//                 title: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
//                 price: '187',
//                 person: 'per person',
//                 review: '22'
//             },
//             {
//                 id: 3,
//                 img: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
//                 place: "nightlife - france",
//                 title: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
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
//                 title: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
//                 price: '7',
//                 person: 'per person',
//                 review: '7'
//             },
//             {
//                 id: 2,
//                 img: "https://images.pexels.com/photos/6669440/pexels-photo-6669440.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
//                 place: "nightlife - lebanon",
//                 title: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
//                 price: '17',
//                 person: 'per person',
//                 review: '10'
//             },
//             {
//                 id: 3,
//                 img: "https://images.pexels.com/photos/5638677/pexels-photo-5638677.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - lebanon",
//                 title: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
//                 price: '43',
//                 person: 'per person',
//                 review: '69'
//             },
//             {
//                 id: 4,
//                 img: "https://images.pexels.com/photos/5638730/pexels-photo-5638730.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - lebanon",
//                 title: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
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
//                 title: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
//                 price: '183',
//                 person: 'per person',
//                 review: '64'
//             },
//             {
//                 id: 2,
//                 img: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - lebanon",
//                 title: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
//                 price: '155',
//                 person: 'per person',
//                 review: '44'
//             },
//             {
//                 id: 3,
//                 img: "https://images.pexels.com/photos/1546166/pexels-photo-1546166.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - lebanon",
//                 title: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
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
//                 title: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
//                 price: '90',
//                 person: 'per person',
//                 review: '66'
//             },
//             {
//                 id: 2,
//                 img: "https://images.pexels.com/photos/2888108/pexels-photo-2888108.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - england",
//                 title: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
//                 price: '15',
//                 person: 'per person',
//                 review: '9'
//             },
//             {
//                 id: 3,
//                 img: "https://images.pexels.com/photos/667221/pexels-photo-667221.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - england",
//                 title: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
//                 price: '23',
//                 person: 'per person',
//                 review: '12'
//             },
//             {
//                 id: 4,
//                 img: "https://images.pexels.com/photos/448754/pexels-photo-448754.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - england",
//                 title: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
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
//                 title: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
//                 price: '177',
//                 person: 'per person',
//                 review: '64'
//             },
//             {
//                 id: 2,
//                 img: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - england",
//                 title: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
//                 price: '157',
//                 person: 'per person',
//                 review: '44'
//             },
//             {
//                 id: 3,
//                 img: "https://images.pexels.com/photos/667221/pexels-photo-667221.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - england",
//                 title: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
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
//                 title: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
//                 price: '43',
//                 person: 'per person',
//                 review: '7'
//             },
//             {
//                 id: 2,
//                 img: "https://images.pexels.com/photos/2888108/pexels-photo-2888108.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - pakistan",
//                 title: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
//                 price: '8',
//                 person: 'per person',
//                 review: '9'
//             },
//             {
//                 id: 3,
//                 img: "https://images.pexels.com/photos/1477535/pexels-photo-1477535.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - pakistan",
//                 title: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
//                 price: '24',
//                 person: 'per person',
//                 review: '12'
//             },
//             {
//                 id: 4,
//                 img: "https://images.pexels.com/photos/448754/pexels-photo-448754.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - pakistan",
//                 title: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
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
//                 title: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
//                 price: '128',
//                 person: 'per person',
//                 review: '64'
//             },
//             {
//                 id: 2,
//                 img: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - pakistan",
//                 title: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
//                 price: '150',
//                 person: 'per person',
//                 review: '44'
//             },
//             {
//                 id: 3,
//                 img: "https://images.pexels.com/photos/1546166/pexels-photo-1546166.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - pakistan",
//                 title: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
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
//                 title: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
//                 price: '37',
//                 person: 'per person',
//                 review: '27'
//             },
//             {
//                 id: 2,
//                 img: "https://images.pexels.com/photos/2888108/pexels-photo-2888108.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - canada",
//                 title: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
//                 price: '11',
//                 person: 'per person',
//                 review: '9'
//             },
//             {
//                 id: 3,
//                 img: "https://images.pexels.com/photos/3889867/pexels-photo-3889867.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - canada",
//                 title: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
//                 price: '32',
//                 person: 'per person',
//                 review: '12'
//             },
//             {
//                 id: 4,
//                 img: "https://images.pexels.com/photos/237697/pexels-photo-237697.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
//                 place: "nightlife - canada",
//                 title: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
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
//                 title: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
//                 price: '198',
//                 person: 'per person',
//                 review: '22'
//             },
//             {
//                 id: 2,
//                 img: "https://images.pexels.com/photos/221506/pexels-photo-221506.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - canada",
//                 title: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
//                 price: '130',
//                 person: 'per person',
//                 review: '55'
//             },
//             {
//                 id: 3,
//                 img: "https://images.pexels.com/photos/314937/pexels-photo-314937.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - canada",
//                 title: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
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
//                 title: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
//                 price: '40',
//                 person: 'per person',
//                 review: '7'
//             },
//             {
//                 id: 2,
//                 img: "https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - morocco",
//                 title: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
//                 price: '10',
//                 person: 'per person',
//                 review: '9'
//             },
//             {
//                 id: 3,
//                 img: "https://images.pexels.com/photos/1477535/pexels-photo-1477535.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - morocco",
//                 title: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
//                 price: '26',
//                 person: 'per person',
//                 review: '12'
//             },
//             {
//                 id: 4,
//                 img: "https://images.pexels.com/photos/448754/pexels-photo-448754.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - morocco",
//                 title: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
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
//                 title: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
//                 price: '128',
//                 person: 'per person',
//                 review: '64'
//             },
//             {
//                 id: 2,
//                 img: "https://images.pexels.com/photos/209315/pexels-photo-209315.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - morocco",
//                 title: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
//                 price: '90',
//                 person: 'per person',
//                 review: '33'
//             },
//             {
//                 id: 3,
//                 img: "https://images.pexels.com/photos/1546166/pexels-photo-1546166.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - morocco",
//                 title: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
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
//                 title: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
//                 price: '27',
//                 person: 'per person',
//                 review: '27'
//             },
//             {
//                 id: 2,
//                 img: "https://images.pexels.com/photos/4916556/pexels-photo-4916556.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - malaysia",
//                 title: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
//                 price: '10',
//                 person: 'per person',
//                 review: '9'
//             },
//             {
//                 id: 3,
//                 img: "https://images.pexels.com/photos/3889867/pexels-photo-3889867.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - malaysia",
//                 title: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
//                 price: '23',
//                 person: 'per person',
//                 review: '12'
//             },
//             {
//                 id: 4,
//                 img: "https://images.pexels.com/photos/237697/pexels-photo-237697.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
//                 place: "nightlife - malaysia",
//                 title: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
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
//                 title: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
//                 price: '199',
//                 person: 'per person',
//                 review: '22'
//             },
//             {
//                 id: 2,
//                 img: "https://images.pexels.com/photos/3935320/pexels-photo-3935320.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - malaysia",
//                 title: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
//                 price: '139',
//                 person: 'per person',
//                 review: '58'
//             },
//             {
//                 id: 3,
//                 img: "https://images.pexels.com/photos/314937/pexels-photo-314937.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - malaysia",
//                 title: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
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
//                 title: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
//                 price: '29',
//                 person: 'per person',
//                 review: '13'
//             },
//             {
//                 id: 2,
//                 img: "https://images.pexels.com/photos/4993114/pexels-photo-4993114.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - oman",
//                 title: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
//                 price: '80',
//                 person: 'per person',
//                 review: '17'
//             },
//             {
//                 id: 3,
//                 img: "https://images.pexels.com/photos/1272392/pexels-photo-1272392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - oman",
//                 title: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
//                 price: '80',
//                 person: 'per person',
//                 review: '39'
//             },
//             {
//                 id: 4,
//                 img: "https://images.pexels.com/photos/448754/pexels-photo-448754.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - oman",
//                 title: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
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
//                 title: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
//                 price: '170',
//                 person: 'per person',
//                 review: '69'
//             },
//             {
//                 id: 2,
//                 img: "https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
//                 place: "nightlife - oman",
//                 title: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
//                 price: '189',
//                 person: 'per person',
//                 review: '29'
//             },
//             {
//                 id: 3,
//                 img: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
//                 place: "nightlife - oman",
//                 title: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
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
//                 title: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
//                 price: '7',
//                 person: 'per person',
//                 review: '7'
//             },
//             {
//                 id: 2,
//                 img: "https://images.pexels.com/photos/6210765/pexels-photo-6210765.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - india",
//                 title: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
//                 price: '17',
//                 person: 'per person',
//                 review: '10'
//             },
//             {
//                 id: 3,
//                 img: "https://images.pexels.com/photos/5638677/pexels-photo-5638677.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - india",
//                 title: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
//                 price: '60',
//                 person: 'per person',
//                 review: '69'
//             },
//             {
//                 id: 4,
//                 img: "https://images.pexels.com/photos/5638730/pexels-photo-5638730.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - india",
//                 title: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
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
//                 title: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
//                 price: '128',
//                 person: 'per person',
//                 review: '64'
//             },
//             {
//                 id: 2,
//                 img: "https://images.pexels.com/photos/2587317/pexels-photo-2587317.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - india",
//                 title: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
//                 price: "190",
//                 person: 'per person',
//                 review: '49'
//             },
//             {
//                 id: 3,
//                 img: "https://images.pexels.com/photos/1546166/pexels-photo-1546166.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - india",
//                 title: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
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
//                 title: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
//                 price: '90',
//                 person: 'per person',
//                 review: '66'
//             },
//             {
//                 id: 2,
//                 img: "https://images.pexels.com/photos/2664443/pexels-photo-2664443.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - netherland",
//                 title: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
//                 price: '15',
//                 person: 'per person',
//                 review: '9'
//             },
//             {
//                 id: 3,
//                 img: "https://images.pexels.com/photos/667221/pexels-photo-667221.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - netherland",
//                 title: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
//                 price: '23',
//                 person: 'per person',
//                 review: '12'
//             },
//             {
//                 id: 4,
//                 img: "https://images.pexels.com/photos/448754/pexels-photo-448754.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - netherland",
//                 title: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
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
//                 title: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
//                 price: '128',
//                 person: 'per person',
//                 review: '64'
//             },
//             {
//                 id: 2,
//                 img: "https://images.pexels.com/photos/2523186/pexels-photo-2523186.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - netherland",
//                 title: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
//                 price: '156',
//                 person: 'per person',
//                 review: '44'
//             },
//             {
//                 id: 3,
//                 img: "https://images.pexels.com/photos/667221/pexels-photo-667221.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                 place: "nightlife - netherland",
//                 title: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
//                 price: '209',
//                 person: 'per person',
//                 review: '88'
//             },
//         ]

//     },
// ];


const SearchDestination = () => {
    // useEffect(() => {
    //     fetch('http://localhost:4000/homePagesAllData',{
    //         method: "POST",
    //         headers:{'content-type': 'application/json'},
    //         body: JSON.stringify(homeData)
    //     })
    // },[])
    const name = "lab.";
    useEffect(() => {
        fetch(`http://localhost:4000/destination${name}`)
            .then(res => res.json())
            .then(result => console.log(result))
    }, []);
    // date picker here ==============>
    const [selectedStartDate, setSelectedStartDate] = useState(new Date());
    // console.log(selectedStartDate, '[selectedStartDate]');
    const [selectedEndDate, setSelectedEndDate] = useState(new Date());
    // console.log(selectedEndDate, '[selectedEndDate]')

    const handleStartDate = startDate => {
        setSelectedStartDate(startDate);
    };

    const handleEndDate = endDate => {
        setSelectedEndDate(endDate)
    }

    // form func here ===================>
    const { register, errors, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
    }
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
                        <option value="San Francisco" />
                        <option value="New York" />
                        <option value="Morocco" />
                        <option value="Los Angeles" />
                        <option value="Leab" />
                        <option value="Bangladesh" />
                    </datalist>
                    {errors.searchBox && <span classNane="text-danger">feild is required</span>}
                </div>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container justify="space-around">
                        <Row className="mt-4">
                            <Col className="p-2 shadow search_item">
                                <KeyboardDatePicker
                                    disableToolbar
                                    variant="inline"
                                    format="dd/MM/yy"
                                    margin="normal"
                                    label="Arrival"
                                    value={selectedStartDate}
                                    onChange={handleStartDate}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />
                            </Col>
                            <Col className="p-2 ml-2 shadow search_item">
                                <KeyboardDatePicker
                                    disableToolbar
                                    variant="inline"
                                    format="dd/MM/yy"
                                    margin="normal"
                                    label="Departure"
                                    value={selectedEndDate}
                                    onChange={handleEndDate}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />
                            </Col>
                        </Row>
                    </Grid>
                </MuiPickersUtilsProvider>
                <br />
                {/* <div className="multi_select_box"> */}
                {/* <select className="multi_select px-3" multiple>
                       <option>rakib</option>
                       <option>raju</option>
                       <option>rakhi</option>
                       <option>polash</option>
                       <option>faruk</option>
                       <option>rihan</option>
                    </select> */}
                {/* </div> */}
                {/* <Form.Group controlId="exampleForm.SelectCustom">
                    <Form.Label>Custom select</Form.Label> */}
                {/* <Form.Control as="select" custom> */}
                {/* <select class="selectpicker" multiple data-max-options="2">
                        <optgroup label="Condiments" data-max-options="2">
                            <option>Mustard</option>
                            <option>Ketchup</option>
                            <option>Relish</option>
                        </optgroup>
                        <optgroup label="Breads" data-max-options="2">
                            <option>Plain</option>
                            <option>Steamed</option>
                            <option>Toasted</option>
                        </optgroup>
                        <optgroup label="Breads" data-max-options="2">
                            <option>Plain</option>
                            <option>Steamed</option>
                            <option>Toasted</option>
                        </optgroup>
                        </select> */}
                {/* </Form.Control> */}
                {/* </Form.Group> */}
                <div className="container-fluid p-3 shadow count_content">
                    <div className="d-flex pt-5">
                        <h5 className="">ADULTS</h5>
                        <div className="btn_items">
                            <button className="border-0 bg-white"> <FontAwesomeIcon icon={faMinus} /></button>
                            <label className="px-4 label_item" htmlFor="">1</label>
                            <button className="border-0 bg-white"> <FontAwesomeIcon icon={faPlus} /></button>
                        </div>
                    </div>
                    <div className="d-flex pt-5">
                        <div>
                            <h5>CHILD</h5>
                            <h6 className="text-muted">Age 2-12</h6>
                        </div>
                        <div className="btn_items ml-3">
                            <button className="border-0 bg-white"> <FontAwesomeIcon icon={faMinus} /></button>
                            <label className="px-4 label_item" htmlFor="">2</label>
                            <button className="border-0 bg-white"> <FontAwesomeIcon icon={faPlus} /></button>
                        </div>
                    </div>
                    <div className="d-flex pt-5">
                        <div>
                            <h5>BABIES</h5>
                            <h6 className="text-muted">Younger tha 2</h6>
                        </div>
                        <div className="btn_item ml-2">
                            <button className="border-0 bg-white"> <FontAwesomeIcon icon={faMinus} /></button>
                            <label className="px-4 label_item" htmlFor="">3</label>
                            <button className="border-0 bg-white"> <FontAwesomeIcon icon={faPlus} /></button>
                        </div>
                    </div>
                </div>
                <button className="p-2 px-5 my-3 mr-2 apply_btn">APPLY</button>
                <button
                    type="submit"
                    className="border-0 px-5 py-3 text-white"
                    id="search_btn">
                    <FontAwesomeIcon className="mr-2" icon={faSearch} /> Search
                 </button>
            </form>
        </>
    );
};

export default SearchDestination;