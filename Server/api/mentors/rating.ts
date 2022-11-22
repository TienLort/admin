import crypto from 'crypto';

const createGetResponse = () => ({
  data: [
    {
        name: 'Nguyễn Văn Tiến',
        group_id: '1',
        rating:'4',
        comment: 'Hướng dẫn dễ hiểu, tận tình , chu đáo trong việc hướng dẫn bài tập về nhà',
        created_at:'2001-11-09'
    },
    {
        name: 'Hoàng Thị Thu Như',
        group_id: '2',

        rating:'4',
        comment: 'Hướng dẫn dễ hiểu, tận tình , chu đáo trong việc hướng dẫn bài tập về nhà',
        created_at:'2001-11-09'
    },
    {
        name: 'Trần Thị Thảo',
        group_id: '1',
        rating:'4',
        comment: 'Hướng dẫn dễ hiểu, tận tình , chu đáo trong việc hướng dẫn bài tập về nhà',
        created_at:'2001-11-09'
    },
    {
        name: 'Trần Đức Bình',
        group_id: '2',
        rating:'4',
        comment: 'Hướng dẫn dễ hiểu, tận tình , chu đáo trong việc hướng dẫn bài tập về nhà',
        created_at:'2001-11-09'
    },
    {
        name: 'Trần Đức Bình',
        group_id: '1',
        rating:'4',
        comment: 'Hướng dẫn dễ hiểu, tận tình , chu đáo trong việc hướng dẫn bài tập về nhà',
        created_at:'2001-11-09'
    },
  ]
});
const createPutResponse = () => ({
  data: {
    data: {
      id: 'thunhu',
      full_name: 'Trần Thị Thảo',
      password: 'abcxyz',
      email: 'email@example.com',
      phone_number: '0866776059',
      address: 'Quảng Trị',
      gender: '1',
      birthday: '01/28/2001',
      faculty: '1',
      created_at: '2022-08-05T16:04:43.967Z',
      updated_at: '2022-08-05T16:04:43.967Z',
    },
  }
});
const validationErrorResponses = () => ({
  meta: {
    error_message: {
      full_name: [
        'Họ và tên không được để trống',
        'Họ và tên không được để trống',
      ],
      email: [
        'Mã nhóm không được đổi',
        'Mã nhóm không được đổi',
      ],
    }
  }
});

export default defineEventHandler(async (event) => {
  if (isMethod(event, 'PUT')) {
    const body = await useBody(event);
    if (body.full_name === 'a') {
      // eslint-disable-next-line no-param-reassign
      event.res.statusCode = 422;
      return validationErrorResponses();
    }
    return createPutResponse();
  }
  return createGetResponse();
});
