import Image from 'next/image'
import { IHeroSlideTooltip } from '@/types/main-page'
import styles from '@/styles/main-page/index.module.scss'

const HeroSlideTooltip = ({ title, image }: IHeroSlideTooltip) => (
  <div className={`${styles.hero__slider__slide__popup} slide-popup`}>
    <Image
      className={styles.hero__slider__slide__popup__img}
      src={image}
      alt={title}
      priority
    />
    <p className={styles.hero__slider__slide__popup__inner}>
      <b className={styles.hero__slider__slide__popup__title}>{title}</b>
      <span className={styles.hero__slider__slide__popup__price}>13 900 ₽</span>
    </p>
  </div>
)

export default HeroSlideTooltip
