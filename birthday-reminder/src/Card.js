export default function Card({person}){
    const currentYear = new Date().getFullYear();
    return(       
        <div className="birthday-card">
            <img className='birthday-ava' src={person.ava} alt='ava of person'/>
            <div className='birthday-info'>
                <h4 className='birthday-name'>{person.name}</h4>
                <p>{person.dob}</p>
                <p>{currentYear - Number(person.dob.slice(6,10))} years old</p>
                <button className='btn'>Send a wish</button>
            </div>
            
        </div>
    )
}