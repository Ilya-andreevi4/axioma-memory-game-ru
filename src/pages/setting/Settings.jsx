
import React from 'react'
import './settings.css'
const Settings = ({active, setActive, children}) => {
    return (
        <div className={active ? "modalSettings active" : "modalSettings"} onClick={() => setActive(false)}>
            <div className={active ? "modalContent active" : "modalContent"} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export {Settings}
