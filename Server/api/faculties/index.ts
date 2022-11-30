const createGetResponse = () => ({
  data: {
    data: [
      {
        id: '1',
        name: 'information technology',
      },
      {
        id: '2',
        name: 'architect',
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
  