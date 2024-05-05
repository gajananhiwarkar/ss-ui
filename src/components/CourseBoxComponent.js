import React, { useState, useEffect } from 'react';

const CourseBoxComponent = ({ imgName, alternateName, description, pdfName, val }) => {
    const [imageSrc, setImageSrc] = useState(null);
    useEffect(() => {
        // Dynamically import the image based on the provided path
        import(`../assets/images/LangLogos/${imgName}`).then(image => {
            setImageSrc(image.default);
        }).catch(error => {
            console.error("Failed to load image:", error);
        });
    }, [imgName]);

    const [pdfSrc, setPdfSrc] = useState(null);
    useEffect(() => {
        // Dynamically import the image based on the provided path
        import(`../assets/SyllabusPdfs/${pdfName}`).then(pdf => {
            setPdfSrc(pdf.default);
        }).catch(error => {
            console.error("Failed to load image:", error);
        });
    }, [pdfName]);

    return (
        <div className="col-lg-3 mb-5">
            <div className="box">
                <img src={imageSrc} width="100%" alt={alternateName} />
                <h4 className="mt-2">{alternateName}</h4>
                <p className="mt-2">{description}</p>
                <a href={pdfSrc} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg mt-2">{val}</a>
            </div>
        </div>
    );
};

export default CourseBoxComponent;
