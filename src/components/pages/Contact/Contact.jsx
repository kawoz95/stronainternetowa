import React from "react";
import { insertContactRequest } from "../../../clients/supabase";
import { Toast } from 'primereact/toast';

const Contact = () => {
  const [consent, setConsent] = React.useState(false);
  const nameRef = React.createRef(null);
  const emailRef = React.createRef(null);
  const toastRef = React.createRef(null);

  const onConsentChange = () => {
    setConsent(!consent);
  }

  const onSubmit = async (event) => {
    event.preventDefault();

    const result = await insertContactRequest({
      name: nameRef.current.value,
      consent,
      email: emailRef.current.value
    });

    if(!result.error){
      nameRef.current.value = "";
      emailRef.current.value = "";
      setConsent(false);

      toastRef.current.show({ severity: 'secondary', summary: '', life: 2000, content: () => (<div className="m-3 text-center">Dziękujemy! skontaktujemy się wkrótce {':)'}</div>) });
    } else {
      toastRef.current.show({ severity: 'error', summary: '', life: 2000, content: () => (<div className="m-3 text-center">Niestety wystąpił błąd {':())'} spróbuj jeszcze raz.</div>) });
    }
  }

  return (
  <main>
    <Toast ref={toastRef} position='center'/>
    <section className="contact container" id="contact">
      <div className="contact__column">
        <h2 className="contact__title">Masz pytanie?</h2>
        <p className="contact__instruction">
          Zostaw swój adres mailowy, odezwiemy się.
        </p>
        <div className="contact__details">
          <a href="info@woznicki.yzy" className="details__item">
            <img src="images/mail.png" alt="mail" />
            info@woznicki.yzy
          </a>

          <a href="tel:123456789" className="details__item">
            <img src="images/phone.png" alt="phone" />
            999 456 999
          </a>
        </div>
      </div>

      <div className="contact__column">
        <form className="form" onSubmit={onSubmit}>
          <div className="form__field">
            <label className="form__label" for="name">
              Imię
            </label>
            <input type="text" className="form__input name" id="name" ref={nameRef} required/>
          </div>

          <div className="form__field">
            <label className="form__label" for="email">
              E-mail
            </label>
            <input type="email" className="form__input email" id="email" ref={emailRef} required/>
          </div>

          <div className="form__consent">
            <label className="form__checkbox">
              <input type="checkbox" checked={consent} onChange={onConsentChange}/>
              <span className="checkbox"></span>
              <p className="consent__text">
                Wyrażam zgodę na przetwarzanie danych osobowych przez firmę
                Bramy i ogrodzenia w celu otrzymywania informacji handlowych i
                marketingowych. Wyrażam zgodę na wysłanie informacji handlowej
                drogą elektroniczną na podany adres e-mail przez Bramy i
                ogrodzenia.
              </p>
            </label>
          </div>
          <button type="submit" className="btn btn--primary" disabled={!consent}>
            Wyślij
          </button>
        </form>
      </div>
    </section>
  </main>
);
}
export default Contact;
