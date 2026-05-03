import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import CertificationsSection from "./components/CertificationsSection";
import SkillsSection from "./components/SkillsSection";
import OutputSection from "./components/OutputSection";
import ArticlesSection from "./components/ArticlesSection";
import ActivitiesSection from "./components/ActivitiesSection";
import ContactSection from "./components/ContactSection";
import { useLaprasData } from "./hooks/useLaprasData";

function App() {
  const { data, loading, error } = useLaprasData();

  return (
    <>
      <Header />
      <HeroSection />
      <CertificationsSection />
      <SkillsSection />

      {/* 左列: GitHub + 記事 / 右列: アクティビティ */}
      <div className="container mx-auto mt-64 px-8 md:px-5 lg:px-15">
        <div className="flex flex-col gap-20 lg:flex-row lg:gap-16">
          <div className="flex w-full min-w-0 flex-col lg:w-5/12">
            <OutputSection
              repositories={data?.github_repositories ?? []}
              loading={loading}
              error={error}
            />
            <div className="mt-64">
              <ArticlesSection
                activities={data?.activities ?? []}
                loading={loading}
                error={error}
              />
            </div>
          </div>
          <div className="w-full lg:w-7/12">
            <ActivitiesSection
              activities={data?.activities ?? []}
              loading={loading}
              error={error}
            />
          </div>
        </div>
      </div>

      <ContactSection />
    </>
  );
}

export default App;
