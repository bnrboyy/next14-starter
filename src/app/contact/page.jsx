import Image from "next/image";
import styles from "./contact.module.css";
import dynamic from "next/dynamic";
// import NoSSRTest from "@/components/NoSSRTest";

const NoSSRTest = dynamic(() => import("@/components/NoSSRTest"), {
  ssr: false,
});

export const metadata = {
  title: "Next App Contact Page.",
  description: "Contact Description",
};

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/images/contact.png" alt="" fill className={styles.img} />
      </div>
      <div className={styles.formContainer}>
        {/* <NoSSRTest /> */}
        {/* <HydrationTestNoSSR/> */}
        {/* <div suppressHydrationWarning>{a}</div> */}
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name and Surname" />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Phone Number (Optional)" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
