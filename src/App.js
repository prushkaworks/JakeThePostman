import './App.css';
import Column from './components/Column';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';


function App() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = dd + '.' + mm + '.' + yyyy;
    const [cards, setCards] = useState([
        {
            id: nanoid(),
            text: 'Hello',
            date: today
        },
        {
            id: nanoid(),
            text: 'World',
            date: today
        },
        {
            id: nanoid(),
            text: 'All',
            date: today
        }
    ])
    const [cards1, setCards1] = useState([{
      id: nanoid(),
      text: 'Hello',
      date: today
  },])
    const [cards2, setCards2] = useState([{
      id: nanoid(),
      text: 'Hello',
      date: today
  },])


    useEffect(() => {
      localStorage.setItem('react-cards-app-data', JSON.stringify(cards))
      localStorage.setItem('react-cards1-app-data', JSON.stringify(cards1))
      localStorage.setItem('react-cards2-app-data', JSON.stringify(cards2))
    }, [cards, cards1, cards2])

    useEffect(() => {
      const SavedCards = JSON.parse(
        localStorage.getItem('react-cards-app-data')
      )
      if (SavedCards) {
        console.log(SavedCards)
        setCards(SavedCards)
      }
      const SavedCards1 = JSON.parse(
        localStorage.getItem('react-cards1-app-data')
      )
      if (SavedCards1) {
        setCards1(SavedCards1)
      }
      const SavedCards2 = JSON.parse(
        localStorage.getItem('react-cards2-app-data')
      )
      if (SavedCards2) {
        setCards2(SavedCards2)
      }
    }, [])



    const AddCard = (text) => {
      console.log('Hello')
      var today = new Date();
      const newCard = {
        id: nanoid(),
        text: text,
        date: today.toLocaleDateString()
      }
      const newCards = [...cards, newCard];
      console.log(newCards)
      setCards(newCards)
    }

    const AddCard1 = (text) => {
      var today = new Date();
      const newCard = {
        id: nanoid(),
        text: {text}.text,
        date: today.toLocaleDateString()
      }
      const newCards = [...cards1, newCard];
      setCards1(newCards)
    }

    const AddCard2 = (text) => {
      var today = new Date();
      const newCard = {
        id: nanoid(),
        text: text,
        date: today.toLocaleDateString()
      }
      const newCards = [...cards2, newCard];
      setCards2(newCards)
    }

    const DeleteCard = (id) => {
      const NewCards = cards.filter(card => card.id !== id)
      setCards(NewCards)
    }
    const DeleteCard1 = (id) => {
      const NewCards = cards1.filter(card => card.id !== id)
      setCards1(NewCards)
    }
    const DeleteCard2 = (id) => {
      const NewCards = cards2.filter(card => card.id !== id)
      setCards2(NewCards)
    }

  return (
    <div className='container'>
      <Column cards={cards} name="To Do" cardhandler={AddCard} carddelete={DeleteCard}/>
      <Column cards={cards1} name="In Process" cardhandler={AddCard1} carddelete={DeleteCard1}/>
      <Column cards={cards2} name="Done" cardhandler={AddCard2} carddelete={DeleteCard2}/>
    </div>
  );
}

export default App;
