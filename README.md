# 포트폴리오 사이트 프로젝트

리액트 포트폴리오 사이트를 만든 후 리액트의 단점을 보완하기 위해 나온 프레임워크인 Next.js를 활용하여
포트폴리오 사이트를 제작했습니다.  

- [next.js](https://github.com/KimJunHo98/portfolio-next)를 이용하여 사이트를 제작합니다.

이 포트폴리오 사이트는 웹 퍼블리셔, 프론트앤드 개발자의 시작점이 될 수 있는 프로젝트입니다.
자바스크립트 프레임워크를 통해 사이트를 효율적으로 만들어 보는 방법을 익히고 리액트의 단점을 보완하여 나온 프레임워크를 사용하여
사이트 제작을 해봄으로써 흥미를 느끼고 더 깊게 공부할 수 있게 하기 위한 포트폴리오 사이트입니다.

## 완성작 보기 
미리보기 : https://portfolio-next-nine-coral.vercel.app/

## 사용 스택
- next(https://nextjs.org/) 를 사용하여 사이트를 번들링하고 관리합니다.
- gsap(https://greensock.com/gsap) 를 이용하여 패럴랙스 효과를 줍니다.
- lenis(https://lenis.studiofreight.com/) 를 이용하여 스므스 효과를 구현합니다.
- vercel(https://vercel.com//) 를 통해 사이트를 배포합니다.
- github(https://github.com/) 을 사용하여 파일을 관리합니다.
- HTML, CSS(SASS) 기반으로 웹사이트의 기본 레이아웃 설계하고, 웹 표준 및 웹 접근성을 준수하여 작업합니다. [ARIA(Accessible Rich Internet Applications)](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)

## 프로젝트 실행
- next를 설치합니다. `npx create-next-app@latest`
- next를 실행합니다. `npm run dev`
- sass를 설치합니다. `npm install sass`
- gsap를 설치합니다. `npm install gsap`
- lenis를 설치합니다. `npm install @studio-freight/lenis`

## Next.js를 사용한 이유
리액트는 서버 사이드 렌더링(SSR) 및 정적 사이트 생성(SSG) 지원 부족하다는 단점이 있습니다. 리액트 자체에서는 SSR 및 SSG를 구현하기 어려워, 
초기 로딩 속도 및 SEO에 대한 최적화를 하려면 추가적인 작업이 필요한데, 리액트의 프레임워크인 넥스트는 SSR 및 SSG를 지원하여 초기 로딩 속도와 
SEO에 대한 최적화가 쉽게 가능하고필요한 페이지의 코드만 로드하여 초기 로딩 속도를 최적화할 수 있기도 하며, 간단한 라우팅 설정과 동적 라우팅을
지원하기 때문에 점점 자주 쓰이고 있는 넥스트를 사용하기 위한 첫 걸음을 포트폴리오 프로젝트로 선택했습니다.
