// import React from "react";
// import { TiArrowRight } from "react-icons/ti";
// import { Link } from "react-router-dom";
// import { styles } from "../../styles/styles";
// import ListCard from "../Global/ListCard";
// import { popularlist } from "../../constants/popularList";

// const PopularListing = () => {
//   return (
//     <section
//       className={`flex flex-col items-start gap-y-3 ${styles.paddingHorizontal} py-6 lg:py-12`}
//     >
//       <h1 className="text-2xl font-semibold">Popular listings</h1>
//       <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
//         <p className="text-gray-500">Beehome's most popular watch lists.</p>
//         <div className="flex items-center justify-start gap-2 ">
//           <p className="float-left">View All 100 listings</p>
//           <Link
//             to="/rent"
//             className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 p-2"
//           >
//             <TiArrowRight className="w-full h-full" />
//           </Link>
//         </div>
//       </div>
//       <div className="flex items-center justify-start gap-4">
//         <button className="bg-black text-white text-base px-5 py-2 rounded-full border border-black">
//           Apartment
//         </button>
//         <button className="bg-transparent text-black text-base px-5 py-2 rounded-full border border-gray-300 hover:text-white hover:bg-black hover:border-black transition-all duration-300">
//           Villa
//         </button>
//         <button className="bg-transparent text-black text-base px-5 py-2 rounded-full border border-gray-300 hover:text-white hover:bg-black hover:border-black transition-all duration-300">
//           PG
//         </button>
//       </div>
//       <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
//         {popularlist.map((list, index) => {
//           return <ListCard image={list.image} price={list.price} key={index} />;
//         })}
//       </div>
//     </section>
//   );
// };

// export default PopularListing;


// import React, { useState, useEffect, useRef } from "react";
// import { TiArrowRight } from "react-icons/ti";
// import { Link } from "react-router-dom";
// import { styles } from "../../styles/styles";
// import ListCard from "../Global/ListCard";
// import { popularlist } from "../../constants/popularList";

// const PopularListing = () => {
//   const [activeCategory, setActiveCategory] = useState(null);
//   const containerRef = useRef(null);

//   const handleButtonClick = (category) => {
//     setActiveCategory(category);
//   };

//   const handleClickOutside = (event) => {
//     if (containerRef.current && !containerRef.current.contains(event.target)) {
//       setActiveCategory(null);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <section
//       ref={containerRef}
//       className={`flex flex-col items-start gap-y-3 ${styles.paddingHorizontal} py-6 lg:py-12`}
//     >
//       <h1 className="text-2xl font-semibold">Popular listings</h1>
//       <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
//         <p className="text-gray-500">Beehome's most popular watch lists.</p>
//         <div className="flex items-center justify-start gap-2 ">
//           <p className="float-left">View All 100 listings</p>
//           <Link
//             to="/rent"
//             className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 p-2"
//           >
//             <TiArrowRight className="w-full h-full" />
//           </Link>
//         </div>
//       </div>
//       <div className="w-full flex items-center justify-start gap-4">
//         <button
//           onClick={() => handleButtonClick("apartment")}
//           className={`text-base px-5 py-2 rounded-full border transition-all duration-300 ${
//             activeCategory === "apartment"
//               ? "bg-black text-white border-black"
//               : "bg-transparent text-black border-gray-300 hover:text-white hover:bg-black hover:border-black"
//           }`}
//         >
//           Apartment
//         </button>
//         <button
//           onClick={() => handleButtonClick("villa")}
//           className={`text-base px-5 py-2 rounded-full border transition-all duration-300 ${
//             activeCategory === "villa"
//               ? "bg-black text-white border-black"
//               : "bg-transparent text-black border-gray-300 hover:text-white hover:bg-black hover:border-black"
//           }`}
//         >
//           Villa
//         </button>
//         <button
//           onClick={() => handleButtonClick("pg")}
//           className={`text-base px-5 py-2 rounded-full border transition-all duration-300 ${
//             activeCategory === "pg"
//               ? "bg-black text-white border-black"
//               : "bg-transparent text-black border-gray-300 hover:text-white hover:bg-black hover:border-black"
//           }`}
//         >
//           PG
//         </button>
//       </div>
//       <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
//         {popularlist.map((list, index) => (
//           <div
//             key={index}
//             className={`relative transition-transform duration-300 ${
//               (activeCategory === "apartment" && index === 0) ||
//               (activeCategory === "villa" && index === 1) ||
//               (activeCategory === "pg" && index === 2)
//                 ? "transform scale-105"
//                 : "transform scale-100"
//             }`}
//           >
//             <ListCard image={list.image} price={list.price} />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default PopularListing;

