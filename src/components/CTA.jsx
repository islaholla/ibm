import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Partner IBM dengan Mastersystem</h2>
      <p className={`${styles.paragraph}  mt-5`}>
      Perjalanan Mastersystem Infotama sebagai perusahaan yang terus bertumbuh merupakan gambaran dari keunggulan operasional dan dedikasi terhadap kualitas pelayanan dan kepuasan pelanggan.  
      <br /> <br />
      Sebagai salah satu leaders di industri IT, IBM memperlihatkan diri sebagai produsen hardware dan software dengan keandalan, ketersediaan, dan layanan yang sangat tinggi. Pendapatan IBM Indonesia yang mencapai hampir 200 juta USD, telah menjadi pendorong bagi Mastersystem untuk terus berkembang di pasar.

      </p>
       <div className={`  sm:mt-8 mt-10`}>
       <a href="https://www.ibm.com/id-id/linuxone" target="_blank">
          <Button styles={` bg-blue-gradient outline-none`} isi={`Kunjungi`}/>
        </a>
    </div>
    </div>

   
  </section>
);

export default CTA;
