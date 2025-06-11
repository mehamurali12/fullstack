import React from 'react'
import ResponsiveAppBar from '../navbar/NavBar'

export default function Login() {
  return (
    <div>
      <ResponsiveAppBar/>
        <h1>Login</h1>
        <form>
            <div>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" required />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />
            </div>
            <div>
                <input type="submit" value="Login" />
            </div>
        </form>
    </div>
  )
}
