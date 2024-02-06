import React, { useState } from "react";
import Component_02 from "./components/Component_02";
import Component_01 from "./components/Component_01";

function App() {
  const [isExpand, setExpand] = useState(false);

  const handleToggleIntroduction = () => {
    setExpand(!isExpand);
  };

  return (
    <div>
      <Component_01 />
      {isExpand ? (
        <div>
          <button onClick={handleToggleIntroduction}>Đóng giới thiệu</button>
          <Component_02 />
        </div>
      ) : (
        <button onClick={handleToggleIntroduction}>Xem giới thiệu</button>
      )}
    </div>
  );
}

export default App;
