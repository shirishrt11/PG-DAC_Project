import React, { useEffect } from 'react'
import Main from './Main'
import Header from './Header'

import Footer from './Footer'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Sidebar from './Sidebar'

export default function AdminDashboard() {



    return (
        <div>
            <Header />
            <Sidebar />
            <Main />
            <Footer />
        </div>
    )

}
