import React from "react";
const thisyear = new Date().getFullYear();
function Footer() {
  return (
    <>
      <div className="divider"></div>
      <footer className="p-4 footer footer-center text-base-content">
        <div>
          <p>Copyright © {thisyear} - All right reserved by Epay</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
