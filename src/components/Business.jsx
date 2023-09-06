import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () =>  (
  <section id="product" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Produk Terbaru IBM
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Solusi yang kuat dan dapat diandalkan untuk menangani tantangan pada  mission critical workloads saat ini. Dengan kehandalan, performa tinggi, dan keamanan lapis ganda, platform ini memberikan fondasi yang solid untuk bisnis dalam menghadapi tantangan transformasi digital. 
      </p>
     <div className="flex">
        <a href="https://www.ibm.com/id-id/linuxone" target="_blank">
          <Button styles={`mt-10 bg-blue-gradient outline-none`} isi={`LinuxONE`}/>
        </a>
        <a href="https://www.ibm.com/id-id/power" className="ml-5" target="_blank">
          <Button styles={`mt-10 outline outline-cyan-300 text-gradient`} isi={`IBM Power`}/>
        </a>
      </div>
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
