import '../../components/home/Home.css'
import guruImg from '../../assets/guru.png'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    //Form handling
    const [formDisplayed, setFormDisplayed]= useState('firstForm');

    const handleSubmit = (e) =>{
        e.preventDefault();
        setFormDisplayed('secondForm');
    }

    // submit button handling
    const navigate = useNavigate();

    const handleSubmit2 = (e) =>{
        e.preventDefault();
        navigate('/profile');
    }
  return (
    <div className="home-container">
        <div className="home-content">
            <div className="home-left">
                <div className="login-page">
                    <h1>Log In</h1>
                    {formDisplayed === 'firstForm' ?(
                    <form onSubmit={handleSubmit} className='form-box'>
                        <label>Enter Mobile No.</label>
                        <input type="text"/>
                        <button type='submit'>Submit</button>
                    </form>) :(
                        <form onSubmit={handleSubmit2} className='form-box'>
                            <label>Enter OTP</label>
                            <input type="text"/>
                            <button type='submit'>Submit</button>
                        </form>)}
                </div>
            </div>
            <div className="home-right">
                <div className="right-content">
                    <p>पूजा पाठ हो या अनुष्ठान,
                    पंडित मिलना हुआ आसान।  </p>
                    <img src={guruImg} alt="guru-img" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home