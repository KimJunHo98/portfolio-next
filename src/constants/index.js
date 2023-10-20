export const headerNav = [
    {
        title: "intro",
        url: "#intro",
    },
    {
        title: "about",
        url: "#about",
    },
    {
        title: "skill",
        url: "#skill",
    },
    {
        title: "site",
        url: "#site",
    },
    {
        title: "contact",
        url: "#contact",
    },
];

export const lines = [
    {
        id: 0,
        class: "line line1",
    },
    {
        id: 1,
        class: "line line2",
    },
    {
        id: 2,
        class: "line line3",
    },
    {
        id: 3,
        class: "line line4",
    },
    {
        id: 4,
        class: "line line5",
    },
    {
        id: 5,
        class: "line line6",
    },
];

export const skillText = [
    {
        name: "html & css",
        desc: "시멘틱 태그 사용, 웹표준, 웹접근성을 준수하고 디바이스에 따른 플렉스와 그리드를 사용한 반응형 페이지 제작과 그에 맞는 스타일 지정 및 애니메이션을 사용할 수 있습니다. 또한 부트스트랩, 앤트디자인 등의 그리드 템플릿을 사용할 수 있습니다.",
    },
    {
        name: "scss",
        desc: "css 전처리기를 사용한 네스팅, 믹스인, 상위 선택자, 변수를 사용하여 스타일을 지정할 수 있습니다.",
    },
    {
        name: "javascript",
        desc: "자바스크립트의 문법과 함수를 작성하여 스크롤 이벤트, 슬라이드 배너, 마우스 이벤트 등의 인터랙티브한 페이지를 만들 수 있으며, fetch와 axios를 활용한 RESTful API를 사용할 수 있습니다."
    },
    {
        name: "jquery",
        desc: "자바스크립트로 구현한 문법을 제이쿼리로 변환하여 작성할 수 있습니다."
    },
    {
        name: "react.js",
        desc: "함수형 컴포넌트를 사용하여 html파일을 jsx문법으로 변환하여 작성할 수 있으며 컴포넌트 재사용, 리액트 훅사용, 리액트 라우터, 생명주기에 대한 기본지식을 바탕으로 리액트 프로젝트를 진행할 수 있습니다."
    },
    {
        name: "next.js",
        desc: "SSR과 SEO대응이 필요한 경우 넥스트로 변환할 수 있으며, 리액트와 동일하게 useState, useEffect와 같은 훅을 사용할 수 있으며 부족한 부분은 지속적으로 학습할 것입니다."
    },
    {
        name: "node.js",
        desc: "패키지 관리 툴을 사용해 리액트, 넥스트 앱 생성과 상황에 따라 필요한 라이브러리를 설치할 수 있으며, express로 서버를 구축한 경험이 있습니다."
    },
    {
        name: "photoshop",
        desc: "누끼작업을 하거나 마스크 사용, 블랜딩, 그림자 효과 등을 사용한 이미지 합성이나 슬라이드 배너, 이벤트 배너 제작을 할 수 있습니다."
    },
    {
        name: "figma",
        desc: "그리드를 활용하여 와이어프레임 제작, 디자인 시안 제작, 인터렉션을 활용한 프로토타입 제작, 이미지 편집을 할 수 있으며 툴을 사용한 업무 소통과 회의 내용 메모하고, 관리를 할 수 있습니다."
    },
    {
        name: "vercel",
        desc: "vercel을 활용하여 프로젝트를 배포할 수 있습니다."
    },
    {
        name: "github",
        desc: "github를 활용하여 프로젝트 관리를 하고 gitflow 브랜치 전략으로 메인 브랜치와 개인 브랜치 등으로 나누어 팀프로젝트를 진행할 수 있습니다."
    },
];

