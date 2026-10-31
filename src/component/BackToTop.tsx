import { useEffect, useState } from "react";
import "../styles/BackToTop.css";

function BackToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    if (!visible) {
        return null;
    }

    return (
        <button
            className="backToTop"
            onClick={scrollToTop}
            aria-label="Quay về đầu trang"
            title="Quay về đầu trang"
        >
            <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M12 19V5" />
                <path d="M5 12L12 5L19 12" />
            </svg>
        </button>
    );
}

export default BackToTop;
