import React, { useState } from "react";

function Card() {
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState("eyeOff");
  const [type2, setType2] = useState("password");
  const [icon2, setIcon2] = useState("eyeOff");

  const handleToggle = () => {
    if (type === "password") {
      setType("text");
      setIcon("eye");
    } else {
      setType("password");
      setIcon("eyeOff");
    }
  };

  const handleToggle2 = () => {
    if (type2 === "password") {
      setType2("text");
      setIcon2("eye");
    } else {
      setType2("password");
      setIcon2("eyeOff");
    }
  };

  return (
    <>
      <div className="card dark:bg-gray-800 w-full dark:text-white">
        <div className="card-body">
          <h2 className="card-title">Primary account</h2>
          <div className="form-control">
            <div className="input-group">
              <input
                type={type}
                className="dark:bg-gray-700 w-full dark:border-gray-600 dark:placeholder-gray-400"
                value={"100000057657"}
                disabled
              />
              <button
                className="btn btn-square btn-primary"
                onClick={handleToggle}
              >
                <svg
                  class="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {icon === "eyeOff" ? (
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                    />
                  ) : (
                    <>
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </>
                  )}
                </svg>
              </button>
            </div>
          </div>
          <h2 className="card-title">Secret key</h2>
          <div className="form-control">
            <div className="input-group">
              <input
                type={type2}
                className="dark:bg-gray-700 w-full dark:border-gray-600 dark:placeholder-gray-400"
                value={"kjc48owdbui7390ur32i828b3u6"}
                disabled
              />
              <button
                className="btn btn-square btn-primary"
                onClick={handleToggle2}
              >
                <svg
                  class="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {icon2 === "eyeOff" ? (
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                    />
                  ) : (
                    <>
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </>
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
