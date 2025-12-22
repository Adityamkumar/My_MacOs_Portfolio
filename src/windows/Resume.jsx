import WindowControls from "#components/WindowControls";
import WindowWrapper from "#hoc/WindowWrapper";
import {Download} from "lucide-react";
import React from "react";
import {Document, Page, pdfjs} from 'react-pdf';

import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL('pdfjs-dist/build/pdf.worker.min.mjs', import.meta.url,).toString();

const Resume = () => {
    return (
        <>
            <div id="window-header">
                <WindowControls target="resume"/>
                <h2>Resume.pdf</h2>

                <a href="files/Aditya Resume.pdf" download target="_blank" rel="noopener noreferrer" className="cursor-pointer" title="Download Resume">
                    <Download/>
                </a>
            </div>
            <Document file="files/Aditya Resume.pdf">
                <Page pageNumber={1}
                    renderTextLayer
                    renderAnnotionLayer/>
            </Document>
        </>
    );
};

const ResumeWindow = WindowWrapper(Resume, "resume");

export default ResumeWindow;
