import React from 'react'
import ResponsiveAppBar from '../navbar/NavBar'

function Register() {
  return (
    <div>
        <ResponsiveAppBar/>
        <h1>Register for Managing</h1>
        <form>
            <div>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" required />
            </div>
            <div>
                <label htmlFor="fullname">Full Name:</label>
                <input type="text" id="fullname" name="fullname" required />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
            </div>
            <div>
                <label htmlFor="phone">Phone No:</label>
                <input type="tel" id="phone" name="phone" required />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />
            </div>
            <div>
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input type="password" id="confirmPassword" name="confirmPassword" required />
            </div>
            <div>
                <input type="submit" value="Register" />
            </div>
        </form>
    </div>
  )
}

export default Register