import {Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'

function detailMan(){
    return(
        <div className="container">
            <Link to="/event/one">One</Link>  
            <Link to="/event/two">Two</Link>
      </div> 
    )
}
export default detailMan