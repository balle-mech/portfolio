const SkillsSection = () => {
  return (
    <div
      id="skills"
      className="container mx-auto mt-64 flex w-full items-center justify-between px-8 md:px-5 lg:px-15"
    >
      <section className="w-full">
        <h2 className="secondary-title">スキルスタック</h2>

        <div className="my-16">
          <div className="flex w-full cursor-pointer flex-wrap justify-center border border-purple-300 p-16 transition-all duration-300 hover:border-yellow-300 lg:justify-start lg:space-x-32 lg:px-32 lg:py-20">
            <div className="mb-6 self-center lg:mb-0">
              <i className="fa-brands fa-python text-9xl text-yellow-300"></i>
            </div>
            <div className="flex flex-wrap justify-center text-center lg:block lg:text-left">
              <h3 className="text-3xl font-semibold">Python</h3>
              <div className="mt-6 mb-8 flex w-full flex-wrap justify-center gap-3 lg:w-auto lg:justify-start">
                <div className="badge">AI/ML</div>
                <div className="badge">データ</div>
              </div>
              <p className="text-secondary">
                学部の研究にてPoseC3Dという行動認識モデルを用いた不法投棄検知モデルの作成
              </p>
              <p className="text-secondary">
                業務でのDatabricksを使ったダッシュボード開発にて、PySparkでデータの加工やテーブルの作成
              </p>
            </div>
          </div>
        </div>

        <div className="my-16">
          <div className="flex w-full cursor-pointer flex-wrap justify-center border border-purple-300 p-16 transition-all duration-300 hover:border-yellow-300 lg:justify-start lg:space-x-32 lg:px-32 lg:py-20">
            <div className="mb-6 self-center lg:mb-0">
              <i className="fa-brands fa-react text-9xl text-blue-400"></i>
            </div>
            <div className="flex flex-wrap justify-center text-center lg:block lg:text-left">
              <h3 className="text-3xl font-semibold">React</h3>
              <div className="mt-6 mb-8 flex w-full flex-wrap justify-center gap-3 lg:w-auto lg:justify-start">
                <div className="badge">Webアプリ開発</div>
                <div className="badge">フロントエンド</div>
              </div>
              <p className="text-secondary">
                学部時代、日程調整Webアプリの開発にて使用
              </p>
              <p className="text-secondary">
                会社の学習時間で、RAGを用いたチャットボットの開発にて使用
              </p>
            </div>
          </div>
        </div>

        <div className="my-16">
          <div className="flex w-full cursor-pointer flex-wrap justify-center border border-purple-300 p-16 transition-all duration-300 hover:border-yellow-300 lg:justify-start lg:space-x-32 lg:px-32 lg:py-20">
            <div className="mb-6 self-center lg:mb-0">
              <img
                width="128"
                height="128"
                src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/96/external-rails-a-server-side-web-application-framework-written-in-ruby-logo-shadow-tal-revivo.png"
                alt="external-rails-a-server-side-web-application-framework-written-in-ruby-logo-shadow-tal-revivo"
              />
            </div>
            <div className="flex flex-wrap justify-center text-center lg:block lg:text-left">
              <h3 className="text-3xl font-semibold">Ruby on Rails</h3>
              <div className="mt-6 mb-8 flex w-full flex-wrap justify-center gap-3 lg:w-auto lg:justify-start">
                <div className="badge">API開発</div>
                <div className="badge">バックエンド</div>
              </div>
              <p className="text-secondary">
                学部時代、日程調整Webアプリの開発にて使用
              </p>
            </div>
          </div>
        </div>

        <div className="my-16">
          <div className="flex w-full cursor-pointer flex-wrap justify-center border border-purple-300 p-16 transition-all duration-300 hover:border-yellow-300 lg:justify-start lg:space-x-32 lg:px-32 lg:py-20">
            <div className="mb-6 self-center lg:mb-0">
              <i className="fa-brands fa-java text-9xl text-blue-400"></i>
            </div>
            <div className="flex flex-wrap justify-center text-center lg:block lg:text-left">
              <h3 className="text-3xl font-semibold">Java</h3>
              <div className="mt-6 mb-8 flex w-full flex-wrap justify-center gap-3 lg:w-auto lg:justify-start">
                <div className="badge">JavaEE</div>
                <div className="badge">Webアプリ開発</div>
              </div>
              <p className="text-secondary">Webアプリ開発の研修にて使用</p>
            </div>
          </div>
        </div>

        <div className="my-16">
          <div className="flex w-full cursor-pointer flex-wrap justify-center border border-purple-300 p-16 transition-all duration-300 hover:border-yellow-300 lg:justify-start lg:space-x-32 lg:px-32 lg:py-20">
            <div className="mb-6 self-center lg:mb-0">
              <img
                width="150"
                height="150"
                src="/images/stacked-lockup-full-color-white-rgb.svg"
                alt="Databricks Logo"
              />
            </div>
            <div className="flex flex-wrap justify-center text-center lg:block lg:text-left">
              <h3 className="text-3xl font-semibold">Azure Databricks</h3>
              <div className="mt-6 mb-8 flex w-full flex-wrap justify-center gap-3 lg:w-auto lg:justify-start">
                <div className="badge">Azureリソース設計・構築</div>
                <div className="badge">データ加工</div>
                <div className="badge">ダッシュボード開発</div>
              </div>
              <p className="text-secondary w-full">
                上位者指示の下、ワークスペースの設計・構築
              </p>
              <p className="text-secondary w-full">
                Databricks上でのダッシュボード開発
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SkillsSection;
