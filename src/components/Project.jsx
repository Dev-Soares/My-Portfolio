

const Project = ({projectTitle, projectLink, projectText, githubLink}) => {
  return (
    <div className='w-[90%] md:w-[70%] lg:w-[45%] xl:w-[35%] border-[var(--color-main)] border-2 flex flex-col p-6 md:p-10 gap-8 md:gap-12 rounded-2xl shadow-lg shadow-purple-700'>
        <div className="flex justify-center items-center m-4">
            <h2 className="text-white text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-title">{projectTitle}</h2>
        </div>
        
        <div className="w-full flex justify-start items-center">
            <p className="text-lg md:text-2xl text-white font-text">{projectText}</p>
        </div>
        <div className="w-full h-full flex justify-around items-center font-title-sec">
            <a href={githubLink} className="bg-[var(--color-main)] text-lg md:text-2xl xl:text-3xl p-2 md:p-4 md:px-6 px-4 cursor-pointer rounded-4xl hover:bg-[var(--color-white)] transition-all hover:scale-105 duration-1000 " target="_blank">
                <span className=" ">GitHub</span></a>
            <a href={projectLink} className="bg-white text-lg md:text-2xl xl:text-3xl p-2 px-4 md:p-4 md:px-6 cursor-pointer rounded-4xl hover:bg-[var(--color-main)] transition-all hover:scale-105 duration-1000 " target="_blank">
                <span className=" ">Projeto</span></a>
        </div>

      
    </div>
  )
}

export default Project
