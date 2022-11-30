const createGetResponse = () => ({
    data: {
        smart_banking: '56010001442695',
        name: 'Nguyễn Văn Tiến',
        bank:'BIDV-Ngân Hàng Đầu Tư Và Phát Triển Việt Nam',
        cv:'https://thuthuat.taimienphi.vn/cv-la-viet-tat-cua-tu-nao-trong-tieng-anh-37542n.aspx'
      }
  });
  
  const createPostResponse = () => ({
  
  });
  
  const ValidationErrorResponses = () => ({
    meta: {
      error_message: 'Lỗi đăng ký!'
    }
  });
  export default defineEventHandler(async (event) => {
    if (isMethod(event, 'POST')) {
      const body = await useBody(event);
      if (body.note === 'a') {
        // eslint-disable-next-line no-param-reassign
        event.res.statusCode = 422;
        return ValidationErrorResponses();
      }
      return createPostResponse();
    }
    // event.res.statusCode = 422;
    // return ValidationErrorResponses();
    return createGetResponse();
  });
  