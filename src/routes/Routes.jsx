import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import { ROUTE } from '../utils/routes'
import SingleNotice from '../components/SingleNotice'
import Notices from '../components/Notices'
import Photos from '../components/Photos'
import Contact from '../components/Contact'
import Payment from '../components/Payment'
import Answers from '../components/Answers'
import Contract from '../components/Contract'

const AppRoutes = () => {
  return (
    <Routes>
        <Route  index element={<Home/>}/>
        <Route path={ROUTE.NOTICE}  element={<SingleNotice />} />
        <Route path={ROUTE.NOTICES}  element={<Notices />} />
        <Route path={ROUTE.PHOTOS}  element={<Photos />} />
        <Route path={ROUTE.CONTRACT}  element={<Contract />} />
        <Route path={ROUTE.PAYMENT}  element={<Payment />} />
        <Route path={ROUTE.ANSWERS}  element={<Answers />} />
        <Route path={ROUTE.CONTACTS}  element={<Contact />} />


    </Routes>
  )
}

export default AppRoutes