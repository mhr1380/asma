import Layout from "../Layout/Layout";
import enamad from "../assets/images/enamad.png";
import "../Kalameh.css";
const AboutUs = () => {
  return (
    <Layout header="درباره ما">
      <div className="about-body">
        <div className="about-text">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود{" "}
        </div>
        <div className="about-image-container">
          <div className="about-image-inner-container">
            <img src={enamad} alt="enamad" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutUs;