export const siteText = [
    {
        num: "01",
        title: "glife",
        join: "개인 프로젝트",
        skill: "html, css, jQuery, js",
        desc: "경기생활문화센터 사이트를 리뉴얼한 사이트입니다. 반응형, 웹표준, 웹접근성을 고려하여 제작했으며 쿠키 데이터 사용한 드래그 팝업, 페이드인아웃 배너, 각 섹션마다 스크롤 애니메이션을 구현했습니다.",
        git: "https://github.com/KimJunHo98/project1",
        view: "https://kimjunho98.github.io/project1/",
    },
    {
        num: "02",
        title: "bbatsue",
        join: "팀 프로젝트",
        skill: "html, scss, js, bootstrap",
        desc: "첫 팀프로젝트로 제작한 베이커리 사이트입니다. bootstrap의 그리드를 활용하여 제작하였고 영양정보 API를 사용했으며, 스크롤 애니메이션, 탭메뉴를 구현했습니다. gitflow 방식으로 브랜치를 나눠서 협업하고 vercel로 배포했습니다,",
        git: "https://github.com/hejo47/bbatsueWeb",
        view: "https://bbatsue-web.vercel.app/",
    },
    {
        num: "03",
        title: "anbd",
        join: "팀 프로젝트",
        skill: "react.js, js, scss, node.js, sqlLite",
        desc: "중고거래 사이트를 벤치마킹하여 심플하게 제작한 웹&앱입니다. 검색기능, 상품등록, 결제기능, swiper를 사용한 슬라이드 배너를 구현했고 gitflow 방식으로 브랜치를 나눠서 협업했습니다. PWA 앱으로 제작하였으며, vercel로 배포를 했습니다.",
        git: "https://github.com/2ANBD/ANBD",
        view: "https://anbd.vercel.app/",
    },
    {
        num: "04",
        title: "post",
        join: "개인 프로젝트",
        skill: "html, css, js, react.js, firebase",
        desc: "트위터를 벤치마킹하여 심플하게 제작한 사이트입니다. firebase를 사용한 로그인&로그아웃, 회원가입, 실시간 업로드, 삭제, 수정기능을 리액트의 훅을 사용하여 구현했습니다.",
        git: "https://github.com/KimJunHo98/twit",
        view: "https://kimjunho98.github.io/twit/",
    },
    {
        num: "05",
        title: "movieflix",
        join: "개인 프로젝트",
        skill: "html, css, js, react.js",
        desc: "open API를 사용한 영화 사이트입니다. async/await 함수, useState, useEffect, useParams 등의 훅을 사용하여 검색기능, 더보기 기능을 구현했고 vercel로 배포했습니다.",
        git: "https://github.com/KimJunHo98/movie-app",
        view: "movie-app-liart-chi.vercel.app",
        name: "박준* 포트폴리오",
    },
    {
        num: "06",
        title: "portfolio-react",
        join: "개인 프로젝트",
        skill: "html, scss, js, react.js",
        desc: "리액트를 사용한 포트폴리오 사이트입니다. gsap을 사용한 가로스크롤, 스무스 스크롤, 마우스 포인터 이벤를 구현했고, 페이지네이션, 스크롤 진행바, aos를 사용한 애니메이션을 구현했으며 vercel로 배포했습니다.",
        git: "https://github.com/KimJunHo98/Portfolio-react",
        view: "portfolio-site-kimjunho98.vercel.app",
    },
];

// export const contactText = [
//     {
//         link: "https://open.kakao.com/o/gM7YLzwf",
//         title: "KAKAO : webstupids",
//     },
//     {
//         link: "mailto:webstoryboy@naver.com",
//         title: "mail : webstoryboy@naver.com",
//     },
// ];

// export const footerText = [
//     {
//         title: "youtube",
//         desc: "유튜브에 오시면 더 많은 강의를 볼 수 있습니다.",
//         link: "https://www.youtube.com/@Webstoryboy",
//     },
//     {
//         title: "github",
//         desc: "깃헙에 오시면 더 많은 소스를 볼 수 있습니다.",
//         link: "https://github.com/webstoryboy",
//     },
//     {
//         title: "blog",
//         desc: "블러그에 오시면 더 많은 정보를 볼 수 있습니다.",
//         link: "https://webstoryboy.co.kr",
//     },
//     {
//         title: "gsap",
//         desc: "GSAP에 오시면 더 많은 강의를 볼 수 있습니다.",
//         link: "https://www.youtube.com/playlist?list=PL4UVBBIc6giL8-6jvrClimg0cFL-Muqiq",
//     },
//     {
//         title: "react",
//         desc: "리액트로 만든 사이트를 같이 만들어 봅니다.",
//         link: "https://github.com/webstoryboy/port2023-react",
//     },
//     {
//         title: "vue",
//         desc: "뷰로 만든 사이트를 같이 만들어 봅니다.",
//         link: "https://github.com/webstoryboy/port2023-vue",
//     },
//     {
//         title: "next",
//         desc: "넥스트로 만든 사이트를 같이 만들어 봅니다.",
//         link: "https://github.com/webstoryboy/port2023-next",
//     },
// ];
