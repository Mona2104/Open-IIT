import React, { useState } from 'react';

export default function AuthForm() {
    const [isFlights, setIsFlights] = useState(true);

    return (
        <div className='container'>
            <div className='form-container'>
                <div className='form-toggle'>
                    <button className={isFlights ? 'active' : ""} onClick={() => setIsFlights(true)} id="b1">My Bookings</button>
                    <button className={!isFlights ? 'active' : ""} onClick={() => setIsFlights(false)}>Flight Status</button>
                </div>
                {isFlights ? <>
                    <div className='form'>
                        <h3>Flights</h3>
                        <input type='text' placeholder='Origin' />
                        <input type='text' placeholder='Destination' />
                        <input type='text' placeholder='Number of passengers' />
                        <h3>Departure:</h3>
                        <input type='date' placeholder='Date'/>
                        <h3>Arrival:</h3>
                        <input type='date' placeholder='Date'/>
                        <button>Submit</button>
                        <div class="link-container">
    <a href="#" onClick={() => setIsFlights(false)}>Check Flight Status</a>
</div>
                    </div>
                </> : <>
                <div className='form'>
                        <h3>Flight Status</h3>
                        <h4>Flight Delay</h4>
                    </div>
                
                </>}
            </div>
        </div>
    );
}