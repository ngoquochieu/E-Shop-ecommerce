import Error from "./Error"

function Test() {
    let err = {
        email:"Sai",
        pass:"Sai"
    }
    return (
        <section id="form">
            <div className="container">
                <div className="row">
                    <div className="col-sm-4 col-sm-offset-1">
                        <div className="login-form">
                            <ul>
                                {<Error err={err}/>}
                            </ul>
                            <h2>Login to your account</h2>
                            <form onSubmit>
                                <input type="email" placeholder="Email Address" name="email" onChange/>
                                <input type="password" placeholder="Password" name="pass"onChange />
                                <input type="tex" placeholder="Level" name="level"onChange/>
                                <span>
                                    <input type="checkbox" className="checkbox"/> 
                                    Keep me signed in
                                </span>
                                <button type="submit" className="btn btn-default">Login</button>
                            </form>
                        </div>
                    </div>
                    {/* <div className="col-sm-1">
                        <h2 className="or">OR</h2>
                    </div>
                    <div className="col-sm-4">
                        <div className="signup-form">
                            <h2>New User Signup!</h2>
                            <form action="#">
                                <input type="text" placeholder="Name"/>
                                <input type="email" placeholder="Email Address"/>
                                <input type="password" placeholder="Password"/>
                                <button type="submit" className="btn btn-default">Signup</button>
                            </form>
                        </div>
                    </div> */}
                </div>
            </div>
	    </section>
    )
}
export default Test