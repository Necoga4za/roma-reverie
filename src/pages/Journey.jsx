import React, { useState } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



const styles = {
 container: {
  width: "1920px",
  minHeight: "100vh",
  paddingBottom: "300px",
  position: "relative",
  background: "#F5F5F5",
  overflowX: "hidden", // ✅ 강제 수평 스크롤 제거
  fontFamily: "Futura, sans-serif",
},

  image: (src, width, height, left, top) => ({
    position: "absolute",
    width,
    height,
    left,
    top,
    content: `url(${src})`,
  }),
 text: (
  left,
  top,
  fontSize,
  fontFamily,
  color = "#ED1E21",
  fontWeight = 400,
  style = "normal",
  transform = "none",
  lineHeight = "normal"
) => ({
  position: "absolute",
  left,
  top,
  color,
  fontSize,
  fontFamily,
  fontWeight,
  fontStyle: style,
  textTransform: transform,
  wordWrap: "break-word",
  lineHeight,
  whiteSpace: "pre-line",  // ★ 이 줄 추가!
}),

  rect: (width, height, left, top, background) => ({
    position: "absolute",
    width,
    height,
    left,
    top,
    background,
  }),
};




const Journey = () => {
  const [currentImage, setCurrentImage] = useState("/img/woo1.png");

  const tourList = [
    { text: "Colosseo ; 로마 제국의 심장, 고대 원형 경기장", img: "/img/woo1.png" },
    { text: "Foro Romano ; 고대 로마의 정치·상업 중심지", img: "http://localhost:3000/img/poro.png" },
    { text: "Piazza Venezia ; 비토리오 엠마누엘레 2세 기념관", img: "/img/PiazzaVenezia.png" },
    { text: "Pantheon ; 2000년 이상 보존된 고대 신전", img: "/img/pantheon.png" },
    { text: "Piazza Navona ; 분수와 예술의 광장", img: "/img/PiazzaNavona.png" },
    { text: "Castel Sant'Angelo ; 천사의 성, 멋진 전경 포인트", img: "/img/ggood1.jpg" },
    { text: "Basilica di San Pietro ; 카톨릭의 중심, 바티칸", img: "/img/vatican.jpg" },
  ];
  return (
    
    <div style={styles.container}>

      {/* 메인 타이틀 */}
      <div style={styles.text("378px", "563px", "137.67px", "Gotham Black", "#ED1E21", 900, "normal", "uppercase")}>romE  reverie.</div>
      <div style={styles.text("471px", "655px", "128px", "Thesignature", "#ED1E21")}>SEOUL-ROME</div>
      <img style={styles.image("http://localhost:3000/img/image18.png", "291px", "212px", "815px", "316px")} alt="colosseum" />

      {/* PREVIEW 라벨 */}
      <div style={styles.text("872px", "1079px", "36px", "Gotham Medium", "#ED1E21", 500, "normal", "uppercase")}>preview</div>
      <div style={{ position: "absolute", width: "286px", height: 0, left: "818px", top: "1169px", outline: "2px #ED1E21 solid", outlineOffset: "-1px" }} />

      {/* PREVIEW 텍스트 */}
      <div style={styles.text("550px", "1280px", "32px", "Gmarket Sans", "#1B1B1B")}>Travel type</div>
      <div style={styles.text("985px", "1280px", "32px", "Gmarket Sans", "#747373")}>역사 문화 중심 도보 여행</div>
      <div style={styles.text("550px", "1352px", "32px", "Gmarket Sans", "#1B1B1B")}>Total distance</div>
      <div style={styles.text("985px", "1352px", "32px", "Gmarket Sans", "#747373")}>약 6.5km</div>
      <div style={styles.text("550px", "1424px", "32px", "Gmarket Sans", "#1B1B1B")}>A single route</div>
      <div style={styles.text("985px", "1424px", "32px", "Gmarket Sans", "#747373")}>한 방향 동선으로 설계</div>
      <div style={styles.text("550px", "1496px", "32px", "Gmarket Sans", "#1B1B1B")}>Moving speed</div>
      <div style={styles.text("985px", "1496px", "32px", "Gmarket Sans", "#747373")}>시속 3~4km (도보 기준)</div>
      <div style={styles.text("550px", "1568px", "32px", "Gmarket Sans", "#1B1B1B")}>Time Required</div>
      <div style={styles.text("985px", "1568px", "32px", "Gmarket Sans", "#747373")}>약 7~9시간 (입장 포함)</div>
      <div style={styles.text("550px", "1640px", "32px", "Gmarket Sans", "#1B1B1B")}>Mobile system</div>
      <div style={styles.text("985px", "1640px", "32px", "Gmarket Sans", "#747373")}>지도 + 스마트폰 내비게이션</div>

      {/* ROUTE 라벨 */}
      <div style={styles.text("245px", "2046px", "36px", "Gotham Medium", "#ED1E21", 500, "normal", "uppercase")}>ROUTE</div>

      {/* ROUTE 포인트 */}
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <div key={i} style={styles.rect("19px", "19px", `535px`, `${2069 + i * 54}px`, "#ED1E21")}></div>
      ))}

      {tourList.map((item, i) => (
        <div
          key={i}
          style={styles.text("609px", `${2066 + i * 54}px`, "24px", "Gmarket Sans", "#1B1B1B")}
          onMouseEnter={() => setCurrentImage(item.img)}
          onMouseLeave={() => setCurrentImage("/img/woo1.png")}
        >
          {item.text}
        </div>
      ))}

  <img
  src={currentImage}
  alt="Colosseum Preview"
  style={{
    position: "absolute",
    width: "413px",
    height: "380px",
    left: "1262px",
    top: "2046px",
    objectFit: "cover", // ⭐ 이미지가 꽉 차도록
    borderRadius: "10px", // 선택사항
  }}
