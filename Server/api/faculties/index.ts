const createGetResponse = () => ({
  data: {
    data: [
      {
        id: '1',
        name: 'Công nghệ thông tin',
      },
      {
        id: '2',
        name: 'Tự động hóa',
      },
    ]
  }
}
);  

  export default defineEventHandler(async (event) => {
    if (isMethod(event, 'POST')) {
    }
  
    return createGetResponse();
  });
  