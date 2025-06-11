import React from "react";

const styles = {
  container: {
    width: "100%",
    height: "120px", // footer 높이
    background: "#F5F5F5",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  text: (
    fontSize,
    fontFamily,
    color = "#ED1E21",
    fontWeight = 400,
    transform = "none",
    lineHeight = "normal",
    margin = "0"
  ) => ({
    color,
    fontSize,
    fontFamily,
    fontWeight,
    textTransform: transform,
    lineHeight,
    margin,
  }),
};

const Footer = () => {
  return (
    <div style={styles.container}>
      <p style={styles.text("39.15px", "Gotham Black", "#ED1E21", 900, "uppercase")}>
        rome reverie.
      </p>
      <p style={styles.text("36.4px", "Thesignature")}>
        SEOUL-ROME
      </p>
    </div>
  );
};

export default Footer;
