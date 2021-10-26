import  { useState } from 'react';
import {AiTwotoneDelete, AiOutlineEdit} from 'react-icons/ai';

function App(){
  const [list, setList] = useState([]);
  const [singleItem,setSingleItem] = useState('');
  const [notification, setNotification] = useState(null);
  const [button, setButton] = useState('Add')
  const [editId, setEditId] = useState(null)


  //check this function later
  const displayMessage = (message,type='inform') => {
      setNotification({message,type})
      setTimeout(()=>{setNotification(null)},3000)
  }

  const handledAddItem = item =>{ 
    if (item.length ===0){
      displayMessage('Please add name of stuff you want to buy','error')
    }
    else {
      const newItem = {
        id: new Date().getTime().toString(),
        name: item
      }
      const newList = list.concat(newItem)  
      setList(newList);
      setSingleItem('')
      displayMessage('An item was added to shopping list')
    }
  }

  const handleDelSingleItem = id =>{
    const updateList = list.filter(item => item.id !== id)
    setList(updateList);
    displayMessage('An item was deleted from shopping list','error')
  }

  const handleDeleteAllItems = () => {
    displayMessage('Empty list','error')
    setList([]);
    setSingleItem('');
    setButton('Add');
  }

  const handleDisplayEditedItem = item =>{
    setSingleItem(item.name);
    setButton('Edit')
    setEditId(item.id)
  }

  const handledEdit = (editName,editId) =>{
    const updateList = list.map(itemOfList => {
      if (itemOfList.id === editId){
        return {...itemOfList, name: editName}
      }             
      else
        return itemOfList
   })
   setList(updateList);
   setSingleItem('');
   setButton('Add');
  }

  const Item = ({item}) =>{
    return(   
        <p className='item'>{item.name}
          <span>
            <AiOutlineEdit onClick={() => handleDisplayEditedItem(item)}/>
            <AiTwotoneDelete onClick={() => handleDelSingleItem(item.id)}/>
          </span>
        </p>     

    )
  }

  const Notification = ({notification}) =>{
    if (notification === null)
        return null
    else
        return (
            <p className={`inform-text ${notification.type}`}>
                {notification.message}
            </p>
        )
}

  return(
    <section className='container'>
      <h2 className='title'>Shopping list</h2>
      <div className='shopping-list-input'>
        <input className='input-text' 
          type='text'
          value={singleItem}
          onChange={(e) => setSingleItem(e.target.value)}
          placeholder='e.g milk, eggs, veggies'/>
          {button === 'Add' ?
            <button className='btn' onClick={() => handledAddItem(singleItem)}>{button}</button>
            :
            <button className='btn' onClick={() => handledEdit(singleItem,editId)}>{button}</button>
          }
        
      </div>
      <Notification notification={notification}/>
      {list.length !==0? list.map((item,i) => <Item key={i} item={item}/>) : null}
      {list.length !==0?<button className='btn' onClick={() => handleDeleteAllItems()}>Clear all Item</button>:null}
    </section>
  )
}

export default App;