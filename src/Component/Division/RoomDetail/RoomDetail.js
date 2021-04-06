import React, { useEffect, useState } from 'react';
import rowdra from "../../../images/air-cnc-master/images/rowdra.jpg";
import './RoomDetail.css';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import DivisionNavbar from '../../Shred/DivisionNavbar/DivisionNavbar';
import Card from '../../Shred/Card/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faChevronDown, faChevronUp, faHome, faSprayCan, faStar, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from '@material-ui/core';

// const serviceAndCountryInfo = [
//     {
//         id: 1,
//         country: "bangladesh",
//         homeTitle: "Entre home",
//         homeDis: "you'll have the condominium to yourself.",
//         selfTitle: "Self check-in",
//         selfDis: "you can check in with the doorman.",
//         sparklingTitle: "Sparkling clean",
//         sparklingDis: "10 recent guests said this place was sparkling clean.",
//         superHost: "Rowdra is a Superhost",
//         superHostDis: " Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.",
//         hotelInfo: "It's newly constructed 7 storied building maintaining building code by a locally famous architect. Enough light and natural air are playing here. The place (apartment) is calm and noise free. You'll love my place for its lovely and bright look comfortable stay.",
//         countryInfo: "It is home to the world's largest river delta, which is formed by the Brahmaputra and the Ganges river. Roaming Bengal tigers in the Sundarbans, a mangrove, and swampland in the delta. For the longest natural uninterrupted sea beach in Asia (Cox's Bazar beach), which is 150 km long.",
//         countryMoreInfo: "Bangladesh, to the east of India on the Bay of Bengal, is a South Asian country marked by lush greenery and many waterways. Its Padma (Ganges), Meghna and Jamuna rivers create fertile plains, and travel by boat is common. On the southern coast, the Sundarbans, an enormous mangrove forest shared with Eastern India, is home to the royal Bengal tiger."

//     },
//     {
//         id: 2,
//         country: "morocco",
//         homeTitle: "Entre home",
//         homeDis: "you'll have the condominium to yourself.",
//         selfTitle: "Self check-in",
//         selfDis: "you can check in with the doorman.",
//         sparklingTitle: "Sparkling clean",
//         sparklingDis: "10 recent guests said this place was sparkling clean.",
//         superHost: "Rowdra is a Superhost",
//         superHostDis: " Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.",
//         hotelInfo: "It's newly constructed 7 storied building maintaining building code by a locally famous architect. Enough light and natural air are playing here. The place (apartment) is calm and noise free. You'll love my place for its lovely and bright look comfortable stay.",
//         countryInfo: "Morocco is a country situated in North Africa just across the strait of Gibraltar. Being a country rich in culture and history, the region is home to numerous historical towns showcasing the country's beautiful styles of architecture with vibrant, lively markets selling all kinds of trinkets and spices.",
//         countryMoreInfo: "Morocco, a North African country bordering the Atlantic Ocean and Mediterranean Sea, is distinguished by its Berber, Arabian and European cultural influences. Marrakesh’s medina, a mazelike medieval quarter, offers entertainment in its Djemaa el-Fna square and souks (marketplaces) selling ceramics, jewelry and metal lanterns. The capital Rabat’s Kasbah of the Udayas is a 12th-century royal fort overlooking the water"

//     }, {
//         id: 3,
//         country: "england",
//         homeTitle: "Entre home",
//         homeDis: "you'll have the condominium to yourself.",
//         selfTitle: "Self check-in",
//         selfDis: "you can check in with the doorman.",
//         sparklingTitle: "Sparkling clean",
//         sparklingDis: "10 recent guests said this place was sparkling clean.",
//         superHost: "Rowdra is a Superhost",
//         superHostDis: " Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.",
//         hotelInfo: "It's newly constructed 7 storied building maintaining building code by a locally famous architect. Enough light and natural air are playing here. The place (apartment) is calm and noise free. You'll love my place for its lovely and bright look comfortable stay.",
//         countryInfo: "A recent reader survey conducted by Rough Guides placed England as the seventh most beautiful country in the world and London is a truly beautiful city. When you take into account the various areas of the city, along with their top sights and attractions, it's easy to see its beauty",
//         countryMoreInfo: "England is a country that is part of the United Kingdom. It shares land borders with Wales to its west and Scotland to its north. The Irish Sea lies northwest of England and the Celtic Sea to the southwest. England is separated from continental Europe by the North Sea to the east and the English Channel to the south."