// import React, { useState, useEffect, useRef } from "react";
// import { TiArrowRight } from "react-icons/ti";
// import { Link } from "react-router-dom";
// import { styles } from "../../styles/styles";
// import ListCard from "../Global/ListCard";
// import { popularlist } from "../../constants/popularList";

// const PopularListing = () => {
//   const [activeCategory, setActiveCategory] = useState(null);
//   const sectionRef = useRef(null);
//   const buttonsContainerRef = useRef(null);

//   const handleButtonClick = (category) => {
//     setActiveCategory(category);
//   };

//   const handleClickOutside = (event) => {
//     if (sectionRef.current && !sectionRef.current.contains(event.target)) {
//       // Click is outside the entire section
//       setActiveCategory(null);
//     } else if (
//       sectionRef.current &&
//       !buttonsContainerRef.current.contains(event.target) &&
//       !event.target.closest("button")
//     ) {
//       // Click is inside the section but not on a button or the buttons container
//       setActiveCategory(null);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className={`flex flex-col items-start gap-y-3 ${styles.paddingHorizontal} py-6 lg:py-12`}
//     >
//       <h1 className="text-2xl font-semibold">Popular listings</h1>
//       <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
//         <p className="text-gray-500">Beehome's most popular watch lists.</p>
//         <div className="flex items-center justify-start gap-2 ">
//           <p className="float-left">View All 100 listings</p>
//           <Link
//             to="/rent"
//             className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 p-2"
//           >
//             <TiArrowRight className="w-full h-full" />
//           </Link>
//         </div>
//       </div>
//       <div
//         ref={buttonsContainerRef} // Ref for the buttons container
//         className="w-full flex items-center justify-start gap-4"
//       >
//         <button
//           onClick={() => handleButtonClick("apartment")}
//           className={`text-base px-5 py-2 rounded-full border transition-all duration-300 ${
//             activeCategory === "apartment"
//               ? "bg-black text-white border-black"
//               : "bg-transparent text-black border-gray-300 hover:text-white hover:bg-black hover:border-black"
//           }`}
//         >
//           Apartment
//         </button>
//         <button
//           onClick={() => handleButtonClick("villa")}
//           className={`text-base px-5 py-2 rounded-full border transition-all duration-300 ${
//             activeCategory === "villa"
//               ? "bg-black text-white border-black"
//               : "bg-transparent text-black border-gray-300 hover:text-white hover:bg-black hover:border-black"
//           }`}
//         >
//           Villa
//         </button>
//         <button
//           onClick={() => handleButtonClick("pg")}
//           className={`text-base px-5 py-2 rounded-full border transition-all duration-300 ${
//             activeCategory === "pg"
//               ? "bg-black text-white border-black"
//               : "bg-transparent text-black border-gray-300 hover:text-white hover:bg-black hover:border-black"
//           }`}
//         >
//           PG
//         </button>
//       </div>
//       <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
//         {popularlist.map((list, index) => (
//           <div
//             key={index}
//             className={`relative transition-transform duration-300 ${
//               (activeCategory === "apartment" && index === 0) ||
//               (activeCategory === "villa" && index === 1) ||
//               (activeCategory === "pg" && index === 2)
//                 ? "transform scale-105"
//                 : "transform scale-100"
//             }`}
//           >
//             <ListCard image={list.image} price={list.price} />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default PopularListing;


// import React, { useState, useEffect, useRef } from "react";
// import { TiArrowRight } from "react-icons/ti";
// import { Link } from "react-router-dom";
// import { styles } from "../../styles/styles";
// import ListCard from "../Global/ListCard";
// import { popularlist } from "../../constants/popularList";

// const PopularListing = () => {
//   const [activeCategory, setActiveCategory] = useState(null);
//   const sectionRef = useRef(null);
//   const buttonsContainerRef = useRef(null);

//   const handleButtonClick = (category) => {
//     setActiveCategory(category);
//   };

