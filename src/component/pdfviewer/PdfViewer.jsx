import { useState } from "react";
import { Document, Page } from "react-pdf";
import { Button } from "primereact/button";
import "react-pdf/dist/Page/TextLayer.css";
import "./pdfviewer.css";

function PdfViewer({ pdfFile, filename, isActive, onToggle }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const goToPrevPage = (e) => {
    e.stopPropagation();
    setPageNumber((prevPageNumber) => Math.max(prevPageNumber - 1, 1));
  };

  const goToNextPage = (e) => {
    e.stopPropagation();
    setPageNumber((prevPageNumber) => Math.min(prevPageNumber + 1, numPages));
  };

  const handleDownload = async () => {
    try {
      const response = await fetch(pdfFile);

      if (!response.ok) {
        throw new Error(`Failed to fetch the file: ${filename}`);
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = filename || "downloaded-file.pdf";
      link.click();

      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading file:", error);
    }
  };

  return (
    <div className="pdf-container flex-column">
      <div
        className={`pdf-viewer ${isActive ? "full-size" : "preview-size"}`}
        onClick={onToggle}
      >
        <Document file={pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} scale={isActive ? 1 : 0.25} />
        </Document>

        {isActive && (
          <nav className="pdf-buttons">
            <div>
              <Button
                icon="pi pi-download"
                onClick={handleDownload}
                tooltip="Download Attachment"
                tooltipOptions={{ position: "bottom" }}
                severity="info"
                outlined
                rounded
                style={{ width: "2.5rem", height: "2.5rem" }}
                size="small"
              />
            </div>

            <div className="flex">
              <p className="text-center mr-2">
                Page {pageNumber} of {numPages}
              </p>

              <button
                onClick={goToPrevPage}
                className="pdf-button mr-2"
                disabled={pageNumber <= 1}
              >
                Prev
              </button>
              <button
                onClick={goToNextPage}
                className="pdf-button"
                disabled={pageNumber >= numPages}
              >
                Next
              </button>
            </div>
          </nav>
        )}

        
      </div>
      <div className="mt-5 text-center" style={{maxWidth: "15rem"}}>{filename}</div>
    </div>
  );
}

export default PdfViewer;
