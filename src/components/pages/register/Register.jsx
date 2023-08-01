import { useRef, useState } from 'react'
import '../register/register.css'


const Register = () => {
    const [email, setEmail] = useState('')
    const [password,setPassword] = useState('')

    const emailRef = useRef()
    const passwordRef = useRef()


    const handleStart = () => {
        setEmail(emailRef.current.value)
    }

    const handleFinish = () => {
        setPassword(passwordRef.current.value)
    }
    return (
        <div className="register">
            <div className="top">
                <div className="wrapper">

                    <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/220px-Netflix_2015_logo.svg.png" alt="" />
                    <button className="loginButton">
                        Sign In
                    </button>
                </div>
            </div>
            <div className="container">
                <h1>Unlimited Movies and Series</h1>
                <h2>Watch anywhere. Cancle anytime.</h2>
                <p>
                    Ready to watch? Enter your email to create or restart your membership.
                </p>
                {
                    !email ? (

                        <div className="input">
                            <input type="email" placeholder='email address' onClick={handleStart} ref={emailRef} />
                            <button className="registerButton">
                                Get Started
                            </button>
                        </div>
                    ) : (
                        <div lassName="input">
                            <input type="password" placeholder='password' onClick={handleFinish} ref={passwordRef} />
                            <button className="registerButton">
                             Start
                            </button>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Register