import { SettingCardData, SettingCardHeader } from './../pages/MyPage/index';

import { UseMutationResult } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { AlarmSettingCardContents } from "../pages/MyPage";
import { IAlarm } from './user';

type Mutation = UseMutationResult<AxiosResponse<Partial<IAlarm>, any>, Error, Partial<IAlarm>, unknown>;

const textMap = {
  'alarm_push': "전체 알림 끄기",
  'event_push': "행사 알림 켜기",
  'events_timer': "알림 시간",
  'events_form': "알림 형태",
  'events_post': "행사 등록 알림 켜기",
  'major_schedule_push': "일정 당일 알림 켜기",
  'major_schedule_post': "일정 등록 알림 켜기",
  'notice_push': '일반 공지 알림 켜기',
  'alerts_push': '긴급 공지 알림'
} as const

export class AlarmSettingContents {
  private alarm_push: AlarmGroup;
  private event_push: AlarmGroup;
  private major_push: AlarmGroup;
  private notice_push: AlarmGroup;
  constructor(alarmData: IAlarm) {
    const alarm_push = new AlarmContent('alarm_push', alarmData);

    const events_timer = new AlarmContent('events_timer', alarmData, `시작 ${alarmData.events_timer}시간 전`)
    const events_form = new AlarmContent('events_form', alarmData, `${alarmData.events_form}`)
    const event_push = new AlarmContent('event_push', alarmData, undefined, events_timer, events_form);
    const events_post = new AlarmContent('events_post', alarmData);

    const major_schedule_post = new AlarmContent('major_schedule_post', alarmData);
    const major_schedule_push = new AlarmContent('major_schedule_push', alarmData);

    const notice_push = new AlarmContent('notice_push', alarmData);
    const alerts_push = new AlarmContent('alerts_push', alarmData);

    this.alarm_push = new AlarmGroup("전체 알림", alarm_push);
    this.event_push = new AlarmGroup("행사 알림", event_push, events_post);
    this.major_push = new AlarmGroup("학사일정 알림", major_schedule_post, major_schedule_push);
    this.notice_push = new AlarmGroup("공지 알림", notice_push, alerts_push);

    console.log('AlarmSettingContents: ', this);
  }

  getGroups() {
    return [this.alarm_push, this.event_push, this.major_push, this.notice_push];
  }
}

export class AlarmGroup implements SettingCardData<AlarmSettingCardContents> {
  header: SettingCardHeader;
  contents?: AlarmContent[];
  constructor(header: string, ...contents: AlarmContent[]) {
    this.header = {
      title: header
    };
    this.contents = contents;
  }

  setMutations(mutation: Mutation) {
    this.contents.forEach((c) => {
      c.setMutation(mutation);
    })
  }

  findContent(key: string) {
    return this.contents.find(c => c.key == key)
  }
}

export class AlarmContent implements AlarmSettingCardContents {
  key: string;
  meta: string;
  value?: any;
  hasCheck?: boolean;
  child?: AlarmContent[];
  description?: string;
  eventHandler?: (e?: any) => void;
  constructor(key: keyof typeof textMap, alarmData: IAlarm, description?: string, ...child: AlarmContent[]) {
    this.key = key;
    this.value = alarmData[this.key];
    this.meta = textMap[key];
    this.hasCheck = !description;
    this.description = description;
    this.child = child;
  }

  setMutation(mutation: Mutation) {
    this.eventHandler = (e) => {
      mutation.mutate({ [this.key]: this.hasCheck ? e.target.checked : e.target.value });
    };
  }
}
