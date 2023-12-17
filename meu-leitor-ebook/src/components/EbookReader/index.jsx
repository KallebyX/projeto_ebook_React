// src/components/PdfReader.jsx
import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PdfReader = ({ file }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1); // Adiciona estado para a página atual

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1); // Inicia na primeira página
  }

  const goToPrevPage = () => {
    setPageNumber(pageNumber - 1);
  };

  const goToNextPage = () => {
    setPageNumber(pageNumber + 1);
  };

  return (
    <div>
      <Document
        file={file}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <div>
        <button disabled={pageNumber <= 1} onClick={goToPrevPage}>Anterior</button>
        <button disabled={pageNumber >= numPages} onClick={goToNextPage}>Próxima</button>
      </div>
    </div>
  );
};

export default PdfReader;
