import React from 'react'

export default function Panel(props) {
    function showPanel () {
        if (props.start === true) {
            return <div>
            <h3 >Latitude: ?</h3>
            <h3>Longitude: ?</h3>
            <h3>County: ?</h3>
            <h3>Town: ?</h3>
            </div>
     } else return null
    }
    return (
        <div>
            <div> {showPanel()}</div>

        </div>
    )
}
