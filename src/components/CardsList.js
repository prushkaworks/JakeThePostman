import Card from "./Card"
import AddNote from "./AddNote"

const CardsList = ({cards, cardhandler, carddelete}) => {
    return <div className="cards-list">
            {cards.map((card) => <Card id={card.id} text={card.text} date={card.date} carddelete={carddelete}/>)}
            <AddNote cardhandler={cardhandler}></AddNote>
           </div>
}

export default CardsList