import React from 'react'
export default function Header() {
return (
    <div>
        <nav className="navbar navbar-expand-lg bg-dark justify-content-center">
            <div className="container-fluid">
                <ul className="nav navbar-nav">
                    <li className="active">
                    <a href="/" style={{textDecoration:'none',color:'white',margin:'30px'}}> <span
                    className="display-6">Home </span></a></li>
                    <li><a href="/Login" style={{textDecoration:'none',color:'white',margin:'30px'}}><span
                    className="display-6">Login </span></a></li>
                </ul>
            </div>
        </nav>
    </div>
)
}
