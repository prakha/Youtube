import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../store/appSlice";
import CommentsContainer from "./CommentsContainer";


const WatchPage = () => {
    const dispatch = useDispatch();

    const [searchParams] = useSearchParams();

    useEffect(() => {
        dispatch(closeMenu());
    }, []);
    return(
        <div className="flex flex-col w-full">
        <div className="p-10 m-10 ">
            <iframe
                width="560"
                height= "315"
                src = {"https://www.youtube.com/embed/" + searchParams.get("v")}
                title = "Youtube Video Player"
                frameBorder="0"
                allow= "accelerometer; autoplay;clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen

            
            />
        </div>
        <CommentsContainer/>
        </div>
    )
};

export default WatchPage;