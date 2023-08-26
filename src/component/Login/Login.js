import styles from './Login.scss';
import loginSevices from '../../sevices/loginSevices.js'
import { UserContext } from '../../context/UserContext.js';

import { useState,useContext } from "react";
import {  toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const [hidePass, setHidePass] = useState(true);

    const navigate = useNavigate();
    const { login } = useContext(UserContext);

    const handleClick = async () => {
        if (email && pass) {
            const res = await loginSevices(email, pass);
            if (res && res.token) {
                await login(email);

                localStorage.setItem('token', res.token);
                localStorage.setItem('email', email);

                toast.success('Log in successful');
                navigate("/");
            }
            else if (+res.status === 400) {
                toast.error(res.data.error);
            }
        }
    }
    



    return (
        <form className="col-12 col-sm-6 d-flex flex-column mx-auto my-5" >
           
            <h1 className="my-3 align-self-center">Login</h1>
            <div class="form-outline mb-4">
                <input type="email" id="form2Example1" class="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label class="form-label" htmlFor="form2Example1">Email address</label>
            </div>
            <div class="form-outline mb-4 pass">
                <input type={hidePass ? "password" : ""} id="form2Example2" class="form-control" value={pass} onChange={(e) => setPass(e.target.value)} />
                <span onClick={() => setHidePass(!hidePass)}>{hidePass ? <i class="fa-solid fa-eye-slash icon"></i> : <i class="fa-solid fa-eye icon" ></i>}</span>
                <label class="form-label" htmlFor="form2Example2">Password</label>
            </div>
            <button type="button" class=" btn-block mb-4 col-6 align-self-center" disabled={!(email && pass)} onClick={handleClick}>Sign in</button>
        </form>
    );
}

export default Login;