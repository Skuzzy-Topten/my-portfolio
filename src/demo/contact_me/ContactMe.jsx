import { InfoData } from "./Data";
const ContactMe = () => {
  return (
    <>
      <div className="section contact_me" id="contact">
        <div className="section contact_me title">Contact Me</div>
        <ul className="section contact_me info_lists">
          <li>{InfoData.phone_no}</li>
          <li>{InfoData.email}</li>
          <li>{InfoData.address}</li>
        </ul>
      </div>
    </>
  );
};
export default ContactMe;
