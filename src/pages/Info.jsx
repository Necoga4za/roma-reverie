import React from "react";


const styles = {
  container: {
    width: "1920px",
    height: "4200px",
    position: "relative",
    background: "#F5F5F5",
    overflow: "hidden",
    fontFamily: "Futura, sans-serif",
  },
  headerImage: {
    position: "absolute",
    top: "180px",
    left: 0,
    width: "1920px",
    height: "720px",
    objectFit: "cover",
  },
  buongiorno: {
    position: "absolute",
    top: "930px",
    left: "380px",
    fontSize: "140px",
    fontFamily: "Thesignature",
    color: "#ED1E21",
    textTransform: "uppercase",
  },
  sectionTitle: {
    position: "absolute",
    top: "1300px",
    left: "300px",
    fontSize: "36px",
    fontFamily: "Gotham Medium",
    color: "#ED1E21",
    textTransform: "uppercase",
  },
  image: (src, width, height, left, top) => ({
    position: "absolute",
    width,
    height,
    left,
    top,
    content: `url(${src})`,
  }),
  subtitle: {
    position: "absolute",
    top: "1570px",
    left: "930px",
    fontSize: "80px",
    fontFamily: "Thesignature",
    color: "#ED1E21",
  },
  paragraph: (top, left, width) => ({
    position: "absolute",
    top,
    left,
    width,
    fontSize: "24px",
    fontFamily: "VT323",
    color: "#747373",
  }),
  footerTitle: {
    position: "absolute",
    top: "3035px",
    left: "660px",
    fontSize: "36px",
    fontFamily: "Gotham Medium",
    color: "#ED1E21",
    textTransform: "uppercase",
  },
  blogBtn: {
    position: "absolute",
    top: "3210px",
    left: "1270px",
    padding: "8px",
    background: "#ED1E21",
    fontSize: "36px",
    color: "white",
    fontFamily: "VT323",
    textDecoration: "none"
  },
  instBtn: {
    position: "absolute",
    top: "3300px",
    left: "1270px",
    padding: "8px",
    background: "#ED1E21",
    fontSize: "36px",
    color: "white",
    fontFamily: "VT323",
    textDecoration: "none"
  },
  footerNote: {
    position: "absolute",
    top: "3650px",
    left: "670px",
    fontSize: "30px",
    fontFamily: "VT323",
    color: "#747373",
  },
};

const Intro = () => {
  return (
    <div style={styles.container}>

      {/* Header */}
      <img
        src="/img/info1.png"
        alt="header"
        style={styles.headerImage}
      />

      <div style={styles.buongiorno}>BUONGIORNO !</div>

      <div style={styles.sectionTitle}>TO ME, TRAVEL IS</div>
      <img
        src="/img/info2.png"
        alt="img1"
        style={styles.image("/img/info2.png", "570px", "430px", "300px", "1430px")}
      />
      <div style={styles.subtitle}>Mamma mia!</div>
      <div style={styles.paragraph("1665px", "1000px", "600px")}>
        For me, traveling is an opportunity to experience new environments
        firsthand and gain a deeper understanding of the world. Walking through
        unfamiliar streets, exchanging simple greetings, and adjusting to
        rhythms different from my daily routine help me become more flexible and
        open-minded. That’s why I always try to learn a few basic local
        greetings before I go—they often open up conversations and make the
        experience feel much more comfortable.
      </div>

      <img
        src="/img/info3.png"
        alt="img2"
        style={styles.image("/img/info3.png", "705px", "530px", "600px", "1900px")}
      />
      <img
        src="/img/info4.png"
        alt="img3"
        style={styles.image("/img/info4.png", "399px", "213px", "1190px", "2350px")}
      />

      <img
        src="http://localhost:3000/img/Group 76.png"
        alt="rogo"
        style={{
          ...styles.image("http://localhost:3000/img/Group 76.png", "253px", "253px", "290px", "2320px"),
          opacity: 0.4, 
        }}
      />

      <div style={styles.paragraph("2470px", "400px", "850px")}
      >
        I also like to choose music that fits the atmosphere of the city I’m<br></br>
        visiting. Music has a unique way of bringing back memories of a <br></br>specific
        place or moment. Naturally, this leads me to record those<br></br>
        experiences—through photos, short notes, and reflections I enjoy<br></br>
        revisiting later. To me, travel is an extension of daily life, but<br></br> one
        that fills me in a different, more meaningful way.
      </div>

      <div style={styles.footerTitle}>Buongiorno! I’m Kim su yeon</div>
      <img
        src="/img/info5.png"
        alt="me"
        style={styles.image("/img/info5.png", "800px", "450px", "560px", "3150px")}
      />
     <a
        href="https://blog.naver.com/tndus2669/223641815505"
        target="_blank"
        rel="noopener noreferrer"
        style={styles.blogBtn}
      >
        Naver Blog ➚
      </a>
      <a
        href="https://instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
        style={styles.instBtn}
      >
        inst ➚
      </a>

      <div style={styles.footerNote}>
        Learn more about my travel life ദ്ദി(˵ •̀ ᴗ - ˵ ) ✧
      </div>
    </div>
  );
};

export default Intro;
