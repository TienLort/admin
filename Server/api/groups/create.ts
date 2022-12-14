const createGetResponse = () => ({
    data:{
      data: [
        {
          id: '1',
          user_name: 'Đặng Thùy Nam',
          subject:'Giải tích 1',      
          topic: 'Hóa',
          quatity: '3',
          group_id: '12332111',
          created_at: '2022-08-05T16:04:43.967Z',
          updated_at: '2022-08-05T16:04:43.967Z',
        },
        {
          id: '2',
          user_name: 'Ngô Gia Hân',
          subject: 'Tin học đại cương',
          topic: 'Công nghệ thông tin',
          quatity: '3',
          group_id: '12332111',
          created_at: '2022-08-05T16:04:43.967Z',
          updated_at: '2022-08-05T16:04:43.967Z',
        },
        {
          id: '3',
          user_name: 'Phạm Công Nhật',
          subject: 'Xác suất thống kê',
          topic: 'Cơ khí giao thông',
          quatity: '1',
          group_id: '12332111',
          created_at: '2022-08-05T16:04:43.967Z',
          updated_at: '2022-08-05T16:04:43.967Z',
        },  
        {
          id: '4',
          user_name: 'Vũ Trường Tân',
          subject: 'Vi điều khiển',
          topic: 'Cơ khí giao thông',
          quatity: '3',
          group_id: '12332111',
          created_at: '2022-08-05T16:04:43.967Z',
          updated_at: '2022-08-05T16:04:43.967Z',
        },
        {
          id: '5',
          user_name: 'Nguyễn Văn Nam',
          subject: 'Khoa học dữ liệu',
          topic: 'Công nghệ tiên tiến',
          quatity: '2',
          group_id: '12332111',
          created_at: '2022-08-05T16:04:43.967Z',
          updated_at: '2022-08-05T16:04:43.967Z',
        },
        {
          id: '6',
          user_name: 'Phạm Vũ Nhật',
          subject: 'Chuyên đề công nghệ',
          topic: 'Công nghệ tiên tiến và xây dựng dân dụng',
          quatity: '2',
          group_id: '12332111',
          created_at: '2022-08-05T16:04:43.967Z',
          updated_at: '2022-08-05T16:04:43.967Z',
        },
        {
          id: '7',
          user_name: 'Trịnh Công Đat',
          subject: 'Chuyên đề công nghệ',
          topic: 'Công nghệ tiên tiến và xây dựng dân dụng',
          quatity: '2',
          group_id: '12332111',
          created_at: '2022-08-05T16:04:43.967Z',
          updated_at: '2022-08-05T16:04:43.967Z',
        },
        {
          id: '8',
          user_name: 'Lê Văn Giang',
          subject: 'Chuyên đề công nghệ',
          topic: 'Công nghệ tiên tiến và xây dựng dân dụng',
          quatity: '2',
          group_id: '12332111',
          created_at: '2022-08-05T16:04:43.967Z',
          updated_at: '2022-08-05T16:04:43.967Z',
        },
        {
          id: '9',
          user_name: 'Ngô Đại Kiên',
          subject: 'Chuyên đề công nghệ',
          topic: 'Công nghệ tiên tiến và xây dựng dân dụng',
          quatity: '2',
          group_id: '12332111',
          created_at: '2022-08-05T16:04:43.967Z',
          updated_at: '2022-08-05T16:04:43.967Z',
        },
      ]
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
    