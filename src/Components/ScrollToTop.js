import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {

    const [Down, setDown] = useState(false);

    const Move = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };

    const listenToScroll = () => {
        let height = 250;
        const window = document.body.scrollTop || document.documentElement.scrollTop;
        if (window > height) {
            setDown(true);
        }
        else {
            setDown(false);
        }
    }


    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        return () => window.removeEventListener("scroll", listenToScroll);
    });





    return (
        <>
            {
                Down && (
                    <div className="right text-end fixed-bottom" style={{ margin: '10px' }}>
                        <button type="button" className="btn btn-danger rounded-circle" onClick={Move}>
                            <FaArrowUp className="AiOutlineArrowUp" />
                        </button>
                    </div>
                )}

        </>
    );
};


export default ScrollToTop;
