import { card } from "../assets";
import styles, { layout } from "../style";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Gold Partner IBM<br className="sm:block hidden" /> 
      </h2>
      <p className={`${styles.paragraph} max-w-[550px] mt-5 text-start sm:text-justify`}>
    Mastersystem Infotama sebagai Gold Partner IBM telah dipercaya atas kemampuan dan keahlian dalam mengimplementasikan teknologi IBM yang canggih. Kemitraan dengan IBM telah memberikan Mastersystem akses ke berbagai produk dan teknologi inovatif, termasuk solusi hardware seperti IBM Power dan LinuxONE, penyimpanan (storage) canggih, serta software seperti Instana dan Turbonomics, API Management, Data & AI, dan Planning Analytics. 
      </p>
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