//   const handleClickOutside = (event) => {
//     if (sectionRef.current && !sectionRef.current.contains(event.target)) {
//       // Click is outside the entire section
//       setActiveCategory(null);
//     } else if (
//       sectionRef.current &&
//       !buttonsContainerRef.current.contains(event.target) &&
//       !event.target.closest("button")
//     ) {
//       // Click is inside the section but not on a button or the buttons container
//       setActiveCategory(null);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className={`flex flex-col items-start gap-y-3 ${styles.paddingHorizontal} py-6 lg:py-12`}
//     >
//       <h1 className="text-2xl font-semibold">Popular listings</h1>
//       <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
//         <p className="text-gray-500">Beehome's most popular watch lists.</p>
//         <div className="flex items-center justify-start gap-2 ">
//           <p className="float-left">View All 100 listings</p>
//           <Link
//             to="/rent"
//             className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 p-2"
//           >
//             <TiArrowRight className="w-full h-full" />
//           </Link>
//         </div>
//       </div>
//       <div
//         ref={buttonsContainerRef}
//         className="w-full flex items-center justify-start gap-4"
//       >
//         <button
//           onClick={() => handleButtonClick("apartment")}
//           className={`text-base px-5 py-2 rounded-full border transition-all duration-300 ${
//             activeCategory === "apartment"
//               ? "bg-black text-white border-black"
//               : "bg-transparent text-black border-gray-300 hover:text-white hover:bg-black hover:border-black"
//           }`}
//         >
//           Apartment
//         </button>
//         <button
//           onClick={() => handleButtonClick("villa")}
//           className={`text-base px-5 py-2 rounded-full border transition-all duration-300 ${
//             activeCategory === "villa"
//               ? "bg-black text-white border-black"
//               : "bg-transparent text-black border-gray-300 hover:text-white hover:bg-black hover:border-black"
//           }`}
//         >
//           Villa
//         </button>
//         <button
//           onClick={() => handleButtonClick("pg")}
//           className={`text-base px-5 py-2 rounded-full border transition-all duration-300 ${
//             activeCategory === "pg"
//               ? "bg-black text-white border-black"
//               : "bg-transparent text-black border-gray-300 hover:text-white hover:bg-black hover:border-black"
//           }`}
//         >
//           PG
//         </button>
//       </div>
//       <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
//         {popularlist.map((list, index) => (
//           <div
//             key={index}
//             className={`relative transition-transform duration-300 shadow-lg ${
//               (activeCategory === "apartment" && index === 0) ||
//               (activeCategory === "villa" && index === 1) ||
//               (activeCategory === "pg" && index === 2)
//                 ? "transform scale-105"
//                 : "transform scale-100"
//             }`}
//           >
//             <ListCard image={list.image} price={list.price} />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default PopularListing;




// import React, { useState, useEffect, useRef } from "react";
// import { TiArrowRight } from "react-icons/ti";
// import { Link } from "react-router-dom";
// import { styles } from "../../styles/styles";
// import ListCard from "../Global/ListCard";
// import { popularlist } from "../../constants/popularList";

// const PopularListing = () => {
//   const [activeCategory, setActiveCategory] = useState(null);
//   const sectionRef = useRef(null);
//   const buttonsContainerRef = useRef(null);

//   const handleButtonClick = (category) => {
//     setActiveCategory(category);
//   };

