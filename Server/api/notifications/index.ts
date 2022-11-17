const createGetResponse = () => ({
    data:{
      data: [
        {
          id: '1',
          title: 'Thông báo nghỉ học 1',
          content: 'Hỗ trợ người dùng lập nhóm học, cải thiện chất lượng học tập dưới sự hỗ trợ của các mentor do người dùng học tốt đăng ký, có hỗ trợ và quản lý từ nhà trường',
          time: '10/24/2022',
        },
        {
          id: '2',
          title: 'Thông báo nghỉ học 2',
          content: 'Hỗ trợ người dùng lập nhóm học, cải thiện chất lượng học tập dưới sự hỗ trợ của các mentor do người dùng học tốt đăng ký, có hỗ trợ và quản lý từ nhà trường',
          time: '10/24/2022',
        },
        {
          id: '3',
          title: 'Thông báo nghỉ học 3',
          content: 'Hỗ trợ người dùng lập nhóm học, cải thiện chất lượng học tập dưới sự hỗ trợ của các mentor do người dùng học tốt đăng ký, có hỗ trợ và quản lý từ nhà trường',
          time: '10/24/2022',
        },  
        {
          id: '4',
          title: 'Thông báo nghỉ học 4',
          content: 'Hỗ trợ người dùng lập nhóm học, cải thiện chất lượng học tập dưới sự hỗ trợ của các mentor do người dùng học tốt đăng ký, có hỗ trợ và quản lý từ nhà trường',
          time: '10/24/2022',
        },
        {
          id: '5',
          title: 'Thông báo nghỉ học 5',
          content: 'Hỗ trợ người dùng lập nhóm học, cải thiện chất lượng học tập dưới sự hỗ trợ của các mentor do người dùng học tốt đăng ký, có hỗ trợ và quản lý từ nhà trường',
          time: '10/24/2022',
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
    