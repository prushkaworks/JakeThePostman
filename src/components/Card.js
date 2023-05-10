import { MdDeleteForever } from 'react-icons/md'

const Card = ({id, text, date, carddelete}) => {
    return <div className="card">
        <span>{text}</span>
        {(date != null) ? <div className="card-footer">
            <small>{date}</small>
            <MdDeleteForever onClick={() => carddelete(id)} className="delete-icon" size='1.3em' />
        </div> : <div></div>}
        
    </div>
}

export default Card