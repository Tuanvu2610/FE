import {getArticleImage, PLACEHOLDER} from "../utils/articleImage";

interface CnttImgProps {
    content: string;
    alt: string;
    className?: string;
}

function CnttImg({content, alt, className}: CnttImgProps) {
    return (
        <img
            src={getArticleImage(content)}
            alt={alt}
            className={className}
            onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = PLACEHOLDER;
            }}
        />
    );
}

export default CnttImg;