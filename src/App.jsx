import Navbar from "./components/Navbar"
import CardTech from "./components/CardTech"
import Project from "./components/Project"
import { StarsBackground } from "./components/animate-ui/components/backgrounds/stars"
import ContactBox from "./components/ContactBox"
import Footer from "./components/Footer"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect} from "react"
import LoadingScreen from "./components/LoadingScreen"
import { useContext } from "react"
import { LoadingContext } from "./contexts/LoadingContext"

const App = () => {

  const { valorBarra } = useContext(LoadingContext)

  useEffect(() => {
    AOS.init({ once: true })
  }, [])

  return (
    valorBarra < 100 
    ? <LoadingScreen />
    : (
      <>
      <StarsBackground >
      <main >
          <Navbar />       
        <section className="min-h-screen w-full flex flex-col md:flex-row md:justify-around justify-center items-center mt-16">
          <div className="flex flex-col justify-center items-center md:flex-row md:justify-center md:gap-3 lg:gap-6">
            <img src="/profilePhoto.jpg" alt="My Photo" className="w-[60%] md:w-[30%] lg:w-[25%] xl:w-[20%] rounded-full  self-center md:mb-8 lg:mb-12 xl:mb-16 shadow-lg shadow-purple-500 " />
            <div className="h-full w-auto flex justify-center items-center flex-col text-white p-4 gap-2 ">
              <div
                className="flex flex-col justify-start items-start border-l-2 p-4 lg:px-8 ">
                <div data-aos="fade-right" data-aos-duration="1500" data-aos-easing="ease-in">
                  <h1 className="text-4xl lg:text-6xl font-title-alt text-[var(--color-main)]">Bernardo Soares</h1>
                  <h2 className="text-6xl lg:text-7xl xl:text-9xl font-title">Frontend</h2>
                  <h2 className="text-6xl lg:text-7xl xl:text-9xl font-title text-[var(--color-main)]">Developer</h2>
                </div>
              </div>
              <div data-aos="fade-right" data-aos-duration="1500" data-aos-easing="ease-in-out" data-aos-delay="200"
                className="flex flex-row justify-center items-center w-full gap-4 lg:gap-6 mt-2 xl:mt-6 font-title-sec h-auto">
                <a href="/cv.docx" download className=" text-black bg-white p-3 px-5 rounded-lg text-xl md:text-2xl lg:text-3xl lg:p-4 lg:px-6 h-full transition-all transform hover:scale-103 hover:bg-[var(--color-main)] duration-800">Baixar CV</a>
                <a href="https://wa.me/5524993092204?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços%20como%20Desenvolvedor." className=" text-black bg-[var(--color-main)] p-3 px-5 rounded-lg text-xl md:text-2xl lg:text-3xl lg:p-4 lg:px-6 h-full transition-all transform hover:scale-103 hover:bg-white duration-800" target="_blank">Contato</a>
              </div>
            </div>
          </div>
        </section>
        <section className="min-h-fit w-full flex justify-center items-center flex-col my-8 p-6">
          <div className="w-full h-auto py-4 rounded-2xl text-black font-title justify-center items-center flex text-4xl lg:text-5xl lg:py-5 bg-white lg:mb-16 xl:max-w-[85%] ">
            <h2>Sobre</h2>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center w-[90%] h-full rounded-4xl py-8 gap-4">
            <div className="h-full w-fit font-text my-6 text-xl md:text-2xl lg:text-3xl xl:text-4xl flex flex-col lg:flex-row gap-4 md:gap-6 justify-end items-center ">
              <img src="logo.png" alt="" className="w-[55%] md:w-[35%] lg:w-[24%]" />
              <p data-aos="fade-right" data-aos-duration="1500" data-aos-easing="ease-in-out"
               className="text-white md:max-w-[60%] border-l-4 p-4 px-8" >
                Sou Bernardo Soares, estudante de Sistemas de Informação e apaixonado por tecnologia e desenvolvimento de software. <span className="text-[var(--color-secondary)]"> Tenho interesse em desenvolvimento de sistemas, resolução de problemas e aprendizado contínuo. Busco constantemente aprimorar minhas habilidades técnicas e contribuir de forma proativa para os projetos em que estou envolvido.</span>
               
              </p>


            </div>
          </div>
        </section>
        <section className="min-h-fit w-full my-8 p-6 flex flex-col gap-4 justify-center items-center">
          <div className="w-full h-auto p-4 rounded-2xl text-black font-title justify-center items-center flex text-4xl bg-[var(--color-main)] m-8 lg:text-5xl lg:p-5 lg:mb-16 xl:max-w-[85%] ">
            <h2>Habilidades</h2>
          </div>
          <div className="flex flex-wrap gap-4 justify-center lg:my-6 xl:my-24">
            <CardTech stackImg='nodeIcon.png' borderColor='border-[var(--color-main)] hover:bg-[var(--color-main)] transition-color duration-1000 ease-in-out shadow-purple-600' delay="200" />
            <CardTech stackImg='jsIcon.png' stackName='JavaScript' borderColor="hover:bg-white transition-color duration-1000 ease-in-out shadow-white" delay="400" />
            <CardTech stackImg='reactIcon.png' stackName='React' borderColor='border-[var(--color-main)] hover:bg-[var(--color-main)] transition-color duration-600 shadow-purple-600 ' delay="600" />
            <CardTech stackImg='cssIcon.png' stackName='CSS' borderColor="hover:bg-white transition-color duration-1000 ease-in-out shadow-white" delay="800"/>
            <CardTech stackImg='tailwindcssIcon.png' borderColor='border-[var(--color-main)] hover:bg-[var(--color-main)] transition-color duration-1000 ease-in-out shadow-purple-600' delay="1000" />
            <CardTech stackImg='gitIcon.png' borderColor="hover:bg-white transition-color duration-1000 ease-in-out shadow-white" delay="1200"/>
            <CardTech stackImg='htmlIcon.png' borderColor='border-[var(--color-main)] hover:bg-[var(--color-main)] transition-color duration-1000 ease-in-out shadow-purple-600' delay="1400" />
          </div>



        </section>
        <StarsBackground >
          <section className=" bg-black min-h-fit w-full p-6  flex flex-col justify-center items-center gap-8">
            <div className="w-full h-auto p-4 rounded-2xl text-black font-title justify-center items-center flex text-4xl bg-white m-8 lg:text-5xl lg:p-5 lg:mb-16 xl:max-w-[85%] ">
              <h2>Projetos</h2>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-8 xl:gap-16">
              <Project projectTitle='Pork' projectLink='https://financepork.site/' projectText='O seu mais novo Cofrinho Digital! Uma aplicação completamente funcional que tem um objetivo, simplificar a sua economia, contando com Landing Page, Telas de login e Registro, e funcionalidades internas como dashboards atualizadas em tempo real e registro de gastos e metas!' githubLink='https://github.com/Dev-Soares/Pork' delay="200"/>
              <Project projectTitle='Teste' projectLink='' projectText='O seu mais novo Cofrinho Digital! Uma aplicação completamente funcional que tem um objetivo, simplificar a sua economia, contando com Landing Page, Telas de login e Registro, e funcionalidades internas como dashboards atualizadas em tempo real e registro de gastos e metas!' githubLink='' delay="400" />
            </div>


          </section>

          <section className="pb-34 bg-black min-h-fit w-full p-6  flex flex-col justify-center items-center gap-4">
            <div className="w-full h-auto p-4 rounded-2xl text-black font-title justify-center items-center flex text-4xl bg-[var(--color-main)] m-8 lg:text-5xl lg:p-5 lg:mb-16 xl:max-w-[85%] ">
              <h2>Contato</h2>
            </div>
            <div className="flex flex-wrap gap-4 justify-center items-center">
              <ContactBox contactIcon='/githubIcon.png' contactLink='https://github.com/Dev-Soares' delay="200" />
              <ContactBox contactIcon='/linkedinIcon.png' contactLink='https://www.linkedin.com/in/bernardo-soares-150096364/' delay="400" />
              <ContactBox contactIcon='/instagramIcon.png' contactLink="https://www.instagram.com/__soaresbernardo/" delay="600" />
              <ContactBox contactIcon='/emailIcon.png' contactLink="mailto:bernado.soares30@outlook.com?" delay="800" />
              <ContactBox contactIcon='/whatsappIcon.png' contactLink="https://wa.me/5524993092204?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços%20como%20Desenvolvedor." delay="1000" />
            </div>



          </section>
        </StarsBackground>

      </main>
      <Footer />
    </StarsBackground>
    </>
    )

    

  )
}

export default App
