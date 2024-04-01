//need to rewrite this to match info for selected contact, using id for each contact
import { useState, useEffect } from "react";

export default function SelectedContact({
  selectedContactId,
  setSelectedContactId,
}) {
  const [contact, setContact] = useState(null);
  //console.log(contact);

  useEffect(() => {
    async function singleContact() {
      try {
        const response = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
        );
        const result = await response.json();
        console.log(result);
        setContact(result);
      } catch (error) {
        console.error(error);
      }
    }
    singleContact();
  }, []);

  return (
    <div>
      <h2>{contact?.name}</h2>
      <p>Username: {contact?.username}</p>
      <p>Email: {contact?.email}</p>
      <p>Address: {contact?.address?.street}</p>
      <p>Phone: {contact?.phone}</p>
      <p>Website: {contact?.website}</p>
      <p>Company: {contact?.company?.name}</p>
      <button
        onClick={() => {
          setSelectedContactId(null);
        }}
      >
        Return
      </button>
    </div>
  );
}