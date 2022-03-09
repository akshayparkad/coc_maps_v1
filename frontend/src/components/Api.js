import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { listBases } from '../actions/baseActions'


export const Api = () => {

const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(listBases())
      }, [dispatch])


  return (
      <></>
  )
}
