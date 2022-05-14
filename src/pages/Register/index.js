import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { InputElement } from "../../components/Input";
import { createUser } from "../../services/auth";
import { errorMessage } from "../../services/error";

export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("saloon");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser(name, email, password, role)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        errorMessage(response);
      })
      .then((data) => {
        console.log(data.token);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <form>
        <InputElement
          type="text"
          className="input"
          label="Nome"
          value={name}
          name="input"
          placeholder="Digite o seu nome completo"
          onChange={(e) => setName(e.target.value)}
        />
        <InputElement
          type="email"
          className="input"
          label="E-mail"
          value={email}
          name="input"
          placeholder="user@user.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputElement
          type="password"
          className="input"
          label="Senha"
          value={password}
          name="input"
          placeholder="******"
          onChange={(e) => setPassword(e.target.value)}
        />
        <InputElement
          type="radio"
          className="input-radio"
          label="Atendente"
          value="saloon"
          name="role"
          checked={role === "saloon"}
          onChange={(e) => setRole(e.target.value)}
        />
        <InputElement
          type="radio"
          className="input-radio"
          label="Cozinha"
          value="kitchen"
          name="role"
          checked={role === "kitchen"}
          onChange={(e) => setRole(e.target.value)}
        />
        <label>Cozinha</label>
        <Button className="button" text="Cadastrar" onClick={handleSubmit} />
      </form>
      <p className="text-center">
        <span className="text-span">Já possui conta?</span>
        <Link className="text-link" to="/">
          Conecte-se
        </Link>
      </p>
    </>
  );
};
