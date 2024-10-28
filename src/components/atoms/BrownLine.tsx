import React from 'react'

interface Props {
    height?: boolean,
}

const BrownLine = (height: Props) => {
    return (
        <div className={`border border-[#33333326] ${height ? 'h-full' : 'w-full'}`}></div>
    )
}

export default BrownLine