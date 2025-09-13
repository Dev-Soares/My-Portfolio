import Navbar from "./components/navbar"



const App = () => {
 
  return (
    <main>
        <Navbar />
        <section className="min-h-screen w-full flex justify-center items-center">
              <div className="h-full w-full flex justify-center items-center flex-col text-white">
                <h2 className="text-4xl lg:text-5xl xl:text-6xl text-center">Olá! Eu sou</h2>
                <h1 className="text-5xl lg:text-6xl">Bernardo Soares</h1>
                <h2 className="text-4xl lg:text-5xl xl:text-6xl text-center">Desenvolvedor Front-end</h2>
              </div>
        </section>
        <section className=" min-h-fit w-full">
              <div className="flex flex-row">
                  <div className="h-full">
                    <img src="" alt="" />
                  </div>
                  <div className="h-full max-w-[60%] text-white">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum non in nostrum molestiae sapiente vero quia optio, similique voluptas rerum temporibus quis. Cum nobis deleniti, pariatur consectetur beatae totam veritatis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus voluptatibus sequi natus ducimus accusamus earum blanditiis asperiores ex aut assumenda, ratione hic in ab quasi voluptas enim, iusto laborum quos? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla asperiores consectetur alias quos rem, rerum sapiente obcaecati officia laborum harum ipsum voluptatibus maxime beatae tempora. Animi nesciunt consequatur cupiditate impedit?
                    </p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse voluptatem aspernatur minima numquam quae cum asperiores, deserunt voluptatibus facere. Laboriosam dolores excepturi magnam dolorum, ipsa exercitationem dolor eveniet nostrum autem.
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum non in nostrum molestiae sapiente vero quia optio, similique voluptas rerum temporibus quis. Cum nobis deleniti, pariatur consectetur beatae totam veritatis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus voluptatibus sequi natus ducimus accusamus earum blanditiis asperiores ex aut assumenda, ratione hic in ab quasi voluptas enim, iusto laborum quos? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla asperiores consectetur alias quos rem, rerum sapiente obcaecati officia laborum harum ipsum voluptatibus maxime beatae tempora. Animi nesciunt consequatur cupiditate impedit?
                    </p>

                  </div>
              </div>
        </section>
    </main>
  )
}

export default App
