import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import ProjectCard from "../component/ProjectCard";
import enTranslation from "../locales/en/translation.json";
import esTranslation from "../locales/es/translation.json";

function Home() {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  const translations = currentLang === "es" ? esTranslation : enTranslation;

  const projectKeys = Object.keys(translations.Home.Projects);

  return (
    <>
      <div className="flex justify-center items-center h-1/2 pt-10 border border-neutral-900 bg-gradient-to-r from-sky-900 to-zinc-950">
        <div className="flex flex-wrap">
          <div className="flex flex-col items-center">
            <div className="text-7xl font-serif pb-5">{t("Home.Headline")}</div>
            <div className="text-3xl font-serif pb-2">
              {t("Home.Subtitle")}
            </div>
            <div className="text-lg font-serif pb-10">
              {t("Home.Subtitle2")}
            </div>
          </div>
        </div>
      </div>
      <div className="h-1/2 pt-10">
        <div className="pl-25 flex flex-wrap">
          <div className="flex flex-col w-1/2 text-justify p-2  font-serif">
            <div className="text-4xl pb-5">{t("Home.Intro")}</div>
            <span className="text-2xl">{t("Home.Intro2")}</span>
            <span className="text-2xl pb-10">{t("Home.Intro3")}</span>
            <span className="text-2xl pb-3">{t("Home.Intro4")}</span>
            <Link to="/contact" className="text-blue-400 text-2xl pb-10">
              {t("About.ContactMe")}
            </Link>
            <div className="text-2xl">{t("Home.Intro5")}</div>
          </div>
        </div>
      </div>
      <div className="h-10">
        <div className="px-25 py-10 flex flex-wrap border border-neutral-900 bg-gradient-to-l from-purple-950 to-zinc-950">
          <div className="flex flex-col flex-1 gap-10  font-serif ">
            <span className="text-3xl">{t("Home.ProjectsIntro")}: </span>
            {projectKeys.map((key) => (
              <ProjectCard key={key} projectKey={key} />
            ))}{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
