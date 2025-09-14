import Navbar from "./components/navbar"
import CardTech from "./components/CardTech"
import Project from "./components/Project"
import { StarsBackground } from "./components/animate-ui/components/backgrounds/stars"




const App = () => {

  return (
    <StarsBackground >
      <Navbar />
      <main className=" pb-24">
        <section className="min-h-screen w-full flex flex-col justify-center items-center">
          <div className="h-full w-full justify-center items-center flex flex-col ">
              <img src="../public/profilePhoto.jpg" alt="My Photo" className="w-[60%] rounded-full border-2 " />
            </div>
          <div className="h-full w-full flex justify-center items-center flex-col text-white p-4 gap-2 ">     
            <div className="flex flex-col justify-start items-start border-l-2 p-4 ">
            <h1 className="text-4xl lg:text-6xl font-title-alt text-[var(--color-main)]">Bernardo Soares</h1>
              <h2 className="text-6xl lg:text-5xl xl:text-8xl font-title">Frontend</h2>
            <h2 className="text-6xl lg:text-5xl xl:text-8xl font-title text-[var(--color-main)]">Developer</h2>
            </div>
            <div className="flex flex-row justify-center items-center w-full gap-4 mt-2 font-title-sec">
                <a href="/public/cv" download className=" text-black bg-white p-2 rounded-lg text-lg">Baixar CV</a>
                <a href="/public/cv" download className=" text-black bg-[var(--color-main)] p-2 rounded-lg text-lg">Contato</a>
            </div>  
          </div>
          
        </section>
        <section className="min-h-fit w-full flex justify-center items-center flex-col my-8">
          <div className="w-auto h-auto p-4 rounded-2xl text-black font-title justify-center items-center flex text-4xl bg-white">
            <h2>Sobre <span >Mim</span></h2>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center w-[90%] h-full rounded-4xl p-8 gap-4">
            <div className="h-full w-full font-text mb-6 m-4 text-lg flex flex-col gap-4">
              <p className="text-white" >Sou Bernardo Soares, estudante de Sistemas de Informação e apaixonado por tecnologia e desenvolvimento de software. Atualmente, atuo como estagiário na área de TI da Prefeitura de Barra Mansa, onde tenho a oportunidade de aplicar na prática os conhecimentos adquiridos ao longo dos meus estudos, principalmente na parte de manutenção de hardware e serviços relacionados a rede.
              </p>
              <hr />
              <p className="text-[var(--color-main)]">
                Tenho interesse em desenvolvimento de sistemas, resolução de problemas e aprendizado contínuo. Busco constantemente aprimorar minhas habilidades técnicas e contribuir de forma proativa para os projetos em que estou envolvido. Estou sempre aberto a novos desafios que me permitam crescer como profissional e colaborar com soluções inovadoras na área de tecnologia.
              </p>
            </div>
          </div>
        </section>
        <section className="min-h-fit w-full my-8 p-6 flex flex-wrap gap-4 justify-center">
          <div className="w-auto h-auto p-4 rounded-2xl text-black font-title justify-center items-center flex text-4xl bg-[var(--color-main)] m-8">
            <h2>Tecnologias</h2>
          </div>
          <CardTech stackImg='reactIcon.png' stackName='React' borderColor='border-[var(--color-main)]' />
          <CardTech stackImg='jsIcon.png' stackName='JavaScript' />
          <CardTech stackImg='nodeIcon.png' borderColor='border-[var(--color-main)]' />
          <CardTech stackImg='cssIcon.png' stackName='CSS' />
          <CardTech stackImg='tailwindcssIcon.png' borderColor='border-[var(--color-main)]' />
          <CardTech stackImg='gitIcon.png' />
          <CardTech stackImg='htmlIcon.png' borderColor='border-[var(--color-main)]'  />


        </section>
        <section className="min-h-fit w-full p-6 mt-8 flex flex-wrap justify-center">
          <div className="w-auto h-auto p-4 rounded-2xl text-black font-title justify-center items-center flex text-4xl bg-white m-8">
            <h2>Projetos</h2>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <Project projectTitle='Pork' projectImg='porkProject.png' projectLink='' projectText='O seu mais novo Cofrinho Digital! Uma aplicação completamente funcional que tem um objetivo, simplificar a sua economia, contando com Landing Page, Telas de login e Registro, e funcionalidades internas como dashboards atualizadas em tempo real e registro de gastos e metas!' githubLink='' />
          <Project projectTitle='Teste' projectImg='porkProject.png' projectLink='' projectText='O seu mais novo Cofrinho Digital! Uma aplicação completamente funcional que tem um objetivo, simplificar a sua economia, contando com Landing Page, Telas de login e Registro, e funcionalidades internas como dashboards atualizadas em tempo real e registro de gastos e metas!' githubLink='' />
          </div>
          

        </section>
      </main>
    </StarsBackground>
  )
}

export default App
