export type AlertType = {
  id: number;
  title: string;
  content: string;
  date: string;
  major_advisor: string;
  image: string;
  like: number;
  dislike: number;
  priority: string;
  expired: boolean;
};

export type NoticeType = {
  id: number;
  title: string;
  content: string;
  date: string;
  major_advisor: string;
  image: string;
  like: number;
  dislike: number;
  priority: string;
  expired: boolean;
};

export type EventType = {
  id: number;
  title: string;
  content: string;
  image: string;
  start: string;
  end: string;
  major_advisor: string;
  like: number;
  dislike: number;
  expired: boolean;
  calendar_title: string;
  calendar_content: string;
  calendar_show: boolean;
};

export interface AlertType {
  id: number;
  title: string;
  content: string;
  date: string;
  major_advisor: string;
  image: string;
  like: number;
  dislike: number;
  priority: string;
  expired: boolean;
}
export interface NoticeType {
  id: number;
  title: string;
  content: string;
  date: string;
  major_advisor: string;
  image: string;
  like: number;
  dislike: number;
  priority: string;
  expired: boolean;
}
// id,
// title,
// content,
// image,
// start,
// end,
// major_advisor,
// like,
// dislike,
// expired,
// calendar_title,
// calendar_content,
// calendar_show
