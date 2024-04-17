import Qualifications from "./Data";
const Qualification = () => {
  return (
    <>
      <div className="section qualification" id="qualification">
        <h2 className="section qualification title">Qualification</h2>
        <ol className="section qualification_lists">
          {Qualifications.map((Qualification) => (
            <li key={Qualification.qualification_id}>
              <a href={Qualification.link} target="_blank">
                {Qualification.name}
              </a>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
};
export default Qualification;
