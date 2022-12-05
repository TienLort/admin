const createGetResponse = () => ({
  data: {
    data:
    {
      user_name: 'Đặng Thùy Nam',
      faculty_id: '1',
      subject_id: '1',
      self_study: 'Tự học',
      difficult: 'TKhóa học cầm tay chỉ việc cho nhà đầu tư từ cấp độ bắt đầu đến nâng cao với những bài giảng và tài liệu công phu là kết quả từ tích.',
      target: 'TKhóa học cầm tay chỉ việc cho nhà đầu tư từ cấp độ bắt đầu đến nâng cao với những bài giảng và tài liệu công phu là kết quả từ tích.',
      note: 'TKhóa học cầm tay chỉ việc cho nhà đầu tư từ cấp độ bắt đầu đến nâng cao với những bài giảng và tài liệu công phu là kết quả từ tích.',
      time: 'TKhóa học cầm tay chỉ việc cho nhà đầu tư từ cấp độ bắt đầu đến nâng cao với những bài giảng và tài liệu công phu là kết quả từ tích.'
    },
  }
});

const createPostResponse = () => ({
  api_token: 'beareAuthApiToken',
});

const ValidationErrorResponses = () => ({
  name: [
    'Tên đăng nhập đã tồn tại',
    'Tên đăng nhập đã tồn tại',
  ],
  quatity: [
    'Tên đăng nhập đã tồn tại',
    'Tên đăng nhập đã tồn tại',
  ],
});
export default defineEventHandler(async (event) => {
  if (isMethod(event, 'POST')) {
    const body = await useBody(event);
    if (body.name === 'a') {
      // eslint-disable-next-line no-param-reassign
      event.res.statusCode = 422;
      return ValidationErrorResponses();
    }
    return createPostResponse();
  }

  return createGetResponse();
});
