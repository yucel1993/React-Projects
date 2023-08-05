import { useEffect, useState } from "react";
import ContactForm from "../components/ContactForm";
import ContactList from "../components/ContactList";

const initialValue = {
  name: "",
  lastName: "",
  email: "",
  department: "",
  number: "",
};

function Home() {
  const [contacts, setContacts] = useState(JSON.parse(sessionStorage.getItem("contacts")) || []);
  const [info, setInfo] = useState(initialValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (info.id) {
      setContacts(contacts.map((item) => (item.id == info.id ? info : item))); //! Update if there is a id then update if not then write same item
    } else {
      setContacts([...contacts, { ...info, id: new Date().getTime() }]);
    }

    setInfo(initialValue);
  };
  const handleDelete = (id) => {
    setContacts(contacts.filter((item) => item.id !== id));
  };

  useEffect(() => {
   sessionStorage.setItem("contacts",JSON.stringify(contacts))
  }, [contacts])
  
  return (
    <div className="block lg:flex p-3">
      <ContactForm info={info} setInfo={setInfo} handleSubmit={handleSubmit} />
      <ContactList
        contacts={contacts}
        handleDelete={handleDelete}
        setInfo={setInfo}
      />
    </div>
  );
}

export default Home;
