import React, { useEffect } from 'react';
import './home.css'; // Import your CSS file

function Home() {
    useEffect(() => {
        const background = document.querySelector('.background');

        const handleScroll = () => {
            const scrollY = window.scrollY;

            if (scrollY !== 0) {
                background.style.backgroundPosition = `calc(50% + ${scrollY}px) calc(50% + ${scrollY}px)`;
            } else {
                background.style.backgroundPosition = '';
            }
        };

        // Add scroll event listener when the component mounts
        document.addEventListener('scroll', handleScroll);

        // Cleanup the event listener when the component unmounts
        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, []); // Empty dependency array to run the effect only once

    return (

    <div className="background">
        <br/>
            <span>See the Good</span>


    </div>
    );
}

export default Home;