//     }, {
//         id: 4,
//         country: "pakistan",
//         homeTitle: "Entre home",
//         homeDis: "you'll have the condominium to yourself.",
//         selfTitle: "Self check-in",
//         selfDis: "you can check in with the doorman.",
//         sparklingTitle: "Sparkling clean",
//         sparklingDis: "10 recent guests said this place was sparkling clean.",
//         superHost: "Rowdra is a Superhost",
//         superHostDis: " Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.",
//         hotelInfo: "It's newly constructed 8 storied building maintaining building code by a locally famous architect. Enough light and natural air are playing here. The place (apartment) is calm and noise free. You'll love my place for its lovely and bright look comfortable stay.",
//         countryInfo: "Pakistan is a beautiful country. Home to 108 peaks above 7,000 meters, including K2, the south Asian country's mountain scenery is stunning. From the lively cities like Islamabad and Lahore to the beautiful valleys in the north, Pakistan is a perfect place for a unique getaway.",
//         countryMoreInfo: "Pakistan,[c] officially the Islamic Republic of Pakistan,[d] is a country in South Asia. It is the world's fifth-most populous country with a population exceeding 212.2 million, and has the world's second-largest Muslim population. Pakistan is the 33rd-largest country by area, spanning 881,913 square kilometres (340,509 square miles). It has a 1,046-kilometre (650-mile) coastline along the Arabian Sea and Gulf of Oman in the south and is bordered by India to the east, Afghanistan to the west, Iran to the southwest, and China to the northeast. It is separated narrowly from Tajikistan by Afghanistan's Wakhan Corridor in the northwest, and also shares a maritime border with Oman Pakistan is the site of several ancient cultures, most notably the 8,500-year-old Neolithic site of Mehrgarh, the oldest in South Asia,[14] and the Bronze Age Indus Valley Civilisation, the most extensive of the civilisations of the Old World.[15][16] The region of Pakistan was the realm of empires and dynasties, including the Archaemenid; briefly that of Alexander the Great; the Seleucid, Maurya, Kushan, the Gupta;[17] the Umayyad Caliphate in its southern regions, the Ghaznavids, the Delhi Sultanate, the Mughals,[18] the Durrani Empire, the Sikh Empire (in the Punjab region), East India Company rule, and, most recently, the British Indian Empire from 1858 to 1947."

//     }, {
//         id: 5,
//         country: "malaysia",
//         homeTitle: "Entre home",
//         homeDis: "you'll have the condominium to yourself.",
//         selfTitle: "Self check-in",
//         selfDis: "you can check in with the doorman.",
//         sparklingTitle: "Sparkling clean",
//         sparklingDis: "10 recent guests said this place was sparkling clean.",
//         superHost: "Rowdra is a Superhost",
//         superHostDis: " Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.",
//         hotelInfo: "It's newly constructed 7 storied building maintaining building code by a locally famous architect. Enough light and natural air are playing here. The place (apartment) is calm and noise free. You'll love my place for its lovely and bright look comfortable stay.",
//         countryInfo: "Malaysia has so much to offer: amazing cuisine, stunning national parks, picturesque beaches, world-renowned aquatic life, rich history, and a vibrant culture. In my opinion, this country should be a top priority on your next globetrotting adventure.",
//         countryMoreInfo: "Malaysia is a Southeast Asian country occupying parts of the Malay Peninsula and the island of Borneo. It's known for its beaches, rainforests and mix of Malay, Chinese, Indian and European cultural influences. The capital, Kuala Lumpur, is home to colonial buildings, busy shopping districts such as Bukit Bintang and skyscrapers such as the iconic, 451m-tall Petronas Twin Towers. "

