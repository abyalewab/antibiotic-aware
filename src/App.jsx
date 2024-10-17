import { useRef } from "react";
import { Home } from "./component/home/Home";
import { pdfjs } from "react-pdf";
import NavBar from "./component/navbar/NavBar";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "./App.css";

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   "pdfjs-dist/build/pdf.worker.min.mjs",
//   import.meta.url
// ).toString();

pdfjs.GlobalWorkerOptions.workerSrc = 'https://unpkg.com/pdfjs-dist@4.4.168/build/pdf.worker.min.mjs';

function App() {
  const resourceRef = useRef(null);
  const faqRef = useRef(null);
  const contactRef = useRef(null);
  const homeRef = useRef(null);

  return (
    <>
      <NavBar
        homeRef={homeRef}
        resourceRef={resourceRef}
        faqRef={faqRef}
        contactRef={contactRef}
      />
      <Home
        homeRef={homeRef}
        resourceRef={resourceRef}
        faqRef={faqRef}
        contactRef={contactRef}
      />
    </>
  );
}

export default App;
