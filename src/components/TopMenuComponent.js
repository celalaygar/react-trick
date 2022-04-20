import React, {   useState } from 'react'


function TopMenuComponent() {
    const [topTitle, settopTitle] = useState("Top Title");

    return (
        <div className='border border-secondary rounded'>
            Top Menu : {topTitle}
            <hr/>
        </div>
    )
}

export default TopMenuComponent
