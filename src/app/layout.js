import "../assets/scss/style.scss";

export const metadata = {
    title: "KimJunHo's portfolio by Next",
    description: "Next.js를 사용한 개인 포트폴리오 사이트입니다.",
    keywords: ["포트폴리오", "리액트", "넥스트", "김준호", "프론트엔드", "웹 퍼블리셔", "portfolio", "react.js", "next.js", "KimJunHo", "front-end", "web publisher"],
};

export default function RootLayout({ children }) {
    return (
        <html lang="ko">
            <body>{children}</body>
        </html>
    );
}
