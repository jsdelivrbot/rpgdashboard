export function addGMNote(note) {
    //Actions must return an object with a 'type' property
    return {
        type: 'NOTE_ADDED',
        payload: note,
    }
}