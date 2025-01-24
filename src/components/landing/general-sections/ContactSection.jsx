import Subtitle from "../Subtitle";
import SectionTitle from "../SectionTitle";
import ContactForm from "../ContactForm"

const ContactSection = () => {
  return (
    <section className="my-8 px-[70px] flex flex-col items-center max-1024:px-4">
      <div className="max-1024:hidden">
        <Subtitle title="Potrzebujesz więcej informacji?" />
      </div>
      <div className="hidden max-1024:block">
        <Subtitle title="Kontakt" />
      </div>

      <SectionTitle title="Skontaktuj się z Nami" className="mt-8 text-[var(--quartz)] text-[52px] max-1024:mt-3" />

      <p className="mt-3 text-[var(--granite-gray)]">Napisz do nas. Jesteśmy tu dla Ciebie.</p>

      <ContactForm />      
    </section>
  )
}

export default ContactSection;