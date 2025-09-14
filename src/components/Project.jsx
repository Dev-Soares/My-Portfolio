

const Project = ({projectTitle, projectImg, projectLink, projectText, githubLink}) => {
  return (
    <div className='w-[90%] md:w-[70%] lg:w-[45%] border-white border-2 flex flex-col p-6 gap-8 md:gap-12 rounded-2xl'>
        <div className="flex justify-center items-center m-4">
            <h2 className="text-white text-2xl md:text-3xl">{projectTitle}</h2>
        </div>
        <div className="w-full flex justify-center items-center">
            <img src={projectImg} alt="Project Img" />
        </div>
        <div className="w-full flex justify-center items-center">
            <p className="text-center text-lg md:text-xl text-white">{projectText}</p>
        </div>
        <div className="w-full h-full flex justify-around items-center">
            <a href={githubLink} className="bg-white text-lg md:text-xl p-2 px-4 cursor-pointer rounded-2xl" target="_blank">
                <span className=" text-black">GitHub</span></a>
            <a href={projectLink} className="bg-white text-lg md:text-xl p-2 px-4 cursor-pointer rounded-2xl" target="_blank">
                <span className=" text-black">Projeto</span></a>
        </div>

      
    </div>
  )
}

export default Project
