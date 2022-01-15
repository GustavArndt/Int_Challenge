import React from 'react'
import { chartCreator } from '../Test2'

import createData2, { createSpan, createStart } from './chart/CreateDataSets'

export default function Footer(props) {
    return (
        <div className='footer'>
            <div className='chart-gntr'>
            {/* <button onClick={()=>{
                console.log('chart generated')
                props.setXLimits(createSpan(props.events))
                props.setChartData(props.events)}}>GENERATE CHART</button> */}
                <button onClick={()=>{
                console.log('chart generated')
                
                /* props.setXLimits(createSpan(props.events)) */
                console.log('xLimits generated')
                props.setChartData(props.events)}}>GENERATE CHART</button>
                <button onClick={()=>{
                console.log('chart generated')
                createData2(props.events)
                chartCreator(createData2(props.events))    
            }
                }>TEST</button>
            
            </div>
            
        </div>
    )
}
