import React from 'react'

const Login_Customer = () => {
     const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate= useNavigate();

    function Loginbtn() {
const user=loginUser(email, password)
        if(!user){
            alert("email or password is wrong")
            return;
        }
        localStorage.setItem("user", JSON.stringify(user))
        user.role==="admin"? 
        navigate("/admin/dashboard"):
        navigate("/customers/dashboard");
    }

    return (
        <div lassName='w-6/12 h-16 bg-amber-300'>
            <h2>Admin Login page </h2>
            <input type='email'
                placeholder='Enter email'
                value={email}
                onChange={(e) => setEmail(e.target.value)} />

            <input type='email'
                placeholder='Enter email'
                value={email}
                onChange={(e) => setPassword(e.target.value)} />

            <button onClick={Loginbtn}>Login</button>
        </div>
    )
}

export default Login_Customer;