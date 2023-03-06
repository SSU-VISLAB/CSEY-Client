import styled from "@emotion/styled";

export const EventCardWrapper = styled.div`
  background-color: #BAD9FA;
  display: flex;
  
  width: 157px;
  height: 227px;

  border-radius: 10px;
`;

export const EventDday = styled.div`
  background-color: #BAD9FA;

  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 50px;
  height: 26px;

  border-radius: 10px;

  font-size: 10px;
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
  flex-direction: row;

  width: 100%;
  height: 100%;  

  margin-top: 3px;
`;

export const EventInfo = styled.div`
  /* background-color: rgba(0, 255, 0, 0.6); */

  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */

  width: 100%;
  height: 100%;
`;

export const BelongDepartment = styled.div`
  /* background-color: rgba(0, 255, 255, 0.6); */

  flex-shrink: 0;

  display: flex;
  align-items: center;

  font-size: 10px;
  text-align: left;

  height: 19px;
`;

export const EventTitle = styled.div`
  /* background-color: rgba(0, 0, 255, 0.6);  */

  display: flex;
  align-items: center;
  
  font-size: 12px;
  text-align: left;
  font-weight: bold;

  height: 100%;
`;

export const Icon = styled.div`
  cursor: pointer;
`;