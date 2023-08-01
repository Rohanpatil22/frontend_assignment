import React from 'react';
import mobile from './img/mobile.png'
function Maincontaint(){

    return(
        <>
        <div className='bg-white w-screen rounded-2xl'>
            <div className='flex gap-10 items-center p-4 ml-4'>
                <div className='text-4xl text-[#1c4980] font-semibold'>Assesment</div>
                <div style={{borderLeft:"2px solid #DADCE0",height:"70px"}}></div>
                <div className='text-[#0073E6] text-2xl font-medium'>My Assesment</div>
                <div className='grow'><img className='ml-[1000px]' src={mobile}></img></div>
            </div>
            <div><hr style={{height:"2px",backgroundColor:"#DADCE0"}}/></div>
            <div className='mt-8 text-3xl text-[#1c4980] ml-8 font-normal'>Assesments Overview</div>
        </div>
        
        </>
    );
}

export default Maincontaint;
