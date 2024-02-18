import { useTranslation } from 'react-i18next';

function About() {
  const {t , i18n} = useTranslation();
  
    return (
      // <div className='dark-help'>
      <div className="containers dark-help">
          <div className="about">
          <h1>{t("about-h1")} <span>{t("about-h1-span")}</span></h1>
          <p>{t("about-p")}</p>
          </div>
          
      </div>
      // </div>
  
    )
  }
  
  export default About