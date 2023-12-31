import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row justify-between items-center w-full">
          <h3 className="flex-1 font-poppins font-semibold md:text-[52.8px]  text-[24px] text-white md:leading-[60px] leading-[35px]">
         Optimalkan Critical Workload  Bisnis Anda
          </h3>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>
        {/* <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Mastersystem dan IBM fokus optimalkan critical workload untuk bisnis di Indonesia
        </p> */}
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative bg-robot`}>
        <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