//   const handleClickOutside = (event) => {
//     if (sectionRef.current && !sectionRef.current.contains(event.target)) {
//       // Click is outside the entire section
//       setActiveCategory(null);
//     } else if (
//       sectionRef.current &&
//       !buttonsContainerRef.current.contains(event.target) &&
//       !event.target.closest("button")
//     ) {
//       // Click is inside the section but not on a button or the buttons container
//       setActiveCategory(null);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className={`flex flex-col items-start gap-y-3 ${styles.paddingHorizontal} py-6 lg:py-12`}
//     >
//       <h1 className="text-2xl font-semibold">Popular listings</h1>
//       <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
//         <p className="text-gray-500">Beehome's most popular watch lists.</p>
//         <div className="flex items-center justify-start gap-2">
//           <p className="float-left">View All 100 listings</p>
//           <Link
//             to="/rent"
//             className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 p-2"
//           >
//             <TiArrowRight className="w-full h-full" />
//           </Link>
//         </div>
//       </div>
//       <div
//         ref={buttonsContainerRef}
//         className="w-full flex items-center justify-start gap-4"
//       >
//         <button
//           onClick={() => handleButtonClick("apartment")}
//           className={`text-base px-5 py-2 rounded-full border transition-all duration-300 ${
//             activeCategory === "apartment"
//               ? "bg-black text-white border-black"
//               : "bg-transparent text-black border-gray-300 hover:text-white hover:bg-black hover:border-black"
//           }`}
//         >
//           Apartment
//         </button>
//         <button
//           onClick={() => handleButtonClick("villa")}
//           className={`text-base px-5 py-2 rounded-full border transition-all duration-300 ${
//             activeCategory === "villa"
//               ? "bg-black text-white border-black"
//               : "bg-transparent text-black border-gray-300 hover:text-white hover:bg-black hover:border-black"
//           }`}
//         >
//           Villa
//         </button>
//         <button
//           onClick={() => handleButtonClick("pg")}
//           className={`text-base px-5 py-2 rounded-full border transition-all duration-300 ${
//             activeCategory === "pg"
//               ? "bg-black text-white border-black"
//               : "bg-transparent text-black border-gray-300 hover:text-white hover:bg-black hover:border-black"
//           }`}
//         >
//           PG
//         </button>
//       </div>
//       <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
//         {popularlist.map((list, index) => {
//           const category = list.category;
//           return (
//             <Link
//               key={index}
//               to={`/category/${category}`}
//               className={`relative transition-transform duration-300 shadow-lg ${
//                 activeCategory === category
//                   ? "transform scale-105"
//                   : "transform scale-100"
//               }`}
//             >
//               <ListCard id={index} image={list.image} price={list.price} />
//             </Link>
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// export default PopularListing;


// PopularListing.js
import React, { useState, useEffect, useRef } from "react";
import { TiArrowRight } from "react-icons/ti";
import { Link } from "react-router-dom";
import { styles } from "../../styles/styles";

import { popularlist } from "../../constants/popularList";
import PopularCard from "../Global/PopularCard";

const PopularListing = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const sectionRef = useRef(null);
  const buttonsContainerRef = useRef(null);

  const handleButtonClick = (category) => {
    setActiveCategory(category);
  };

  const handleClickOutside = (event) => {
    if (sectionRef.current && !sectionRef.current.contains(event.target)) {
      // Click is outside the entire section
      setActiveCategory(null);
    } else if (
      sectionRef.current &&
      !buttonsContainerRef.current.contains(event.target) &&
      !event.target.closest("button")
    ) {
      // Click is inside the section but not on a button or the buttons container
      setActiveCategory(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`flex flex-col items-start gap-y-3 ${styles.paddingHorizontal} py-6 lg:py-12`}
    >
      <h1 className="text-2xl font-semibold">Popular listings</h1>
      <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
        <p className="text-gray-500">Beehome's most popular watch lists.</p>
        <div className="flex items-center justify-start gap-2">
          <p className="float-left">View All 100 listings</p>
          <Link
            to="/rent"
            className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 p-2"
          >
            <TiArrowRight className="w-full h-full" />
          </Link>
        </div>
      </div>
      <div
        ref={buttonsContainerRef}
        className="w-full flex items-center justify-start gap-4"
      >
        <button
          onClick={() => handleButtonClick("apartment")}
          className={`text-base px-5 py-2 rounded-full border transition-all duration-300 ${
            activeCategory === "apartment"
              ? "bg-black text-white border-black"
              : "bg-transparent text-black border-gray-300 hover:text-white hover:bg-black hover:border-black"
          }`}
        >
          Apartment
        </button>
        <button
          onClick={() => handleButtonClick("villa")}
          className={`text-base px-5 py-2 rounded-full border transition-all duration-300 ${
            activeCategory === "villa"
              ? "bg-black text-white border-black"
              : "bg-transparent text-black border-gray-300 hover:text-white hover:bg-black hover:border-black"
          }`}
        >
          Villa
        </button>
        <button
          onClick={() => handleButtonClick("pg")}
          className={`text-base px-5 py-2 rounded-full border transition-all duration-300 ${
            activeCategory === "pg"
              ? "bg-black text-white border-black"
              : "bg-transparent text-black border-gray-300 hover:text-white hover:bg-black hover:border-black"
          }`}
        >
          PG
        </button>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
        {popularlist.map((list, index) => (
          <div
            key={index}
            className={`relative transition-transform duration-300 shadow-lg ${
              activeCategory === list.category ? "transform scale-105" : "transform scale-100"
            }`}
          >
            <PopularCard
              image={list.image} 
              price={list.price} 
              category={list.category} 
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularListing;
