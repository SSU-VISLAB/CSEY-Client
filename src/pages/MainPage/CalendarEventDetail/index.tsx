import s from "./styles";

export const EventDetail = ({ date, events, fullScreen, setFullScreen }: { date: Date; events: any[]; fullScreen: boolean, setFullScreen: React.Dispatch<React.SetStateAction<boolean>> }) => {
  return (
    <s.Wrapper>
      <s.Handle>
        <s.CollapseButton onClick={() => setFullScreen(prev => !prev)}>
          <s.ArrowIcon fullscreen={fullScreen ? 'true' : 'false'}></s.ArrowIcon>
        </s.CollapseButton>
      </s.Handle>
      {!fullScreen && <Detail date={date} events={events} />}
    </s.Wrapper>
  );
};

const Detail = ({ date, events }: { date: Date, events: any[] }) => {
  return (
    <>
      <s.Title>{date.toLocaleDateString()}</s.Title>
      <s.ContentsList>
        {events.map((e) => (
          <Content key={e.title} content={e} />
        ))}
      </s.ContentsList>
    </>
  )
}

const Content = ({ content }: { content: any }) => {
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
