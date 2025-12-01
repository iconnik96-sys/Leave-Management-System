import "../../assets/CSS/login.css"
import logo from "../../../src/assets/Images/Illustrations/leave.png"



function Login(){
    return(
         <>
   
        <div className="bg">
            <div className="outer-div rounded-4" data-aos="fade-up">
               <div className="inner-div text-center">
                    <div className="row flex">
                        <img src={logo} alt="" className="logo col-4 "/>
                        <h3 className="col-8">Leave <br /> Management <br /> System</h3>
                    </div>
                    <div> 
                        <input type="text" placeholder="Enter Your Email" className="rounded-pill mb-3 inp mt-5" /> <br />
                        <input type="password" placeholder="Enter password" className="rounded-pill inp mb-3"/> <br />
                        <div className="mb-2"><a href="" className="text-decoration-none ">Forget Password</a></div>
                        <button className="rounded-pill px-5 py-2 mb-3 btn">Login</button> <br />

                    </div>
               </div>
             </div>
        </div>

    </>
    );
}
export default Login;