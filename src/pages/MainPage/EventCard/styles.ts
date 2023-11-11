import styled from "@emotion/styled";
import { Paper } from "@mui/material";

// export const EventCardWrapper = styled.div`
//   background-color: #BAD9FA;
//   display: flex;

//   width: 157px;
//   height: 227px;

//   border-radius: 10px;
// `;

export const EventCardWrapper = styled(Paper) <{ bgcolor: 'true' | 'false' }>`
  padding: 0.2em 0.5em 0 0.5em;
  margin: 1.5vh 0;
  background-color: ${props => props.bgcolor == 'true' ? "#FEEBB6" : "#CEE6FF"};
  border-radius: 0.3em;
  display: flex;
  width: 157px;
  height: 227px;
  margin-right: 1rem;
`;

export const EventCardCarousel = styled.div`
  display: flex;
  align-items: column;
`;

export const EventDday = styled.div<{ bgcolor: 'true' | 'false' }>`
  background-color: ${props => props.bgcolor == 'true' ? "#FEEBB6" : "#CEE6FF"};
  z-index: 999;
  position: absolute;

  padding-right: 1vh;
  padding-bottom: 0.6vh;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1vh;
  margin-top: 1vh;
  font-size: 3vh;

  transform: translateY(-1vh);
`;

export const EventCardContants = styled.div`
  /* background-color: rgba(0, 255, 255, 0.6); */

  display: flex;
  flex-direction: column;

  width: auto;
  height: auto;

  margin: 8px;
`;

export const EventPost = styled.img`
  /* background-color: rgba(255, 0, 0, 0.6); */
  flex-shrink: 0;

  width: 142px;
  height: 170px;
`;

export const BelowEventPost = styled.div`
  /* background-color: yellow; */

  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;

  margin-top: 3px;
`;

export const EventInfo = styled.div`
  /* background-color: rgba(0, 255, 0, 0.6); */

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
  height: 100%;
`;

export const BelongDepartment = styled.div`
  /* background-color: rgba(0, 255, 255, 0.6); */

  flex-shrink: 0;

  display: flex;
  align-items: center;

  font-size: 12px;
  text-align: left;

  height: 19px;
`;

export const EventTitle = styled.div`
  /* background-color: rgba(0, 0, 255, 0.6);  */

  display: flex;
  align-items: center;

  font-size: 14px;
  text-align: left;
  font-weight: bolder;

  height: 100%;
`;

export const Icon = styled.img`
  cursor: pointer;
  width: 2vh;
  height: 2vh;
  margin-top: 0.4vh;
`;
