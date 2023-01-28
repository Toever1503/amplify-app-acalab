export const dummy = (os) => {
  const macData = [
    {
      type: "mac",
      step: 1,
      description: `정부24에서 <span class="text-nb">공동/금융인증서</span> 로그인을
      <br />완료해 주세요!`,
    },
    {
      type: "mac",
      step: 2,
      description: `정부24 홈 검색창에
      <span class="text-nb">'학교생활기록부 발급'을</span><br />
      검색한뒤, <span class="text-nb">'발급'</span> 버튼을 눌러주세요!`,
    },
    {
      type: "mac",
      step: 3,
      description: `신청정보에서
      <span class="text-nb">'학교명'</span> 을 검색한 뒤,<br />
      수령 방법을 <span class="text-nb">'전자문서지갑'</span> 으로
      선택하고<br />
      '민원신청하기' 버튼을 눌러주세요!`,
    },
    {
      type: "mac",
      step: 4,
      description: `서비스 신청내역에서<br />
      <span class="text-nb">처리 완료 상태</span>를 확인하시고,<br />
      <span class="text-pp">스마트폰 카카오톡</span>으로 이동해주세요!`,
    },
    {
      type: "mac",
      step: 5,
      description: `카카오톡 <span class="text-nb">우측 하단 점 3개</span>를 눌러<br />
      '더보기' 창을 접속한 뒤,<br />
      화면 상단 <span class="text-nb">'지갑'</span>을 터치해주세요!`,
    },
    {
      type: "mac",
      step: 6,
      description: `서비스 신청내역에서<br />
      <span class="text-nb">처리 완료 상태</span>를 확인하시고,<br />
      <span class="text-pp">스마트폰 카카오톡</span>으로 이동해주세요!`,
    },
    {
      type: "mac",
      step: 7,
      description: `신청하신 생기부를 눌러 열람하고,<br />
      <span class="text-nb">PDF로 저장</span>하면 끝!`,
    },
  ];
  const windowsData = [
    {
      type: "windows",
      step: 1,
      description: `<span class="text-nb">나이스대국민서비스</span>에 접속하시고<br />
      <span class="text-nb">홈에듀 민원 서비스</span>를 클릭해 주세요!
      <br />완료해 주세요!`,
    },
    {
      type: "windows",
      step: 2,
      description: `메인화면 우측 '온라인 발급민원'에서<br />
      <span class="text-nb">'학교생활기록부'</span>를 클릭해 주세요!`,
    },
    {
      type: "windows",
      step: 3,
      description: `<span class="text-nb">'공동인증서 로그인'</span>을 클릭하시고,<br />
      설치 프로그램을 다운받은 뒤<br />
      로그인을 완료해 주세요!`,
    },
    {
      type: "windows",
      step: 4,
      description: `<span class="text-nb">해당 시도 교육청</span>을 선택하시고,<br />
      <span class="text-pp">학교명</span>을 선택하신 뒤<br />
      다음과 같이 설정해 주세요!`,
    },
    {
      type: "windows",
      step: 5,
      description: `<span class="text-nb">발급</span> 버튼을 클릭하신후,<br />
      '발급내역 상세조회'로 이동하여<br />
      <span class="text-nb">저장</span> 버튼을 클릭해주세요!`,
    },
    {
      type: "windows",
      step: 6,
      description: `파일 <br /><span class="text-nb">마우스 우클릭</span> 후<br />
      연결프로그램을 <span class="text-nb">크롬</span>으로 선택해<br />
      열어주세요!<br />
      비밀번호는 <span class="text-nb">본인 생년월일 6자리</span>입니다.`,
    },
    {
      type: "windows",
      step: 7,
      description: `마우스 우클릭 후 <span class="text-nb">인쇄</span> 클릭,<br />
      대상을 <span class="text-nb">'PDF로 저장'</span>으로 설정한 뒤<br />
      <span class="text-nb">저장</span> 버튼을 클릭하면 끝!`,
    },
  ];

  return os === "Mac" ? macData : windowsData;
};
