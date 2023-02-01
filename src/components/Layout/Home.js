import Header from "./Header"
import Footer from "./Footer"
import MenuLeft from "./MenuLeft"
function Home() {
    return(
        <>
            <Header/>
            <section>
                <div className='container'>
                    <div className='row'>
                        <div className="col-sm-3">
                          <MenuLeft/>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
          </>
    )
}
export default Home