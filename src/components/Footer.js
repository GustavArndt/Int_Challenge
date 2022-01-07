import React from 'react'

export default function Footer() {
    return (
        <div className='footer'>
            <div className='chart-gntr'>
                <button onClick={()=>alert('CHART GENERATED')}><span>GENERATE CHART</span></button>
            </div>
        </div>
    )
}
