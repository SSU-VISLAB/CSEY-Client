import { Settings, User } from "react-feather";
import { AlarmSettingCardContents, SettingCardContents, SettingCardData } from ".";

export const dataArray: SettingCardData<SettingCardContents>[] = [
  { header: { title: "나최고", icon: User } },
  {
    header: { title: "Account", icon: Settings },
    content: [
      { meta: "학적 정보", description: "학적 정보 미등록" },
      { meta: "로그아웃" },
      { meta: "계정 탈퇴" },
    ],
  },
  {
    header: { title: "Settings", icon: Settings },
    content: [
      { meta: "테마", description: "시스템 기본값" },
      { meta: "알림 설정", onClick: undefined },
    ],
  },
  {
    header: { title: "Guide", icon: Settings },
    content: [
      { meta: "앱 버전", description: "v.10.0", onClick: () => alert('앱 버전 클릭!') },
      { meta: "문의하기", description: "nabest@vis.ssu.ac.kr" },
      { meta: "개발자 정보" },
      { meta: "서비스 이용 약관" },
      { meta: "개인정보 처리방침" },
      { meta: "오픈소스 라이센스" },
    ],
  },
];

export const AlarmArray: SettingCardData<AlarmSettingCardContents>[] = [
  {
    header: { title: "전체 알림" },
    content: [{ hasCheck: true, meta: "전체 알림 끄기" }],
  },
  {
    header: { title: "행사 알림" },
    content: [
      {
        hasCheck: true, meta: "행사 알림 켜기", child: [
          { meta: "알림 시간", description: "시작 24시간 전", onClick: () => alert("알림 시간 설정") },
          { meta: "알림 형태", description: "북마크만", onClick: () => alert("알림 형태 설정") },
        ],
      },
      { hasCheck: true, meta: "행사 등록 알림 켜기" }
    ],
  },
  {
    header: { title: '학사일정 알림' },
    content: [
      { hasCheck: true, meta: "일정 당일 알림 켜기" },
      { hasCheck: true, meta: "일정 등록 알림 켜기" },
    ]
  },
  {
    header: { title: '공지 알림' },
    content: [
      { hasCheck: true, meta: '일반 공지 알림 켜기' },
      { hasCheck: true, meta: '긴급 공지 알림 켜기' },
    ]
  }
];