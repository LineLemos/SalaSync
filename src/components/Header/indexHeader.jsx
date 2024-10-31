import styles from "./header.module.css"

function Header (){
     return (
    <>
      <div className="header">
        <a href="home">Home</a>
        <p>ta funcionando?</p>
        <a href="salas">Salas</a>
        <a href="senai">Senai</a>
      </div>
    </>
  );
}
export default Header