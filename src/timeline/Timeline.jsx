import React, { useState, useEffect } from "react";
//import axiosConfig from '../app/axiosConfig';
import Reel from "./Reels/Reel";
import Suggestions from "./Suggestions";
import "./Timeline.css";
import { useUserContext } from "../features/userContext";


function Timeline() {
    const [reels, setReels] = useState([
        
        {
            user: "albaf",
            reelImage:
                "https://imgupscaler.com/images/samples/animal-after.webp",
            likes: 25,
            timestamp: "1d",
        },

        {
            user: "miryam_",
            reelImage:
                "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_640.jpg",            likes: 48,
            timestamp: "30min",
        },

        {
            user: "jazmin1",
            reelImage:
                "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg",            likes: 12,
            timestamp: "2h",
        },

        {
            user: "hackaboss",
            reelImage:
                "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",            likes: 30,
            timestamp: "3d",
        },
    ]);

    const { loginUser } = useUserContext();
    const currentUser = loginUser();

    /* useEffect(() => {
        axiosConfig.get("/api/reels")
            .then((response) => {
                setReels(response.data);
            })
            .catch((error) => {
                console.error("Error fetching reels:", error);
            });
    }, []); */

    return (
        <div className="timeline">
            <div className="timeline__left">
                <div className="timeline__reels">
                    {posts.map((reel) => (
                        <Reel
                        key={reel.id}
                        user={reel.user}
                        reelImage={reel.reelImage}
                        likes={reel.likes}
                        timestamp={reel.timestamp}
                        />
                    ))}
                </div>
            </div>
            <div className="timeline__right">
                <Suggestions />
            </div>
        </div>
    );
}

export default Timeline;