import React from "react";
import Header from "./Header";
import Chatbot from "./Chatbot";
import Footer from "./Footer";

function Layout({ messageGroups, responseGroups }) {
  return (
    <div className="container-fluid">
      <Header />
      <Chatbot messageGroups={messageGroups} responseGroups={responseGroups} />
      <Footer />
    </div>
  );
}

export default Layout;
