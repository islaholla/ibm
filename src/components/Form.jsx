import { kontak } from "../assets";
import styles, { layout } from "../style";
import emailjs from '@emailjs/browser';
import  { useRef, useState } from 'react';
import fileDownload from 'js-file-download'

const Form = () => {
    const form = useRef();
    const [agreement, setAgreement] = useState(false);
    const handleChack = (event) => {
        setAgreement(event.target.checked);
      }
    const sendEmail = (e) => {
      e.preventDefault();
    //   if (agreement) {
    //     fileDownload('http://localhost:5173/public/ibm.pdf', 'ibm.pdf')
    //     console.log("okay");
    //   }
      emailjs.sendForm('service_l273w57', 'template_ed2toyw', form.current, 'TGboJ_c8r3cxdla0j')
        .then((result) => {
            alert('Terimakasih Pesan Anda terkirim')
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  
    return (
        <section className={layout.section} id="kontak">
 
        
        <div className={layout.sectionImg}>
          <img src={kontak} alt="billing" className="w-[80%] " />
        </div>
        <div className={layout.sectionInfo}>
          <h2 className={styles.heading2}>
            Konsultasi<br className="sm:block hidden" /> 
          </h2>
          <p className={`${styles.paragraph} max-w-[660px] mt-5`}>
          Jangan ragu untuk berdiskusi dengan pakar kami untuk mengoptimalkan critical workload bisnis Anda.
          </p>
          <div className="w-full max-w-lg">
            <form className=" shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-5" ref={form} onSubmit={sendEmail}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nama">
                        Nama*
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="nama" type="text" placeholder="Nama" name="name" required/>
                </div>
               <div className="flex justify-between">
               <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="jabatan">
                        Jabatan*
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="jabatan" type="text" placeholder="Jabatan" name="jabatan" required/>
                </div>
                <div className="mb-4 ml-5 md:ml-0">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="divisi">
                        Divisi*
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="divisi" type="text" placeholder="divisi" name="divisi" required/>
                </div>
               </div>
             <div className="flex justify-between">
             <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="company">
                        Company*
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="company" type="text" placeholder="company" name="company" required/>
                </div>
                <div className="mb-4 ml-5 md:ml-0">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="telp">
                        No.Telepon*
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="telp" type="text" placeholder="telp" name="phone" required/>
                </div>
             </div>
            
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email*
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="email" name="email" required/>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" >
                        Kebutuhan*
                    </label>
                   <div className="flex">
                   <div>
                        <input type="checkbox" id="meeting" name= "meeting" value="Meeting" />
                        < label className="ml-5 text-white" htmlFor="meeting">Meeting</label>
                    </div>
                    <div className="ml-5">
                        <input type="checkbox" id="demo" name="demo" value="Lihat Demo"/>
                        < label className="ml-5 text-white" htmlFor="demo" >Lihat demo</label>
                    </div>
                    <div className="ml-5">
                       <input type="checkbox" id="pdf" name="demo" value="pdf" onChange={handleChack}/>
                        < label className="ml-5 text-white" htmlFor="demo" >Download E-Book</label>
                    </div>
                   </div>
                </div>
                <div>
                <div className="mb-4">
                    <div className="">
                        < label className="text-white  text-[12px] leading-[15px]" htmlFor="privasi"><p className="text-justify">*Wajib diisi </p></label>
                        < label className="ml-5 text-white  text-[12px] leading-[15px]" htmlFor="privasi"><p className="text-justify">Dengan klik submit, saya mengonfirmasi bahwa saya menginginkan informasi dan penawaran tambahan terkait produk dan layanan Mastersystem. Saya juga menyatakan bahwa saya telah membaca dan menyetujui <a className="text-blue-300" target="_blank" href="https://www.mastersystem.co.id/privacy-policy">kebijakan privasi Mastersystem</a></p></label>
                    </div>
                </div>
                <button className="py-2 px-6 font-poppins font-medium text-[18px] text-primary rounded-[10px]  bg-blue-gradient outline-none" type="submit">
                  Submit
                </button>
                </div>
            </form>
        
            </div>
        </div>
        </section> 
    );
  };

  export default Form;
