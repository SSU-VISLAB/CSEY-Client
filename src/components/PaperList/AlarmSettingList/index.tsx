import { ContentGroup, ContentRow, Content, Meta, Description } from "../styles";

export function AlarmSettingList({ content }) {
    if (!content) return <></>;
    return (
      <ContentGroup>
        {content.map((v, i) => (
          <ContentRow key={i}>
            <Content elevation={2} onClick={v.eventHandler}>
              <Meta bold>{v.meta}</Meta>
              <Description bold>{v?.description}</Description>
            </Content>
          </ContentRow>
        ))}
      </ContentGroup>
    );
  }