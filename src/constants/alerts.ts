const alerts = {
  PHOTO_PERMISSION: {
    TITLE: '사진 권한 허용이 필요합니다.',
    DESCRIPTION: '설정 화면에서 사진 권한을 허용해주세요.',
  },
  IMAGE_PICKER_ERROR: {
    TITLE: '갤러리를 열 수 없습니다.',
    DESCRIPTION: '권한을 허용했는지 확인해주세요.',
  },
} as const;

const authAlerts = {
  REQUIRED_EMAIL: '이메일을 입력해주세요',
  REQUIRED_PASSWORD: '비밀번호를 입력해주세요',
  INVALID_EMAIL: '이메일 형식이 아닙니다',
  INVALID_PASSWORD: '비밀번호는 6자 이상이어야 합니다',
};

export {alerts, authAlerts};
