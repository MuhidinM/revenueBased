import React from "react";

function OTP() {
  return (
    <>
      <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-12">
        <div class="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto max-w-lg rounded-2xl">
          <div class="mx-auto flex w-full max-w-md flex-col space-y-16">
            <div class="flex flex-col items-center justify-center text-center space-y-2">
              <div class="font-semibold text-2xl">
                <p>OTP Verification</p>
              </div>
              <div class="flex flex-row text-sm font-medium text-gray-400">
                <p>
                  Your One Time Password or OTP has been sent to your mobile
                  phone. Please retrive it and enter in the space below.
                  <b> Note:</b> this token can be used only once and Would
                  expire in 5 minutes.
                </p>
              </div>
            </div>

            <div>
              <form action="" method="">
                <div className="flex flex-col space-y-16">
                  <div className="flex flex-row items-center justify-between w-full max-w-xs mx-auto">
                    <div className="w-16 h-16 ">
                      <input
                        maxLength="1"
                        className="flex flex-col items-center justify-center w-full h-full px-5 text-lg text-center bg-white border border-gray-200 outline-none rounded-xl focus:bg-gray-50 focus:ring-1 ring-primary"
                        type="number"
                        name=""
                        id=""
                      />
                    </div>
                    <div className="w-16 h-16 ">
                      <input
                        className="flex flex-col items-center justify-center w-full h-full px-5 text-lg text-center bg-white border border-gray-200 outline-none rounded-xl focus:bg-gray-50 focus:ring-1 ring-primary"
                        type="number"
                        name=""
                        id=""
                      />
                    </div>
                    <div className="w-16 h-16 ">
                      <input
                        className="flex flex-col items-center justify-center w-full h-full px-5 text-lg text-center bg-white border border-gray-200 outline-none rounded-xl focus:bg-gray-50 focus:ring-1 ring-primary"
                        type="number"
                        name=""
                        id=""
                      />
                    </div>
                    <div className="w-16 h-16 ">
                      <input
                        className="flex flex-col items-center justify-center w-full h-full px-5 text-lg text-center bg-white border border-gray-200 outline-none rounded-xl focus:bg-gray-50 focus:ring-1 ring-primary"
                        type="number"
                        name=""
                        id=""
                      />
                    </div>
                  </div>

                  <div className="flex flex-col space-y-5">
                    <div>
                      <button
                        type="submit"
                        className="w-full px-5 py-2.5 text-lg font-medium text-center text-white rounded-lg bg-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary dark:bg-primary dark:hover:bg-primary dark:focus:ring-primary"
                      >
                        Confirm
                      </button>
                    </div>

                    <div className="flex flex-row items-center justify-center space-x-1 text-sm font-medium text-center text-gray-500">
                      <p>Didn't recieve code?</p>{" "}
                      <a
                        className="flex flex-row items-center text-primary"
                        href="http://"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Resend
                      </a>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OTP;
