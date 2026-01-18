import Header from "../components/Header";
import Footer from "../components/Footer";
import WheelHandler from "@/components/WheelHandler";

import 'destyle.css'
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css"

const notoSansJP = Noto_Sans_JP({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: {
    template: "MOE - Portfolio | %s",
    default:  "MOE - Portfolio",
  },
  description: "MOEのポートフォリオサイトです。"
};

const RootLayout = ({children}) => {
  return (
    <html lang="ja">
      <body className= {notoSansJP.className}>
      {/* <body className= {notoSansJP.className} style={{
        background:"url(bg1.png) no-repeat 98% top, url(bg6.png) no-repeat left bottom, url(bg7.png) no-repeat right bottom"
      }}> */}
      {/* <body className= {notoSansJP.className} style={{
        backgroundImage:"url(bodybg2.png)",
        backgroundRepeat:"no-repeat",
        backgroundPosition:"98% top",
        backgroundColor:"#fefefe"
      }}> */}
        <Header />
        <WheelHandler />
        <main className="mainArea">{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;

// {children} は 現在表示しているページコンポーネントや サブレイアウトが入る部分


{/* <body className= {notoSansJP.className} style={{background:"url(bodybg.png) no-repeat 90% top"}}></body> */}
