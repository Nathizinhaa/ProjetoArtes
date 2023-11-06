'use client'
import styles from"@/app/sobrenos/page.module.css"

export default function SobreNos() {
    return (
        <>
        <div className={styles.sobrenos}>
            <div className={styles.logo}>
        <img src='/logo.jpg' width={150} height={150}></img>
        <h1> Sobre Nós </h1>
        <br></br>
        <br></br>
          </div>
        <div className={styles.fotos}>

        <div className={styles.nome1}>
        <img src='/vitoria.jpg'width={100} height={100}></img>
        <p>Vitória</p>
        </div>
        
        <div className={styles.nome1}>
        <img src='/isabela.jpg'width={100} height={100}></img>
        <p>Isabela</p>
        </div>

        <div className={styles.nome1}>
        <img src='/luis.jpg'width={100} height={100}></img>
        <p>Luis</p>
        </div>

        <div className={styles.nome1}>
        <img src='/angelo.jpg'width={100} height={100}></img>
        <p>Ângelo</p>
        </div>

        <div className={styles.nome1}>
        <img src='/nath.jpg'width={100} height={100}></img>
        <p>Nathália</p>
        </div>

        <div className={styles.nome1}>
        <img src='/sophia.jpg'width={100} height={100}></img>
        <p>Sophia</p>
        </div>

       
        </div>
        </div>
        </>
    )
}

