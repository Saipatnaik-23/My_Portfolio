import styles from"./ContactStyles.module.css"

function Contact() {
  return (
    <section id="contact" className={styles.container}>
        <h1 className="sectionTitle">Contact</h1>
        <form action="https://formspree.io/f/mqakvkna" method="post">
            <div className="formGroup">
                <label htmlFor="name" hidden>
                    Name
                </label>
                <input type="text" name="name" id="name" placeholder="Name" required></input>
            </div>
             <div className="formGroup">
                <label htmlFor="Email" hidden>
                    Email
                </label>
                <input type="text" name="Email" id="Email" placeholder="Email" required></input>
            </div>
             <div className="formGroup">
                <label htmlFor="message" hidden>
                    Message
                </label>
                <textarea  name="message" id="message" placeholder="Message" required></textarea>
            </div>
            <input type="submit" className="hover btn" value="Submit"></input>
        </form>
    </section>
  )
}

export default Contact