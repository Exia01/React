import React from "react";

const SideBar = () => {
  return (
    <div className="sidebar">
      <h1 className="sidebar-title">
        Dad <span>Jokes</span>
      </h1>
      <img
        src="https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg"
        alt="Emoji-Laughing"
      />
      <button className="sidebar-button">New Joke</button>
    </div>
  );
};

export default SideBar;
