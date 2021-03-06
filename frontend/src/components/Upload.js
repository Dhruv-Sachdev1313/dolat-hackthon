import React,{ useState } from "react";
import './Upload.css';
import { useHistory } from "react-router-dom";

const axios = require('axios').default;

export default function Upload() {

  const history = useHistory();

  const initialValues = { name: "", github: "", pod: "", pname:"", proj:"", plink:"" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

    // const [github, setGithub] = useState("");
    // const [image, setImage] = useState(null)

    const submitForm = (event) => {

      console.log(formValues.github)
        event.preventDefault();
        const username = formValues.github
        axios.get(`https://api.github.com/users/${username}/orgs`)
         .then(function (response) {
         // handle success
           console.log(response);
           function verifyOrg(org) {
             return org.login === "MLH-Fellowship"
           }
            if (response.data.some(verifyOrg)) {
              console.log("You're in!")
              window.location.href="https://opensea.io/collection/mlhfellowship-grads"
              
              // Redirect to the nft page
            }
            else {
              console.log("You're not in!")
              // Alert message that they are not a mlh fellow
            }
         })
         .catch(function (error) {
         // handle error
           console.log(error);
           // Error that an account does not exist
         })
         .then(function () {
        // always executed, which could be a redirect to the homepage
        });
        console.log(initialValues.github)
    }
    return (
      <div className="login-box">
        
        <form>
          <h2>Enter Your Aadhar and Voter id here!</h2>
          {/* <div className="ui divider"></div> */}
          {/* <div className="ui form"> */}
            <div className="user-box">
              
            <input 
                type="text"
                placeholder="Aadhar Number"
                name="name"
                value = {formValues.name}
                onChange={handleChange}
            />
            <label>Aadhar Number</label>
            <p>{formErrors.name}</p>
            </div>
            <div className="user-box">
              
            <input 
                type="text"
                placeholder="Voter ID"
                name="github"
                value = {formValues.github}
                onChange={handleChange}
            />
            <label>Voter ID</label>
            <p>{formErrors.github}</p>
            </div>
            <div className="user-box">
              
            {/* <input 
                type="text"
                placeholder="Pod Number"
                name="pod"
                value = {formValues.pod}
                onChange={handleChange}
            /> */}
            {/* <label>Pod Number</label>
            <p>{formErrors.pod}</p>
            </div>
            <div className="user-box"> */}
              
            {/* <input 
                type="text"
                placeholder="Pod Name"
                name="pname"
                value = {formValues.pname}
                onChange={handleChange}
            /> */}
            {/* <label>Pod Name</label>
            <p>{formErrors.pname}</p>
            </div>
            <div className="user-box"> */}
              
            {/* <input 
                type="text"
                placeholder="Project"
                name="proj"
                value = {formValues.proj}
                onChange={handleChange}
            /> */}
            {/* <label>Project</label>
            <p>{formErrors.proj}</p>
            </div> */}
            {/* <div className="user-box"> */}
            {/* <label className="file">?? */}
            {/* <input type="file"/> */}
            {/* <span>+</span> */}
            {/* </label> */}
            </div>
            <br/>
            <button classname="fileButton" onClick={() => history.push('/otp')}>Submit</button>
            {/* </div> */}
        </form>
        </div>
    )
}