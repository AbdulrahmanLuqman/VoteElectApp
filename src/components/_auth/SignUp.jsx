import React, {useState, useEffect} from "react";
import flag from "../../assets/images/flag.png"
import { data } from "autoprefixer";
import {useNavigate} from "react-router-dom"

const SignUp = () => {
  const navigate = useNavigate()

  const initialValues = {
    lastName: "",
    firstName: "",
    otherName: "",
    dob: "",
    state: "",
    lga: ""
  }

  const [formData, setFormData] = useState(initialValues)
  const [error, setError] = useState("")

  const handleChange = (e)=>{
    const {name, value} = e.target
    setFormData({...formData, [name]:value})
    // console.log(formData)
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    if(!formData.lastName.trim() || !formData.firstName.trim() || !formData.otherName.trim() || !formData.dob.trim() || !formData.state.trim() || !formData.lga.trim()){
      setError("All fields are required")
    }else{
      setError("")
      navigate("/signin")
    }
  }

  const [results, setResults] = useState([])

  useEffect(()=> {
    fetch('https://nigeria-states-towns-lga.onrender.com/api/all')
    .then(response => response.json())
    .then(data => setResults(data))
    .catch(err => console.log(err))
  }, [])

  const statesResult = Array.isArray(results) ? results.map(res => <option key={res.name} value={res.name}>{res.name}</option>) : ["not an array"]



  const [lgas, setlgas] = useState([])
  const handleStateChange = (e)=> {
    const {name, value} = e.target
    setFormData({...formData, [name]:value})

    const selectedState = e.target.value;
    const stateDetails = results.find(state => state.name === selectedState)


    setlgas(stateDetails.lgas.map(lga => <option key={lga.name} value={lga.name}>{lga.name}</option>))  
  }




  return(
    <div className="flex justify-center w-full px-10 py-4">
      {/* <pre>{JSON.stringify(formData, undefined, 5)}</pre> */}
      <form onSubmit={handleSubmit} action="" className="flex flex-col items-center max-[500px]:block w-full space-y-6">
        <h1 className="text-[1.5rem] font-black text-center">Sign Up</h1>

        <div className="flex flex-col gap-2">
          <label htmlFor="last-name" className="font-bold">Last Name<span className="text-green-500">*</span></label>
          <input onChange={handleChange} id="last-name" name="lastName" value={formData.lastName} type="text" className="w-[400px] max-[500px]:w-full border border-green-300 px-2 py-[1px] font-semibold outline-none rounded-md focus:border-green-700 focus:border-2"/>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="first-name" className="font-bold">First Name<span>*</span></label>
          <input onChange={handleChange} id="first-name" name="firstName" value={formData.firstName} type="text" className="w-[400px] max-[500px]:w-full border border-green-300 px-2 py-[1px] font-semibold outline-none rounded-md focus:border-green-700 focus:border-2"/>        
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="other-name" className="font-bold">Other Name<span>*</span></label>
          <input onChange={handleChange} id="other-name" name="otherName" value={formData.otherName} type="text" className="w-[400px] max-[500px]:w-full border border-green-300 px-2 py-[1px] font-semibold outline-none rounded-md focus:border-green-700 focus:border-2"/>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="dob" className="font-bold">Date of Birth<span>*</span></label>
          <input onChange={handleChange} id="dob" type="date" name="dob" value={formData.dob} className="w-[400px] max-[500px]:w-full border border-green-300 px-2 py-[1px] font-semibold outline-none rounded-md focus:border-green-700 focus:border-2"/>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="state-of-origin" className="font-bold">State of Origin</label>
          <select onChange={handleStateChange} id="state-of-origin" name="state" value={formData.state} className="w-[400px] max-[500px]:w-full border border-green-300 px-2 py-[1px] font-semibold outline-none rounded-md focus:border-green-700 focus:border-2">
            <option>Select</option>
            {statesResult}
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="local-government" className="font-bold">Local Government</label>
          <select onChange={handleChange} id="local-government" name="lga" value={formData.lga} className="w-[400px] max-[500px]:w-full border border-green-300 px-2 py-[1px] font-semibold outline-none rounded-md focus:border-green-700 focus:border-2">
            <option>Select</option>
            {lgas}
          </select>
          {error && <span className="text-red-500 italic">{error}</span>} 
        </div>

        <button type="submit" className="bg-green-700 text-white font-semibold w-[400px] max-[500px]:w-full p-[2px] rounded-md">Sign Up</button>
      </form>
      <img className="h-5 fixed left-10" src={flag} alt="flag" />
      <img className="h-5 fixed left-10 bottom-8" src={flag} alt="flag" />
      <img className="h-5 fixed right-10" src={flag} alt="flag" />
      <img className="h-5 fixed right-10 bottom-8" src={flag} alt="flag" />

    </div>
  )
};

export default SignUp;
