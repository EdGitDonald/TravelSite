import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore'
import React, {useEffect, useState} from 'react'
import './DestinationCard.css'
import { db } from '../../Config/FireBaseConfig'
import { useNavigate } from 'react-router-dom'




function DestinationCard() {

  const [desCard, setDesCard] = useState([]);

  const navigate = useNavigate()

    useEffect(() => {
        //create a varibale to reference the articles collection
        const articleRef = collection(db, "Destinations");

        getDocs(articleRef)
        .then ((res) =>{
          const destinations = res.docs.map(item => {
            return {id: item.id, ...item.data()};
        })
        console.log(destinations)
        setDesCard(destinations)
      })
        .catch((err) => console.log(err))
    },[])

    

    const destinationImg={
      // backgroundImage: `url(${desCard[0]?.Images[0]})`,
      // width: '80%',
      // height: '300px',
      // backgroundSize: 'cover',
      // backgroundPosition: "center",
      // backgroundRepeat: 'no-repeat',
      // position: 'relative',
      // borderRadius: '16px',
    }

    // style={destinationImg}
    // to={<MoreInfoPage des={item}/>}
    

  return (
    <div className='des-card-container'> 
      {
                desCard.map(item => (
                  <div key={item?.id} className='des-card'  onClick={() =>{navigate(`/MoreInfoPage/${item?.id}`)}} >
                    
                    <div className='des-header height'>
                    <p>{item?.PlaceName}</p>
                    <p>{item?.Continent}</p>
                    </div>
                    <div style={{   
                            backgroundImage: `url(${item?.Images[0]})`,
                            width: '80%',
                            height: '300px',
                            backgroundSize: 'cover',
                            backgroundPosition: "center",
                            backgroundRepeat: 'no-repeat',
                            position: 'relative',
                            borderRadius: '16px',
                               }} 
                          className='height'>
                      {/* <img className='des-img' src={item?.Images}></img> */}
                    </div>
                    <div className='height'>
                      <p>{item?.AvgFlightTimeUk}</p>
                      <p>{item?.Ocean}</p>
                    </div>



                   
                   </div>
                ))
            }

    </div>
  )
}
    

export default DestinationCard