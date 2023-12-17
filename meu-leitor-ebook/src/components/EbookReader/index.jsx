import React, { useEffect, useRef } from 'react';
import ePub from 'epubjs';

const EbookReader = ({ url }) => {
  const viewerRef = useRef(null);

  useEffect(() => {
    if (viewerRef.current) {
      const book = ePub(url);
      const rendition = book.renderTo(viewerRef.current, {
        width: "100%",
        height: "600px",
      });
      rendition.display();
    }
  }, [url]);

  return (
    <div ref={viewerRef} />
  );
};

export default EbookReader;
