import React from "react";
import { useParams } from 'react-router-dom';

export default function ProfilePage (props) {
    // get id from url params (router)
    const { id } = useParams();

    return (
        <div>
        <h1>Profile Page</h1>
        </div>
    );
}