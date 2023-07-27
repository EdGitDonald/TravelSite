import React , {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../../Config/FireBaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import DesImages from '../../Components/DesImages/DesImages';
import './MoreInfoPage.css'

function MoreInfoPage() {

    const { desId } = useParams();

    const [desDetails, setDesDetails] = useState({})

    useEffect(()=>{
        //set up reference to a single document
        const docRef = doc(db, "Destinations", desId)

        //getting doc with the id
        getDoc(docRef)
        .then((res) => {
            console.log(res.data())
             setDesDetails(res.data())
        })
        .catch((err) => console.log(err))

    }, [])



  return (
    <div className='info-container'>
        <div className='width info'>
        <div className='border'>
          <h1>{desDetails?.PlaceName}</h1>
          <img src="" alt="Flag"/>
        </div>
        <div className='border'>
          <p>{desDetails?.AvgFlightTimeUk}</p>
          <p>Flight img react icons</p>
        </div>
        <div className='border-2'>
            <p>Destination : {desDetails?.PlaceName}</p>
            <p>Continent : {desDetails?.Continent}</p>
            <p>Closest Ocean  : {desDetails?.Ocean}</p>
            <br/>
            <p>About : {desDetails?.Info}</p>
        </div>
        </div>
        <div className='width img'>
        {
            
                desDetails?.Images?.map((item) => {
                    return <DesImages image={item}/>

                })
                
        }
        </div>


    </div>
  )
}

export default MoreInfoPage