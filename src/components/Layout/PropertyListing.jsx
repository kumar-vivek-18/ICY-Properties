import React, { Fragment, useEffect, useState } from "react";
import PropertiesItem from "../Data/PropertiesItem";

// import { useGetProperyListQuery } from "../../redux/services//bayut";
import Loader from "../UI/Loader";
import Error from "../UI/Error";
import { useDispatch, useSelector } from "react-redux";
import { setVerifiedProperties } from "../../redux/propertiesSlice";
// import { set } from "immer/dist/internal";
import axios from 'axios';

const Properties = () => {
  // const { data, isFetching, error } = useGetProperyListQuery();
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const verifiedProperties = useSelector(store => store.properties.verifiedProperties);

  const fetchProperties = async () => {
    setError(false);
    setIsFetching(true);
    try {
      await axios.get('http://80.65.208.60:5000/v1/property/all-properties', {
        params: {
          type: "verified"
        }
      })
        .then((res) => {
          if (res.status === 200) {
            console.log('verified properties', res.data);
            dispatch(setVerifiedProperties(res.data));
          }
        })
    } catch (error) {
      setError(true);
      console.error("Error occured while fetching unverified properties", error.message);
    }
    finally {
      setIsFetching(false);
    }
  }

  useEffect(() => {
    fetchProperties();
  }, []);




  const mappedList = verifiedProperties.map((property) => {
    return (
      <PropertiesItem
        key={property._id}
        property={property}
      />
    )
  });

  return (
    <Fragment>
      <section className="mx-auto bg-silver dark:bg-darkBg px-10 md:px-16 lg:px-20 py-20 pt-20 md:py-16">
        <div className="px-auto lg:px-32">
          <h1 className="font-Poppins font-bold text-4xl text-center tracking-wider mb-4 dark:text-ash">
            List of <span className="text-yellow">Properties</span>
          </h1>
        </div>
        <div>
          <ul className="flex justify-center flex-col lg:flex-row lg:flex-wrap ">
            {isFetching && <Loader />}
            {!isFetching && !error && mappedList}
            {!isFetching && mappedList?.length === 0 && <Error />}
          </ul>
        </div>
      </section>
    </Fragment>
  );
};

export default Properties;
