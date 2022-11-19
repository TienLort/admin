const createGetResponse = () => ({
    data:{
      data: 
        {
          id: '1',
          name: 'Nguyễn Văn A',
          img: '/images/m1.jpg',
          email: 'anjali@gmail.com',
          phone_number:'0344823807',
          address:'54 Nguyen Luong Bang',
          gender:'1',
          birthday: '01/28/2001',
          faculty: 'Cong Nghe Thong Tin',
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
    