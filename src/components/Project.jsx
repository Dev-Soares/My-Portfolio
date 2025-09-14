

const Project = ({projectTitle, projectImg, projectLink, projectText, githubLink}) => {
  return (
    <div className='w-[90%] md:w-[70%] lg:w-[45%] border-[var(--color-main)] border-2 flex flex-col p-6 gap-8 md:gap-12 rounded-2xl'>
        <div className="flex justify-center items-center m-4">
            <h2 className="text-white text-3xl md:text-3xl font-title">{projectTitle}</h2>
        </div>
        
        <div className="w-full flex justify-start items-center">
            <p className="text-lg md:text-xl text-white font-text">{projectText}</p>
        </div>
        <div className="w-full h-full flex justify-around items-center font-title-sec">
            <a href={githubLink} className="bg-[var(--color-main)] text-lg md:text-xl p-2 px-4 cursor-pointer rounded-4xl" target="_blank">
                <span className=" text-black">GitHub</span></a>
            <a href={projectLink} className="bg-white text-lg md:text-xl p-2 px-4 cursor-pointer rounded-4xl" target="_blank">
                <span className=" text-black">Projeto</span></a>
        </div>

      
    </div>
  )
}

export default Project
