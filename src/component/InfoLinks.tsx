import {Link} from "react-router-dom";
import "../styles/InfoLinks.css";

interface InfoItem {
    icon: string;
    label: string;
    className: string;
    to?: string;
}

const ITEMS: InfoItem[] = [
    {icon: "fa-coins", label: "GIÁ VÀNG", className: "infolinks__btn--gold"},
    {icon: "fa-money-bill-transfer", label: "TỶ GIÁ", className: "infolinks__btn--rate"},
    {icon: "fa-cloud-sun", label: "THỜI TIẾT", className: "infolinks__btn--weather"},
];

function InfoLinks() {
    return (
        <section className="infolinks">
            <h3 className="infolinks__title">XEM THÊM CÁC THÔNG TIN KHÁC</h3>
            <div className="infolinks__row">
                {ITEMS.map((item) => {
                    const content = (
                        <>
                            <i className={`fa-solid ${item.icon}`}></i> {item.label}
                        </>
                    );
                    const cls = `infolinks__btn ${item.className}`;
                    return item.to ? (
                        <Link key={item.label} to={item.to} className={cls}>{content}</Link>
                    ) : (
                        <button key={item.label} type="button" className={cls}>{content}</button>
                    );
                })}
            </div>
        </section>
    );
}

export default InfoLinks;