//     }, {
//         id: 6,
//         country: "new york",
//         homeTitle: "Entre home",
//         homeDis: "you'll have the condominium to yourself.",
//         selfTitle: "Self check-in",
//         selfDis: "you can check in with the doorman.",
//         sparklingTitle: "Sparkling clean",
//         sparklingDis: "10 recent guests said this place was sparkling clean.",
//         superHost: "Rowdra is a Superhost",
//         superHostDis: " Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.",
//         hotelInfo: "It's newly constructed 9 storied building maintaining building code by a locally famous architect. Enough light and natural air are playing here. The place (apartment) is calm and noise free. You'll love my place for its lovely and bright look comfortable stay.",
//         countryInfo: "New York is a beautiful state. From sweeping, scenic mountain vistas and crystal clear, tranquil lakes to revered historic mansions and stunning man-made monuments, every county in the state has something beautiful to feast your eyes on.",
//         countryMoreInfo: "New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that’s among the world’s major commercial, financial and cultural centers. Its iconic sites include skyscrapers such as the Empire State Building and sprawling Central Park. Broadway theater is staged in neon-lit Times Square"

//     }, {
//         id: 7,
//         country: "france",
//         homeTitle: "Entre home",
//         homeDis: "you'll have the condominium to yourself.",
//         selfTitle: "Self check-in",
//         selfDis: "you can check in with the doorman.",
//         sparklingTitle: "Sparkling clean",
//         sparklingDis: "10 recent guests said this place was sparkling clean.",
//         superHost: "Rowdra is a Superhost",
//         superHostDis: " Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.",
//         hotelInfo: "It's newly constructed 10 storied building maintaining building code by a locally famous architect. Enough light and natural air are playing here. The place (apartment) is calm and noise free. You'll love my place for its lovely and bright look comfortable stay.",
//         countryInfo: "The one thing France has is a lot of beautiful places with such variety; the Alps, the mountain top villages, the French Riviera, the Pyrenees, the country side and villages of Provence, Ancient sites such as Pont du Gard, Gorges du Verdon which is Europes largest, old ruins of castles in the Dordogne and the preserved ...",
//         countryMoreInfo: "France, in Western Europe, encompasses medieval cities, alpine villages and Mediterranean beaches. Paris, its capital, is famed for its fashion houses, classical art museums including the Louvre and monuments like the Eiffel Tower. The country is also renowned for its wines and sophisticated cuisine. Lascaux’s ancient cave drawings, Lyon’s Roman theater and the vast Palace of Versailles attest to its rich history."

//     }, {
//         id: 8,
//         country: "canada",
//         homeTitle: "Entre home",
//         homeDis: "you'll have the condominium to yourself.",
//         selfTitle: "Self check-in",
//         selfDis: "you can check in with the doorman.",
//         sparklingTitle: "Sparkling clean",
//         sparklingDis: "12 recent guests said this place was sparkling clean.",
//         superHost: "Rowdra is a Superhost",
//         superHostDis: " Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.",
//         hotelInfo: "It's newly constructed 8 storied building maintaining building code by a locally famous architect. Enough light and natural air are playing here. The place (apartment) is calm and noise free. You'll love my place for its lovely and bright look comfortable stay.",
//         countryInfo: "The expanse of Canada's natural beauty, from mountains and glaciers to secluded lakes and forests, is almost unparalleled worldwide. ... Canada has cosmopolitan cities that are clean, safe, friendly, and multicultural. In fact, Canada repeatedly is lauded as one of the world's most livable countries.",
//         countryMoreInfo: "Canada is a country in the northern part of North America. Its ten provinces and three territories extend from the Atlantic to the Pacific and northward into the Arctic Ocean, covering 9.98 million square kilometres, making it the world's second-largest country by total area"

//     }, {
//         id: 9,
//         country: "india",
//         homeTitle: "Entre home",
//         homeDis: "you'll have the condominium to yourself.",
//         selfTitle: "Self check-in",
//         selfDis: "you can check in with the doorman.",
//         sparklingTitle: "Sparkling clean",
//         sparklingDis: "10 recent guests said this place was sparkling clean.",
//         superHost: "Rowdra is a Superhost",
//         superHostDis: " Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.",
//         hotelInfo: "It's newly constructed 7 storied building maintaining building code by a locally famous architect. Enough light and natural air are playing here. The place (apartment) is calm and noise free. You'll love my place for its lovely and bright look comfortable stay.",
//         countryInfo: "(CNN) — India might just be the most colorful country in the world. It's a land of otherworldly landscapes for travel -- from stunning lakes and endless rolling plains to the snow-capped Himalayas in the north. It's also home to wild festivals, romantic mausoleums and some of the most hectic cities in the world.",
//         countryMoreInfo: "India (Hindi: Bhārat), officially the Republic of India (Hindi: Bhārat Gaṇarājya),[23] is a country in South Asia. It is the second-most populous country, the seventh-largest country by land area, and the most populous democracy in the world. Bounded by the Indian Ocean on the south, the Arabian Sea on the southwest, and the Bay of Bengal on the southeast, it shares land borders with Pakistan to the west;[f] China, Nepal, and Bhutan to the north; and Bangladesh and Myanmar to the east. In the Indian Ocean, India is in the vicinity of Sri Lanka and the Maldives; its Andaman and Nicobar Islands share a maritime border with Thailand and Indonesia."

