import React, { useState, useEffect } from "react";
import ProdList from "./ProdList";
import NoMatch from "./NoMatch";
import { getProductList } from "./api";
import Loading from "./Loading";
import { range, toQuery } from "lodash";
import { Link, useSearchParams } from "react-router-dom";

function ProductListPage() {
  const [productData, setProductData] = useState();
  const [loading, setLoading] = useState(true);

  const [searchParams, setSearchParams] = useSearchParams();

  const params = Object.fromEntries([...searchParams]);

  let { query, sort, page } = params;

  query = query || "";
  sort = sort || "default";
  page = +page || 1;

  useEffect(
    function () {
      let sortBy;
      let sortType;

      if (sort == "title") {
        sortBy = "title";
      } else if (sort == "lowToHigh") {
        sortBy = "price";
      } else if (sort == "highToLow") {
        sortBy = "price";
        sortType = "desc";
      }

      getProductList(sortBy, query, page, sortType).then(function (xyz) {
        setProductData(xyz);
        setLoading(false);
      });
    },
    [sort, query, page]
  );

  function handleSearch(event) {
    setSearchParams(
      { ...params, query: event.target.value, page: 1 },
      { replace: false }
    );
  }

  function handleSort(event) {
    setSearchParams(
      { ...params, sort: event.target.value },
      { replace: false }
    );
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="">
      <div className="flex justify-center mx-2 bg-white border-2 rounded-md border-slate-800 h-fit">
        <img
          src="https://img.icons8.com/ios-glyphs/452/search--v1.png"
          className="w-8 h-fit"
        />
        <input
          className="w-screen border-white rounded-md"
          placeholder="SEARCH"
          type="text"
          onChange={handleSearch}
          value={query}
        />
      </div>

      <div className="flex m-2 md:justify-end">
        <select
          value={sort}
          onChange={handleSort}
          className="m-1 border-2 rounded h-fit w-fit border-emerald-500 "
        >
          <option value="default">Default Sort</option>
          <option value="title">Sort by Title</option>
          <option value="lowToHigh">Sort by Price: Low to High</option>
          <option value="highToLow">Sort By Price: High to Low</option>
        </select>
      </div>

      {productData.data.length > 0 && <ProdList products={productData.data} />}
      {productData.data.length == 0 && <NoMatch />}
      {range(1, productData.meta.last_page + 1).map((pageNo) => (
        <Link
          key={pageNo}
          to={"?" + new URLSearchParams({ ...params, page: pageNo })}
          className={
            "p-2 m-1 " + (pageNo === page ? "bg-red-500" : "bg-indigo-700")
          }
        >
          {pageNo}
        </Link>
      ))}
    </div>
  );
}

export default ProductListPage;


