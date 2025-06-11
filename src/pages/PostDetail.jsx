import React from "react";
import { useParams } from "react-router-dom"; 

const commentsData = [
  {
    id: 1,
    username: "yunsol_J",
    content:
      "I also like to choose music that fits the atmosphere of the city I’m visiting. Music has a unique way of bringing back memories...",
  },
  {
    id: 2,
    username: "yunsol_J",
    content:
      "Naturally, this leads me to record those experiences—through photos, short notes, and reflections...",
  },
  {
    id: 3,
    username: "yunsol_J",
    content:
      "To me, travel is an extension of daily life, but one that fills me in a different, more meaningful way.",
  },
];



class PostDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      const { comments } = this.state;
      if (comments.length < commentsData.length) {
        const nextComment = commentsData[comments.length];
        this.setState({
          comments: [...comments, nextComment],
        });
      } else {
        clearInterval(this.timer);
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div style={{ width: "1920px", margin: "0 auto", background: "#F5F5F5" }}>
        {/* 제목 */}
        <div style={{ textAlign: "center", marginTop: "100px", fontSize: "96px", fontWeight: "900", fontFamily: "Gotham Black" }}>
          Best coffee restaurants in Rome
        </div>

        {/* 날짜 */}
        <div style={{ textAlign: "center", marginTop: "30px", fontSize: "64px", fontFamily: "VT323", color: "#747373" }}>
          2025. 06. 09
        </div>

        {/* 이미지 */}
        <img
          src="https://placehold.co/1920x906"
          alt="main"
          style={{ marginTop: "60px", width: "100%" }}
        />

        {/* 좋아요 및 댓글 요약 */}
        <div style={{ margin: "40px 100px", display: "flex", justifyContent: "space-between", fontSize: "60px", fontFamily: "VT323", color: "#747373" }}>
          <div>Like 1</div>
          <div>Comment {commentsData.length}</div>
        </div>

        {/* 댓글 입력 */}
        <div style={{ margin: "40px 100px", background: "#fff", borderRadius: "100px", padding: "40px", fontSize: "48px", fontFamily: "VT323", color: "#999" }}>
          Please enter your comment...
        </div>

        {/* 댓글 목록 */}
        <div style={{ margin: "100px", display: "flex", flexDirection: "column", gap: "70px" }}>
          {this.state.comments.map((comment) => (
            <div key={comment.id} style={{ display: "flex", gap: "40px", alignItems: "flex-start" }}>
              <div style={{ width: "122px", height: "122px", background: "#D9D9D9", borderRadius: "100%" }} />
              <div>
                <div style={{ fontSize: "33.15px", fontFamily: "Gotham Black", fontWeight: 900, textTransform: "uppercase" }}>{comment.username}</div>
                <div style={{ fontSize: "24px", fontFamily: "Gmarket Sans", color: "#747373", lineHeight: "28.8px", marginTop: "10px" }}>
                  {comment.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default PostDetail;
