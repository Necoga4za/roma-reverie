import React from "react";


const styles = {
  container: {
  paddingTop: "70px",
  width: "1920px",
  minHeight: "100vh",
  paddingBottom: "120px", // Footer와 딱 맞춰 떨어지게
  position: "relative",
  background: "#F5F5F5",
  fontFamily: "Futura, sans-serif",
},

  galleryTitle: {
    position: "absolute",
    left: "100px",
    top: "30px",
    color: "#ED1E21",
    fontSize: "137.67px",
    fontFamily: "Gotham Black",
    fontWeight: 900,
    textTransform: "uppercase",
  },
  image: (width, height, left, top) => ({
    width,
    height,
    position: "absolute",
    left,
    top,
    objectFit: "cover",
    border: "1px solid #ccc",
  }),
  label: (left, top, fontSize = "13.58px", lineHeight = "16.29px") => ({
    position: "absolute",
    left,
    top,
    color: "#1B1B1B",
    fontSize,
    fontFamily: "Futura",
    fontStyle: "italic",
    fontWeight: 500,
    textTransform: "capitalize",
    lineHeight,
  }),
  label2: (left, top, fontSize = "18px", lineHeight = "20px") => ({
    position: "absolute",
    left,
    top,
    color: "#1B1B1B",
    fontSize,
    fontFamily: "Futura",
    fontStyle: "italic",
    fontWeight: 500,
    textTransform: "capitalize",
    lineHeight,
  }),
  numberCircle: (left, top) => ({
    position: "absolute",
    left,
    top,
    width: "22.63px",
    height: "22.63px",
    background: "#ED1E21",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontSize: "11.32px",
    fontFamily: "NanumSquare Neo",
    fontWeight: 800,
  }),
};

