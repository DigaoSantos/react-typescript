import { useState } from "react";


export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const hangleLogin = () => {
    alert(email)
  }


  return (
    <div>
      <h1>Login</h1>
      <form>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            value={email}
            onChange={e => setEmail(e.target.value)}
            type="text"
            id="email"
            name="email" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)} />
        </div>
        <button onClick={hangleLogin} type="button">Login</button>
      </form>
    </div>
  );
}