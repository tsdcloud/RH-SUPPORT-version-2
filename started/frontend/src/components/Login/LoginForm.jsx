import React, {useState, useEffect, useRef} from 'react'
import { Link } from 'react-router-dom'
import herobg from '../../assets/images/herobg.jpg'
import { useFetch } from '../../hooks/useFetch';
function LoginForm(props) {

    const { isLoading, error, fetchData, postData } = useFetch();
    const [username, setUsername] = useState('');
    const [usernameErr, setUsernameErr] = useState('');
    const [password, setPassword] = useState('');
    const [passwordErr, setPasswordErr] = useState('');

    const [isSubmitting, setIsSubmitting] = useState(false);
    const usernameRef = useRef();

    useEffect(()=>{
        
    },[]);
    
    useEffect(()=>{
        setPasswordErr("");
        setUsernameErr("");
    },[username, password]);

    const handleLogin = async (e)=>{
        e.preventDefault();
        setIsSubmitting(true);

        if(!username){
            setUsernameErr("Nom d'utilisateur requis");
            return
        }

        if(!password){
            setPasswordErr("Mot de passe requis");
            return
        }

        let headersList = {
            "Accept": "*/*"
        }
        
        const data = JSON.stringify({
            "email": username,
            "password": password
        });

        console.log({
            method: "POST",
            headers: headersList,
            body: data
        })

        try {
            const response = await fetch('/login', {
                method: "POST",
                headers: headersList,
                body: data
            });
            const result = response.json();
            console.log(result);
        } catch (error) {
            console.error(error);
        }
        finally{
            setIsSubmitting(false);
        }
    }
  return (
    <div className='h-screen w-full overflow-hidden flex'>
        <div 
            className='h-screen p-5 w-1/2 bg-slate-400 flex flex-col justify-center items-center space-y-5 px-4' style={{background:"rgba(0,0,0,0.7) url('"+herobg+"')", backgroundPosition:"center center", backgroundSize:"cover", backgroundBlendMode:"overlay"}}
        >
            <h2 className='text-white text-6xl'>Support RH</h2>
            <p className='text-white text-light'>Human resource the better way.</p>
        </div>
        <form className='h-screen w-1/2 flex flex-col justify-center items-center space-y-3 '>
            <div className='flex flex-col w-1/2 mb-3 space-x-2'>
                <h5 className='text-2xl'>Connexion</h5>  
                <hr />              
            </div>
            <div className='flex flex-col w-1/2 mt-2'>
                <label htmlFor="" className='text-sm'>Nom d'utilisateur <span className='text-red-500'>*</span> :</label>
                <input type="text" value={username} className='text-sm outline-0 border-[1px] border-gray-400 rounded-md' placeholder='' onChange={e=>setUsername(e.target.value)}/>
                <small className='text-red-500'>{usernameErr}</small>
            </div>
            <div className='flex flex-col w-1/2'>
                <label htmlFor="" className='text-sm'>Mot de passe <span className='text-red-500'>*</span> :</label>
                <input type="Password" value={password} className='text-sm outline-0 border-[1px] border-gray-400 rounded-md' placeholder='' onChange={e=>setPassword(e.target.value)}/>
                <small className='text-red-500'>{passwordErr}</small>
            </div>
            <div className='flex flex-col w-1/2'>
                <Link className='text-xs underline text-red-500' >Mot de passe oublier ?</Link>
            </div>
            <div className='w-1/2 flex justify-end'>
                <button className={`${isSubmitting ?"disabled bg-blue-300":""} btn btn-primary`} onClick={handleLogin}>{isSubmitting?"Connexion en cours":"Se connecter"}</button>
            </div>
        </form>
    </div>
  )
}

export default LoginForm