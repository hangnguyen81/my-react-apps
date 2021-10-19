import birthdayData from './data';
import Card from './Card';
import { useState } from "react";


const currentDate = new Date();
const currentDay = currentDate.getDate();
const currentMonth = currentDate.getMonth() + 1;

function checkBirthday(listOfDate){
  const listOfBirthday = []
  listOfDate.forEach(item => {
    const dob = item.dob;
    const day = Number(dob.slice(0,2));
    const month = Number(dob.slice(3,5));
    if (day === currentDay && month === currentMonth){
      listOfBirthday.push(item)
    }
  })
  return listOfBirthday 
}

function App() {
  const [birthdayList, setBirthdayList] = useState(checkBirthday(birthdayData))
 
      return (
        <>
        <div className="birthday-board-container">
          <h1 className='birthday-board-title'>Birthday reminder</h1> 
          <p className='birthday-board-subtitle'>{birthdayList.length} birthdays today</p>   
          { birthdayList.map(item => <Card key={item.id} person={item}/>)}
          <button className='btn btn-center' 
                  onClick={() => setBirthdayList([])}> 
            Clear All Reminder</button> 
        </div>
        </>
      );

      
}

export default App;
