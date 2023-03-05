import { SettingCardData } from ".";

export const dataArray: SettingCardData[] = [
    { header: { title: "나최고" } },
    {
      header: { title: "Account" },
      content: [
        { meta: "학적 정보", despcription: "학적 정보 미등록" },
        { meta: "로그아웃" },
        { meta: "계정 탈퇴" },
      ],
    },
    {
      header: { title: "Settings" },
      content: [
        { meta: "테마", despcription: "시스템 기본값" },
        { meta: "알림 설정" },
      ],
    },
    {
      header: { title: "Guide" },
      content: [
        { meta: "앱 버전", despcription: "v.10.0", onClick: () => alert('앱 버전 클릭!') },
        { meta: "문의하기", despcription: "nabest@vis.ssu.ac.kr" },
        { meta: "개발자 정보"},
        { meta: "서비스 이용 약관"},
        { meta: "개인정보 처리방침"},
        { meta: "오픈소스 라이선스"},
      ],
    },
  ];