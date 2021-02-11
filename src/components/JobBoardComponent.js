import React from 'react';

const JobBoardComponent = ({job},handleTagClick)=>{

    const tags = [job.role,job.level];
    if(job.languages){
        tags.push(...job.languages);
    }
    
    if(job.tools){
        tags.push(...job.tools);
    }

    return(<div className = {`flex flex-col bg-white shadow-md my-16 mx-10 p-6 
    rounded ${
        job.featured && 'border-l-4 border-blue-300 border-solid'
    } sm:flex-row`}>
        <div>
            <img className = '-mt-14 mb-4 w-20 h-20  sm:h-24 sm:w-24 sm:my-0' src = {job.logo} alt = {job.company}></img>
        </div>
        <div className = 'flex flex-col justify-between ml-4 '>
            <h3 className = 'font-bold text-blue-300'>
                {job.company}
                {job.isNew && (<span
                className ='bg-blue-900 text-blue-100 m-2 py-1 px-2 font-bold p-2 rounded-full uppercase text-sm'>New</span>)}
                {job.featured && (<span className = 'bg-gray-800 py-1 px-2 text-gray-50 font-bold p-2 rounded-full uppercase'>Featured</span>)}
            </h3>
            <h2 className = "font-bold  text-xl my-2 ">
                {job.position}
            </h2>
            <p className = 'text-gray-700'>
                {job.postedAt} . {job.contract} . { job.location}
            </p>
        </div>
        <div className = 'flex flex-wrap items-center mt-4 mx-4 pt-4 border-t border-gray-300 border-solid sm:ml-auto sm:border-0 sm:pt-0 sm:mt:0 '>
            {tags ?
             tags.map((tag)=>
             <span onClick ={ ()=> handleTagClick(tag)} className = 'text-blue-900 bg-blue-100 font-bold mr-4 mb-4 p-2 rounded sm:mb-0'>
                 {tag}
             </span>) : ''}
        </div>
    </div>
    )
}

export default JobBoardComponent;