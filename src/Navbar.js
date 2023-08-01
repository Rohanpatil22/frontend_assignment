
import dashboard from './img/dashboardIcon.png';
import Assesment from './img/Assesment.png';
import library from './img/library.png';
import roundStatus from './img/Round_Status.png';

function Navbar(){

    return(
        <>
        <div className='pl-24 h-screen  w-1/6 pt-7  bg-white text-center'>
            <div className="p-15 border-1 border-current ">
                <img src={dashboard} alt="dashboard icon"></img>
            </div>
            <div className="my-5">
                <img src={Assesment} alt="Assesment icon"></img>
            </div>
            <div className="my-5">
                <img src={library} alt="library icon"></img>
            </div>
            <div>
                <img src={roundStatus} alt="roundstatus icon"></img>
            </div>
        </div>
        
        </>
    );
}

export default Navbar;