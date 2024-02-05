export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const orleansUrl = "http://localhost:3939/Accounting/";
  const resData = await useFetch(orleansUrl + query.url);
  return resData;
});
