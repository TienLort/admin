const createGetResponse = () => ({
    data:{
      data: [
        {
          id: '1',
          name: 'Nguyễn Văn A',
          img: '/images/user.png',
          email: 'anjali@gmail.com',
          phonenumber:'0344823807',
          address:'54 Nguyen Luong Bang',
          gender:'1',
          birthday: '01/28/2001',
          faculty: 'Cong Nghe Thong Tin',
        },
        {
          id: '2',
          name: 'Nguyễn Văn B',
          img: '/images/user.png',
          email: 'anjali@gmail.com',
          phonenumber:'0344823807',
          address:'54 Nguyen Luong Bang',
          gender:'1',
          birthday: '01/28/2001',
          faculty: 'Cong Nghe Thong Tin',
        },
        {
          id: '3',
          name: 'Nguyễn Văn C',
          img: '/images/user.png',
          email: 'anjali@gmail.com',
          phonenumber:'0344823807',
          address:'54 Nguyen Luong Bang',
          gender:'1',
          birthday: '01/28/2001',
          faculty: 'Cong Nghe Thong Tin',
        },  
        {
          id: '4',
          name: 'Nguyễn Văn D',
          img: '/images/user.png',
          email: 'anjali@gmail.com',
          phonenumber:'0344823807',
          address:'54 Nguyen Luong Bang',
          gender:'1',
          birthday: '01/28/2001',
          faculty: 'Cong Nghe Thong Tin',
        },
        {
          id: '5',
          name: 'Nguyễn Văn E',
          img: '/images/user.png',
          email: 'anjali@gmail.com',
          phonenumber:'0344823807',
          address:'54 Nguyen Luong Bang',
          gender:'1',
          birthday: '01/28/2001',
          faculty: 'Cong Nghe Thong Tin',
        },
        {
          id: '6',
          name: 'Nguyễn Văn Q',
          img: '/images/user.png',
          email: 'anjali@gmail.com',
          phonenumber:'0344823807',
          address:'54 Nguyen Luong Bang',
          gender:'1',
          birthday: '01/28/2001',
          faculty: 'Cong Nghe Thong Tin',
        },
        {
          id: '7',
          name: 'Nguyễn Văn S',
          img: '/images/user.png',
          email: 'anjali@gmail.com',
          phonenumber:'0344823807',
          address:'54 Nguyen Luong Bang',
          gender:'1',
          birthday: '01/28/2001',
          faculty: 'Cong Nghe Thong Tin',
        },
        {
          id: '8',
          name: 'Nguyễn Văn E',
          img: '/images/user.png',
          email: 'anjali@gmail.com',
          phonenumber:'0344823807',
          address:'54 Nguyen Luong Bang',
          gender:'1',
          birthday: '01/28/2001',
          faculty: 'Cong Nghe Thong Tin',
        },  
        {
          id: '9',
          name: 'Nguyễn Văn V',
          img: '/images/user.png',
          email: 'anjali@gmail.com',
          phonenumber:'0344823807',
          address:'54 Nguyen Luong Bang',
          gender:'1',
          birthday: '01/28/2001',
          faculty: 'Cong Nghe Thong Tin',
        },
        {
          id: '10',
          name: 'Nguyễn Văn Z',
          img: '/images/user.png',
          email: 'anjali@gmail.com',
          phonenumber:'0344823807',
          address:'54 Nguyen Luong Bang',
          gender:'1',
          birthday: '01/28/2001',
          faculty: 'Cong Nghe Thong Tin',
        },
        {
          id: '11',
          name: 'Nguyễn Văn W',
          img: '/images/user.png',
          email: 'anjali@gmail.com',
          phonenumber:'0344823807',
          address:'54 Nguyen Luong Bang',
          gender:'1',
          birthday: '01/28/2001',
          faculty: 'Cong Nghe Thong Tin',
        },
        {
          id: '12',
          name: 'Nguyễn Văn R',
          img: '/images/user.png',
          email: 'anjali@gmail.com',
          phonenumber:'0344823807',
          address:'54 Nguyen Luong Bang',
          gender:'1',
          birthday: '01/28/2001',
          faculty: 'Cong Nghe Thong Tin',
        },
        {
          id: '13',
          name: 'Nguyễn Văn T',
          img: '/images/user.png',
          email: 'anjali@gmail.com',
          phonenumber:'0344823807',
          address:'54 Nguyen Luong Bang',
          gender:'1',
          birthday: '01/28/2001',
          faculty: 'Cong Nghe Thong Tin',
        },  
        {
          id: '14',
          name: 'Nguyễn Văn Y',
          img: '/images/user.png',
          email: 'anjali@gmail.com',
          phonenumber:'0344823807',
          address:'54 Nguyen Luong Bang',
          gender:'1',
          birthday: '01/28/2001',
          faculty: 'Cong Nghe Thong Tin',
        },
        {
          id: '15',
          name: 'Nguyễn Văn H',
          img: '/images/user.png',
          email: 'anjali@gmail.com',
          phonenumber:'0344823807',
          address:'54 Nguyen Luong Bang',
          gender:'1',
          birthday: '01/28/2001',
          faculty: 'Cong Nghe Thong Tin',
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
    