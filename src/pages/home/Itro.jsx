import React from "react";
import { Link } from "react-router-dom";

function Itro() {
  return (
    <>
      <div className="mt-24 md:mx-24">
        <section className="bg-white dark:bg-gray-900">
          <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
            <div className="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                Paying with <span className="font-extrabold">Epay</span> is fast,
                secure and easy.
              </h2>
              <p className="mb-4 font-light">
                Our payment gateway is a secure solution that makes it simple to
                process payments directly from your customers. It enables
                merchants to accept card payments and can be integrated into any
                e-commerce site or mobile app. Epay's mission is to help
                businesses become more profitable by offering them simple
                solutions to complex problems. Our aim is to offer you the best
                possible customer experience with our products and services.
              </p>
            </div>
          </div>
        </section>
        <section className="bg-white dark:bg-gray-900">
          <div className="items-center max-w-screen-xl gap-16 px-4 py-8 mx-auto lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                We didn't reinvent the wheel
              </h2>
              <p className="mb-4">
                we just took all of the best parts of other payment gateways and
                made them better. We're constantly improving our platform so
                that it works better for you and your customers, while also
                providing a great user experience.
              </p>
              <p>
                We're here to help you make your business more successful by
                helping you take payments from anywhere in the Country.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <img
                className="w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
                alt="office content 1"
              />
              <img
                className="w-full mt-4 rounded-lg lg:mt-10"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
                alt="office content 2"
              />
            </div>
          </div>
        </section>
        <section className="text-gray-600 body-font">
          <div className="container flex flex-wrap px-5 py-24 mx-auto">
            <div className="flex flex-wrap w-full">
              <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
                <div className="relative flex pb-12">
                  <div className="absolute inset-0 flex items-center justify-center w-10 h-full">
                    <div className="w-1 h-full bg-gray-200 pointer-events-none"></div>
                  </div>
                  <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-white rounded-full bg-primary">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                  </div>
                  <div className="flex-grow pl-4">
                    <h2 className="mb-1 text-sm font-medium tracking-wider text-gray-900 title-font">
                      STEP 1
                    </h2>
                    <p className="leading-relaxed">
                      Prepare scanned document of both your recently renewed
                      Identificatiion card and Trade Licence.
                    </p>
                  </div>
                </div>
                <div className="relative flex pb-12">
                  <div className="absolute inset-0 flex items-center justify-center w-10 h-full">
                    <div className="w-1 h-full bg-gray-200 pointer-events-none"></div>
                  </div>
                  <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-white rounded-full bg-primary">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <div className="flex-grow pl-4">
                    <h2 className="mb-1 text-sm font-medium tracking-wider text-gray-900 title-font">
                      STEP 2
                    </h2>
                    <p className="leading-relaxed">
                      Go to <Link to={"/"}>epay.com/registration</Link> and fill all
                      the required fields and submit your request.
                    </p>
                  </div>
                </div>
                <div className="relative flex pb-12">
                  <div className="absolute inset-0 flex items-center justify-center w-10 h-full">
                    <div className="w-1 h-full bg-gray-200 pointer-events-none"></div>
                  </div>
                  <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-white rounded-full bg-primary">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="5" r="3"></circle>
                      <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                    </svg>
                  </div>
                  <div className="flex-grow pl-4">
                    <h2 className="mb-1 text-sm font-medium tracking-wider text-gray-900 title-font">
                      STEP 3
                    </h2>
                    <p className="leading-relaxed">
                      Our team will be checking for the validity in the
                      background and will send you a link to your email.
                    </p>
                  </div>
                </div>
                <div className="relative flex pb-12">
                  <div className="absolute inset-0 flex items-center justify-center w-10 h-full">
                    <div className="w-1 h-full bg-gray-200 pointer-events-none"></div>
                  </div>
                  <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-white rounded-full bg-primary">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <div className="flex-grow pl-4">
                    <h2 className="mb-1 text-sm font-medium tracking-wider text-gray-900 title-font">
                      STEP 4
                    </h2>
                    <p className="leading-relaxed">
                      Follow the link in the email and change your password when
                      entering for the first time.
                    </p>
                  </div>
                </div>
                <div className="relative flex">
                  <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-white rounded-full bg-primary">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                  </div>
                  <div className="flex-grow pl-4">
                    <h2 className="mb-1 text-sm font-medium tracking-wider text-gray-900 title-font">
                      FINISH
                    </h2>
                    <p className="leading-relaxed">
                      Now you have successfully created un account with us. You
                      can log in using your credentials and access api and other
                      services.
                    </p>
                  </div>
                </div>
              </div>
              <img
                className="object-cover object-center mt-12 rounded-lg lg:w-3/5 md:w-1/2 md:mt-0"
                src="https://dummyimage.com/1200x500"
                alt="step"
              />
            </div>
          </div>
        </section>
        <section className="text-gray-600 body-font">
          <div className="container flex flex-col items-center px-5 py-24 mx-auto md:flex-row">
            <div className="w-5/6 mb-10 lg:max-w-lg lg:w-full md:w-1/2 md:mb-0">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src="https://dummyimage.com/720x600"
              />
            </div>
            <div className="flex flex-col items-center text-center lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 md:items-start md:text-left">
              <h1 className="mb-4 text-3xl font-medium text-gray-900 title-font sm:text-4xl">
                Try It Out!
              </h1>
              <p className="mb-8 leading-relaxed">
                Ethiopian Pay is easy to use and has a user-friendly interface
                that makes it simple for anyone to use. We are dedicated to
                providing a safe and secure platform for all users around the
                world, so you can feel confident about using our service.
              </p>
              <div className="flex justify-center">
                <Link
                  to={"/registration"}
                  className="inline-flex px-6 py-2 text-lg text-white border-0 rounded bg-primary focus:outline-none hover:bg-primary"
                >
                  Get started
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Itro;
