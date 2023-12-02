import React  from 'react';
import './Cards.css'; // Import your CSS file

function Cards() {

    return (

              
            <div className="card-section">
                <div className="step-card">
                    <h3>Step 1</h3>
                    <p>Sign Up</p>
                </div>
                <div className="step-card">
                    <h3>Step 2</h3>
                    <p>Subscribe</p>
                </div>
                <div className="step-card">
                    <h3>Step 3</h3>
                    <p>Receive Newsletter</p>
                </div>
            </div>
    
    );
}

export default Cards;
