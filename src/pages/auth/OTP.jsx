import { useEffect, useRef } from "react";
import Button from "../../components/Button";
import { handleInputChange, handlePaste } from "./utils/otpUtils";

function OTP() {
  const inputRefs = useRef([]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Backspace") {
        const activeElement = document.activeElement;
        const activeIndex = inputRefs.current.findIndex(
          (ref) => ref === activeElement
        );

        if (activeIndex > 0) {
          inputRefs.current[activeIndex - 1].focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <section className="text-center bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
            <h1 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              OTP Verification
            </h1>
            <p className="font-light text-gray-500 dark:text-gray-400">
              Your One Time Password or OTP has been sent to your mobile phone.
              Please retrieve it and enter in the space below.
              <b> Note:</b> This token can be used only once and would expire in
              5 minutes.
            </p>
            <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#">
              <div>
                <label
                  htmlFor="otp"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  OTP Code
                </label>
                <div className="flex flex-row items-center justify-between w-full max-w-xs py-4 mx-auto space-x-1">
                  {[...Array(6)].map((_, i) => (
                    <div className="w-16 h-16" key={i}>
                      <input
                        type="text"
                        name="otp"
                        id={`otp-${i}`}
                        className="bg-gray-50 border text-center border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder=""
                        required=""
                        maxLength="1"
                        ref={(ref) => {
                          inputRefs.current[i] = ref;
                        }}
                        onChange={(event) =>
                          handleInputChange(i, inputRefs, event)
                        }
                        onPaste={(event) => handlePaste(inputRefs, event)}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex flex-row items-center justify-center space-x-1 text-sm font-medium text-center text-gray-500">
                  <p>Didn&apos;t receive the code?</p>{" "}
                  <a
                    className="flex flex-row items-center text-primary"
                    href="http://"
                    target="popup"
                    onClick={() =>
                      window.open(
                        "http://",
                        "popup",
                        "width=600,height=600,scrollbars=no,resizable=no"
                      )
                    }
                    rel="noopener noreferrer"
                  >
                    Resend
                  </a>
                </div>
              </div>
              <Button title={"Confirm"} className={"w-full"} />
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default OTP;
