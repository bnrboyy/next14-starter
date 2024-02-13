import Image from "next/image";
import styles from "./home.module.css";
import Link from "next/link";

const Home = () => {

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Creative Thoughts Agency.</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
          molestiae dolore, perferendis accusamus quod repellat ipsam, tempore
          animi quis sapiente,
        </p>
        <div className={styles.buttons}>
          <Link href={"/about"} className={styles.button}>Learn More</Link>
          <Link href={"/contact"} className={styles.button}>Contact</Link>
        </div>
        <div className={styles.brands}>
          <Image className={styles.brandImg} src="/images/brands.png" fill />
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image className={styles.brandImg} src="/images/hero.gif" fill />
      </div>
    </div>
  );
};

export default Home;
