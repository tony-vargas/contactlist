export default function contactRow({ setSelectedContactId, contact }) {
  console.log(contact);
  return (
    <tr
      className="contactRow"
      onClick={() => {
        setSelectedContactId(contact?.id);
      }}
    >
      <td>{contact?.name}</td>

      <td>{contact?.email}</td>

      <td>{contact?.phone}</td>
    </tr>
  );
}