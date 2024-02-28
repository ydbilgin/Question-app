import React, { useState } from "react";
import "./Home.Style.css";

function Home({ onStartTest, totalQuestions, timerEachQuestion, optionTimer }) {
  const [isTestStarted, setIsTestStarted] = useState(false);

  const handleStartTest = () => {
    setIsTestStarted(true);
    onStartTest();
  };

  return (
    <div className="home-container">
      <h1>Teste Hoş Geldiniz!</h1>
      <p>
        Test <span className="home-content-background"> {totalQuestions} </span>{" "}
        sorudan oluşuyor ve her soru için süreniz
        <span className="home-content-background">
          {" "}
          {timerEachQuestion}
        </span>{" "}
        saniyedir.
      </p>
      <p>
        Seçenekler soru geldikten{" "}
        <span className="home-content-background"> {optionTimer / 1000} </span>{" "}
        saniye sonra gelecektir.
      </p>
      <p>Başarılar</p>
      {!isTestStarted && (
        <button id="start" onClick={handleStartTest}>
          Teste Başla
        </button>
      )}
    </div>
  );
}

export default Home;
