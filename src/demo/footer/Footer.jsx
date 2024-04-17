import CopyrightData from "./CopyrightData";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="spacer"></div>
        <div className="footer">
          <div className="container-fluid">
            <div className="container">
              <p className="footer copyright">
                {CopyrightData.site_title} {CopyrightData.sign}{" "}
                {CopyrightData.year}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
