function MenuItem({item}){
    return(
        <>
            <div className="col-md-5 col-xl-2 my-2" >
                <img className="img-fluid border border-success border-2 rounded" 
                    src={item.img} alt="food" />
            </div>
            <div className="col-md-7 col-xl-4 my-2 ">
                <div className="d-flex justify-content-between border-bottom">
                    <p className="fw-bold">{item.title}</p>
                    <p className="py-0 text-success fw-bold">€{item.price}</p>
                </div>
                <p className="mt-3 text-secondary">{item.desc}</p>
            </div>
        </>
    )
}


export default function Menu({data}){   
  
    const listOfFood = data.map(item => <MenuItem key={item.id} item={item}/>)
    return(
        <div className='row my-5'>
            {listOfFood}
        </div>
    )
}