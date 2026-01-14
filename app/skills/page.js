export const metadata = {
  title: "Skills",
};

export default function Home() {
    return (
        <div className="contentBox">
            <h2>
                Skills
                <span className="jp">ースキルセット</span>
            </h2>
            <div className="mainContent">
                <div className="skills">
                        <section className="study gridContents">
                            <h3>勉強していること</h3>
                            <ul>
                                <li>JavaScript</li>
                                <li>React</li>
                                <li>Next.js</li>
                                <li>TypeScript</li>
                                <li>Python</li>
                                <li>Flask</li>
                                <li>MySQL</li>
                                <li>HTML / CSS</li>
                                <li>Figma</li>
                                <li>Canva</li>
                            </ul>
                        </section>

                        <section className="lisense gridContents">
                            <h3>保有資格</h3>
                            <ul>
                                <li>基本情報技術者</li>
                                <li>ExcelVBAベーシック</li>
                                <li>Webクリエイター能力認定試験Expert</li>
                            </ul>
                        </section>

                        <section className="future gridContents">
                            <h3>これから</h3>
                            <p>バックエンドの開発にも興味があり、フルスタックエンジニアを目指します。</p>
                            <p>スマートグラス向けアプリケーションの企画開発も気になり、<br></br>注目しています。</p>
                        </section>

                </div>
            </div>
        </div>
    );
};

