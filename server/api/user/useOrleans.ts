export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const orleansUrl = "http://localhost:3939/Accounting/";
  const resData = fetch(orleansUrl + query.url).then(res => res.json());
  return resData;
});
