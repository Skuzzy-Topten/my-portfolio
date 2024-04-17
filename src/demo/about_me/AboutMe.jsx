const AboutMe = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div className="section about-me" id="about">
            <div className="section about-me profile_image_div">
              <img
                src="/profile/kaung-myint-hein.webp"
                alt="Kaung Myint Hein"
                className="section about-me profile_image"
              />
            </div>
            <p className="section about-me info">
              👋 My name is Kaung Myint Hein. I'm a
            </p>
            <h3 className="section about-me career">
              Web Developer, Graphic Designer and Video Editor
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutMe;
