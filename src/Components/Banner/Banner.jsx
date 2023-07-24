import React, {useEffect} from 'react'
import { collection, getDocs} from 'firebase/firestore'
import './Banner.css'
import { db } from '../../Config/FireBaseConfig'



function Banner() {

    useEffect(() => {
        //create a varibale to reference the articles collection
        const articleRef = collection(db, "Destinations");

        getDocs(articleRef)
        .then ((res) =>{
            console.log(res);
        })
        .catch((err) => console.log(err))
    },[])


  return (
    <div>Banner</div>
  )
}

export default Banner