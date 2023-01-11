import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import appService from '../../App/Appservices/AppService';

const NewBreadDetails = () => {
    const [newBread, setNewBread] = useState("");

    const { id } = useParams();

    useEffect(() => {
        const getData = async () => {
            try {
                const result = await appService.GetDetails("products", id);

                console.log(result); 
                setNewBread(result);


            } catch (error) {
                console.error(error)
            }
        };
        getData();
        console.log("nyt brød ", newBread)
    }, [id])
  return (
    <div></div>
  )
}

export default NewBreadDetails