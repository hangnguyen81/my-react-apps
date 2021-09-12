import { useContext } from 'react'
import { Context } from '../photoContext'

import {getClass} from '../utils'
import Image from '../components/Images'

function Photos() {
    const {allPhotos} = useContext(Context)
    const images = allPhotos.map((photo,i) => {
        return <Image key={photo.id} img={photo} className={getClass(i)}/>
    })
    return (
        <main className="photos">
            {images}
        </main>
    )
}

export default Photos