//     }, {
//         id: 10,
//         country: "netherlands",
//         homeTitle: "Entre home",
//         homeDis: "you'll have the condominium to yourself.",
//         selfTitle: "Self check-in",
//         selfDis: "you can check in with the doorman.",
//         sparklingTitle: "Sparkling clean",
//         sparklingDis: "14 recent guests said this place was sparkling clean.",
//         superHost: "Rowdra is a Superhost",
//         superHostDis: " Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.",
//         hotelInfo: "It's newly constructed 5 storied building maintaining building code by a locally famous architect. Enough light and natural air are playing here. The place (apartment) is calm and noise free. You'll love my place for its lovely and bright look comfortable stay.",
//         countryInfo: "The Netherlands is tiny country gone big! With windmills and tulips they have made a fortune, bursting with a beauty all around the country, lighting itself up next to whole Europe, outstanding.",
//         countryMoreInfo: "The Netherlands (Dutch: Nederland [ˈneːdərlɑnt] (About this soundlisten)), informally Holland,[13] is a country primarily located in Western Europe and partly in the Caribbean. It is the largest of four constituent countries of the Kingdom of the Netherlands.[14][15][16] In Europe, the Netherlands consists of twelve provinces, bordering Germany to the east, Belgium to the south, and the North Sea to the northwest, with maritime borders in the North Sea with those countries and the United Kingdom.[17] In the Caribbean, it consists of three special municipalities: the islands of Bonaire, Sint Eustatius and Saba.[h] The country's official language is Dutch, with West Frisian as a secondary official language in the province of Friesland, and English and Papiamento as secondary official languages in the Caribbean Netherlands.[1] Dutch Low Saxon and Limburgish are recognised regional languages (spoken in the east and southeast respectively), while Sinte Romani and Yiddish are recognised non-territorial languages.[1]"

//     }, {
//         id: 11,
//         country: "oman",
//         homeTitle: "Entre home",
//         homeDis: "you'll have the condominium to yourself.",
//         selfTitle: "Self check-in",
//         selfDis: "you can check in with the doorman.",
//         sparklingTitle: "Sparkling clean",
//         sparklingDis: "10 recent guests said this place was sparkling clean.",
//         superHost: "Rowdra is a Superhost",
//         superHostDis: " Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.",
//         hotelInfo: "It's newly constructed 7 storied building maintaining building code by a locally famous architect. Enough light and natural air are playing here. The place (apartment) is calm and noise free. You'll love my place for its lovely and bright look comfortable stay.",
//         countryInfo: "Oman is an exciting and welcoming year-round destination of rich history and diverse landscapes. It's a land of towering desert dunes, palm-lined beaches and lush verdant mountains, where ancient character meets modern comfort",
//         countryMoreInfo: "Oman (/oʊˈmɑːn/ (About this soundlisten) oh-MAHN; Arabic: عُمَان‎ ʿUmān [ʕʊˈmaːn]), officially the Sultanate of Oman (Arabic: سلْطنةُ عُمان‎ Salṭanat(u) ʻUmān), is a country on the southeastern coast of the Arabian Peninsula in Western Asia and the oldest independent state in the Arab world.[8][9] Located in a strategically important position at the mouth of the Persian Gulf, the country shares land borders with the United Arab Emirates to the northwest, Saudi Arabia to the west, and Yemen to the southwest, and shares marine borders with Iran and Pakistan. The coast is formed by the Arabian Sea on the southeast and the Gulf of Oman on the northeast. The Madha and Musandam exclaves are surrounded by the UAE on their land borders, with the Strait of Hormuz (which it shares with Iran) and the Gulf of Oman forming Musandam's coastal boundaries."

