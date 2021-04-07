import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from '@material-ui/core';
import { Button } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import './SelectRoom.css';
import { Col, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const roomData = [

    {
        "id": "1",
        "name": "bangladesh",
        "city": "dhaka",
        "rooms":
            [
                {
                    "id": "1",
                    "img": "https://images.pexels.com/photos/3773570/pexels-photo-3773570.png?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    "building": "https://images.pexels.com/photos/2157404/pexels-photo-2157404.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    "title": "Light bright airy stylish apt & safe peaceful stay",
                    "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
                    "internat": "Wifi Air conditioning Kitchen",
                    "cancellation": "cancellation flexibility available",
                    "review": "4.9 (20)",
                    "price": "34",
                    "totalPrice": "168"
                },
                {
                    "id": "2",
                    "img": "https://images.pexels.com/photos/3773576/pexels-photo-3773576.png?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    "building": "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    "title": "Apartment in Lost Panorama",
                    "GuestsAndRoomDetail": "4 guests 3 bedrooms 3 beds 3 baths",
                    "internat": "Wifi Air conditioning Kitchen",
                    "cancellation": "cancellation flexibility available",
                    "review": "3.10 (19)",
                    "price": "28",
                    "totalPrice": "150"
                },
                {
                    "id": "3",
                    "img": "https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    "building": "https://images.pexels.com/photos/1546166/pexels-photo-1546166.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    "title": "AR Lounge & Pool (r&r +b&b)",
                    "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
                    "internat": "Wifi Air conditioning Kitchen",
                    "cancellation": "cancellation flexibility available",
                    "review": "4.9 (20)",
                    "price": "50",
                    "totalPrice": "220"
                },
                {
                    "id": "4",
                    "img": "https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    "building": "https://images.pexels.com/photos/417273/pexels-photo-417273.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    "title": "Light bright airy stylish apt & safe peaceful stay",
                    "GuestsAndRoomDetail": "5 guests 3 bedrooms 3 beds 3 baths",
                    "internat": "Wifi Air conditioning Kitchen",
                    "cancellation": "cancellation flexibility available",
                    "review": "7.9 (30)",
                    "price": "39",
                    "totalPrice": "180"
                },
                {
                    "id": "5",
                    "img": "https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    "building": "https://images.pexels.com/photos/136413/pexels-photo-136413.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    "title": "Lorem ipsum dolor sit amet consectetur.",
                    "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
                    "internat": "Wifi Air conditioning Kitchen",
                    "cancellation": "cancellation flexibility available",
                    "review": "6.10 (11)",
                    "price": "40",
                    "totalPrice": "178"
                },
                {
                    "id": "6",
                    "img": "https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    "building": "https://images.pexels.com/photos/258160/pexels-photo-258160.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    "title": "AR Lounge & Pool (r&r +b&b) nice",
                    "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
                    "internat": "Wifi Air conditioning Kitchen",
                    "cancellation": "cancellation flexibility available",
                    "review": "9.9 (26)",
                    "price": "66",
                    "totalPrice": "250"
                }]
    },
    {
        "id": "2",
        "name": "bangladesh",
        "city": "cox's bazar",
        "rooms":
            [
                {
                    "id": "1",
                    "img": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1873&q=80",
                    "building": "https://images.pexels.com/photos/441379/pexels-photo-441379.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    "title": "Light bright airy stylish apt & safe peaceful stay",
                    "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
                    "internat": "Wifi Air conditioning Kitchen",
                    "cancellation": "cancellation flexibility available",
                    "review": "4.9 (27)",
                    "price": "99",
                    "totalPrice": "100"
                },
                {
                    "id": "2",
                    "img": "https://images.unsplash.com/photo-1564137799581-baca1aa17f5d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                    "building": "https://images.pexels.com/photos/326787/pexels-photo-326787.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    "title": "Apartment in Lost Panorama",
                    "GuestsAndRoomDetail": "4 guests 3 bedrooms 3 beds 3 baths",
                    "internat": "Wifi Air conditioning Kitchen",
                    "cancellation": "cancellation flexibility available",
                    "review": "3.10 (19)",
                    "price": "77",
                    "totalPrice": "150"
                },
                {
                    "id": "3",
                    "img": "https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    "building": "https://images.pexels.com/photos/2957461/pexels-photo-2957461.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    "title": "AR Lounge & Pool (r&r +b&b)",
                    "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
                    "internat": "Wifi Air conditioning Kitchen",
                    "cancellation": "cancellation flexibility available",
                    "review": "4.9 (20)",
                    "price": "53",
                    "totalPrice": "220"
                },
                {
                    "id": "4",
                    "img": "https://images.pexels.com/photos/3396670/pexels-photo-3396670.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    "building": "https://images.pexels.com/photos/417273/pexels-photo-417273.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    "title": "Light bright airy stylish apt & safe peaceful stay",
                    "GuestsAndRoomDetail": "5 guests 3 bedrooms 3 beds 3 baths",
                    "internat": "Wifi Air conditioning Kitchen",
                    "cancellation": "cancellation flexibility available",
                    "review": "7.9 (30)",
                    "price": "91",
                    "totalPrice": "180"
                },
                {
                    "id": "5",
                    "img": "https://images.pexels.com/photos/3773583/pexels-photo-3773583.png?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    "building": "https://images.pexels.com/photos/136413/pexels-photo-136413.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    "title": "Lorem ipsum dolor sit amet consectetur.",
                    "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
                    "internat": "Wifi Air conditioning Kitchen",
                    "cancellation": "cancellation flexibility available",
                    "review": "6.10 (11)",
                    "price": "33",
                    "totalPrice": "178"
                },
                {
                    "id": "6",
                    "img": "https://images.pexels.com/photos/271795/pexels-photo-271795.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    "building": "https://images.pexels.com/photos/258160/pexels-photo-258160.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    "title": "AR Lounge & Pool (r&r +b&b) nice",
                    "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
                    "internat": "Wifi Air conditioning Kitchen",
                    "cancellation": "cancellation flexibility available",
                    "review": "9.9 (26)",
                    "price": "66",
                    "totalPrice": "250"
                }]
    },
    {
        "id": "3",
        "name": "bangladesh",
        "city": "sundarban",
        "rooms":
            [
                {
                    "id": "1",
                    "img": "https://images.pexels.com/photos/272802/pexels-photo-272802.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    "building": "https://images.pexels.com/photos/428427/pexels-photo-428427.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    "title": "Light bright airy stylish apt & safe peaceful stay",
                    "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
                    "internat": "Wifi Air conditioning Kitchen",
                    "cancellation": "cancellation flexibility available",
                    "review": "4.9 (20)",
                    "price": "26",
                    "totalPrice": "168"
                },
                {
                    "id": "2",
                    "img": "https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    "building": "https://images.pexels.com/photos/2091166/pexels-photo-2091166.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    "title": "Apartment in Lost Panorama",
                    "GuestsAndRoomDetail": "4 guests 3 bedrooms 3 beds 3 baths",
                    "internat": "Wifi Air conditioning Kitchen",
                    "cancellation": "cancellation flexibility available",
                    "review": "3.10 (19)",
                    "price": "46",
                    "totalPrice": "150"
                },
                {
                    "id": "3",
                    "img": "https://images.pexels.com/photos/3220528/pexels-photo-3220528.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    "building": "https://images.pexels.com/photos/371404/pexels-photo-371404.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    "title": "AR Lounge & Pool (r&r +b&b)",
                    "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
                    "internat": "Wifi Air conditioning Kitchen",
                    "cancellation": "cancellation flexibility available",
                    "review": "4.9 (20)",
                    "price": "59",
                    "totalPrice": "220"
                },
                {
                    "id": "4",
                    "img": "https://images.pexels.com/photos/2029722/pexels-photo-2029722.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    "building": "https://images.pexels.com/photos/417273/pexels-photo-417273.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    "title": "Light bright airy stylish apt & safe peaceful stay",
                    "GuestsAndRoomDetail": "5 guests 3 bedrooms 3 beds 3 baths",
                    "internat": "Wifi Air conditioning Kitchen",
                    "cancellation": "cancellation flexibility available",
                    "review": "7.9 (30)",
                    "price": "39",
                    "totalPrice": "180"
                },
                {
                    "id": "5",
                    "img": "https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    "building": "https://images.pexels.com/photos/136413/pexels-photo-136413.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    "title": "Lorem ipsum dolor sit amet consectetur.",
                    "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
                    "internat": "Wifi Air conditioning Kitchen",
                    "cancellation": "cancellation flexibility available",
                    "review": "6.10 (11)",
                    "price": "49",
                    "totalPrice": "178"
                },
                {
                    "id": "6",
                    "img": "https://images.pexels.com/photos/3754594/pexels-photo-3754594.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    "building": "https://images.pexels.com/photos/258160/pexels-photo-258160.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    "title": "AR Lounge & Pool (r&r +b&b) nice",
                    "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
                    "internat": "Wifi Air conditioning Kitchen",
                    "cancellation": "cancellation flexibility available",
                    "review": "9.9 (26)",
                    "price": "66",
                    "totalPrice": "250"
                }]
    },
    // bangladesh
    {
        "id": "4",
        "name": "us",
        "city": "new york",
        "rooms": [
            {
                "id": "1",
                "img": "https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/2187605/pexels-photo-2187605.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "Light bright airy stylish apt & safe peaceful stay",
                "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "4.9 (20)",
                "price": "38",
                "totalPrice": "168"
            },
            {
                "id": "2",
                "img": "https://images.pexels.com/photos/1668860/pexels-photo-1668860.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/221506/pexels-photo-221506.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "Apartment in Lost Panorama",
                "GuestsAndRoomDetail": "4 guests 3 bedrooms 3 beds 3 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "3.10 (19)",
                "price": "28",
                "totalPrice": "150"
            },
            {
                "id": "3",
                "img": "https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/314937/pexels-photo-314937.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "AR Lounge & Pool (r&r +b&b)",
                "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "4.9 (20)", "price": "50",
                "totalPrice": "220"
            },
            {
                "id": "4",
                "img": "https://images.pexels.com/photos/1358900/pexels-photo-1358900.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/4997546/pexels-photo-4997546.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "Light bright airy stylish apt & safe peaceful stay",
                "GuestsAndRoomDetail": "5 guests 3 bedrooms 3 beds 3 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "7.9 (30)", "price": "39",
                "totalPrice": "180"
            }, {
                "id": "5",
                "img": "https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/398638/pexels-photo-398638.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "Lorem ipsum dolor sit amet consectetur.",
                "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "6.10 (11)", "price": "40", "totalPrice": "178"
            },
            {
                "id": "6",
                "img": "https://images.pexels.com/photos/5824883/pexels-photo-5824883.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/1146053/pexels-photo-1146053.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "AR Lounge & Pool (r&r +b&b) nice",
                "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "9.9 (26)",
                "price": "66",
                "totalPrice": "250"
            }
        ]
    },
    {
        "id": "5",
        "name": "us",
        "city": "chicago",
        "rooms": [
            {
                "id": "1",
                "img": "https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/2346001/pexels-photo-2346001.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "Light bright airy stylish apt & safe peaceful stay",
                "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "4.9 (20)",
                "price": "42",
                "totalPrice": "168"
            },
            {
                "id": "2",
                "img": "https://images.pexels.com/photos/1668860/pexels-photo-1668860.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/1334605/pexels-photo-1334605.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "Apartment in Lost Panorama",
                "GuestsAndRoomDetail": "4 guests 3 bedrooms 3 beds 3 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "3.10 (19)",
                "price": "29",
                "totalPrice": "158"
            },
            {
                "id": "3",
                "img": "https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/2555992/pexels-photo-2555992.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "AR Lounge & Pool (r&r +b&b)",
                "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "4.9 (20)",
                "price": "89",
                "totalPrice": "220"
            },
            {
                "id": "4",
                "img": "https://images.pexels.com/photos/1358900/pexels-photo-1358900.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/4997546/pexels-photo-4997546.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "Light bright airy stylish apt & safe peaceful stay",
                "GuestsAndRoomDetail": "5 guests 3 bedrooms 3 beds 3 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "7.9 (30)",
                "price": "37",
                "totalPrice": "180"
            }, {
                "id": "5",
                "img": "https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/398638/pexels-photo-398638.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "Lorem ipsum dolor sit amet consectetur.",
                "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "6.10 (11)",
                "price": "67",
                "totalPrice": "230"
            },
            {
                "id": "6",
                "img": "https://images.pexels.com/photos/5824883/pexels-photo-5824883.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/1146053/pexels-photo-1146053.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "AR Lounge & Pool (r&r +b&b) nice",
                "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "9.9 (26)",
                "price": "66",
                "totalPrice": "250"
            }
        ]
    },
    {
        "id": "6",
        "name": "us",
        "city": "los angeles",
        "rooms": [
            {
                "id": "1",
                "img": "https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/2670273/pexels-photo-2670273.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "Light bright airy stylish apt & safe peaceful stay",
                "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "4.9 (20)",
                "price": "35",
                "totalPrice": "168"
            },
            {
                "id": "2",
                "img": "https://images.pexels.com/photos/1668860/pexels-photo-1668860.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/3131971/pexels-photo-3131971.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "Apartment in Lost Panorama",
                "GuestsAndRoomDetail": "4 guests 3 bedrooms 3 beds 3 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "3.10 (19)",
                "price": "41",
                "totalPrice": "153"
            },
            {
                "id": "3",
                "img": "https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/2181230/pexels-photo-2181230.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "AR Lounge & Pool (r&r +b&b)",
                "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "4.9 (20)",
                "price": "53",
                "totalPrice": "224"
            },
            {
                "id": "4",
                "img": "https://images.pexels.com/photos/1358900/pexels-photo-1358900.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/4997546/pexels-photo-4997546.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "Light bright airy stylish apt & safe peaceful stay",
                "GuestsAndRoomDetail": "5 guests 3 bedrooms 3 beds 3 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "7.9 (30)",
                "price": "44",
                "totalPrice": "180"
            }, {
                "id": "5",
                "img": "https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/398638/pexels-photo-398638.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "Lorem ipsum dolor sit amet consectetur.",
                "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "6.10 (11)",
                "price": "43",
                "totalPrice": "178"
            },
            {
                "id": "6",
                "img": "https://images.pexels.com/photos/5824883/pexels-photo-5824883.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/1146053/pexels-photo-1146053.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "AR Lounge & Pool (r&r +b&b) nice",
                "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "9.9 (26)",
                "price": "69",
                "totalPrice": "250"
            }
        ]
    },
    // us
    {
        "id": "7",
        "name": "france",
        "city": "paris",
        "rooms": [
            {
                "id": "25",
                "img": "https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "Light bright airy stylish apt & safe peaceful stay",
                "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "4.9 (20)",
                "price": "34",
                "totalPrice": "168"
            },
            {
                "id": "26",
                "img": "https://images.pexels.com/photos/3773576/pexels-photo-3773576.png?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/3958954/pexels-photo-3958954.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "Apartment in Lost Panorama",
                "GuestsAndRoomDetail": "4 guests 3 bedrooms 3 beds 3 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "3.10 (19)",
                "price": "28",
                "totalPrice": "150"
            }, {
                "id": "27",
                "img": "https://images.pexels.com/photos/6283960/pexels-photo-6283960.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                "title": "AR Lounge & Pool (r&r +b&b)",
                "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "4.9 (20)",
                "price": "50",
                "totalPrice": "220"
            },
            {
                "id": "28",
                "img": "https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "Light bright airy stylish apt & safe peaceful stay",
                "GuestsAndRoomDetail": "5 guests 3 bedrooms 3 beds 3 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "7.9 (30)",
                "price": "39",
                "totalPrice": "180"
            },
            {
                "id": "29",
                "img": "https://images.pexels.com/photos/6297088/pexels-photo-6297088.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/415687/pexels-photo-415687.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "Lorem ipsum dolor sit amet consectetur.",
                "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "6.10 (11)",
                "price": "40",
                "totalPrice": "178"
            },
            {
                "id": "30",
                "img": "https://images.pexels.com/photos/5824498/pexels-photo-5824498.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/5524165/pexels-photo-5524165.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "AR Lounge & Pool (r&r +b&b) nice",
                "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "9.9 (26)",
                "price": "66",
                "totalPrice": "250"
            }]
    },
    {
        "id": "8",
        "name": "france",
        "city": "marseille",
        "rooms": [
            {
                "id": "25",
                "img": "https://images.pexels.com/photos/376531/pexels-photo-376531.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/2265881/pexels-photo-2265881.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "Light bright airy stylish apt & safe peaceful stay",
                "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "4.9 (20)",
                "price": "34",
                "totalPrice": "168"
            },
            {
                "id": "26",
                "img": "https://images.pexels.com/photos/1150962/pexels-photo-1150962.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/3958954/pexels-photo-3958954.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "Apartment in Lost Panorama",
                "GuestsAndRoomDetail": "4 guests 3 bedrooms 3 beds 3 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "3.10 (19)",
                "price": "28",
                "totalPrice": "150"
            }, {
                "id": "27",
                "img": "https://images.pexels.com/photos/3209035/pexels-photo-3209035.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/2187605/pexels-photo-2187605.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "AR Lounge & Pool (r&r +b&b)",
                "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "4.9 (20)",
                "price": "50",
                "totalPrice": "220"
            },
            {
                "id": "28",
                "img": "https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "Light bright airy stylish apt & safe peaceful stay",
                "GuestsAndRoomDetail": "5 guests 3 bedrooms 3 beds 3 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "7.9 (30)",
                "price": "39",
                "totalPrice": "180"
            },
            {
                "id": "29",
                "img": "https://images.pexels.com/photos/833045/pexels-photo-833045.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/415687/pexels-photo-415687.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "Lorem ipsum dolor sit amet consectetur.",
                "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "6.10 (11)",
                "price": "40",
                "totalPrice": "178"
            },
            {
                "id": "30",
                "img": "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/5524165/pexels-photo-5524165.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "AR Lounge & Pool (r&r +b&b) nice",
                "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "9.9 (26)",
                "price": "66",
                "totalPrice": "250"
            }]
    },
    {
        "id": "9",
        "name": "france",
        "city": "toulouse",
        "rooms": [
            {
                "id": "25",
                "img": "https://images.pexels.com/photos/210265/pexels-photo-210265.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/3051551/pexels-photo-3051551.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "Light bright airy stylish apt & safe peaceful stay",
                "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "4.9 (20)",
                "price": "34",
                "totalPrice": "168"
            },
            {
                "id": "26",
                "img": "https://images.pexels.com/photos/2747901/pexels-photo-2747901.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/3958954/pexels-photo-3958954.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "Apartment in Lost Panorama",
                "GuestsAndRoomDetail": "4 guests 3 bedrooms 3 beds 3 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "3.10 (19)",
                "price": "28",
                "totalPrice": "150"
            }, {
                "id": "27",
                "img": "https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "AR Lounge & Pool (r&r +b&b)",
                "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "4.9 (20)",
                "price": "50",
                "totalPrice": "220"
            },
            {
                "id": "28",
                "img": "https://images.pexels.com/photos/1879069/pexels-photo-1879069.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "Light bright airy stylish apt & safe peaceful stay",
                "GuestsAndRoomDetail": "5 guests 3 bedrooms 3 beds 3 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "7.9 (30)",
                "price": "39",
                "totalPrice": "180"
            },
            {
                "id": "29",
                "img": "https://images.pexels.com/photos/6297088/pexels-photo-6297088.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/1586206/pexels-photo-1586206.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                "title": "Lorem ipsum dolor sit amet consectetur.",
                "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "6.10 (11)",
                "price": "40",
                "totalPrice": "178"
            },
            {
                "id": "30",
                "img": "https://images.pexels.com/photos/5824498/pexels-photo-5824498.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/5524165/pexels-photo-5524165.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "AR Lounge & Pool (r&r +b&b) nice",
                "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "9.9 (26)",
                "price": "66",
                "totalPrice": "250"
            }]
    },
    // france
    {
        "id": "10",
        "name": "oman",
        "city": "salalah",
        "rooms": [
            {
                "id": "37",
                "img": "https://images.pexels.com/photos/210604/pexels-photo-210604.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/4024912/pexels-photo-4024912.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "Light bright airy stylish apt & safe peaceful stay",
                "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "4.9 (20)",
                "price": "34",
                "totalPrice": "168"
            },
            {
                "id": "38",
                "img": "https://images.pexels.com/photos/6312361/pexels-photo-6312361.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/114294/pexels-photo-114294.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "Apartment in Lost Panorama",
                "GuestsAndRoomDetail": "4 guests 3 bedrooms 3 beds 3 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "3.10 (19)",
                "price": "28",
                "totalPrice": "150"
            }, {
                "id": "39",
                "img": "https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/5747939/pexels-photo-5747939.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "AR Lounge & Pool (r&r +b&b)",
                "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "4.9 (20)",
                "price": "50",
                "totalPrice": "220"
            }, {
                "id": "40",
                "img": "https://images.pexels.com/photos/6316058/pexels-photo-6316058.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/569675/pexels-photo-569675.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "Light bright airy stylish apt & safe peaceful stay",
                "GuestsAndRoomDetail": "5 guests 3 bedrooms 3 beds 3 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "7.9 (30)",
                "price": "39",
                "totalPrice": "180"
            }, {
                "id": "41",
                "img": "https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "Lorem ipsum dolor sit amet consectetur.",
                "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "6.10 (11)",
                "price": "40",
                "totalPrice": "178"
            }, {
                "id": "42",
                "img": "https://images.pexels.com/photos/6316065/pexels-photo-6316065.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/2506988/pexels-photo-2506988.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "AR Lounge & Pool (r&r +b&b) nice",
                "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "9.9 (26)",
                "price": "57",
                "totalPrice": "244"
            }]
    },
    {
        "id": "11",
        "name": "oman",
        "city": "muscat",
        "rooms": [
            {
                "id": "37",
                "img": "https://images.pexels.com/photos/6434623/pexels-photo-6434623.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                "building": "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "Light bright airy stylish apt & safe peaceful stay",
                "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "4.9 (20)",
                "price": "34",
                "totalPrice": "168"
            },
            {
                "id": "38",
                "img": "https://images.pexels.com/photos/6316054/pexels-photo-6316054.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                "title": "Apartment in Lost Panorama",
                "GuestsAndRoomDetail": "4 guests 3 bedrooms 3 beds 3 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "3.10 (19)",
                "price": "28",
                "totalPrice": "150"
            }, {
                "id": "39",
                "img": "https://images.pexels.com/photos/4992487/pexels-photo-4992487.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                "title": "AR Lounge & Pool (r&r +b&b)",
                "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "4.9 (20)",
                "price": "50",
                "totalPrice": "220"
            }, {
                "id": "40",
                "img": "https://images.pexels.com/photos/6316053/pexels-photo-6316053.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/6650984/pexels-photo-6650984.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "Light bright airy stylish apt & safe peaceful stay",
                "GuestsAndRoomDetail": "5 guests 3 bedrooms 3 beds 3 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "7.9 (30)",
                "price": "39",
                "totalPrice": "180"
            }, {
                "id": "41",
                "img": "https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "Lorem ipsum dolor sit amet consectetur.",
                "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "6.10 (11)",
                "price": "40",
                "totalPrice": "178"
            }, {
                "id": "42",
                "img": "https://images.pexels.com/photos/6394550/pexels-photo-6394550.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/2506988/pexels-photo-2506988.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "AR Lounge & Pool (r&r +b&b) nice",
                "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "9.9 (26)",
                "price": "57",
                "totalPrice": "244"
            }]
    },
    {
        "id": "12",
        "name": "oman",
        "city": "bawshar",
        "rooms": [
            {
                "id": "37",
                "img": "https://images.pexels.com/photos/6434582/pexels-photo-6434582.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                "building": "https://images.pexels.com/photos/4099299/pexels-photo-4099299.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "Light bright airy stylish apt & safe peaceful stay",
                "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "4.9 (20)",
                "price": "34",
                "totalPrice": "168"
            },
            {
                "id": "38",
                "img": "https://images.pexels.com/photos/6394704/pexels-photo-6394704.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/1028225/pexels-photo-1028225.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "Apartment in Lost Panorama",
                "GuestsAndRoomDetail": "4 guests 3 bedrooms 3 beds 3 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "3.10 (19)",
                "price": "28",
                "totalPrice": "150"
            }, {
                "id": "39",
                "img": "https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/3779816/pexels-photo-3779816.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "AR Lounge & Pool (r&r +b&b)",
                "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "4.9 (20)",
                "price": "50",
                "totalPrice": "220"
            }, {
                "id": "40",
                "img": "https://images.pexels.com/photos/3797991/pexels-photo-3797991.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/6650984/pexels-photo-6650984.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "Light bright airy stylish apt & safe peaceful stay",
                "GuestsAndRoomDetail": "5 guests 3 bedrooms 3 beds 3 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "7.9 (30)",
                "price": "39",
                "totalPrice": "180"
            }, {
                "id": "41",
                "img": "https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "Lorem ipsum dolor sit amet consectetur.",
                "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "6.10 (11)",
                "price": "40",
                "totalPrice": "178"
            }, {
                "id": "42",
                "img": "https://images.pexels.com/photos/5178068/pexels-photo-5178068.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/2506988/pexels-photo-2506988.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "AR Lounge & Pool (r&r +b&b) nice",
                "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "9.9 (26)",
                "price": "57",
                "totalPrice": "244"
            }]
    },
    //oman
    {
        "id": "13",
        "name": "morocco",
        "city": "rabat",
        "rooms": [
            {
                "id": "31",
                "img": "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/2157404/pexels-photo-2157404.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "Light bright airy stylish apt & safe peaceful stay",
                "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "4.9 (20)",
                "price": "34",
                "totalPrice": "168"
            }, {
                "id": "32",
                "img": "https://images.pexels.com/photos/6186507/pexels-photo-6186507.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/2907034/pexels-photo-2907034.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "Apartment in Lost Panorama",
                "GuestsAndRoomDetail": "4 guests 3 bedrooms 3 beds 3 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "3.10 (19)",
                "price": "28",
                "totalPrice": "150"
            }, {
                "id": "33",
                "img": "https://images.pexels.com/photos/6283973/pexels-photo-6283973.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/1546166/pexels-photo-1546166.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "AR Lounge & Pool (r&r +b&b)",
                "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "4.9 (20)",
                "price": "50",
                "totalPrice": "220"
            }, {
                "id": "34",
                "img": "https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/2923418/pexels-photo-2923418.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "Light bright airy stylish apt & safe peaceful stay",
                "GuestsAndRoomDetail": "5 guests 3 bedrooms 3 beds 3 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "7.9 (30)",
                "price": "39",
                "totalPrice": "180"
            },
            {
                "id": "35",
                "img": "https://images.pexels.com/photos/5825693/pexels-photo-5825693.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/3225602/pexels-photo-3225602.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                "title": "Lorem ipsum dolor sit amet consectetur.",
                "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "6.10 (11)",
                "price": "40",
                "totalPrice": "178"
            }, {
                "id": "36",
                "img": "https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/770607/pexels-photo-770607.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "AR Lounge & Pool (r&r +b&b) nice",
                "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "9.9 (26)",
                "price": "66",
                "totalPrice": "250"
            }]
    },
    {
        "id": "14",
        "name": "morocco",
        "city": "essaouira",
        "rooms": [
            {
                "id": "31",
                "img": "https://images.pexels.com/photos/3554424/pexels-photo-3554424.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/1743555/pexels-photo-1743555.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "Light bright airy stylish apt & safe peaceful stay",
                "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "4.9 (20)",
                "price": "34",
                "totalPrice": "168"
            }, {
                "id": "32",
                "img": "https://images.pexels.com/photos/4063401/pexels-photo-4063401.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/371404/pexels-photo-371404.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "Apartment in Lost Panorama",
                "GuestsAndRoomDetail": "4 guests 3 bedrooms 3 beds 3 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "3.10 (19)",
                "price": "28",
                "totalPrice": "150"
            }, {
                "id": "33",
                "img": "https://images.pexels.com/photos/6283973/pexels-photo-6283973.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "AR Lounge & Pool (r&r +b&b)",
                "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "4.9 (20)",
                "price": "50",
                "totalPrice": "220"
            }, {
                "id": "34",
                "img": "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/2923418/pexels-photo-2923418.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "Light bright airy stylish apt & safe peaceful stay",
                "GuestsAndRoomDetail": "5 guests 3 bedrooms 3 beds 3 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "7.9 (30)",
                "price": "39",
                "totalPrice": "180"
            },
            {
                "id": "35",
                "img": "https://images.pexels.com/photos/5825693/pexels-photo-5825693.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/3225602/pexels-photo-3225602.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                "title": "Lorem ipsum dolor sit amet consectetur.",
                "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "6.10 (11)",
                "price": "40",
                "totalPrice": "178"
            }, {
                "id": "36",
                "img": "https://images.pexels.com/photos/1150962/pexels-photo-1150962.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/770607/pexels-photo-770607.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "AR Lounge & Pool (r&r +b&b) nice",
                "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "9.9 (26)",
                "price": "66",
                "totalPrice": "250"
            }]
    },
    {
        "id": "15",
        "name": "morocco",
        "city": "meknes",
        "rooms": [
            {
                "id": "31",
                "img": "https://images.pexels.com/photos/2029694/pexels-photo-2029694.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                "building": "https://images.pexels.com/photos/161768/lafayette-park-washington-dc-c-architecture-161768.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "Light bright airy stylish apt & safe peaceful stay",
                "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "4.9 (20)",
                "price": "34",
                "totalPrice": "168"
            }, {
                "id": "32",
                "img": "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "Apartment in Lost Panorama",
                "GuestsAndRoomDetail": "4 guests 3 bedrooms 3 beds 3 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "3.10 (19)",
                "price": "28",
                "totalPrice": "150"
            }, {
                "id": "33",
                "img": "https://images.pexels.com/photos/2029670/pexels-photo-2029670.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/279100/pexels-photo-279100.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "AR Lounge & Pool (r&r +b&b)",
                "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "4.9 (20)",
                "price": "50",
                "totalPrice": "220"
            }, {
                "id": "34",
                "img": "https://images.pexels.com/photos/6434623/pexels-photo-6434623.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/2923418/pexels-photo-2923418.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "Light bright airy stylish apt & safe peaceful stay",
                "GuestsAndRoomDetail": "5 guests 3 bedrooms 3 beds 3 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "7.9 (30)",
                "price": "39",
                "totalPrice": "180"
            },
            {
                "id": "35",
                "img": "https://images.pexels.com/photos/210265/pexels-photo-210265.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/3225602/pexels-photo-3225602.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                "title": "Lorem ipsum dolor sit amet consectetur.",
                "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "6.10 (11)",
                "price": "40",
                "totalPrice": "178"
            }, {
                "id": "36",
                "img": "https://images.pexels.com/photos/3773575/pexels-photo-3773575.png?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/770607/pexels-photo-770607.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "AR Lounge & Pool (r&r +b&b) nice",
                "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "9.9 (26)",
                "price": "66",
                "totalPrice": "250"
            }]
    },
    //morocco
    {
        "id": "16",
        "name": "lebanon",
        "city": "baalbek",
        "rooms": [
            {
                "id": "49",
                "img": "https://images.pexels.com/photos/1095127/pexels-photo-1095127.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/2157404/pexels-photo-2157404.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "Light bright airy stylish apt & safe peaceful stay",
                "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "4.9 (20)",
                "price": "34",
                "totalPrice": "168"
            }, {
                "id": "50",
                "img": "https://images.pexels.com/photos/5378405/pexels-photo-5378405.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "Apartment in Lost Panorama",
                "GuestsAndRoomDetail": "4 guests 3 bedrooms 3 beds 3 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "3.10 (19)",
                "price": "27",
                "totalPrice": "170"
            }, {
                "id": "51",
                "img": "https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/1546166/pexels-photo-1546166.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "AR Lounge & Pool (r&r +b&b)",
                "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "17.9 (20)",
                "price": "58",
                "totalPrice": "245"
            }, {
                "id": "52", "img": "https://images.pexels.com/photos/2089696/pexels-photo-2089696.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/2983472/pexels-photo-2983472.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "Light bright airy stylish apt & safe peaceful stay",
                "GuestsAndRoomDetail": "5 guests 3 bedrooms 3 beds 3 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "15.9 (30)",
                "price": "60",
                "totalPrice": "260"
            }, {
                "id": "53",
                "img": "https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/5371484/pexels-photo-5371484.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "Lorem ipsum dolor sit amet consectetur.",
                "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "6.10 (11)",
                "price": "40",
                "totalPrice": "178"
            }, {
                "id": "54",
                "img": "https://images.pexels.com/photos/4713243/pexels-photo-4713243.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/6016679/pexels-photo-6016679.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "AR Lounge & Pool (r&r +b&b) nice",
                "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "9.9 (26)",
                "price": "49",
                "totalPrice": "240"
            }]
    },
    {
        "id": "17",
        "name": "lebanon",
        "city": "jounieh",
        "rooms": [
            {
                "id": "49",
                "img": "https://images.pexels.com/photos/2747901/pexels-photo-2747901.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/2157404/pexels-photo-2157404.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "Light bright airy stylish apt & safe peaceful stay",
                "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "4.9 (20)",
                "price": "34",
                "totalPrice": "168"
            }, {
                "id": "50",
                "img": "https://images.pexels.com/photos/2030119/pexels-photo-2030119.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "Apartment in Lost Panorama",
                "GuestsAndRoomDetail": "4 guests 3 bedrooms 3 beds 3 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "3.10 (19)",
                "price": "27",
                "totalPrice": "170"
            }, {
                "id": "51",
                "img": "https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/1546166/pexels-photo-1546166.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "AR Lounge & Pool (r&r +b&b)",
                "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "17.9 (20)",
                "price": "58",
                "totalPrice": "245"
            }, {
                "id": "52", "img": "https://images.pexels.com/photos/6297081/pexels-photo-6297081.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/2983472/pexels-photo-2983472.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "Light bright airy stylish apt & safe peaceful stay",
                "GuestsAndRoomDetail": "5 guests 3 bedrooms 3 beds 3 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "15.9 (30)",
                "price": "60",
                "totalPrice": "260"
            }, {
                "id": "53",
                "img": "https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/5371484/pexels-photo-5371484.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "Lorem ipsum dolor sit amet consectetur.",
                "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "6.10 (11)",
                "price": "40",
                "totalPrice": "178"
            }, {
                "id": "54",
                "img": "https://images.pexels.com/photos/1034584/pexels-photo-1034584.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/6016679/pexels-photo-6016679.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "AR Lounge & Pool (r&r +b&b) nice",
                "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "9.9 (26)",
                "price": "49",
                "totalPrice": "240"
            }]
    },
    {
        "id": "18",
        "name": "lebanon",
        "city": "byblos",
        "rooms": [
            {
                "id": "49",
                "img": "https://images.pexels.com/photos/6297079/pexels-photo-6297079.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/2344264/pexels-photo-2344264.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "Light bright airy stylish apt & safe peaceful stay",
                "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "4.9 (20)",
                "price": "34",
                "totalPrice": "168"
            }, {
                "id": "50",
                "img": "https://images.pexels.com/photos/5378405/pexels-photo-5378405.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/3714727/pexels-photo-3714727.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "Apartment in Lost Panorama",
                "GuestsAndRoomDetail": "4 guests 3 bedrooms 3 beds 3 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "3.10 (19)",
                "price": "27",
                "totalPrice": "170"
            }, {
                "id": "51",
                "img": "https://images.pexels.com/photos/5825584/pexels-photo-5825584.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/261395/pexels-photo-261395.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "AR Lounge & Pool (r&r +b&b)",
                "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "17.9 (20)",
                "price": "58",
                "totalPrice": "245"
            }, {
                "id": "52",
                "img": "https://images.pexels.com/photos/4916513/pexels-photo-4916513.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                "building": "https://images.pexels.com/photos/2983472/pexels-photo-2983472.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "Light bright airy stylish apt & safe peaceful stay",
                "GuestsAndRoomDetail": "5 guests 3 bedrooms 3 beds 3 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "15.9 (30)",
                "price": "60",
                "totalPrice": "260"
            }, {
                "id": "53",
                "img": "https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/5371484/pexels-photo-5371484.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "Lorem ipsum dolor sit amet consectetur.",
                "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "6.10 (11)",
                "price": "40",
                "totalPrice": "178"
            }, {
                "id": "54",
                "img": "https://images.pexels.com/photos/4915547/pexels-photo-4915547.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/6016679/pexels-photo-6016679.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "AR Lounge & Pool (r&r +b&b) nice",
                "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "9.9 (26)",
                "price": "49",
                "totalPrice": "240"
            }]
    },
    // lebanon
    {
        "id": "19",
        "name": "malaysia",
        "city": "kuala lumpur",
        "rooms": [{
            "id": "43",
            "img": "https://images.pexels.com/photos/3144580/pexels-photo-3144580.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "building": "https://images.pexels.com/photos/2187605/pexels-photo-2187605.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "title": "Light bright airy stylish apt & safe peaceful stay",
            "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
            "internat": "Wifi Air conditioning Kitchen",
            "cancellation": "cancellation flexibility available",
            "review": "4.9 (20)",
            "price": "34",
            "totalPrice": "168"
        }, {
            "id": "44",
            "img": "https://images.pexels.com/photos/3773576/pexels-photo-3773576.png?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "building": "https://images.pexels.com/photos/3935320/pexels-photo-3935320.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "title": "Apartment in Lost Panorama",
            "GuestsAndRoomDetail": "4 guests 3 bedrooms 3 beds 3 baths",
            "internat": "Wifi Air conditioning Kitchen",
            "cancellation": "cancellation flexibility available",
            "review": "3.10 (19)",
            "price": "28",
            "totalPrice": "150"
        }, {
            "id": "45",
            "img": "https://images.pexels.com/photos/4993079/pexels-photo-4993079.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "building": "https://images.pexels.com/photos/314937/pexels-photo-314937.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "title": "AR Lounge & Pool (r&r +b&b)",
            "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
            "internat": "Wifi Air conditioning Kitchen",
            "cancellation": "cancellation flexibility available",
            "review": "4.9 (20)",
            "price": "50",
            "totalPrice": "220"
        }, {
            "id": "46",
            "img": "https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "building": "https://images.pexels.com/photos/2793451/pexels-photo-2793451.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "title": "Light bright airy stylish apt & safe peaceful stay",
            "GuestsAndRoomDetail": "5 guests 3 bedrooms 3 beds 3 baths",
            "internat": "Wifi Air conditioning Kitchen",
            "cancellation": "cancellation flexibility available",
            "review": "7.9 (30)",
            "price": "39",
            "totalPrice": "180"
        }, {
            "id": "47",
            "img": "https://images.pexels.com/photos/3634740/pexels-photo-3634740.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "building": "https://images.pexels.com/photos/2986231/pexels-photo-2986231.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "title": "Lorem ipsum dolor sit amet consectetur.",
            "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
            "internat": "Wifi Air conditioning Kitchen",
            "cancellation": "cancellation flexibility available",
            "review": "6.10 (11)",
            "price": "40",
            "totalPrice": "178"
        }, {
            "id": "48",
            "img": "https://images.pexels.com/photos/3634739/pexels-photo-3634739.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "building": "https://images.pexels.com/photos/1268871/pexels-photo-1268871.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "title": "AR Lounge & Pool (r&r +b&b) nice",
            "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
            "internat": "Wifi Air conditioning Kitchen",
            "cancellation": "cancellation flexibility available",
            "review": "9.9 (26)",
            "price": "66",
            "totalPrice": "250"
        }]
    },
    {
        "id": "20",
        "name": "malaysia",
        "city": "malacca",
        "rooms": [{
            "id": "43",
            "img": "https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "building": "https://images.pexels.com/photos/1662159/pexels-photo-1662159.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "title": "Light bright airy stylish apt & safe peaceful stay",
            "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
            "internat": "Wifi Air conditioning Kitchen",
            "cancellation": "cancellation flexibility available",
            "review": "4.9 (20)",
            "price": "34",
            "totalPrice": "168"
        }, {
            "id": "44",
            "img": "https://images.pexels.com/photos/4713245/pexels-photo-4713245.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "building": "https://images.pexels.com/photos/2475276/pexels-photo-2475276.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "title": "Apartment in Lost Panorama",
            "GuestsAndRoomDetail": "4 guests 3 bedrooms 3 beds 3 baths",
            "internat": "Wifi Air conditioning Kitchen",
            "cancellation": "cancellation flexibility available",
            "review": "3.10 (19)",
            "price": "28",
            "totalPrice": "150"
        }, {
            "id": "45",
            "img": "https://images.pexels.com/photos/3554424/pexels-photo-3554424.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "building": "https://images.pexels.com/photos/2064742/pexels-photo-2064742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "title": "AR Lounge & Pool (r&r +b&b)",
            "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
            "internat": "Wifi Air conditioning Kitchen",
            "cancellation": "cancellation flexibility available",
            "review": "4.9 (20)",
            "price": "50",
            "totalPrice": "220"
        }, {
            "id": "46",
            "img": "https://images.pexels.com/photos/4112555/pexels-photo-4112555.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "building": "https://images.pexels.com/photos/425173/pexels-photo-425173.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "title": "Light bright airy stylish apt & safe peaceful stay",
            "GuestsAndRoomDetail": "5 guests 3 bedrooms 3 beds 3 baths",
            "internat": "Wifi Air conditioning Kitchen",
            "cancellation": "cancellation flexibility available",
            "review": "7.9 (30)",
            "price": "39",
            "totalPrice": "180"
        }, {
            "id": "47",
            "img": "https://images.pexels.com/photos/3773575/pexels-photo-3773575.png?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "building": "https://images.pexels.com/photos/2986231/pexels-photo-2986231.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "title": "Lorem ipsum dolor sit amet consectetur.",
            "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
            "internat": "Wifi Air conditioning Kitchen",
            "cancellation": "cancellation flexibility available",
            "review": "6.10 (11)",
            "price": "40",
            "totalPrice": "178"
        }, {
            "id": "48",
            "img": "https://images.pexels.com/photos/3634739/pexels-photo-3634739.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "building": "https://images.pexels.com/photos/1268871/pexels-photo-1268871.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "title": "AR Lounge & Pool (r&r +b&b) nice",
            "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
            "internat": "Wifi Air conditioning Kitchen",
            "cancellation": "cancellation flexibility available",
            "review": "9.9 (26)",
            "price": "66",
            "totalPrice": "250"
        }]
    },
    {
        "id": "21",
        "name": "malaysia",
        "city": "kuantan",
        "rooms": [{
            "id": "43",
            "img": "https://images.pexels.com/photos/3659683/pexels-photo-3659683.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "building": "https://images.pexels.com/photos/1708463/pexels-photo-1708463.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "title": "Light bright airy stylish apt & safe peaceful stay",
            "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
            "internat": "Wifi Air conditioning Kitchen",
            "cancellation": "cancellation flexibility available",
            "review": "4.9 (20)",
            "price": "34",
            "totalPrice": "168"
        }, {
            "id": "44",
            "img": "https://images.pexels.com/photos/1047328/pexels-photo-1047328.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "building": "https://images.pexels.com/photos/3935320/pexels-photo-3935320.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "title": "Apartment in Lost Panorama",
            "GuestsAndRoomDetail": "4 guests 3 bedrooms 3 beds 3 baths",
            "internat": "Wifi Air conditioning Kitchen",
            "cancellation": "cancellation flexibility available",
            "review": "3.10 (19)",
            "price": "28",
            "totalPrice": "150"
        }, {
            "id": "45",
            "img": "https://images.pexels.com/photos/4993079/pexels-photo-4993079.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "building": "https://images.pexels.com/photos/1650904/pexels-photo-1650904.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "title": "AR Lounge & Pool (r&r +b&b)",
            "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
            "internat": "Wifi Air conditioning Kitchen",
            "cancellation": "cancellation flexibility available",
            "review": "4.9 (20)",
            "price": "50",
            "totalPrice": "220"
        }, {
            "id": "46",
            "img": "https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "building": "https://images.pexels.com/photos/2793451/pexels-photo-2793451.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "title": "Light bright airy stylish apt & safe peaceful stay",
            "GuestsAndRoomDetail": "5 guests 3 bedrooms 3 beds 3 baths",
            "internat": "Wifi Air conditioning Kitchen",
            "cancellation": "cancellation flexibility available",
            "review": "7.9 (30)",
            "price": "39",
            "totalPrice": "180"
        }, {
            "id": "47",
            "img": "https://images.pexels.com/photos/6394533/pexels-photo-6394533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "building": "https://images.pexels.com/photos/2986231/pexels-photo-2986231.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "title": "Lorem ipsum dolor sit amet consectetur.",
            "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
            "internat": "Wifi Air conditioning Kitchen",
            "cancellation": "cancellation flexibility available",
            "review": "6.10 (11)",
            "price": "40",
            "totalPrice": "178"
        }, {
            "id": "48",
            "img": "https://images.pexels.com/photos/4992487/pexels-photo-4992487.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "building": "https://images.pexels.com/photos/1268871/pexels-photo-1268871.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "title": "AR Lounge & Pool (r&r +b&b) nice",
            "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
            "internat": "Wifi Air conditioning Kitchen",
            "cancellation": "cancellation flexibility available",
            "review": "9.9 (26)",
            "price": "66",
            "totalPrice": "250"
        }]
    },
    //malaysia
    {
        "id": "22",
        "name": "canada",
        "city": "quebec",
        "rooms": [
            {
                "id": "61",
                "img": "https://images.pexels.com/photos/929969/pexels-photo-929969.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/2187605/pexels-photo-2187605.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "Light bright airy stylish apt & safe peaceful stay",
                "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "4.9 (20)",
                "price": "34",
                "totalPrice": "168"
            }, {
                "id": "62",
                "img": "https://images.pexels.com/photos/3773576/pexels-photo-3773576.png?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/221506/pexels-photo-221506.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "Apartment in Lost Panorama",
                "GuestsAndRoomDetail": "4 guests 3 bedrooms 3 beds 3 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "15.10 (19)",
                "price": "88",
                "totalPrice": "469"
            }, {
                "id": "63",
                "img": "https://images.pexels.com/photos/6297085/pexels-photo-6297085.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/314937/pexels-photo-314937.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "AR Lounge & Pool (r&r +b&b)", "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths", "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "4.9 (20)",
                "price": "50",
                "totalPrice": "220"
            }, {
                "id": "64",
                "img": "https://images.pexels.com/photos/1454805/pexels-photo-1454805.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/2100678/pexels-photo-2100678.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "Light bright airy stylish apt & safe peaceful stay",
                "GuestsAndRoomDetail": "5 guests 3 bedrooms 3 beds 3 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "8.9 (39)",
                "price": "38",
                "totalPrice": "199"
            },
            {
                "id": "65",
                "img": "https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/1444450/pexels-photo-1444450.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "Lorem ipsum dolor sit amet consectetur.",
                "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "6.10 (11)",
                "price": "40",
                "totalPrice": "178"
            },
            {
                "id": "66",
                "img": "https://images.pexels.com/photos/6941851/pexels-photo-6941851.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/1553327/pexels-photo-1553327.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "AR Lounge & Pool (r&r +b&b) nice",
                "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "17.9 (26)",
                "price": "88",
                "totalPrice": "450"
            }]
    },
    {
        "id": "23",
        "name": "canada",
        "city": "vancouver",
        "rooms": [
            {
                "id": "61",
                "img": "https://images.pexels.com/photos/6394711/pexels-photo-6394711.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/2187605/pexels-photo-2187605.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "Light bright airy stylish apt & safe peaceful stay",
                "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "4.9 (20)",
                "price": "34",
                "totalPrice": "168"
            }, {
                "id": "62",
                "img": "https://images.pexels.com/photos/6394586/pexels-photo-6394586.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/3684943/pexels-photo-3684943.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "Apartment in Lost Panorama",
                "GuestsAndRoomDetail": "4 guests 3 bedrooms 3 beds 3 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "15.10 (19)",
                "price": "88",
                "totalPrice": "469"
            }, {
                "id": "63",
                "img": "https://images.pexels.com/photos/6394582/pexels-photo-6394582.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/1200457/pexels-photo-1200457.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "AR Lounge & Pool (r&r +b&b)", "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths", "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "4.9 (20)",
                "price": "50",
                "totalPrice": "220"
            }, {
                "id": "64",
                "img": "https://images.pexels.com/photos/6394550/pexels-photo-6394550.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/314937/pexels-photo-314937.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "Light bright airy stylish apt & safe peaceful stay",
                "GuestsAndRoomDetail": "5 guests 3 bedrooms 3 beds 3 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "8.9 (39)",
                "price": "38",
                "totalPrice": "199"
            },
            {
                "id": "65",
                "img": "https://images.pexels.com/photos/6301173/pexels-photo-6301173.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/1444450/pexels-photo-1444450.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "Lorem ipsum dolor sit amet consectetur.",
                "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "6.10 (11)",
                "price": "40",
                "totalPrice": "178"
            },
            {
                "id": "66",
                "img": "https://images.pexels.com/photos/4993065/pexels-photo-4993065.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/1553327/pexels-photo-1553327.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "AR Lounge & Pool (r&r +b&b) nice",
                "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "17.9 (26)",
                "price": "88",
                "totalPrice": "450"
            }]
    },
    {
        "id": "24",
        "name": "canada",
        "city": "charlottetown",
        "rooms": [
            {
                "id": "61",
                "img": "https://images.pexels.com/photos/6394550/pexels-photo-6394550.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/2187605/pexels-photo-2187605.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "Light bright airy stylish apt & safe peaceful stay",
                "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "4.9 (20)",
                "price": "34",
                "totalPrice": "168"
            }, {
                "id": "62",
                "img": "https://images.pexels.com/photos/6394517/pexels-photo-6394517.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/3790058/pexels-photo-3790058.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "Apartment in Lost Panorama",
                "GuestsAndRoomDetail": "4 guests 3 bedrooms 3 beds 3 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "15.10 (19)",
                "price": "88",
                "totalPrice": "469"
            }, {
                "id": "63",
                "img": "https://images.pexels.com/photos/6316052/pexels-photo-6316052.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/1200457/pexels-photo-1200457.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "AR Lounge & Pool (r&r +b&b)", "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths", "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "4.9 (20)",
                "price": "50",
                "totalPrice": "220"
            }, {
                "id": "64",
                "img": "https://images.pexels.com/photos/1454805/pexels-photo-1454805.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "Light bright airy stylish apt & safe peaceful stay",
                "GuestsAndRoomDetail": "5 guests 3 bedrooms 3 beds 3 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "8.9 (39)",
                "price": "38",
                "totalPrice": "199"
            },
            {
                "id": "65",
                "img": "https://images.pexels.com/photos/6316066/pexels-photo-6316066.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/1444450/pexels-photo-1444450.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "Lorem ipsum dolor sit amet consectetur.",
                "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "6.10 (11)",
                "price": "40",
                "totalPrice": "178"
            },
            {
                "id": "66",
                "img": "https://images.pexels.com/photos/4916523/pexels-photo-4916523.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/1553327/pexels-photo-1553327.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "AR Lounge & Pool (r&r +b&b) nice",
                "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "17.9 (26)",
                "price": "88",
                "totalPrice": "450"
            }]
    },
    //canada
    {
        "id": "25",
        "name": "pakistan",
        "city": "karachi",
        "rooms": [
            {
                "id": "67",
                "img": "https://images.pexels.com/photos/1879069/pexels-photo-1879069.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/2157404/pexels-photo-2157404.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "Light bright airy stylish apt & safe peaceful stay",
                "GuestsAndRoomDetail": "4 guests 3 bedrooms 3 beds 3 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "4.9 (20)",
                "price": "34",
                "totalPrice": "168"
            }, {
                "id": "68",
                "img": "https://images.pexels.com/photos/1879069/pexels-photo-1879069.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "Apartment in Lost Panorama",
                "GuestsAndRoomDetail": "4 guests 3 bedrooms 3 beds 3 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "8.10 (22)",
                "price": "32",
                "totalPrice": "155"
            }, {
                "id": "69",
                "img": "https://images.pexels.com/photos/916337/pexels-photo-916337.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/3355561/pexels-photo-3355561.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "AR Lounge & Pool (r&r +b&b)",
                "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "4.9 (20)",
                "price": "58",
                "totalPrice": "277"
            },
            {
                "id": "70",
                "img": "https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/1546166/pexels-photo-1546166.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "Light bright airy stylish apt & safe peaceful stay",
                "GuestsAndRoomDetail": "5 guests 3 bedrooms 3 beds 3 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "10.9 (30)",
                "price": "45",
                "totalPrice": "190"
            }, {
                "id": "71",
                "img": "https://images.pexels.com/photos/3992776/pexels-photo-3992776.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/161758/governor-s-mansion-montgomery-alabama-grand-staircase-161758.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "Lorem ipsum dolor sit amet consectetur.", "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "6.10 (11)",
                "price": "40",
                "totalPrice": "178"
            }, {
                "id": "72",
                "img": "https://images.pexels.com/photos/1467435/pexels-photo-1467435.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "AR Lounge & Pool (r&r +b&b) nice", "GuestsAndRoomDetail": "4 guests 4 bedrooms 4 beds 4 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "9.9 (20)",
                "price": "70",
                "totalPrice": "500"
            }]
    },
    {
        "id": "26",
        "name": "pakistan",
        "city": "faisalabad",
        "rooms": [
            {
                "id": "67",
                "img": "https://images.pexels.com/photos/833046/pexels-photo-833046.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/164338/pexels-photo-164338.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "Light bright airy stylish apt & safe peaceful stay",
                "GuestsAndRoomDetail": "4 guests 3 bedrooms 3 beds 3 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "4.9 (20)",
                "price": "34",
                "totalPrice": "168"
            }, {
                "id": "68",
                "img": "https://images.pexels.com/photos/1571450/pexels-photo-1571450.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/1637112/pexels-photo-1637112.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "Apartment in Lost Panorama",
                "GuestsAndRoomDetail": "4 guests 3 bedrooms 3 beds 3 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "8.10 (22)",
                "price": "32",
                "totalPrice": "155"
            }, {
                "id": "69",
                "img": "https://images.pexels.com/photos/276671/pexels-photo-276671.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/734102/pexels-photo-734102.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "AR Lounge & Pool (r&r +b&b)",
                "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "4.9 (20)",
                "price": "58",
                "totalPrice": "277"
            },
            {
                "id": "70",
                "img": "https://images.pexels.com/photos/271695/pexels-photo-271695.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/594077/pexels-photo-594077.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "Light bright airy stylish apt & safe peaceful stay",
                "GuestsAndRoomDetail": "5 guests 3 bedrooms 3 beds 3 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "10.9 (30)",
                "price": "45",
                "totalPrice": "190"
            }, {
                "id": "71",
                "img": "https://images.pexels.com/photos/1457845/pexels-photo-1457845.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/161758/governor-s-mansion-montgomery-alabama-grand-staircase-161758.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "Lorem ipsum dolor sit amet consectetur.", "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "6.10 (11)",
                "price": "40",
                "totalPrice": "178"
            }, {
                "id": "72",
                "img": "https://images.pexels.com/photos/705665/pexels-photo-705665.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "AR Lounge & Pool (r&r +b&b) nice", "GuestsAndRoomDetail": "4 guests 4 bedrooms 4 beds 4 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "9.9 (20)",
                "price": "70",
                "totalPrice": "500"
            }]
    }, {
        "id": "27",
        "name": "pakistan",
        "city": "lahore",
        "rooms": [
            {
                "id": "67",
                "img": "https://images.pexels.com/photos/6510302/pexels-photo-6510302.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/171187/pexels-photo-171187.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "Light bright airy stylish apt & safe peaceful stay",
                "GuestsAndRoomDetail": "4 guests 3 bedrooms 3 beds 3 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "4.9 (20)",
                "price": "34",
                "totalPrice": "168"
            }, {
                "id": "68",
                "img": "https://images.pexels.com/photos/271643/pexels-photo-271643.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/1795507/pexels-photo-1795507.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "Apartment in Lost Panorama",
                "GuestsAndRoomDetail": "4 guests 3 bedrooms 3 beds 3 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "8.10 (22)",
                "price": "32",
                "totalPrice": "155"
            }, {
                "id": "69",
                "img": "https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/3571200/pexels-photo-3571200.png?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "AR Lounge & Pool (r&r +b&b)",
                "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "4.9 (20)",
                "price": "58",
                "totalPrice": "277"
            },
            {
                "id": "70",
                "img": "https://images.pexels.com/photos/3773575/pexels-photo-3773575.png?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/594077/pexels-photo-594077.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "Light bright airy stylish apt & safe peaceful stay",
                "GuestsAndRoomDetail": "5 guests 3 bedrooms 3 beds 3 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "10.9 (30)",
                "price": "45",
                "totalPrice": "190"
            }, {
                "id": "71",
                "img": "https://images.pexels.com/photos/3209036/pexels-photo-3209036.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/161758/governor-s-mansion-montgomery-alabama-grand-staircase-161758.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "Lorem ipsum dolor sit amet consectetur.", "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "6.10 (11)",
                "price": "40",
                "totalPrice": "178"
            }, {
                "id": "72",
                "img": "https://images.pexels.com/photos/3457285/pexels-photo-3457285.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "AR Lounge & Pool (r&r +b&b) nice", "GuestsAndRoomDetail": "4 guests 4 bedrooms 4 beds 4 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "9.9 (20)",
                "price": "70",
                "totalPrice": "500"
            }]
    },
    {
        "id": "28",
        "name": "england",
        "city": "london",
        "rooms": [
            {
                "id": "19",
                "img": "https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/256150/pexels-photo-256150.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "Light bright airy stylish apt & safe peaceful stay",
                "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "4.9 (20)",
                "price": "34",
                "totalPrice": "168"
            }, {
                "id": "20",
                "img": "https://images.pexels.com/photos/2398375/pexels-photo-2398375.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/443376/pexels-photo-443376.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "Apartment in Lost Panorama",
                "GuestsAndRoomDetail": "4 guests 3 bedrooms 3 beds 3 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "3.10 (19)",
                "price": "28",
                "totalPrice": "150"
            },
            {
                "id": "21",
                "img": "https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/443398/pexels-photo-443398.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "AR Lounge & Pool (r&r +b&b)",
                "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "4.9 (20)",
                "price": "50",
                "totalPrice": "220"
            }, {
                "id": "22",
                "img": "https://images.pexels.com/photos/6207948/pexels-photo-6207948.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/1500459/pexels-photo-1500459.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "Light bright airy stylish apt & safe peaceful stay",
                "GuestsAndRoomDetail": "5 guests 3 bedrooms 3 beds 3 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "7.9 (30)",
                "price": "39",
                "totalPrice": "180"
            }, {
                "id": "23",
                "img": "https://images.pexels.com/photos/6283960/pexels-photo-6283960.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/435904/pexels-photo-435904.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "Lorem ipsum dolor sit amet consectetur.",
                "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "6.10 (11)",
                "price": "40",
                "totalPrice": "178"
            }, {
                "id": "24",
                "img": "https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/438381/pexels-photo-438381.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "AR Lounge & Pool (r&r +b&b) nice",
                "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "9.9 (26)",
                "price": "66",
                "totalPrice": "250"
            }]
    }, {
        "id": "29",
        "name": "england",
        "city": "liverpool",
        "rooms": [
            {
                "id": "19",
                "img": "https://images.pexels.com/photos/1879061/pexels-photo-1879061.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "Light bright airy stylish apt & safe peaceful stay",
                "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "4.9 (20)",
                "price": "34",
                "totalPrice": "168"
            }, {
                "id": "20",
                "img": "https://images.pexels.com/photos/172870/pexels-photo-172870.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "Apartment in Lost Panorama",
                "GuestsAndRoomDetail": "4 guests 3 bedrooms 3 beds 3 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "3.10 (19)",
                "price": "28",
                "totalPrice": "150"
            },
            {
                "id": "21",
                "img": "https://images.pexels.com/photos/4217/hotel-bed-bedroom-room.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/667221/pexels-photo-667221.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "AR Lounge & Pool (r&r +b&b)",
                "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "4.9 (20)",
                "price": "50",
                "totalPrice": "220"
            }, {
                "id": "22",
                "img": "https://images.pexels.com/photos/2351290/pexels-photo-2351290.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/412515/pexels-photo-412515.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "Light bright airy stylish apt & safe peaceful stay",
                "GuestsAndRoomDetail": "5 guests 3 bedrooms 3 beds 3 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "7.9 (30)",
                "price": "39",
                "totalPrice": "180"
            }, {
                "id": "23",
                "img": "https://images.pexels.com/photos/5774/camera-bed-morning-apartment.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/435904/pexels-photo-435904.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "Lorem ipsum dolor sit amet consectetur.",
                "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "6.10 (11)",
                "price": "40",
                "totalPrice": "178"
            }, {
                "id": "24",
                "img": "https://images.pexels.com/photos/3201763/pexels-photo-3201763.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/438381/pexels-photo-438381.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "AR Lounge & Pool (r&r +b&b) nice",
                "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "9.9 (26)",
                "price": "66",
                "totalPrice": "250"
            }]
    }, {
        "id": "30",
        "name": "england",
        "city": "manchester",
        "rooms": [
            {
                "id": "19",
                "img": "https://images.pexels.com/photos/172872/pexels-photo-172872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/443383/pexels-photo-443383.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "Light bright airy stylish apt & safe peaceful stay",
                "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "4.9 (20)",
                "price": "34",
                "totalPrice": "168"
            }, {
                "id": "20",
                "img": "https://images.pexels.com/photos/3209036/pexels-photo-3209036.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/3534806/pexels-photo-3534806.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "Apartment in Lost Panorama",
                "GuestsAndRoomDetail": "4 guests 3 bedrooms 3 beds 3 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "3.10 (19)",
                "price": "28",
                "totalPrice": "150"
            },
            {
                "id": "21",
                "img": "https://images.pexels.com/photos/2467285/pexels-photo-2467285.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "AR Lounge & Pool (r&r +b&b)",
                "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "4.9 (20)",
                "price": "50",
                "totalPrice": "220"
            }, {
                "id": "22",
                "img": "https://images.pexels.com/photos/2029722/pexels-photo-2029722.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/412515/pexels-photo-412515.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "Light bright airy stylish apt & safe peaceful stay",
                "GuestsAndRoomDetail": "5 guests 3 bedrooms 3 beds 3 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "7.9 (30)",
                "price": "39",
                "totalPrice": "180"
            }, {
                "id": "23",
                "img": "https://images.pexels.com/photos/5923080/pexels-photo-5923080.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/435904/pexels-photo-435904.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "Lorem ipsum dolor sit amet consectetur.",
                "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "6.10 (11)",
                "price": "40",
                "totalPrice": "178"
            }, {
                "id": "24",
                "img": "https://images.pexels.com/photos/3883854/pexels-photo-3883854.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "building": "https://images.pexels.com/photos/438381/pexels-photo-438381.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "title": "AR Lounge & Pool (r&r +b&b) nice",
                "GuestsAndRoomDetail": "4 guests 2 bedrooms 2 beds 2 baths",
                "internat": "Wifi Air conditioning Kitchen",
                "cancellation": "cancellation flexibility available",
                "review": "9.9 (26)",
                "price": "66",
                "totalPrice": "250"
            }]
    }


];



const SelectRoom = () => {
    //https://cloud.mongodb.com/v2/5f70cef3fa46d90c51eefed1#metrics/replicaSet/602a1a1e3079de14cdd6bc32/explorer/aircnc/roomsInfo/find
    const [roomsData, setRoomsData] = useState(null);
    console.log(roomsData)
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
    const convert = JSON.parse(sessionStorage.getItem('countryAndCity'));
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
            {/* <div>
                <h6 className="pb-2">
                    252 stays {gustsAndDate && gustsAndDate[0].Month} {gustsAndDate && gustsAndDate[0].numericStartDay}-{gustsAndDate && gustsAndDate[0].numericEndDay}  {gustsAndDate && gustsAndDate[0].gusts} Gusts
                    </h6>
                <h2>Stay in {roomsData && roomsData[0].city} Division</h2>
                <div className="pt-3">
                    <Button variant="outline-0 btn_Lists">Cancellation flexibility</Button>{' '}
                    <Button variant="outline-0 btn_Lists">Type of place</Button>{' '}
                    <Button variant="outline-0 btn_Lists">Price</Button>{' '}
                    <Button variant="outline-0 btn_Lists">Instant Book</Button>{' '}
                    <Button variant="outline-0 btn_Lists">More Filters</Button>{' '}
                </div>
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
            } */}
        </div >
    );
};

export default SelectRoom;