
function capitalizeString(str){     
    return str.split(' ').map(s =>s[0].toUpperCase() + s.slice(1)).join(' ')   
}

export default function Category({cat, filterItem}){     
    const listOfButtons = cat.map((item,i) =>
        <button key={i} 
                className="btn btn-light text-success mx-2"
                onClick={()=>filterItem(item)}
        >{capitalizeString(item)}
        </button>)

    return(
        <div className='text-center'>
            {listOfButtons}
        </div>
    )
}