import React from 'react'
import UserLogin from '../components/UserLogin'
import UserRegister from '../components/UserRegister';



const LogReg = () => {
    return (
        <div className='container col-9 offset-3'>
            <div>
                <h2>Welcome Happy Tails Users!</h2>
                <h5>Please register or login if already a registered user!</h5>
            </div>
            <div className="row ">
                <div className='col d-flex justify-content-start'>
                    <UserRegister/>
                </div>
                <div className='col d-flex justify-content-start'>
                    <UserLogin/>
                </div>
            </div>
        </div>
    )
}

export default LogReg;