import styles from "../style";

const Youtube = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col rounded-[20px]`}>
    <div className="flex-1 flex flex-col">
      <h2 className={`${styles.heading2} text-center`}>Eksplorasi Kantor IBM</h2>
      <div className="youtube-wrap mt-12">
      <iframe   src="https://www.youtube.com/embed/GyKdpfn3rL4?si=bo9hQhPqNlfHVG1m" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>
       
    </div>

   
  </section>
);

export default Youtube;
