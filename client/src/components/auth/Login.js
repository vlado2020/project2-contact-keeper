import React, {useState} from 'react'

const Login = () => {

const [user, setuser] = useState({
    email:'',
    password:'',
})

const {email, password} = user;

const onChange= e => setuser({
    ...user,
    [e.target.name] : e.target.value
})

const onSubmit= e=>{
    e.preventDefault();
    console.log('Login submited')
}
    return (
        <div className='form-container'>
            <h1>Account <span className='text-primary'>Login</span></h1>
            <form onSubmit={onSubmit}>
                                <div className='form-group'>
                    <label htmlFor="email">email</label>
                    <input type="email" name="email" value={email} onChange={onChange}/>
                </div>
                <div className='form-group'>
                    <label htmlFor="password">password</label>
                    <input type="password" name="password" value={password} onChange={onChange}/>
                </div>
               
                <input type="submit" value="Login" className="btn btn-primary btn-block"/>
            </form>
        </div>
    )
}

export default Login
