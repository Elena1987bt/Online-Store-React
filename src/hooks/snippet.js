// export default function useFetchData(category = 'All') {
//   const [{ products }, dispatch] = useAppContext();
//   let url = 'https://fakestoreapi.com/products';
//   if (category === 'All') {
//     url = 'https://fakestoreapi.com/products';
//   } else {
//     url = `https://fakestoreapi.com/products/category/${category}`;
//   }

//   const fetchData = async () => {
//     try {
//       const res = await axios.get(url);
//       const data = await res.data;
//       const finalData = data.map((el) => {
//         return {
//           ...el,
//           amount: 1,
//         };
//       });
//       category === 'all' ? fetchAll(finalData) : fetchByCategory(finalData);
//     } catch (err) {
//       console.log(err);
//       dispatch({
//         type: 'ERROR',
//       });
//     }
//   };

//   function fetchAll(data) {
//     dispatch({
//       type: 'DISPLAY_PRODUCTS',
//       payload: data,
//     });
//   }
//   function fetchByCategory(data) {
//     dispatch({
//       type: 'FILTER_PRODUCTS',
//       payload: data,
//     });
//   }

//   useEffect(() => {
//     dispatch({
//       type: 'LOADING',
//     });
//     fetchData();
//   }, [category]);

//   return [products];
// }
