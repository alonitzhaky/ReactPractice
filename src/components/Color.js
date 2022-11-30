import React, { useState } from 'react'
import Select from 'react-select'

const Color = () => {
    let colors = [{
        value: 1,
        label: 'red'
    }, {
        value: 2,
        label: 'deepskyblue'
    }, {
        value: 3,
        label: 'green'
    }, {
        value: 4,
        label: 'yellow'
    },
    ]
    const [bgColor, setBgColor] = useState(colors.label)
    let backgroundColorChange = e => {setBgColor(e.label)}

    return (
        <div>
            <style>
                {'body {background-color: ' + bgColor + '}'}
            </style>
            <Select options={colors} onChange={backgroundColorChange}></Select>
            <br/>
            <center>
                <b>The background color is: {bgColor}</b>
            </center>
        </div>
    )
}

export default Color;