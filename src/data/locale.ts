export const localeSegment: LocalePropsType[] = [
  // { locale: "ko" },
  { locale: "en" },
];

const localeData: LocaleDataCollectionType = {
  // ------------------ 메타데이터
  "site/domain": {
    ko: "https://uniai-corp.github.io/", // "https://www.uniai.co.kr/",
    en: "https://uniai-corp.github.io/en", // "https://www.uniai.co.kr/en"
  },
  "site/title": { ko: "UNiAI :: 유니아이", en: "UNiAI" },
  "site/desc": {
    ko: "인공지능 기술로 빅데이터 가치를 실현합니다.",
    en: "Realizing the value of big data with AI technology.",
  },

  // ------------------ 페이지 메뉴
  "page/about": { ko: "회사소개", en: "About" },
  "page/solution": { ko: "솔루션", en: "Solutions" },
  "page/inquiry": { ko: "서비스문의", en: "Inquiry" },

  // ------------------ 공통정보
  "common/company/name": { ko: "주식회사 유니아이", en: "UNiAI Inc." },
  "common/company/ceo/title": { ko: "대표이사", en: "CEO" },
  "common/company/ceo/name": { ko: "백승환", en: "S.H Baek" },
  "common/company/register/title": { ko: "사업자등록번호", en: "Business Number" },
  "common/company/hq": { ko: "본사", en: "HQ" },
  "common/company/hq/address": {
    ko: "대전광역시 유성구 대학로 99 대전 팁스타운",
    en: "",
  },
  "common/company/research": { ko: "기업부설연구소", en: "Research center" },
  "common/company/research/address": {
    ko: "경기 성남시 수정구 대왕판교로 815 기업지원허브",
    en: "",
  },

  // ------------------ 메인페이지
  // 메인페이지; 비주얼
  "main/visual/upper": {
    ko: "유니아이만의 인공지능 기술로",
    en: "Realizing the value of big data",
  },
  "main/visual/lower": { ko: "빅데이터 가치를 실현하다.", en: "with UNiAI's unique AI technology" },
  // 메인페이지; 기술
  "main/tech/title": {
    ko: "유니아이의 AI 기술을 소개합니다",
    en: "Let me introduce UNiAI's AI technology",
  },
  "main/tech/desc/upper": {
    ko: "닭, 돼지 농가의 축사 관제 시스템과 ",
    en: "You can easily manage livestock with the livestock control system of chicken and pig farms, ",
  },
  "main/tech/desc/lower": {
    ko: "데이터에 기반한 체중예측, 질병예측 기능으로 축사를 편하게 관리할 수 있습니다",
    en: "data-based weight prediction, and disease prediction functions.",
  },
  "main/tech/medical/title": {
    ko: "AI 정밀 의료 서비스 솔루션",
    en: "AI Precision Healthcare Solutions",
  },
  "main/tech/medical/desc": {
    ko: "면담 작성, Ham-D 그래프 확인으로 진료의 편의를 도모하고 AI 약재 추천 기능으로 우울증 진단에 도움을 줄 수 있습니다.",
    en: "Creating interviews and checking Ham-D graphs can facilitate treatment and help diagnose depression with AI drug recommendations.",
  },
  "main/tech/transport/title": {
    ko: "인터모달 자동화물 운송 시스템",
    en: "Intermodal Automatic Cargo Transportation System",
  },
  "main/tech/transport/desc": {
    ko: "컨테이너 글자를 인식해맞는 화물선에 실을 수 있도록 AI 인공지능 딥러닝 기반 문자 인식 성능을 개발 보유하고 있습니다.",
    en: "We have developed AI artificial intelligence deep learning-based character recognition capabilities so that container characters can be recognized and loaded on a matching cargo ship.",
  },
  "main/service/desc/0": {
    ko: "치킨몽거는 실시간 모니터링, 농장제어, 사양관리와",
    en: "Chicken monger is a comprehensive livestock farm solution",
  },
  "main/service/desc/1": {
    ko: "더불어 유니아이의 인공지능 기술로",
    en: "that can predict weight and disease with UNiAI's artificial intelligence technology,",
  },
  "main/service/desc/2": {
    ko: "체중예측, 질병예측까지 가능한 축산 농가 종합 솔루션입니다.",
    en: "along with real-time monitoring, farm control, and specification management.",
  },
  "main/service/name": { ko: "치킨몽거 플랫폼", en: "Platform Service" },
  "main/service/button": { ko: "바로가기", en: "" },

  // ------------------ 회사소개 페이지
  // 회사소개; 비주얼
  "about/visual/title": {
    ko: "데이터로 만드는 <br />인공지능 혁신",
    en: "Artificial Intelligence <br />Innovation with Data",
  },
  "about/visual/desc": {
    ko: "유니아이만의 AI 기술력을 통해 생산자와 소비자 모두에게 필요한 데이터를 제공하여, 세상에 단 하나뿐인 인공지능 혁신을 만들어갑니다.",
    en: "With UNiAI's AI technology, we provide the data we need for both producers and consumers, creating unique AI innovation in the world.",
  },
  // 회사소개; CEO
  "about/ceo/title": { ko: "유니아이 대표이사 소개", en: "Introduction of CEO UNiAI" },
  // 회사소개; CEO - 학력
  "about/ceo/edu/title": { ko: "학력", en: "Degree" },
  "about/ceo/edu/0/university": { ko: "서울대학교", en: "Seoul National University" },
  "about/ceo/edu/0/study": { ko: "기계항공공학부 학사", en: "" },
  "about/ceo/edu/1/university": { ko: "University of Michigan", en: "" },
  "about/ceo/edu/1/study": { ko: "기계공학과 (로봇) 석사", en: "" },
  "about/ceo/edu/2/university": { ko: "한국과학기술원 (KAIST)", en: "KAIST" },
  "about/ceo/edu/2/study": { ko: "인공지능, 로봇 박사", en: "" },
  // 회사소개; CEO - 경력
  "about/ceo/career/title": { ko: "경력", en: "Career" },
  "about/ceo/career/desc/2": { ko: "2021.01. - 현재 유니아이 기술개발 총괄 대표이사", en: "" },
  // 회사소개; CEO - 전문분야
  "about/ceo/expert/title": { ko: "전문분야", en: "Expert" },
  // 회사소개; 비전
  "about/vision/desc/upper": {
    ko: "필요한 데이터로 이 세상에 <br />단 하나뿐인 <br />인공지능 혁신을 만듭니다.",
    en: "Create the world's <br />only AI innovation <br />with the data you need.",
  },
  "about/vision/desc/lower": { ko: "유니아이의 시작", en: "The beginning of UNiAI" },
  // 회사소개; 파트너
  "about/partner/title/desc": {
    ko: "다양한 파트너사와 함께 성장하고 있는 주식회사 <br />유니아이",
    en: "UNiAI Inc. <br />Growing With Various Partners",
  },
  "about/partner/association": { ko: "가금협회", en: "Association" },
  "about/partner/rnd": { ko: "제품개발", en: "R&D" },
  "about/partner/disease": { ko: "질병연구", en: "" },
  "about/partner/distribution": { ko: "가금계열사", en: "" },
  "about/partner/marketing": { ko: "마케팅", en: "Marketing" },
  "about/partner/feeds": { ko: "사료유통", en: "Feeds" },
  "about/partner/govern": { ko: "정부기관", en: "Government" },
  "about/partner/academic": { ko: "산학협력", en: "Academic" },
  "about/partner/law": { ko: "법률자문", en: "Law" },

  // ------------------ 솔루션 페이지
  "solution/system/title/0": { ko: "가금류", en: "Poultry" },
  "solution/system/title/1": {
    ko: "스마트 축사 통합 관제",
    en: "Smart Livestock Integrated Control",
  },
  "solution/system/title/2": { ko: "시스템", en: "system" },
  // 솔루션; 시스템
  "solution/system/feeding/title": { ko: "사양관리", en: "Breeding Management" },
  "solution/system/feeding/desc": {
    ko: "급이, 급수, 도폐사 같은 사육정보와 축사 환경정보,약품 사용량 등 농장 운영에 기본인 사양일지를 간편하게 작성, 관리할 수 있습니다.",
    en: "You can easily create and manage a specifications journal that is basic for farm operation, such as breeding information such as feed, water supply, and slaughter, livestock environment information, and drug usage.",
  },
  "solution/system/control/title": { ko: "통합제어", en: "Integrated Control" },
  "solution/system/control/desc": {
    ko: "IoT로 실시간 모니터링과 제어가 가능해, 축사를 항상 최적의 상태로 유지 할 수 있습니다.",
    en: "IoT allows real-time monitoring and control, so you can always keep your shed in optimal condition.",
  },
  "solution/system/disease/title": { ko: "질병관리", en: "Disease management" },
  "solution/system/disease/desc": {
    ko: "AI의 건강 이상감지 지역수의사, 병성감정기관과 연계하여 건강검진과 진단 서비스로 까다로운 질병관리를 치킨몽거가 대신 해드립니다.",
    en: "Chicken monger will provide difficult disease management with health checkups and diagnostic services in connection with AI's health abnormality detection local veterinarians and pathological appraisal institutions.",
  },
  "solution/system/weight/title": { ko: "체중관리", en: "Weight Management" },
  "solution/system/weight/desc": {
    ko: "AI의 무게추정 시스템으로 실시간 체중 분석이 가능해 농장 생산성과 출하일을 계산하여 생산비용을 절약할 수 있습니다.",
    en: "AI's weight estimation system enables real-time weight analysis, saving production costs by calculating farm productivity and shipment dates.",
  },
  "solution/system/safety/title": {
    ko: "가축 상시 <br />안전감시 시스템",
    en: "Livestock Safety <br />Monitoring System",
  },
  "solution/system/safety/title/string": {
    ko: "가축 상시 안전감시 시스템",
    en: "Livestock Safety Monitoring System",
  },
  "solution/system/safety/desc": {
    ko: "가축의 이상 징후를 AI기술로 예측하는 시스템으로 활동성을 비롯한 여러 요소들의 분석을 통해 이상 징후를 알려드립니다.",
    en: "It is a system that predicts abnormalities in livestock with AI technology, and we inform you of abnormalities through analysis of various factors including activity.",
  },
  // 솔루션; 제품
  "solution/product/title": {
    ko: "스마트 축사 통합 관제 시스템",
    en: "Smart Livestock Integrated Control System",
  },
  "solution/product/allInOne/title": { ko: "통합상품", en: "integrated Package" },
  "solution/product/allInOne/feature/title": {
    ko: "주요기능",
    en: "Features",
  },
  "solution/product/allInOne/feature/control": {
    ko: "축사 모니터링과 제어",
    en: "Monitoring & Control",
  },
  "solution/product/allInOne/feature/disease": {
    ko: "질병 예측과 진단",
    en: "Disease Prediction",
  },
  "solution/product/allInOne/feature/weight": {
    ko: "AI 자동 체중 측정, 예측",
    en: "Weight Prediction with AI",
  },
  "solution/product/allInOne/feature/analysis": {
    ko: "생육정보 입력, 분석",
    en: "Breeding Analysis",
  },
  "solution/product/allInOne/category/desc": {
    ko: "ChickenMonger의 모든 서비스를 한번에!",
    en: "All the services of Chicken Monger at once!",
  },
  "solution/product/feature/feeding/title": { ko: "사양관리", en: "Breeding" },
  "solution/product/feature/disease/title": { ko: "질병관리", en: "Disease" },
  "solution/product/feature/weight/title": { ko: "체중관리", en: "Weight" },
  "solution/product/feature/control/title": { ko: "통합제어", en: "Control" },
  "solution/product/feature/feeding/desc/0": {
    ko: "IoT 통합 환경관리 시스템",
    en: "IoT Integrated Environmental Management System",
  },
  "solution/product/feature/feeding/desc/1": {
    ko: "실시간 IoT 센싱 모니터링",
    en: "Real-time IoT Sensing Monitoring",
  },
  "solution/product/feature/feeding/desc/2": { ko: "편의성/안정성", en: "Convenience/Stability" },
  "solution/product/feature/feeding/desc/3": { ko: "개체 상태 분석", en: "Object State Analysis" },
  "solution/product/feature/feeding/desc/4": {
    ko: "계사 내/외부 환경 분석",
    en: "Analysis of internal/external environment",
  },
  "solution/product/feature/feeding/desc/5": {
    ko: "통합분석 (A.I, IoT, 생육정보 등)",
    en: "Integrated analysis (A.I., IoT, growth information, etc.)",
  },
  "solution/product/feature/weight/desc/0": {
    ko: "무게 추정 시스템",
    en: "Weight estimation system",
  },
  "solution/product/feature/weight/desc/1": {
    ko: "실시간 체중(분포도) 분석",
    en: "Real-time Weight (Distribution Plot) Analysis",
  },
  "solution/product/feature/weight/desc/2": {
    ko: "체중 변화 예측",
    en: "Prediction of weight change",
  },
  "solution/product/feature/weight/desc/3": {
    ko: "체중 분포도 예측",
    en: "Weight distribution chart prediction",
  },
  "solution/product/feature/weight/desc/4": {
    ko: "농가 생산성 예측",
    en: "Farming Productivity Forecast",
  },
  "solution/product/feature/weight/desc/5": {
    ko: "출하 관리",
    en: "Shipment Management",
  },
  "solution/product/feature/disease/desc/0": {
    ko: "가축 건강상태 유지",
    en: "Maintenance of livestock health",
  },
  "solution/product/feature/disease/desc/1": {
    ko: "인공지능 분석 시스템",
    en: "Artificial Intelligence Analysis System",
  },
  "solution/product/feature/disease/desc/2": {
    ko: "질병 예측 시스템",
    en: "Disease prediction system",
  },
  "solution/product/feature/disease/desc/3": {
    ko: "이상감지 알림",
    en: "Anomaly detection notification",
  },
  "solution/product/feature/disease/desc/4": {
    ko: "실시간 건강 모니터링",
    en: "Real-time Health Monitoring",
  },
  "solution/product/feature/disease/desc/5": {
    ko: "시계열 데이터 분석",
    en: "Analysis of time series data",
  },
  "solution/product/feature/disease/desc/6": {
    ko: "행동 분류 분석",
    en: "Behavioral Classification Analysis",
  },
  "solution/product/feature/disease/desc/7": {
    ko: "군집 분포 패턴 분석",
    en: "Cluster Distribution Pattern Analysis",
  },
  "solution/product/feature/control/desc/0": {
    ko: "통합관제 및 자동제어 시스템",
    en: "Integrated Control and Automatic Control System",
  },
  "solution/product/feature/control/desc/1": {
    ko: "인공지능 최적화 시스템",
    en: "AI Optimization System",
  },
  "solution/product/feature/control/desc/2": {
    ko: "농가 데이터 안정성 확보",
    en: "Securing Farm Data Stability",
  },
  "solution/product/feature/control/desc/3": {
    ko: "실시간 IoT 모니터링",
    en: "Real-time IoT monitoring",
  },
  "solution/product/feature/control/desc/4": {
    ko: "계열농가 출하 관리",
    en: "Shipment management of affiliated farms",
  },
  "solution/product/feature/control/desc/5": {
    ko: "사육현황 모니터링",
    en: "Monitoring breeding status",
  },
  "solution/product/feature/control/desc/6": {
    ko: "농장 위생/방역관리",
    en: "Farm hygiene/quarantine management",
  },
  "solution/product/weightPackage/title": { ko: "개별상품", en: "Weight Package" },
  "solution/product/weightPackage/desc/upper": {
    ko: "체중에 초점을 맞춘 “체중특화” 상품으로",
    en: `It is a weight-focused "weight specialization" product`,
  },
  "solution/product/weightPackage/desc/lower": {
    ko: "사양관리 + 체중관리 + 통합제어를 이용하실 수 있습니다.",
    en: "and you can use specification management + weight management + integrated control.",
  },
};

export default localeData;