//     }, {
//         id: 12,
//         country: "lebanon",
//         homeTitle: "Entre home",
//         homeDis: "you'll have the condominium to yourself.",
//         selfTitle: "Self check-in",
//         selfDis: "you can check in with the doorman.",
//         sparklingTitle: "Sparkling clean",
//         sparklingDis: "16 recent guests said this place was sparkling clean.",
//         superHost: "Rowdra is a Superhost",
//         superHostDis: " Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.",
//         hotelInfo: "It's newly constructed 9 storied building maintaining building code by a locally famous architect. Enough light and natural air are playing here. The place (apartment) is calm and noise free. You'll love my place for its lovely and bright look comfortable stay.",
//         countryInfo: "Lebanon is a beautiful and geographically varied country, with the Mount Lebanon mountain range crossing the country from North to South, the Mediterranean Sea along the West coast offering sumptuous sunsets and exceptional panoramas, vegetation as diverse as it is lush, delicious fruit and vegetables in abundance, and .",
//         countryMoreInfo: "Lebanon (/ˈlɛbənɒn, -nən/ (About this soundlisten)),[10] officially known as the Lebanese Republic,[nb 3] is a country in the Levant region of Western Asia, and the transcontinental region of the Middle East.[11][12][13][14] It is bordered by Syria to the north and east and Israel to the south, while Cyprus lies west across the Mediterranean Sea. Lebanon's location at the crossroads of the Mediterranean Basin and the Arabian hinterland has contributed to its rich history and shaped a cultural identity of religious and ethnic diversity.[15] At just 10,452 km2 (4,036 mi2), it is one of the smallest recognized sovereign states in the Asian continent.[16][17] The official language, Arabic, is the most common language spoken by the citizens of Lebanon.[nb 4]The earliest evidence of civilization in Lebanon dates back more than seven thousand years, predating recorded history.[18] Lebanon was home to the Phoenicians, a maritime culture that flourished for almost three thousand years (c. 3200–539 BC). In 64 BC, the Roman Empire conquered the region, and eventually became one of its leading centers of Christianity. The Mount Lebanon range saw the emergence of a monastic tradition known as the Maronite Church. As the Arab Muslims conquered the region, the Maronites held onto their religion and identity. However, a new religious group, the Druze, established themselves in Mount Lebanon as well, generating a religious divide that has lasted for centuries. During the Crusades, the Maronites re-established contact with the Roman Catholic Church and asserted their communion with Rome. These ties have influenced the region into the modern era."

//     },
// ];

