// components/TawkMessenger.js
"use client";
import React, { useRef } from 'react';
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';

const TawkMessenger = () => {
  

  return (
    <div className="App">
            <TawkMessengerReact
                propertyId="property_id"
                widgetId="default"/>
        </div>
  );
};

export default TawkMessenger;
