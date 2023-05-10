import CardsList from "./CardsList"


const Column = ({ cards, name, cardhandler, carddelete }) => {
    return <div className="column">
            <div className="column-label">{name}</div><br/>
             <CardsList cards={cards} cardhandler={cardhandler} carddelete={carddelete}/>
           </div>
}

export default Column