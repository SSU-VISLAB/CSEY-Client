import { SettingCardContents, SettingCardData } from "../pages/MyPage";

export class User {
  private user: IUser;
  private alarm: IAlarm;
  private bookmark: IBookmark;
  private reads: IRead;
  private noticesLike: INoticeLike;
  private eventsLike: IEventsLike;
  private settingData: SettingCardData<SettingCardContents>[];

  public get userData() {
    return this.user;
  }

  constructor(
    user: IUser,
    alarm: IAlarm,
    bookmark: IBookmark,
    reads: IRead,
    noticesLike: INoticeLike,
    eventsLike: IEventsLike
  ) {
    this.user = user;
    this.alarm = alarm;
    this.bookmark = bookmark;
    this.reads = reads;
    this.noticesLike = noticesLike;
    this.eventsLike = eventsLike;

  }

}

export interface IUser {
  id: number;
  account: string;
  activated: boolean;
  name: string;
  createdDate: Date;
  lastAccess: Date;
  major: '컴퓨터' | '소프트';
}

export interface IAlarm {
  alarm_push?: boolean;
  event_push?: boolean;
  events_timer?: number;
  events_post: '북마크' | '전체';
  major_schedule_push?: boolean;
  major_schedule_post?: boolean;
  notice_push?: boolean;
  alerts_push?: boolean;
}

export interface INoticeLike {
  fk_notice_id: number;
  like?: boolean;
  fk_user_id: number;
}

export interface IEventsLike {
  fk_event_id: number;
  like?: boolean;
  fk_user_id: number;
}

export interface IBookmark {
  fk_event_id?: number;
  fk_bookmark_id?: number;
}

export interface IRead {
  fk_notice_id?: number;
  fk_read_id?: number;
}

