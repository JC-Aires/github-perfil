import styles from './Perfil.module.css'

const Perfil = ({nomeUsuario}) => {
// export default() => { e comentar o export default abaixo
    
    // const { endereco, nome} = props; ao invés de props como argumento da função Perfil

    return (
        <header className={styles.header}>
            <img className={styles.avatar} src={`https://github.com/${nomeUsuario}.png`} alt="Foto do usuário" />
            <h1 className={styles.name}>
                {nomeUsuario}
            </h1>
        </header>
    )
}

export default Perfil;