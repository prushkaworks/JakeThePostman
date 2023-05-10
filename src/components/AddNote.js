import { useState } from "react"

const AddNote = ({cardhandler}) => {

    const [cardText, setCardText] = useState('')
    const characterLimit = 200;
    const handleChange = (event) => {
        if (characterLimit - event.target.value.length >= 0) {
            setCardText(event.target.value)
        }
    }

    const handleSaveClick = () => {
        if (cardText.trim().length > 0) {
            cardhandler(cardText)
            setCardText('')
        }
    }

    return (
        <div className="card new">
            <textarea
            rows={8}
            cols={10}
            placeholder={'Type to add a card...'}
            value={cardText}
            onChange={handleChange}
            >  
            </textarea>
            <div className="card-footer">
                <small>{characterLimit - cardText.length} Remaining</small>
                <button className="save" onClick={handleSaveClick}>Save</button>
            </div>
        </div>
    )
}

export default AddNote