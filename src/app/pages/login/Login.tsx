import { useRef, useCallback, useEffect, useState } from "react";
import { InputLogin } from "./components/InputLogin";
import { ButtonLogin } from "./components/ButtonLogin";

export const Login = () => {
  const inputPasswordRef = useRef<HTMLInputElement>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const hangleLogin = useCallback(() => {
    console.log(email)
    console.log(password)

  }, [email, password]);


  return (
    <div>
      <h1>Login</h1>
      <form>
        <InputLogin
          label="Email:"
          value={email}
          onChange={newValue => setEmail(newValue)}
          onPressEnter={() => inputPasswordRef.current?.focus()}
          ref={inputPasswordRef}
        />
        <br/>
        <br/>
        <InputLogin
          type="password"
          label="Password:"
          value={password}
          onChange={newValue => setPassword(newValue)}
        />
        <ButtonLogin onClick={hangleLogin} type="button">
          Entrar
        </ButtonLogin>
        <ButtonLogin onClick={hangleLogin} type="button">
          Cadastrar
        </ButtonLogin>
      </form>
    </div>
  );
}