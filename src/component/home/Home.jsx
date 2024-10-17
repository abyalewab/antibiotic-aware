import { useRef, useState } from "react";
import { Contact } from "../contact/Contact";
import { FAQ } from "../faq/FAQ";
import AB_Infographics from "/src/assets/AB-Infographics.png";
import AB_Infographics_2 from "/src/assets/AB-Infographics-2.png";
import AB_Infographics_3 from "/src/assets/AB-Infographics-3.png";
import AB_Infographics_4 from "/src/assets/AW_Combat_Antibiotic.png";
import AB_Image from "/src/assets/AB-Image.png";
import AB_Image_1 from "/src/assets/AB-Image-1.png";
import AB_Image_2 from "/src/assets/AB-Image-2.png";
import PdfViewer from "../pdfviewer/PdfViewer";
import AntimicrobialPDF from "/src/assets/AntimicrobialPDF.pdf";
import GlobalBurdenPDF from "/src/assets/GlobalBurdenPDF.pdf";
import DrugResistantPDF from "/src/assets/DrugResistantPDF.pdf";
import AntibioticResistancePDF from "/src/assets/AntibioticResistanceWhatPDF.pdf";
import { Button } from "primereact/button";

export const Home = ({ homeRef, resourceRef, faqRef, contactRef }) => {
  const toast = useRef(null);
  const [activePdf, setActivePdf] = useState(null);

  const togglePdf = (pdfName) => {
    setActivePdf((prevPdf) => (prevPdf === pdfName ? null : pdfName));
  };

  return (
    <div className="flex flex-column w-full">
      <div ref={homeRef} className="flex align-items-center" style={{ width: "100%" }}>
        <img
          alt="AntibiotiAware"
          src={AB_Infographics_4}
          style={{
            width: "50%",
            margin: "8rem 5rem 5rem 5rem",
            border: "1px solid gray",
            borderRadius: "1rem",
          }}
        />
      </div>

      <div className="flex align-items-center" style={{ width: "100%" }}>
        <img
          alt="AntibiotiAware"
          src={AB_Infographics}
          style={{
            width: "50%",
            height: "35rem",
            margin: "0 5rem 5rem 5rem",
            border: "1px solid gray",
            borderRadius: "1rem",
          }}
        />
      </div>

      <div className="flex align-items-center" style={{ width: "100%" }}>
        <img
          alt="AntibiotiAware"
          src={AB_Infographics_2}
          style={{
            width: "50%",
            height: "35rem",
            margin: "0 5rem 5rem 5rem",
            border: "1px solid gray",
            borderRadius: "1rem",
          }}
        />
      </div>

      <div className="flex align-items-center" style={{ width: "100%" }}>
        <img
          alt="AntibiotiAware"
          src={AB_Infographics_3}
          style={{
            width: "50%",
            height: "35rem",
            margin: "0 5rem 5rem 5rem",
            border: "1px solid gray",
            borderRadius: "1rem",
          }}
        />
      </div>

      <div
        ref={resourceRef}
        className="contact-title"
        style={{ width: "100%", marginBottom: "3rem", paddingTop: "5rem" }}
      >
        Antibiotic Resistance Resources
      </div>

      <div
        className="flex align-items-center justify-content-between"
        style={{ width: "100%", padding: "0  5rem", marginBottom: "5rem" }}
      >
        <PdfViewer
          pdfFile={DrugResistantPDF}
          filename="Drug Resistant Infections"
          isActive={activePdf === "DrugResistantPDF"}
          onToggle={() => togglePdf("DrugResistantPDF")}
        />

        <PdfViewer
          pdfFile={AntimicrobialPDF}
          filename="Antimicrobial Resistance"
          isActive={activePdf === "AntimicrobialPDF"}
          onToggle={() => togglePdf("AntimicrobialPDF")}
        />

        <PdfViewer
          pdfFile={AntibioticResistancePDF}
          filename="Antibiotic Resistance - what, why, where, when and how?"
          isActive={activePdf === "AntibioticResistancePDF"}
          onToggle={() => togglePdf("AntibioticResistancePDF")}
        />

        <PdfViewer
          pdfFile={GlobalBurdenPDF}
          filename="Global Burden of Antimicobial Resistance"
          isActive={activePdf === "GlobalBurdenPDF"}
          onToggle={() => togglePdf("GlobalBurdenPDF")}
        />
      </div>

      <div className="flex align-items-center" style={{ width: "100%" }}>
        <img
          alt="AntibiotiAware"
          src={AB_Image}
          style={{
            width: "50%",
            height: "35rem",
            margin: "5rem",
            border: "1px solid gray",
            borderRadius: "1rem",
          }}
        />
      </div>

      <div className="flex align-items-center" style={{ width: "100%" }}>
        <img
          alt="AntibiotiAware"
          src={AB_Image_1}
          style={{
            width: "50%",
            height: "35rem",
            margin: "0 5rem 5rem 5rem",
            border: "1px solid gray",
            borderRadius: "1rem",
          }}
        />
      </div>

      <div className="flex align-items-center" style={{ width: "100%" }}>
        <img
          alt="AntibiotiAware"
          src={AB_Image_2}
          style={{
            width: "50%",
            height: "35rem",
            margin: "0 5rem",
            border: "1px solid gray",
            borderRadius: "1rem",
          }}
        />
      </div>

      <div ref={faqRef}>
        <FAQ />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
    </div>
  );
};
