import React, {useState}from 'react'
import './signup.scss'

const SignUp = () => {
  const [input, setInput] = useState('')
  return (
    <div className = 'signup'>
      <main className='signupForm'>
        <button>
          Sign up with Google
        </button>
        <button>
          Sign up with Apple
        </button>
        <div className='forms'>
          <input type='text' placeholder='Phone or Email' value={input} onChange={ (e) => setInput(e.target.value) } className = 'form-input'/>
        </div>
        <button>
          Next
        </button>
        <button>
          Forgot Password
        </button>
      </main>
    </div>
  )
}

export default SignUp
