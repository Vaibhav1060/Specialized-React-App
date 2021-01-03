  
import React from 'react';


export default function HeroDescription({hero,children}) {
    return (
        <div className={hero}>
            {children}
            
        </div>
    )
}