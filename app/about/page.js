export const metadata = {
  title: "About",
};

export default function Home() {
  return (
    <div className="contentBox">
        <h2>
            About
            <span className="jp">ー私について</span>
        </h2>
        <div className="mainContent">
            <section className="profile">
                <p><span className="myName">MOE HATANAKA</span> ―― 神戸市在住</p>
                <p>社内向けのWebアプリケーション運用窓口業務を経て、現在はフロントエンド開発を中心に勉強しています。</p>
            </section>
            <section className="profDetails">
                <div className="profDetail">
                    <div className="detailImg" style={{background:"url(certification.svg)"}}></div>
                    <h3 className="detailTitle">社内表彰を受賞</h3>
                    <p className="detailCaption">前職でシステム運用窓口業務の品質が評価され、社内表彰を頂きました。</p>
                </div>
                <div className="profDetail">
                    <div className="detailImg" style={{background:"url(handshake.svg)"}}></div>
                    <h3 className="detailTitle">期待以上が目標</h3>
                    <p className="detailCaption">任された仕事はとことん追求し、期待以上の結果をお返ししたいと思っています。</p>
                </div>
                <div className="profDetail">
                    <div className="detailImg" style={{background:"url(hand2.svg)"}}></div>
                    <h3 className="detailTitle">真面目な正直者</h3>
                    <p className="detailCaption">真面目で正直な性格です。飾らずオープンに、楽しく過ごしたいです。</p>
                </div>
            </section>
        </div>
    </div>
  );
};
