import styled from "@emotion/styled";
import { Paper } from "@mui/material";
import yellow from "@mui/material/colors/yellow";

export const EventCardWrapper = styled(Paper)<{bgcolor: boolean}>`
  position: relative;
  padding: 0.2em 0.5em 0 0.5em;
  margin: 1.5vh 0;
  background-color: ${props => props.bgcolor ? "#FEEBB6" : "#CEE6FF"};
  border-radius: 0.3em;
  display: flex;
  width: 145px;
  height: 200px;
  margin-right: 0.5rem;
  cursor: pointer;
`;

export const EventDday = styled.div<{bgcolor: boolean}>`
  background-color: ${props => props.bgcolor ? "#FEEBB6" : "#CEE6FF"};
  z-index: 10;
  position: absolute;
  top: 0;
  padding-right: 0.8vh;
  padding-bottom: 0.6vh;

  display: flex;
  justify-content: center;
  align-items: center;

  border-bottom-right-radius: 8px;
  margin-top: 1vh;
  font-family: var(--font-넥슨Lv1고딕);
  font-size: 2vh;
  font-weight: 700;
`;

export const EventCardContants = styled.div`
  display: flex;
  flex-direction: column;

  width: auto;
  height: auto;

  margin-top: 8px;
`;

export const EventPost = styled.img`
  /* background-color: rgba(255, 0, 0, 0.6); */
  flex-shrink: 0;

  width: 148px;
  height: 148px;
`;

export const BelowEventPost = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;

  margin-top: 3px;
`;

export const EventInfo = styled.div`
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
