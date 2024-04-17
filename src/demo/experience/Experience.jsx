import { ExperiencesData, CompaniesData } from "../experience/Data";
const Experience = () => {
  return (
    <>
      <div className="section experience" id="experience">
        <div className="section experience title">Experience</div>
        {CompaniesData.map((CompanyData) => (
          <div key={CompanyData.company_id}>
            <h3 className="section company name">{CompanyData.name}</h3>
            <p className="section company year">{CompanyData.from_to}</p>
            <p className="section company year">{CompanyData.year}</p>
          </div>
        ))}
        <ol className="section experience_lists">
          {ExperiencesData.map((Experience) => (
            <li key={Experience.experience_id}>
              <a href={Experience.link} target="_blank">
                {Experience.name}
              </a>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
};
export default Experience;
