const quotes = [
    {
        quote : "하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다.",
        author : "사무엘존슨",
    },
    {
        quote : " 단순하게 살아라. 현대인은 쓸데없는 절차와 일 때문에 얼마나 복잡한 삶을 살아가는가?",
        author : "이드리스 샤흐",
    },
    {
        quote : "성공으로 가는 엘리베이터는 고장입니다. 당신은 계단을 이용해야만 합니다. 한계단 한계단씩",
        author : "조 지라드",
    },
    {
        quote : "직접 눈으로 본 일도 오히려 참인지 아닌지 염려스러운데 더구나 등뒤에서 남이 말하는 것이야 어찌 이것을 깊이 믿을 수 있으랴?",
        author : "명심보감",
    },
    {
        quote : " 인생을 다시 산다면 다음번에는 더 많은 실수를 저지르리라",
        author : "나딘 스테어",
    },
    {
        quote : "인간의 삶 전체는 단지 한 순간에 불과하다 . 인생을 즐기자",
        author : "플루타르코스",
    },
    {
        quote : "행복의 한 쪽 문이 닫히면 다른 쪽 문이 열린다. 그러나 흔히 우리는 닫혀진 문을 오랫동안 보기 때문에 우리를 위해 열려 있는 문을 보지 못한다.",
        author : "헬렌 켈러",
    },
    {
        quote : "화가 날 때는 100까지 세라. 최악일 때는 욕설을 퍼부어라.",
        author : "마크 트웨인",
    }
];

const Quote = document.querySelector("#quotes span:first-child");
const Author = document.querySelector("#quotes span:last-child");
const randomQuotes = quotes[Math.floor(Math.random() * quotes.length)]; //floor=숫자내림 

Quote.innerText = randomQuotes.quote;
Author.innerText = randomQuotes.author;