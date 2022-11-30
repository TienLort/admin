const createGetResponse = () => ({
    data:{
      user: 
          {
            id: '1',
            full_name: 'Nguyễn Văn A',
            img: '/images/user.png',
            email: 'anjali@gmail.com',
            phone_number:'0344823807',
            address:'54 Nguyen Luong Bang',
            gender:'1',
            birthday: '2001-11-09',
            faculty_id: '1',
          },
      ratings: 
          [
            {
              name: 'Nguyễn Văn Tiến',
              rating: 4,
              comment: 'Hướng dẫn dễ hiểu, tận tình , chu đáo trong việc hướng dẫn bài tập về nhà',
              created_at:'2022-09-07'
          },
          {
              name: 'Hoàng Thị Thu Như',
              rating: 4,
              comment: 'Hướng dẫn dễ hiểu, tận tình , chu đáo trong việc hướng dẫn bài tập về nhà',
              created_at:'2022-09-07'
          },
          {
              name: 'Trần Thị Thảo',
              rating: 4,
              comment: 'Hướng dẫn dễ hiểu, tận tình , chu đáo trong việc hướng dẫn bài tập về nhà',
              created_at:'2022-09-07'
          },
          {
              name: 'Trần Đức Bình',
              rating: 4,
              comment: 'Hướng dẫn dễ hiểu, tận tình , chu đáo trong việc hướng dẫn bài tập về nhà',
              created_at:'2022-09-07'
          },
          {
              name: 'Trần Đức Bình',
              rating: 4,
              comment: 'Hướng dẫn dễ hiểu, tận tình , chu đáo trong việc hướng dẫn bài tập về nhà',
              created_at:'2022-09-07'
          },
          ]
    }
  });
  const createPutResponse = () => ({
    data: {
      data: {
        id: '1',
        full_name: 'Tran Dinh Trong ',
        img: '/images/user.png',
        email: 'trongcoi@gmail.com',
        phone_number:'0344823807',
        address:'54 Nguyen Luong Bang',
        gender:'1',
        birthday: '2001-11-09',
        faculty_id: '2',
      },
    }
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
      if (isMethod(event, 'PUT')) {
        const body = await useBody(event);
        if (body.name === 'a') {
          // eslint-disable-next-line no-param-reassign
          event.res.statusCode = 422;
          return ValidationErrorResponses();
        }
        return createPutResponse();
      }
    
      return createGetResponse();
    });
    