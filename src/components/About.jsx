import styles from "../style";
import Button from "./Button";

const About = () => (
  <section id="about" className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}> Overview</h2>
      <p className={`${styles.paragraph} mt-5 text-start sm:text-justify`}>
      Salah satu area utama para IT Leader saat ini adalah <span className="font-bold text-[#FF9600]"> mission critical workload</span>. Di tengah persaingan bisnis yang ketat dan cepat berubah, mission critical workload dengan modernized application ini telah menjadi nadi setiap bisnis atau organisasi, mencakup aplikasi dan proses yang sangat vital untuk produktivitas sehari-hari dan kelangsungan jangka panjang. Ketika Mission Critical Workload mengalami kegagalan atau gangguan, akibatnya bisa sangat serius, mulai dari  kerugian finansial yang besar, rusaknya reputasi, dan bahkan mengancam kelangsungan hidup perusahaan.</p>
      <p className={`${styles.paragraph} mt-5 text-start sm:text-justify`}>Mengakui pentingnya  <span className="font-bold text-[#FF9600]">  critical workload</span> ini, para IT Leader  harus secara proaktif mengadopsi teknologi terbaru yang dapat meningkatkan ketahanan, skalabilitas, dan keamanan infrastruktur mereka.      </p>
    </div>
  </section>
);

export default About;
