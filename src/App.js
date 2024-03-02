import './App.css';
import React from "react";
import Header from "./components/header";
import BodySection from "./components/bodySection";
import Footer from "./components/footer";

function App() {
  return (
    <div className="app">
      <Header />
      <BodySection />
      <Footer />
    </div>
  );
}

export default App;
