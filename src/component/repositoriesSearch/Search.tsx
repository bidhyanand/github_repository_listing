import { useRef } from "react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaSearch, FaRegStar, FaEye, FaCodeBranch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { formInterface } from "../../models/formModal";
import { searchStringInterface } from "../../models/searchModels";
import { getSearchedRepositories } from "../../services/apiServices/repoSearch";
import Pagination from "../pagination/Pagination";

export default function Search() {
  // to store the api data
  const [arrayData, setArrayData] = useState<any>();
  console.log(arrayData, "arrayapi");

  // to check the loading case
  const [isLoading, setIsLoading] = useState(false);

  // to store the page no
  const [page, setPage] = useState(1);
  console.log(page, "page");

  // to store search string for reposotories
  const [searchString, setSearchString] = useState("");

  // state to save sorting order
  const [sortState, setSortState] = useState("none");
  console.log(sortState, "sort");

  // state to save the display the number of repo
  const [numberOfRepo, setNumberOfRepo] = useState(30);
  console.log(numberOfRepo, "repo");

  const { register, handleSubmit } = useForm<searchStringInterface>();

  // function  handle form
  const onSubmit = (data: formInterface) => {
    console.log(data, "data");

    setIsLoading(true);
    setSearchString(data.searchString);
    getSearchedRepositories(
      `${data.searchString}&per_page=${numberOfRepo}&sort=${sortState}`
    ).then((res) => {
      setArrayData(res.data);
      setIsLoading(false);
    });
  };

  // for pagination
  useEffect(() => {
    if (searchString !== "") {
      setIsLoading(true);
      getSearchedRepositories(
        `${searchString}&page=${page}&per_page=${numberOfRepo}&sort=${sortState}`
      ).then((res) => {
        setArrayData(res.data);
        setIsLoading(false);
      });
    }
  }, [page, numberOfRepo, sortState]);

  const ref = useRef<any>();
  useEffect(() => {
    ref?.current?.focus();
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="font-bold text-2xl flex justify-center py-5 cursor-pointer ">
          Welcom To Github Repositories Listing
        </div>
        <div className="flex justify-center gap-2  ">
          <input
            // ref={search}
            placeholder="Enter Search Repo Name Here ........"
            className="bg-gray-200 py-2 px-1 w-80 border-2 border-zinc-400 border-double	 rounded-md  "
            {...register("searchString", { required: true })}
          ></input>

          <button type={"submit"} className="cursor-pointer ">
            <FaSearch size={30} />
          </button>
        </div>
        <div className="flex justify-center gap-5 ">
          <div className="flex justify-center py-5 ">
            <div
              className="bg-slate-300 border-black-2 p-2 rounded-sm font-semibold text-lg "
              ref={ref}
            >
              Choose a value
            </div>{" "}
            <div className="bg-slate-300 p-2 rounded-sm">
              <select
                {...register("selectNumber")}
                defaultValue={"default"}
                onChange={(e) => setNumberOfRepo(Number(e.target.value))}
              >
                <option>30</option>
                <option>10</option>
                <option>25</option>
                <option>50</option>
              </select>
            </div>
          </div>
          <div className="flex justify-center py-5 ">
            <div
              className="bg-slate-300 border-black-2 p-2 rounded-sm font-semibold text-lg "
              ref={ref}
            >
              Choose Sorting Order
            </div>{" "}
            <div className="bg-slate-300 p-2 rounded-sm">
              <select
                {...register("selectOrder")}
                defaultValue={"default"}
                onChange={(e) => setSortState(e.target.value)}
              >
                <option value={"default"}>None</option>
                <option value={"updated"}>Last updated</option>
                <option value={"forks"}>Forks</option>
                <option value={"stars"}>Stars</option>
              </select>
            </div>
          </div>
        </div>
      </form>

      {isLoading ? (
        <div className="flex flex-col justify-center items-center w-full h-full py-5 ">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
          {/* loading text */}
          <div className="text-2xl font-normal text-gray-900 tracking-wider m-4">
            Loading...
          </div>
        </div>
      ) : (
        // mapping of searched repositories
        <div>
          {arrayData?.total_count === 0 ? (
            <div className="flex justify-center py-5 font-bold text-3xl text-red-500 ">
              Repos not found.........
            </div>
          ) : (
            <div className=" grid grid-cols-3  p-5 gap-2 ">
              {arrayData?.items.map(
                (data: searchStringInterface, index: number) => {
                  return (
                    <Link
                      to={`/repo-detail/${data.owner.login}/${data.name}`}
                      // <Link to ={`/repo-detail/${data.id}`}
                      key={index}
                      className={
                        "px-2 pt-10 pb-5 shadow-2xl border-b-2 rounded-lg bg-gray-100 cursor-pointer hover:bg-slate-300  "
                      }
                    >
                      <div className="flex gap-1 ">
                        <div className="font-semibold">
                          Reposotiries Name :{" "}
                        </div>{" "}
                        {data.name?.substring(0, 20)}
                      </div>
                      <div className="flex gap-1 ">
                        {" "}
                        <div className="font-semibold">Authors : </div>{" "}
                        {data.owner.login}
                      </div>
                      <div className="flex gap-5  ">
                        <div className="flex gap-1 ">
                          <FaEye className="pt-1" size={20} /> : {data.watchers}{" "}
                          watchers{" "}
                        </div>
                        <div className="flex gap-1 ">
                          <FaCodeBranch className="pt-1" size={20} /> :{" "}
                          {data.forks} forks
                        </div>

                        <div className="flex gap-1 ">
                          <FaRegStar className="pt-1" size={20} /> :{" "}
                          {data.stargazers_count} stars{" "}
                        </div>
                      </div>
                      <div className="flex gap-1 ">
                        {" "}
                        <div className="font-semibold">Last Updated : </div>
                        {data.updated_at}{" "}
                      </div>
                      <div className="flex gap-1 ">
                        <div className="font-semibold  ">Description : </div>
                        {data.description === null
                          ? "description not mentioned"
                          : data.description.substring(0, 40)}
                      </div>
                    </Link>
                  );
                }
              )}
            </div>
          )}
        </div>
      )}

      {/* pagination controlling */}
      {!isLoading && arrayData && (
        <div className="py-5">
          <Pagination
            page={page}
            setPage={setPage}
            totalResults={arrayData?.total_count}
          />
        </div>
      )}
    </>
  );
}
