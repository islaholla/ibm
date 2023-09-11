import { kontak } from "../assets";
import styles, { layout } from "../style";
import emailjs from '@emailjs/browser';
import  { useRef } from 'react';

const Form = () => {
    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_l273w57', 'template_ed2toyw', form.current, 'TGboJ_c8r3cxdla0j')
        .then((result) => {
            alert('ok')
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
          Jangan ragu untuk berdiskusi dengan pakar kami guna mempercepat perubahan bisnis Anda
          </p>
          <div className="w-full max-w-lg">
            <form className=" shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-5" ref={form} >
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nama">
                        Nama
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="nama" type="text" placeholder="Nama" name="name"/>
                </div>
               <div className="flex justify-between">
               <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="jabatan">
                        Jabatan
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="jabatan" type="text" placeholder="Jabatan" name="jabatan"/>
                </div>
                <div className="mb-4 ml-5 md:ml-0">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="divisi">
                        Divisi
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="divisi" type="text" placeholder="divisi" name="divisi"/>
                </div>
               </div>
             <div className="flex justify-between">
             <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="company">
                        Company
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="company" type="text" placeholder="company" name="company"/>
                </div>
                <div className="mb-4 ml-5 md:ml-0">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="telp">
                        No.Telepon
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="telp" type="text" placeholder="telp" name="phone"/>
                </div>
             </div>
            
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="email" name="email"/>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="kebutuhan">
                        kebutuhan
                    </label>
                   <div className="flex">
                   <div>
                        <input type="checkbox" id="some_id" name= "meeting" value="Meeting" />
                        < label className="ml-5 text-white" htmlFor="meeting">Meeting</label>
                    </div>
                    <div className="ml-5">
                        <input type="checkbox" id="some_id" name="demo" value="Lihat Demo"/>
                        < label className="ml-5 text-white" htmlFor="demo" >Lihat demo</label>
                    </div>
                   </div>
                </div>
                <div className="flex items-center justify-between">
                <button onClick={sendEmail} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
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
