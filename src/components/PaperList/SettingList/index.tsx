import {
  ContentGroup,
  ContentRow,
  Content,
  Meta,
  Description,
} from "../styles";

export function SettingList({ content }) {
  if (!content) return <></>;
  return (
    <>
      {content.map((v, i) => (
        <ContentGroup>
          <ContentRow key={i}>
            <Content color={"#c2c2c2"} elevation={2} onClick={v.eventHandler}>
              <Meta bold>{v.meta}</Meta>
              <Description bold>{v?.description}</Description>
            </Content>
          </ContentRow>
        </ContentGroup>
      ))}
    </>
  );
}
