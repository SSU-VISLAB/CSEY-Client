import styled from "@emotion/styled";

export const SettingList = styled.div`
  width: 95vw;
  padding: 0 2.5vw;
`;

export const SettingCard = {
  Group: styled.div`
    padding: 0.5em 0.8em 0 0.8em;
    margin: 0.5em 0;
    background-color: #e0e0e0;
    border-radius: 0.5em;
    box-shadow: 0 3px 6px gray;
  `,

  Header: styled.div`
    display: flex;
    align-items: center;
    padding: 0.2em 0;
  `,
    Icon: styled.span``,
    Title: styled.span`
      padding: 0 0.5em;
      font-size: 1rem;
      font-weight: bold;
      margin-bottom: 0.5em;
    `,

  ContentGroup: styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 2vh;
  `,
    Content: styled.div`
      margin: 0.15em;
      padding: 0 .5em;
      display: flex;
      justify-content: space-between;
      align-items: center;
      text-align: center;
      border-radius: 0.5em;
      background-color: #c2c2c2;
      transition: box-shadow 0.5s ease-in-out;
      box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.25), 0 2px 2px rgba(0, 0, 0, 0.22);
    `,
      Meta: styled.span`
        font-size: 2vh;
        font-weight: bold;
        line-height: 1.5;
      `,
      Description: styled.span`
        font-size: 1vh;
        margin-bottom: 0.5em;
      `,
};
