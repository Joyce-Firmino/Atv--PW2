
import styles from './Home.module.css';



export function Home(){
 
  function clickado() {
    alert("Clicado!");

  }
  return (
    <div className={styles.container}>
     <h1>Atividade PW2</h1>
     <button onClick={clickado}>Enviar</button>
    </div>
  )
}
