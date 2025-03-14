import React,{useState} from 'react'
import './LoginSignUp.css'
const LoginSignUp = () => {

   const[state,setState]=useState("signup");

   const handleState=()=>{
        state=="login"?setState("signup"):setState("login");
   }
    
   const[formData,setFormData]=useState({
    name:"",
    email:"",
    password:""
   });


   const handleFormData = (e)=>{
                            //spread operator creates a shallow copy
             setFormData({...formData, [e.target.name]:e.target.value})
   }

   const signupFun=async()=>
  {
     let responseData;
     await fetch(
        "http://localhost:4000/signup",
        {
            method:'POST',
            headers:{
                Accept:'application/form-data',
                'Content-Type':'application/json'

            },
            body:JSON.stringify(formData),

        }

    ).then((response)=>response.json())
    .then((data)=>responseData=data)
    if(responseData.success)
    {
        localStorage.setItem('auth-token',responseData.token);
        window.location.replace('/dashboard');
    }
    else{
        alert(responseData.errors);
    }
   }

   const loginFun=async()=>
    {
        let responseData;
               await fetch("http://localhost:4000/login",
                {
                    method:'POST',
                    headers:{
                        Accept:'application/form-data',
                        'Content-Type':'application/json',
                    },
                    body:JSON.stringify(formData),
                }
               )
               .then((response)=>response.json())
               .then((data)=>responseData=data)

               if(responseData.success)
               {
                localStorage.setItem('auth-token',responseData.token);
                window.location.replace("/dashboard");

               }
               else{
                alert(responseData.errors);
               }
   }



  return (
    <div className='loginsignup'>
        
        <div className="loginsignup-container">
                   <h1>{state=="signup"?"SignUp":"Login"}</h1>
                   <div className="inputfields-container">
                      
                    {state==="signup"? <input type="text"  value={formData.name} onChange={handleFormData} name='name' placeholder='Enter Username'/>:<></> }  
                   
                    <input type="email" value={formData.email} onChange={handleFormData} name='email' placeholder='Enter email' />
                    <input type="text"  value={formData.password} onChange={handleFormData} name='password' placeholder='Enter password'/>

                   </div>

                   <button onClick={()=>{ state==="signup"?signupFun():loginFun() }}  >Submit </button>

                   <p>Already have an account? <span onClick={handleState}>{state==="signup"?"login":"signup"}</span> </p>

        </div>

    </div>
  )
}

export default LoginSignUp