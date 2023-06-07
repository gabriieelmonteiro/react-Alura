import CampoTexto from "../CampoTexto/CampoTexto.jsx";
import "./index.css";

const forms = () => {
  return (
    <section className="formulario">
      <form>
        <h2>Preencha o Formulário para criar o card do aluno</h2>
        <CampoTexto label="Nome" placeholder="Digite seu nome" />
        <CampoTexto label="Cargo" placeholder="Digite seu Cargo" />
        <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
      </form>
    </section>
  );
};

export default forms;
