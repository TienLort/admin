const createGetResponse = () => ({
    data:{
      data: [
        {
          id: '1',
          full_name: 'Nguyễn Văn A',
          img: '/images/user.png',
          email: 'anjali@gmail.com',
          phone_number:'0344823807',
          address:'54 Nguyen Luong Bang',
          gender:'1',
          birthday: '01/28/2001',
          faculty: 'Cong Nghe Thong Tin',
        },
        {
          id: '2',
          full_name: 'Nguyễn Văn B',
          img: '/images/user.png',
          email: 'anjali@gmail.com',
          phone_number:'0344823807',
          address:'54 Nguyen Luong Bang',
          gender:'1',
          birthday: '01/28/2001',
          faculty: 'Cong Nghe Thong Tin',
        },
        {
          id: '3',
          full_name: 'Nguyễn Văn C',
          img: '/images/user.png',
          email: 'anjali@gmail.com',
          phone_number:'0344823807',
          address:'54 Nguyen Luong Bang',
          gender:'1',
          birthday: '01/28/2001',
          faculty: 'Cong Nghe Thong Tin',
        },  
        {
          id: '4',
          full_name: 'Nguyễn Văn D',
          img: '/images/user.png',
          email: 'anjali@gmail.com',
          phone_number:'0344823807',
          address:'54 Nguyen Luong Bang',
          gender:'1',
          birthday: '01/28/2001',
          faculty: 'Cong Nghe Thong Tin',
        },
        {
          id: '5',
          full_name: 'Nguyễn Văn E',
          img: '/images/user.png',
          email: 'anjali@gmail.com',
          phone_number:'0344823807',
          address:'54 Nguyen Luong Bang',
          gender:'1',
          birthday: '01/28/2001',
          faculty: 'Cong Nghe Thong Tin',
        },
        {
          id: '6',
          full_name: 'Nguyễn Văn Q',
          img: '/images/user.png',
          email: 'anjali@gmail.com',
          phone_number:'0344823807',
          address:'54 Nguyen Luong Bang',
          gender:'1',
          birthday: '01/28/2001',
          faculty: 'Cong Nghe Thong Tin',
        },
        {
          id: '7',
          full_name: 'Nguyễn Văn S',
          img: '/images/user.png',
          email: 'anjali@gmail.com',
          phone_number:'0344823807',
          address:'54 Nguyen Luong Bang',
          gender:'1',
          birthday: '01/28/2001',
          faculty: 'Cong Nghe Thong Tin',
        },
        {
          id: '8',
          full_name: 'Nguyễn Văn E',
          img: '/images/user.png',
          email: 'anjali@gmail.com',
          phone_number:'0344823807',
          address:'54 Nguyen Luong Bang',
          gender:'1',
          birthday: '01/28/2001',
          faculty: 'Cong Nghe Thong Tin',
        },  
        {
          id: '9',
          full_name: 'Nguyễn Văn V',
          img: '/images/user.png',
          email: 'anjali@gmail.com',
          phone_number:'0344823807',
          address:'54 Nguyen Luong Bang',
          gender:'1',
          birthday: '01/28/2001',
          faculty: 'Cong Nghe Thong Tin',
        },
        {
          id: '10',
          full_name: 'Nguyễn Văn Z',
          img: '/images/user.png',
          email: 'anjali@gmail.com',
          phone_number:'0344823807',
          address:'54 Nguyen Luong Bang',
          gender:'1',
          birthday: '01/28/2001',
          faculty: 'Cong Nghe Thong Tin',
        },
        {
          id: '11',
          full_name: 'Nguyễn Văn W',
          img: '/images/user.png',
          email: 'anjali@gmail.com',
          phone_number:'0344823807',
          address:'54 Nguyen Luong Bang',
          gender:'1',
          birthday: '01/28/2001',
          faculty: 'Cong Nghe Thong Tin',
        },
        {
          id: '12',
          full_name: 'Nguyễn Văn R',
          img: '/images/user.png',
          email: 'anjali@gmail.com',
          phone_number:'0344823807',
          address:'54 Nguyen Luong Bang',
          gender:'1',
          birthday: '01/28/2001',
          faculty: 'Cong Nghe Thong Tin',
        },
        {
          id: '13',
          full_name: 'Nguyễn Văn T',
          img: '/images/user.png',
          email: 'anjali@gmail.com',
          phone_number:'0344823807',
          address:'54 Nguyen Luong Bang',
          gender:'1',
          birthday: '01/28/2001',
          faculty: 'Cong Nghe Thong Tin',
        },  
        {
          id: '14',
          full_name: 'Nguyễn Văn Y',
          img: '/images/user.png',
          email: 'anjali@gmail.com',
          phone_number:'0344823807',
          address:'54 Nguyen Luong Bang',
          gender:'1',
          birthday: '01/28/2001',
          faculty: 'Cong Nghe Thong Tin',
        },
        {
          id: '15',
          full_name: 'Nguyễn Văn H',
          img: '/images/user.png',
          email: 'anjali@gmail.com',
          phone_number:'0344823807',
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
    