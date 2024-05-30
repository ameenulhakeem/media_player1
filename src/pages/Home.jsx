import Add from '../components/Add';
import { Link } from 'react-router-dom';
import View from '../components/View';
import Category from '../components/Category';
import { useState } from 'react';

function Home() {
    const [uploadVideoStatus, setUploadVideoStatus] = useState({})
    return (
        <div >
            <div className='container d-flex justify-content-between align-items-center my-5'>
                <div className='add-videos'>
                    <Add setUploadVideoStatus={setUploadVideoStatus} />
                </div>

                <div>
                    <Link to={'/history'} style={{ textDecoration: "none", color: "white", fontSize: "25px", fontFamily:'-moz-initial'}}>
                      <button className='btn btn-secondary'>Watch History <i class="fa-solid fa-clock-rotate-left ms-2"></i></button>  
                    </Link>
                </div>
            </div>
            <div className='container d-flex justify-content-between  my-5 '> 
                <div className='container mb-5 border border-secondary rounded py-3 px-5'>
                    <h4 style={{fontFamily:'-moz-initial'}} >All Videos</h4>
                    <View uploadVideoStatus={uploadVideoStatus} />
                </div>
                <div className='mx-5 mb-5 '>
                    <h4 style={{fontFamily:'-moz-initial'}}>Categories</h4>
                    <Category />
                </div>
            </div>

        </div >
    )
}
export default Home;