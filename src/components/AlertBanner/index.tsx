import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AlertIcon from "../../assets/Icons/MainAlertIcon.png";
import * as s from "../../pages/MainPage/styles"
import { AlertType } from "../../types";
type AlertBannerProps = {
    isAlertsPending: boolean,
    alerts: AlertType[],
}
const AlertBanner = ({ isAlertsPending, alerts, }: AlertBannerProps) => {
    const [showRedDot, setShowRedDot] = useState<boolean>(true);
    const [currentAlertIndex, setCurrentAlertIndex] = useState(0);
    useEffect(() => {
        let interval;
        if (!isAlertsPending) {
            interval = setInterval(() => {
                setCurrentAlertIndex(
                    (prevIndex) => (prevIndex + 1) % (alerts as AlertType[])?.length,
                );
            }, 5000);
        }
        return () => clearInterval(interval);
    }, []);
    return (
        <s.Group>
            <s.Header>
                <s.Icon src={AlertIcon} alt="Alert" />
                {!isAlertsPending && alerts &&
                    (alerts.length === 0 ? (
                        <s.Meta>지금은 중요 공지가 없습니다.</s.Meta>
                    ) : (
                        <s.StyledLink to="/Notification">
                            <s.AlertList key={currentAlertIndex}>
                                {alerts[currentAlertIndex].title}
                            </s.AlertList>
                        </s.StyledLink>
                    ))}
                <Link to="/Notification">
                    <s.More>
                        {" "}
                        {showRedDot && <s.Activate />} {"더보기 >"}
                    </s.More>
                </Link>
            </s.Header>
        </s.Group>
    );
}

export default AlertBanner;