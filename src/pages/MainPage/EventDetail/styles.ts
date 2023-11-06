import styled from "@emotion/styled";

const EventDetail = {
    Wrapper: styled.div`
        border-top: 1px solid lightgrey;
        padding-top: 1vh;
    `,
    Title: styled.div`
        font-size: 2vh;
        padding-bottom: 2vh;
    `,
    ContentsList: styled.div`
        overflow-y: auto;
        overflow-x: hidden;
        height: 30vh;
        width: 100%;
        padding-left: 1vw;
    `,
    Content: styled.div`
        width: 95%;
        height: 5vh;
        :hover {
            background-color: lightgray;
        }
        padding: 1% 1vw;
        cursor: pointer;
    `,
    ContentTitle: styled.div`
        display: flex;
        height: 60%;
        gap: 1vw;
        padding-left: .5vw;
    `,
    Cylinder: styled.div`
        background: silver;
        height: 2.5vh;
        width: .5vw;
        border-radius: 20px;
    `,
    TitleText: styled.h3`
        font-size: 1.75vh;
    `,
    ContentPeriod: styled.div`
        height: 40%;        
    `,
    PeriodText: styled.div`
        font-size: 1.5vh;
        color: gray;
    `
};
export default EventDetail;