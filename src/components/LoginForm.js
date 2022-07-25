import { Link } from 'react-router-dom';
import React , {useState} from 'react'

const LoginForm = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const handleClick = () => {
      alert("Email: " + email + "\n" + "Password:" + password);
    };
  
    const handleOnChangeE = (event) => {
      setEmail(event.target.value);
    };
    const handleOnChangeP = (event) => {
      setPassword(event.target.value);
    };
  return (
    <>
      <form>
          <div className="mb-3 ">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              onChange={handleOnChangeE}
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-2">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              id="password"
              onChange={handleOnChangeP}
            />
          </div>
          <div className="mb-2 form-check">
            <input type="checkbox" className="form-check-input" id="check" />
            <label className="form-check-label" htmlFor="check">
              Check me out
            </label>
          </div>
          <div className="mb-2" style={{ alignItem: "right" , justifyContent: "right",display:"flex"}}>
            <Link to="/forgetPassword" >Forgot password? </Link>
          </div>
          <button
            type="submit"
            className="btn btn-secondary  " 
            onClick={handleClick}
          >
            Submit
          </button>
        </form>
    </>
  )
}

export default LoginForm
