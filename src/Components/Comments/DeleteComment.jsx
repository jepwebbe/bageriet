import React, { useEffect, useState } from 'react'
import appService from '../App/Appservices/AppService'

const DeleteComment = (id) => {
    const [deleteCom, setDeleteCom] = useState("");
    
          const doDelete = async () => {
            try {
              const result = await appService.Remove("comments", id)
                setDeleteCom(result.data.item)
            }catch (error) {
              console.error(error);
            }
          }
        useEffect(() => {
            doDelete()
        })
  return (
    <button onClick={() => doDelete()}>X</button>
  ) 
}
export default DeleteComment