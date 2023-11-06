import s from "./styles";

export const EventDetail = ({date, events}: { date: Date; events: any[];}) => {
  return (
    <s.Wrapper>
      <s.Title>{date.toLocaleDateString()}</s.Title>
      <s.ContentsList>
        {events.map((e) => (
          <Content key={e.title} content={e} />
        ))}
      </s.ContentsList>
    </s.Wrapper>
  );
};

const Content = ({content}:{content: any}) => {
  return (
    <s.Content>
      <s.ContentTitle>
				<s.Cylinder />
        <s.TitleText>
          {content.title}
        </s.TitleText>
      </s.ContentTitle>
      <s.ContentPeriod>
        <s.PeriodText>
          {content.start.toLocaleDateString()} ~ {content.end.toLocaleDateString()}
        </s.PeriodText>
      </s.ContentPeriod>
    </s.Content>
  );
};