const Gallery = () => {
  return (
    <div style={styles.container}>
      <div style={styles.galleryTitle}>GALLERY.</div>

      {/* 이미지 01, 1-1, 1-2,1-3 */}
      <img src="/img/g1.png" alt="img1" style={styles.image("413px", "544px", "100px", "300px")} />
      <img src="/img/g1_2.png" alt="img2" style={styles.image("222px", "315px", "535.66px", "300px")} />
      <img src="/img/g1_3.png" alt="img3" style={styles.image("222px", "315px", "776.46px", "300px")} />
      <img src="/img/g1_4.png" alt="img4" style={styles.image("222px", "315px", "1017.25px", "300px")} />
      <div style={styles.label("100px", "860px")}>Puppy Heaven = Borges Park</div>
      <div style={styles.label("472.53px", "860px")}>11/24</div>
      <div style={styles.numberCircle("100px", "270px")}>01</div>

      <div style={styles.label2("1262.13px", "480px")}>A. Borges Park was the best choice<br></br><br></br>
      More than expected Borges Park. You can see many riverside dogs <br></br>and run around freely unlike Korea. The green-colored trees are<br></br>
      a fountain, garden, and horse with the police... <br></br> It's a really recommended place.</div>

      {/* 이미지 02 */}
      <img src="/img/g2.png" alt="img2" style={styles.image("557.87px", "338.34px", "1262.13px", "750px")} />
      <div style={styles.label("1260px", "1100px")}>On the plane heading to Rome</div>
      <div style={styles.label("1787.79px", "1100px")}>11/24</div>
      <div style={styles.numberCircle("1262.13px", "720px")}>02</div>

      {/* 이미지 03 */}
      <img src="/img/g3.png" alt="img3" style={styles.image("268.18px", "347.39px", "535.66px", "950px")} />
      <div style={styles.label("535.66px", "1310px")}>for the first meal of Rome</div>
      <div style={styles.label("765.37px", "1310px")}>11/24</div>
      <div style={styles.label2("100px", "950px")}>B. a country with many good restaurants<br></br> Italy, one of the countries with<br></br><br></br>
      so many delicious food. If you come to<br></br>this country, you will definitely try pasta. The <br></br>pasta restaurant that happened to stop by was<br></br> much better than the place with a long waiting.<br></br> Pasta!!</div>
      <div style={styles.numberCircle("535.66px", "920px")}>03</div>

      {/* 이미지 04 */}
      <img src="/img/g4.png" alt="img4" style={styles.image("413.03px", "624.22px", "826.47px", "950px")} />
      <div style={styles.label("826.47px", "1590px")}>It's always a cappuccino in the morning in Rome</div>
      <div style={styles.label("1201.03px", "1590px")}>11/24</div>
      <div style={styles.numberCircle("826.47px", "920px")}>04</div>

      {/* 이미지 05 */}
      <img src="/img/g5.png" alt="img5" style={styles.image("267.05px", "357.58px", "1262.13px", "1215px")} />
      <div style={styles.label("1260px", "1590px")}>the magnificent cathedral of Rome</div>
      <div style={styles.numberCircle("1260px", "1183px")}>05</div>

      {/* 이미지 06 */}
      <img src="/img/g6.png" alt="img6" style={styles.image("267.05px", "357.58px", "1553px", "1215px")} />
      <div style={styles.label("1553px", "1590px")}>the magnificent cathedral of Rome</div>
      <div style={styles.numberCircle("1553px", "1183px")}>06</div>

      {/* 이미지 07 */}
      <img src="/img/g7.png" alt="img7" style={styles.image("413.03px", "222.92px", "100px", "1353px")} />
      <div style={styles.label("100px", "1590px")}>Trevi Fountain under construction</div>
      <div style={styles.label("472.53px", "1590px")}>11/24</div>
      <div style={styles.numberCircle("100px", "1320px")}>07</div>

      {/* 이미지 08 */}
      <img src="/img/g8.png" alt="img8" style={styles.image("203.7px", "264.79px", "300px", "1800px")} />
      <div style={styles.label("300px", "2080px")}>Vatican City Cathedral </div>
      <div style={styles.label("468px", "2080px")}>11/24</div>
      <div style={styles.numberCircle("300px", "1770px")}>08</div>

       {/* 이미지 09 */}
      <img src="/img/g9.png" alt="img9" style={styles.image("203.7px", "264.79px", "530px", "1800px")} />
      <div style={styles.label("530px", "2080px")}>Vatican City Cathedral </div>
      <div style={styles.label("700px", "2080px")}>11/24</div>
      <div style={styles.numberCircle("530px", "1770px")}>09</div>

      {/* 이미지 10 */}
      <img src="/img/g10.png" alt="img10" style={styles.image("268px", "293px", "100px", "2200px")} />
      <div style={styles.label("100px", "2510px")}>the streets of Rome </div>
      <div style={styles.label("333px", "2510px")}>11/24</div>
      <div style={styles.numberCircle("100px", "2170px")}>10</div>

      <div style={styles.label2("550px", "2300px")}>SEOUL-ROME</div>

       {/* 이미지 11 */}
      <img src="/img/g11.png" alt="img11" style={styles.image("413px", "293x", "826.47px", "2200px")} />
      <div style={styles.label("826.47px", "2510px")}>a lasagna restaurant and friendly staff </div>
      <div style={styles.label("1201.03px", "2510px")}>11/24</div>
      <div style={styles.numberCircle("826.47px", "2170px")}>11</div>

      {/* 이미지 12 */}
      <img src="/img/g12.png" alt="img12" style={styles.image("556.74px", "505.82px", "1262.13px", "1987px")} />
      <div style={styles.label("1264px", "2510px")}>a picture taken on the street on the last day of Rome</div>
      <div style={styles.label("1788px", "2510px")}>11/24</div>
      <div style={styles.numberCircle("1262.13px", "1957px")}>12</div>

    <div style={{ height: "2700px" }}></div>

    </div>
    
  );
};

export default Gallery;
