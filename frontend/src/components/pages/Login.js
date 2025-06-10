import React from 'react'

function Login() {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <div>
            <label htmlFor="username">Username: </label>
            <input type="text" id="username" name="username" required />
        </div>

        <div>
            <label htmlFor="password">Email: </label>
            <input type="password" id="password" name="password" required />
        </div>

        <div>
            <button type="submit">Login</button>
        </div>
        </form>

    </div>
  )
}

export default Login