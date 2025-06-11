import React, { useState } from "react";
import "./Community.css";

const Community = () => {
  const [posts, setPosts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [postData, setPostData] = useState({
    nickname: "",
    tags: "",
    text: "",
    profileImage: null,
    images: []
  });

  const handlePostButtonClick = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setPostData({ nickname: "", tags: "", text: "", profileImage: null, images: [] });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostData({ ...postData, [name]: value });
  };

  const handleImageChange = (e) => {
    setPostData({ ...postData, images: Array.from(e.target.files) });
  };

  const handleProfileImageChange = (e) => {
    setPostData({ ...postData, profileImage: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = { ...postData, liked: false, likeCount: 0 };
    setPosts([...posts, newPost]);
    alert("게시물이 업로드되었습니다!");
    handleModalClose();
  };

  const toggleLike = (index) => {
    const updatedPosts = [...posts];
    const post = updatedPosts[index];
    if (post.liked) {
      post.likeCount -= 1;
    } else {
      post.likeCount += 1;
    }
    post.liked = !post.liked;
    setPosts(updatedPosts);
  };

  return (
    <div className="community-wrapper">
      <div className="title">COMMUNITY.</div>
      <div className="write-button" onClick={handlePostButtonClick}>글쓰기</div>

      {posts.map((post, index) => (
        <div className="post-container" key={index}>
          <div className="post-header">
            <div className="profile-info">
              <div className="profile-pic">
                {post.profileImage && <img src={URL.createObjectURL(post.profileImage)} alt="profile" style={{ width: "100%", height: "100%", borderRadius: "50%" }} />}
              </div>
              <div className="user-info">
                <div className="username">{post.nickname || "익명"}</div>
                <div className="likes-comments">
                  <div>Like {post.likeCount}</div>
                </div>
              </div>
            </div>
            <div
              className={`like-icon ${post.liked ? "liked" : ""}`}
              onClick={() => toggleLike(index)}
            >
              {post.liked ? "♥" : "♡"}
            </div>
          </div>

          <div className="tags">
            {post.tags.split(",").map((tag, i) => (
              <div className="tag" key={i}>{tag.trim()}</div>
            ))}
          </div>

          <div className="images">
            {post.images.map((img, i) => (
              <img key={i} src={URL.createObjectURL(img)} alt={`uploaded-${i}`} />
            ))}
          </div>
        </div>
      ))}

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-bubble">
            <button className="close-button" onClick={handleModalClose}>×</button>
            <h2>게시물 작성</h2>
            <form className="post-form" onSubmit={handleSubmit}>
              <label>
                닉네임:
                <input type="text" name="nickname" value={postData.nickname} onChange={handleChange} placeholder="닉네임을 입력하세요" />
              </label>
              <label>
                프로필 이미지:
                <input type="file" accept="image/*" onChange={handleProfileImageChange} />
              </label>
              <label>
                태그:
                <input type="text" name="tags" value={postData.tags} onChange={handleChange} placeholder="#태그를 입력하세요 (쉼표 구분)" />
              </label>
              <label>
                본문 글 작성:
                <textarea name="text" rows="4" value={postData.text} onChange={handleChange} placeholder="글을 입력하세요"></textarea>
              </label>
              <label>
                이미지 업로드:
                <input type="file" accept="image/*" multiple onChange={handleImageChange} />
              </label>
              <button type="submit">작성 완료</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Community;
