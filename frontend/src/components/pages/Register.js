import React from 'react'

function Register() {
  return (
    <div>
      <h1> register for managing...</h1>
      <form>
        <div>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" required />
        </div>

        <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
        </div>

        <div>
            <label htmlFor="firstName">First Name:</label>
            <input type="text" id="firstName" name="firstName" required />
        </div>

        <div>
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" id="lastName" name="lastName" required />
        </div>

        <div>
            <label htmlFor="college">College:</label>
            <input type="text" id="college" name="college" required />
        </div>

        <div>
            <button type="submit">Register</button>
        </div>
    </form>
    </div>
  )
}

export default Register