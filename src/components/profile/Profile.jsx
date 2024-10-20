import { useNavigate } from 'react-router-dom';
import profileImg from '../..//assets/guru.png'
import '../../components/profile/Profile.css'

const Profile = () => {


    // submit button handling
    const navigate = useNavigate();

    const handleButtonNext = (e) =>{
        e.preventDefault();
        navigate('/card');
    }
  return (
    <div className="profile-container">
        <div className="profile-content">
            <div className="profile-title">
                <h1>Profile Details</h1>
                <img src={profileImg} alt="profile-img" />
            </div>
            <div className="profile-form">
                <form className='form2-box'>
                    <label>First Name</label>
                    <input type="text" />
                    <label>Last Name</label>
                    <input type="text" />
                    <label>Contact Number</label>
                    <input type="phone" />
                    <div className="form-btn">
                        <button type='submit' className='btn-1'>Submit</button>
                        <button type='submit' className='btn-next' onClick={handleButtonNext}>Next</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Profile