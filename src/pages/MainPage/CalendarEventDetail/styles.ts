import styled from "@emotion/styled";
import { IconButton } from "@mui/material";
import { ArrowDownCircle } from "react-feather";

type ArrowIcon = {
    fullscreen?: 'true' | 'false';
}

const EventDetail = {
    Wrapper: styled.div`
        position: relative;
        border-top: 1px solid lightgrey;
    `,
    Title: styled.div`
        font-size: 1.25em;
        padding: 1vh 0;
    `,
    Handle: styled.span`
        position: absolute;
        top: 0;
        width: 75%;
        height: 3px;
        border: 1px solid gray;
        border-radius: 12px;
        padding: 1px 0;
        margin: 0 12.5%;
        transform: translateY(-50%);
        background: lightgray;
        cursor: pointer;
        :hover {
            background: gray;
        }
    `,
    CollapseButton: styled(IconButton)`
        position: absolute;
        top: 0;
        left: 45%;
        transform: translateY(-45%);
    `,
    ArrowIcon: styled(ArrowDownCircle)`
        fill: white;
        transform: ${({ fullscreen }: ArrowIcon) => `rotate(${fullscreen == 'true' ? 180 : 0}deg)`};
    `,
    ContentsList: styled.div`
        overflow-y: auto;
        overflow-x: hidden;
        height: 100%;
        width: 100%;
        padding-left: 5px;
    `,
    Content: styled.div`
        width: 95%;
        height: 5vh;
        :hover {
            background-color: lightgray;
        }
        padding: 5px;
        cursor: pointer;
    `,
    ContentTitle: styled.div`
        display: flex;
        height: 60%;
        gap: 1%;
        padding-left: .5%;
    `,
    Cylinder: styled.div`
        background: lightblue;
        height: 75%;
        width: .5%;
        min-width: 5px;
        border-radius: 25px;
    `,
    TitleText: styled.h3`
        font-size: 1em;
    `,
    ContentPeriod: styled.div`
        height: 40%;
    `,
    PeriodText: styled.div`
        font-size: .75em;
        color: gray;
    `
};
export default EventDetail;