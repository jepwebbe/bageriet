import React from 'react'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import appService from '../../App/Appservices/AppService';


export const ProductDetails = () => {

    const [apiData, setApiData] = useState("");

    const { id } = useParams();

    useEffect(() => {
        const getData = async () => {
            try {
                const result = await appService.Get("products", id);

                console.log(result.data.item);
                setApiData(result.data.item);


            } catch (error) {
                console.error(error)
            }
        };
        getData();
    }, [id])

    return (
        <div>{apiData.title}</div>
    )
}
