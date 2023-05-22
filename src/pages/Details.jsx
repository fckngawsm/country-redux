// import { useNavigate, useParams } from "react-router-dom";
// import { IoArrowBack } from "react-icons/io5";

// import { Button } from "../components/Button";
// import { Info } from "../components/Info";
// import { useDispatch, useSelector } from "react-redux";
// import { selectAllCountry } from "../store/details/details-selectors";
// import { useEffect } from "react";
// import {
//   clearDetails,
//   loadingCountryDetails,
// } from "../store/details/details-action";

// export const Details = () => {
//   const { name } = useParams();
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(loadingCountryDetails(name));

//     return () => {
//       dispatch(clearDetails());
//     };
//   }, [dispatch, name]);
//   const { currentCountry, status, error } = useSelector(selectAllCountry);

//   return (
//     <div>
//       <Button onClick={() => navigate(-1)}>
//         <IoArrowBack /> Back
//       </Button>
//       {status === "loading" ? <h2>loading...</h2> : null}
//       {error && <h2>{error}</h2>}
//       {currentCountry && <Info push={navigate} {...currentCountry} />}
//     </div>
//   );
// };
