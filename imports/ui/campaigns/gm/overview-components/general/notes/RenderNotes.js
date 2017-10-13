import React from 'react';

export const RenderNotes = (props) => {
    console.log(props)
    return props.notes.map((note, index) => {
        return (
            <div key={index}>
                <h4>{note.note}</h4>
            </div>
        )
    })
}