const RoomDetail = () => {
    const [roomInfo, setRoomInfo] = useState(null);
    if (roomInfo) {
        const price_review = { price: roomInfo.price, review: roomInfo.review, img: roomInfo.img };
        sessionStorage.setItem("priceAndReview", JSON.stringify(price_review));
    }
    const [serviceAndCountryInfo, setServiceAndCountryInfo] = useState(null);
    const [readMoreSpace, setReadMoreSpace] = useState(null);
    const destination = JSON.parse(sessionStorage.getItem('countryAndCity'));
    const countryName = destination[0].country;

    // console.log(serviceAndCountryInfo);

    // post service And Country Info
    // useEffect(() => {
    //     fetch('http://localhost:4000/serviceAndCountry', {
    //         method: 'POST',
    //         headers: { 'content-type': 'application/json' },
    //         body: JSON.stringify(serviceAndCountryInfo)
    //     })
    //         .then(result => console.log(result));
    // }, []);

    const { id } = useParams()
    useEffect(() => {
        fetch(`http://localhost:4000/roomDetail${id}`)
            .then(res => res.json())
            .then(result => {
                if (result) {
                    const checkout = result[0].rooms.find(item => item.id == id);
                    setRoomInfo(checkout);
                }

            })
    }, [id]);

    useEffect(() => {
        fetch(`http://localhost:4000/specificCountryInfo${countryName}`)
            .then(res => res.json())
            .then(result => setServiceAndCountryInfo(result))
    }, [countryName]);

    return (
        <>
            <DivisionNavbar />
            <div className=" roomDetail_content">
                {
                    roomInfo ?
                        <Container fluid>
                            <Row>
                                <Col className="pr-0">
                                    <img src={roomInfo.building} className="img-fluid roomAndBed" alt="" />
                                </Col>
                                <Col className="pl-0">
                                    <img src={roomInfo.img} className="img-fluid roomAndBed" alt="" />
                                </Col>
                            </Row>
                        </Container> : 'loading'
                }
                <Container className='pt-3 pb-5 mb-4'>
                    <Row>
                        <Col>
                            <>
                                {
                                    roomInfo ? <>
                                        <div className="d-flex border-bottom pb-2">
                                            <div>
                                                <h2>{roomInfo.title}</h2>
                                                <p className='m-1 room_item room_list'>{destination && destination[0].city}, {destination && destination[0].country}</p>
                                                <p className="m-1 room_item">{roomInfo.GuestsAndRoomDetail}</p>
                                            </div>
                                            <div className="pl-4">
                                                <img className="img-fluid rounded-circle" src={rowdra} alt="" width="60px" />
                                                <h5 className="self_check">Rowdra</h5>
                                            </div>
                                        </div>
                                    </> : ''
                                }

                                {
                                    serviceAndCountryInfo ? <div className="mt-4">
                                        <div className="border-bottom pb-2">
                                            <div className="pt-3">
                                                <h5>
                                                    <FontAwesomeIcon className="mr-3 service" icon={faHome} />
                                                    <span className="room_item">{serviceAndCountryInfo[0].homeTitle}</span>
                                                </h5>
                                                <p className="room_item room_list space">{serviceAndCountryInfo[0].homeDis}</p>
                                            </div>
                                            <div className="pt-3">
                                                <h5>
                                                    <FontAwesomeIcon className="mr-3 service" icon={faCheckSquare} />
                                                    <span className="room_item">{serviceAndCountryInfo[0].selfTitle}</span>
                                                </h5>
                                                <p className="room_item room_list space">{serviceAndCountryInfo[0].selfDis}</p>
                                            </div>
                                            <div className="pt-3">
                                                <h5>
                                                    <FontAwesomeIcon className="mr-3 service" icon={faSprayCan} />
                                                    <span className="room_item">{serviceAndCountryInfo[0].sparklingTitle}</span>
                                                </h5>
                                                <p className="room_item room_list space">{serviceAndCountryInfo[0].sparklingDis}</p>
                                            </div>
                                            <div className="pt-3">
                                                <h5>
                                                    <FontAwesomeIcon className="mr-3 service" icon={faUser} />
                                                    <span className="room_item">{serviceAndCountryInfo[0].superHost}</span>
                                                </h5>
                                                <p className="room_item room_list space">{serviceAndCountryInfo[0].superHostDis}</p>
                                            </div>
                                        </div>
                                        <div className="pt-3">
                                            <p className="room_item room_list">{serviceAndCountryInfo[0].hotelInfo}</p>
                                            <p className="room_item room_list">{serviceAndCountryInfo[0].countryInfo}</p>

                                            <Link
                                                className="pt-3 read_more"
                                                style={{ cursor: 'pointer' }}
                                                onClick={() => setReadMoreSpace(!readMoreSpace)}
                                            >
                                                Read more about the space
                                                {
                                                    readMoreSpace ? <FontAwesomeIcon className="ml-2 mt-2" icon={faChevronUp} /> : <FontAwesomeIcon className="ml-2 mt-2" icon={faChevronDown} />
                                                }
                                            </Link>

                                            {
                                                readMoreSpace && <div className="pt-4">
                                                    <p className="room_item room_list">{serviceAndCountryInfo[0].countryMoreInfo}</p>
                                                </div>
                                            }
                                            <div className="pt-5">
                                                <h5>Reviews</h5>
                                                <h6 className="review_content">
                                                    <FontAwesomeIcon icon={faStar} className="rooms_reviewIcon mr-2" />
                                                    {roomInfo && roomInfo.review + "Reviews"}
                                                </h6>
                                            </div>
                                        </div>

                                    </div> : 'loading...'
                                }
                            </>
                        </Col>
                        <Col>
                            <Card />
                        </Col>
                    </Row>
                </Container>

            </div>
        </>
    );
};

export default RoomDetail;



