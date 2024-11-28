import React, { Fragment, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Layout/Footer";
import FAQs from "../components/Layout/FAQs";
import PropertyDetailItems from "../components/Data/PropertyDetailItems";

import Loader from "../components/UI/Loader";
import Error from "../components/UI/Error";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector } from "react-redux";

// import { useGetProperyDetailsQuery } from "../redux-ex/services/bayut";

const ListingDetail = () => {

    const divRef = useRef();

    const location = useLocation();
    const property = location.state;
    useEffect(() => {
        divRef.current.scrollIntoView({ behavior: "smooth" });
    });

    return (
        <Fragment>
            <section
                ref={divRef}
                className={`mx-auto bg-silver dark:bg-darkBg px-2 md:px-16 lg:px-20 py-20 pt-20 md:py-16`}
            >
                <div className="my-20">

                    <PropertyDetailItems
                        key={property._id}
                        property={property}
                    />

                </div>
            </section>
            <FAQs />
            <Footer />
        </Fragment>
    );
};

export default ListingDetail;
