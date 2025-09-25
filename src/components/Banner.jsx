import Image from 'next/image'
import styles from './Banner.module.css'

const Banner = ({ 
  alt = "Banner Sweet & Salty",
  priority = true,
  className = "",
  title = "Sweet & Salty",
  subtitle = "Descubra sabores únicos",
  ...props 
}) => {
  return (
    <div className={`${styles.bannerContainer} ${className}`} {...props}>
      <Image
        src="/image/recheio.jpg"
        alt={alt}
        fill
        priority={priority}
        quality={100}
        sizes="100vw"
        className={styles.bannerImage}
        style={{
          objectFit: 'cover',
          objectPosition: 'center'
        }}
      />
      <div className={styles.bannerContent}>
        <h1 className={styles.bannerTitle}>{title}</h1>
        <p className={styles.bannerSubtitle}>{subtitle}</p>
      </div>
    </div>
  )
}

export default Banner
