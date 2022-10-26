const createGetResponse = () => ({
    data:{
      data: [
        {
          id: '1',
          name: 'Nguyễn Văn A',
          img: '/images/user.png',
          email: 'anjali@gmail.com',
          department: 'user',
        },
        {
          id: '2',
          name: 'Nguyễn Văn A',
          img: '/images/user.png',
          email: 'anjali@gmail.com',
          department: 'user',
        },
        {
          id: '3',
          name: 'Nguyễn Văn A',
          img: '/images/user.png',
          email: 'anjali@gmail.com',
          department: 'user',
        },  
        {
          id: '4',
          name: 'Nguyễn Văn A',
          img: '/images/user.png',
          email: 'anjali@gmail.com',
          department: 'user',
        },
        {
          id: '5',
          name: 'Nguyễn Văn A',
          img: '/images/user.png',
          email: 'anjali@gmail.com',
          department: 'user',
        },
        {
          id: '6',
          name: 'Nguyễn Văn A',
          img: '/images/user.png',
          email: 'anjali@gmail.com',
          department: 'user',
        },
        {
          id: '7',
          name: 'Nguyễn Văn A',
          img: '/images/user.png',
          email: 'anjali@gmail.com',
          department: 'user',
        },
        {
          id: '8',
          name: 'Nguyễn Văn A',
          img: '/images/user.png',
          email: 'anjali@gmail.com',
          department: 'user',
        },  
        {
          id: '9',
          name: 'Nguyễn Văn A',
          img: '/images/user.png',
          email: 'anjali@gmail.com',
          department: 'user',
        },
        {
          id: '10',
          name: 'Nguyễn Văn A',
          img: '/images/user.png',
          email: 'anjali@gmail.com',
          department: 'user',
        },
        {
          id: '11',
          name: 'Nguyễn Văn A',
          img: '/images/user.png',
          email: 'anjali@gmail.com',
          department: 'user',
        },
        {
          id: '12',
          name: 'Nguyễn Văn A',
          img: '/images/user.png',
          email: 'anjali@gmail.com',
          department: 'user',
        },
        {
          id: '13',
          name: 'Nguyễn Văn A',
          img: '/images/user.png',
          email: 'anjali@gmail.com',
          department: 'user',
        },  
        {
          id: '14',
          name: 'Nguyễn Văn A',
          img: '/images/user.png',
          email: 'anjali@gmail.com',
          department: 'user',
        },
        {
          id: '15',
          name: 'Nguyễn Văn A',
          img: '/images/user.png',
          email: 'anjali@gmail.com',
          department: 'user',
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
    