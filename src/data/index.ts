export interface DropItem {
  name: string;
  image: string;
}

export interface InfoItem {
  name: string;
  value: number;
}

export interface Boss {
  name: string;
  thumbnail: {
    on: string;
    off: string;
  };
  info: InfoItem[];
  drop: DropItem[];
  zenDelay: number;
  isShow?: boolean;
  isPlay?: boolean;
}

const PAPERS = {
  red: "/images/paper_red.gif",
  yellow: "/images/paper_yellow.gif",
  black: "/images/paper_black.gif",
  white: "/images/paper_white.gif",
  pink: "/images/paper_pink.gif",
};

export const data: Boss[] = [
  {
    name: "머쉬맘",
    zenDelay: 25,
    thumbnail: {
      on: "/images/mushmom_on.gif",
      off: "/images/mushmom_off.png",
    },
    info: [
      {
        name: "경험치",
        value: 1650,
      },
      {
        name: "드랍메소",
        value: 1000,
      },
      {
        name: "HP",
        value: 17500,
      },
      {
        name: "MP",
        value: 2000,
      },
      {
        name: "물리공격력",
        value: 126,
      },
      {
        name: "물리방어력",
        value: 320,
      },
      {
        name: "마법공격력",
        value: 117,
      },
      {
        name: "마법방어력",
        value: 320,
      },
      {
        name: "명중률",
        value: 23,
      },
      {
        name: "회피율",
        value: 1,
      },
      {
        name: "이동속도",
        value: 5,
      },
    ],
    drop: [
      {
        name: "머쉬맘의 포자",
        image: "",
      },
      {
        name: "스틸 타워 실드",
        image: "/images/steel_tower_shield.gif",
      },
      {
        name: "일비 표창",
        image: "/images/ilbi.png",
      },
      {
        name: "투구 방어력 주문서 60%",
        image: PAPERS["red"],
      },
      {
        name: "투구 체력 주문서 60%",
        image: PAPERS["red"],
      },
      {
        name: "귀 장식 지력 주문서 60%",
        image: PAPERS["red"],
      },
      {
        name: "상의 방어력 주문서 60%",
        image: PAPERS["red"],
      },
      {
        name: "전신 갑옷 민첩 주문서 60%",
        image: PAPERS["red"],
      },
      {
        name: "전신 갑옷 방어력 주문서 60%",
        image: PAPERS["red"],
      },
      {
        name: "하의 방어력 주문서 60%",
        image: PAPERS["red"],
      },
      {
        name: "신발 회피 주문서 60%",
        image: PAPERS["red"],
      },
      {
        name: "신발 점프력 주문서 60%",
        image: PAPERS["red"],
      },
      {
        name: "신발 이동속도 주문서 60%",
        image: PAPERS["red"],
      },
      {
        name: "장갑 민첩 주문서 60%",
        image: PAPERS["yellow"],
      },
      {
        name: "망토 마법방어력 주문서 60%",
        image: PAPERS["yellow"],
      },
      {
        name: "망토 물리방어력 주문서 60% ",
        image: PAPERS["yellow"],
      },
      {
        name: "장갑 공격력 주문서 60%",
        image: PAPERS["yellow"],
      },
      {
        name: "방패 방어력 주문서 60%",
        image: PAPERS["yellow"],
      },
      {
        name: "크리스탈 플라워링",
        image: PAPERS["yellow"],
      },
      {
        name: "쏜즈",
        image: PAPERS["yellow"],
      },
      {
        name: "블레이즈 캡슐",
        image: PAPERS["yellow"],
      },
      {
        name: "상의 행운 주문서 10%",
        image: PAPERS["red"],
      },
      {
        name: "하의 점프 주문서 60%",
        image: PAPERS["red"],
      },
      {
        name: "하의 점프 주문서 10%",
        image: PAPERS["red"],
      },
      {
        name: "투구 지력 주문서 100%",
        image: PAPERS["red"],
      },
    ],
  },
  {
    name: "좀비 머쉬맘",
    zenDelay: 25,
    thumbnail: {
      on: "/images/zombie_mushmom_on.gif",
      off: "/images/zombie_mushmom_off.png",
    },
    info: [
      {
        name: "경험치",
        value: 2200,
      },
      {
        name: "드랍메소",
        value: 1200,
      },
      {
        name: "HP",
        value: 26250,
      },
      {
        name: "MP",
        value: 4000,
      },
      {
        name: "물리공격력",
        value: 168,
      },
      {
        name: "물리방어력",
        value: 350,
      },
      {
        name: "마법공격력",
        value: 160,
      },
      {
        name: "마법방어력",
        value: 400,
      },
      {
        name: "명중률",
        value: 40,
      },
      {
        name: "회피율",
        value: 3,
      },
      {
        name: "이동속도",
        value: 5,
      },
    ],
    drop: [
      {
        name: "독버섯",
        image: "",
      },
      {
        name: "분홍꽃 귀고리",
        image: "",
      },
      {
        name: "검은색 가이아의 망토",
        image: "",
      },
      {
        name: "일비 표창",
        image: "/images/ilbi.png",
      },
      {
        name: "한손도끼 공격력 주문서 60%",
        image: PAPERS["yellow"],
      },
      {
        name: "한손둔기 공격력 주문서 60%",
        image: PAPERS["pink"],
      },
      {
        name: "단검 공격력 주문서 60%",
        image: PAPERS["yellow"],
      },
      {
        name: "완드 마력 주문서 60%",
        image: PAPERS["black"],
      },
      {
        name: "스태프 마력 주문서 60%",
        image: PAPERS["yellow"],
      },
      {
        name: "두손검 공격력 주문서 60%",
        image: PAPERS["black"],
      },
      {
        name: "두손도끼 공격력 주문서 60%",
        image: PAPERS["red"],
      },
      {
        name: "두손둔기 공격력 주문서 60%",
        image: PAPERS["red"],
      },
      {
        name: "창 공격력 주문서 60%",
        image: PAPERS["black"],
      },
      {
        name: "폴암 공격력 주문서 60%",
        image: PAPERS["red"],
      },
      {
        name: "활 공격력 주문서 60%",
        image: PAPERS["red"],
      },
      {
        name: "석궁 공격력 주문서 60%",
        image: PAPERS["white"],
      },
      {
        name: "아대 공격력 주문서 60%",
        image: PAPERS["red"],
      },
      {
        name: "펫장비 이동속도 주문서 60%",
        image: PAPERS["yellow"],
      },
      {
        name: "펫장비 점프력 주문서 60%",
        image: PAPERS["yellow"],
      },
      {
        name: "한손검 공격력 주문서 60%",
        image: PAPERS["yellow"],
      },
      {
        name: "실버 레전드 실드",
        image: "",
      },
      {
        name: "글레이스 캡슐",
        image: "",
      },
      {
        name: "너클 공격력 주문서 60%",
        image: PAPERS["red"],
      },
      {
        name: "건 공격력 주문서 60%",
        image: PAPERS["yellow"],
      },
      {
        name: "상의 체력 주문서 10%",
        image: PAPERS["yellow"],
      },
      {
        name: "한손검 명중치 주문서 10%",
        image: PAPERS["yellow"],
      },
    ],
  },
];
