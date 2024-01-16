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
  thumbnail: string;
  info: InfoItem[];
  drop: DropItem[];
  zenDelay: number;
  isShow?: boolean;
}

const PAPER_RED_URL = "/images/paper_red.gif";
const PAPER_YELLOW_URL = "/images/paper_yellow.gif";

export const data: Boss[] = [
  {
    name: "머쉬맘",
    zenDelay: 25,
    thumbnail:
      "https://media.fmkorea.com/files/attach/new/20191118/486616/177971450/2392844811/99b983892094b5c6d2fc3736e15da7d1.gif",
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
        image: PAPER_RED_URL,
      },
      {
        name: "투구 체력 주문서 60%",
        image: PAPER_RED_URL,
      },
      {
        name: "귀 장식 지력 주문서 60%",
        image: PAPER_RED_URL,
      },
      {
        name: "상의 방어력 주문서 60%",
        image: PAPER_RED_URL,
      },
      {
        name: "전신 갑옷 민첩 주문서 60%",
        image: PAPER_RED_URL,
      },
      {
        name: "전신 갑옷 방어력 주문서 60%",
        image: PAPER_RED_URL,
      },
      {
        name: "하의 방어력 주문서 60%",
        image: PAPER_RED_URL,
      },
      {
        name: "신발 회피 주문서 60%",
        image: PAPER_RED_URL,
      },
      {
        name: "신발 점프력 주문서 60%",
        image: PAPER_RED_URL,
      },
      {
        name: "신발 이동속도 주문서 60%",
        image: PAPER_RED_URL,
      },
      {
        name: "장갑 민첩 주문서 60%",
        image: PAPER_YELLOW_URL,
      },
      {
        name: "망토 마법방어력 주문서 60%",
        image: PAPER_YELLOW_URL,
      },
      {
        name: "망토 물리방어력 주문서 60% ",
        image: PAPER_YELLOW_URL,
      },
      {
        name: "장갑 공격력 주문서 60%",
        image: PAPER_YELLOW_URL,
      },
      {
        name: "방패 방어력 주문서 60%",
        image: PAPER_YELLOW_URL,
      },
      {
        name: "크리스탈 플라워링",
        image: PAPER_YELLOW_URL,
      },
      {
        name: "쏜즈",
        image: PAPER_YELLOW_URL,
      },
      {
        name: "블레이즈 캡슐",
        image: PAPER_YELLOW_URL,
      },
      {
        name: "상의 행운 주문서 10%",
        image: PAPER_RED_URL,
      },
      {
        name: "하의 점프 주문서 60%",
        image: PAPER_RED_URL,
      },
      {
        name: "하의 점프 주문서 10%",
        image: PAPER_RED_URL,
      },
      {
        name: "투구 지력 주문서 100%",
        image: PAPER_RED_URL,
      },
    ],
  },
];