/>


      {/* <img style={styles.image("/img/woo1.png", "413px", "380px", "1262px", "2046px")} alt="Colosseum" /> */}
      <div style={styles.text("1232px", "2058px", "20px", "Gotham Black", "#ED1E21", 900, "italic", "lowercase", "24px")}>The heart of the Roman Empire,<br/>the ancient amphitheater</div>
      <div style={styles.text("1538px", "2329px", "96px", "Thesignature")}>Colosseo</div>





      {/* 본문 + 강조 텍스트 */}
     
      <div style={styles.text("245px", "2890px", "32px", "Gotham Black", "#ED1E21", 900, "italic")}>
        {`Why You Should Visit Rome at Least Once \n in Your Life — and What I Felt While I Was There`}
      </div>
       {/* 텍스트 본문 박스 */}
      <div
        style={{
          ...styles.text("390px", "3034px", "24px", "VT323", "#2B2B2B"),
          width: "770px", zIndex: "1"
        }}
      >
        sing Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default modesing Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infanc<br /><br />y. Varioussing Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various
      </div>


      <img style={styles.image("/img/RomeMagenet1.png", "414px", "472px", "1100px", "2900px")} alt="마그넷" />
        <img style={styles.image("/img/capu.png", "270px", "333px", "1535px", "3038px")} alt="카푸치노" />

      <div style={styles.text("555px", "3950px", "32px", "Gotham Black", "#ED1E21", 900, "italic")}>
        {`The morning cappuccino in Rome is special — not just \n for its taste, but for the calm streets and local warmth.`}</div>
       <img style={styles.image("/img/o.png", "1123px", "701px", "420px", "4080px")} alt="중앙이미지" />
       <div style={styles.text("85px", "4390px", "128px", "Thesignature", "#ED1E21")}>SEOUL</div>
       <div style={styles.text("1320px", "4390px", "128px", "Thesignature", "#ED1E21")}>ROME</div>
       <div
        style={{
          ...styles.text("485px", "4820px", "32px", "VT323", "#747373"),}}
      >
        Morning in Rome to eat cappuccino and croissants, blue sky and lively streets
      </div>
      <SlickCarousel />
    </div>
    );
};
     
     
const items = [
  { id: "#0001", date: "11.Oct.2024", city: "Rome,Italy", bg: "/img/gang.jpg" },
  { id: "#0002", date: "11.Oct.2024", city: "Rome,Italy", bg: "/img/strite5.jpg" },
  { id: "#0003", date: "11.Oct.2024", city: "Rome,Italy", bg: "/img/toel.jpg" },
  { id: "#0004", date: "12.Oct.2024", city: "Rome,Italy", bg: "/img/wine.jpg" },
  { id: "#0005", date: "13.Oct.2024", city: "Rome,Italy", bg: "/img/g11.png" },
  { id: "#0006", date: "14.Oct.2024", city: "Rome,Italy", bg: "/img/pasta.jpg" },
  { id: "#0007", date: "15.Oct.2024", city: "Rome,Italy", bg: "/img/sss.jpg" },
  { id: "#0008", date: "16.Oct.2024", city: "Rome,Italy", bg: "/img/potato.jpg" },
];


const SlickCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 0.5,
    autoplay: true,
    autoplaySpeed: 0,
  };

  return (
    <div style={{ width: "1900px", margin: "0 auto", paddingTop: "5050px" }}>
      <Slider {...settings}>
        {items.map((item, idx) => (
          <div key={idx}>
            
            <div style={{ textAlign: "right", color: "#ED1E21", fontFamily: "VT323", fontSize: "30px", paddingRight: "250px" }}>
              <p>{item.date}</p>
              <p>{item.id}</p>
              <div
             style={{
                width: "377px",
                height: "377px",
                backgroundImage: `url(${item.bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                margin: "0 auto",
              }}
            />
              <p style={{ textAlign: "left", color: "#ED1E21", fontFamily: "VT323", fontSize: "30px" }}>{item.city}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Journey;
