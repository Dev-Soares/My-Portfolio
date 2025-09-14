import Navbar from "./components/navbar"
import CardTech from "./components/CardTech"
import Project from "./components/Project"




const App = () => {

  return (
    <main>
      <Navbar />
      <section className="min-h-screen w-full flex justify-center items-center">
        <div className="h-full w-full flex justify-center items-center flex-col text-white p-4">
          <h2 className="text-4xl lg:text-5xl xl:text-6xl text-center">Olá! Eu sou</h2>
          <h1 className="text-5xl lg:text-6xl text-center">Bernardo Soares</h1>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl text-center">Desenvolvedor</h2>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl text-center">Front-end</h2>
        </div>
      </section>
      <section className="min-h-fit w-full flex justify-center items-center flex-col my-8">
        <div className="flex flex-col md:flex-row justify-center items-center w-[90%] h-full rounded-4xl p-8 gap-4">
          <div className="h-full w-full justify-center items-center flex flex-col">
            <img src="../public/profilePhoto.jpg" alt="My Photo" className="w-[90%] rounded-full" />
          </div>
          <div className="h-full w-full text-white mb-6 m-4 text-lg">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum non in nostrum molestiae sapiente vero quia optio, similique voluptas rerum temporibus quis. Cum nobis deleniti, pariatur consectetur beatae totam veritatis. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </section>
      <section className="min-h-fit w-full my-8 p-6 flex flex-wrap gap-4 justify-center">
        <CardTech stackImg='reactIcon.png' stackName='React' />
        <CardTech stackImg='jsIcon.png' stackName='JavaScript' />
        <CardTech stackImg='nodeIcon.png' />
        <CardTech stackImg='cssIcon.png' stackName='CSS'/>
        <CardTech stackImg='tailwindcssIcon.png' />
        <CardTech stackImg='gitIcon.png' />
        <CardTech stackImg='htmlIcon.png' />
        

      </section>
      <section className="min-h-fit w-full p-6 my-8 flex flex-wrap justify-center">
        <Project projectTitle='Pork' projectImg='porkProject.png' projectLink='' projectText='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat officia quidem quos? Magni quibusdam error similique impedit, illum perspiciatis, aut quisquam praesentium amet officiis, iusto beatae! Nobis at qui molestiae!' githubLink=''/>
        
      </section>
    </main>
  )
}

export default App
