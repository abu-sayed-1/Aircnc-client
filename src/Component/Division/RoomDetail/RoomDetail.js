import React, { useEffect } from 'react';
import { useParams } from 'react-router';

const RoomDetail = () => {
    const { id } = useParams()
    console.log(id)
    // useEffect(() => {
    //     fetch(`http://localhost:4000/roomDetail${id}`)
    //         .then(res => res.json())
    //         .then(result => console.log(result))
    // }, [id])

    return (
        <div>
            <h1>this is room detail</h1>
        </div>
    );
};

export default RoomDetail;