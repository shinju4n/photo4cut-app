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

export {alerts};
