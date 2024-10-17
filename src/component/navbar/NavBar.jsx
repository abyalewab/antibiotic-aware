import { Button } from "primereact/button";
import NavLogo from "/src/assets/Logo.jpg";
import "./navbar.css";

const NavBar = ({ homeRef, resourceRef, faqRef, contactRef }) => {
  return (
    <div className="w-full flex justify-self-center px-4 navContainer main-div">
      <div className="navTextContainer">
        <img className="navLogo mr-2" alt="" src={NavLogo} />
        <div style={{ width: "15rem" }}>Antibiotic Aware</div>
      </div>

      <div className="flex align-items-center justify-content-center">
        <div className="flex flex-row">
          <div className="flex flex-row align">
            <Button
              icon="pi pi-home"
              label="Home"
              className="ml-5"
              style={{ width: "8rem" }}
              onClick={() =>
                homeRef.current?.scrollIntoView({
                  behavior: "smooth",
                })
              }
            />

            <Button
              icon="pi pi-book"
              label="Resource"
              className="ml-5"
              style={{ width: "8rem" }}
              onClick={() =>
                resourceRef.current?.scrollIntoView({
                  behavior: "smooth",
                })
              }
            />

            <Button
              icon="pi pi-question-circle"
              label="FAQ"
              className="ml-5"
              style={{ width: "8rem" }}
              onClick={() =>
                faqRef.current?.scrollIntoView({
                  behavior: "smooth",
                })
              }
            />

            <Button
              icon="pi pi-envelope"
              label="Contact"
              className="ml-5"
              style={{ width: "8rem" }}
              onClick={() =>
                contactRef.current?.scrollIntoView({
                  behavior: "smooth",
                })
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
