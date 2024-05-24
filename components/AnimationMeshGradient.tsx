import styles from './AnimationMeshGradient.module.css'

export default function MeshGradient({children}:{children:React.ReactNode}) {
    return (
    <div className={`${styles['bg-gradient']}`}>
        <div className={` z-40 ${styles['gradient-bg']} inset-0 justify-center`}>
          <div className={`${styles['bg-shape1']} ${styles['bg-teal']} ${styles['opacity-50']} ${styles['bg-blur']}`}/>
          <div className={`${styles['bg-shape2']} ${styles['bg-blue']}${styles['opacity-50']} ${styles['bg-blur']}`}/>
          <div className={`${styles['bg-shape1']} ${styles['bg-darkpurple']} ${styles['opacity-50']} ${styles['bg-blur']}`}/>
          <div className={`${styles['bg-shape1']} ${styles['bg-purple']} ${styles['opacity-50']} ${styles['bg-blur']}`}/>
        </div>
        {children}
    </div>
    )
}