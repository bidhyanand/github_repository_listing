import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getRepoDetail } from "../../services/apiServices/repoDetail";

const RepositoriesDetail = () => {
  // state to save the clicked user repo detail
  const [userRepoDetail, setUserRepoDetail] = useState<any>();
  const [isLoading, setIsLoading] = useState(true);

  // taking owner and repo namw from url
  const { owner, name } = useParams();

  useEffect(() => {
    getRepoDetail(owner, name).then((res) => {
      setUserRepoDetail(res.data);
      setIsLoading(false);
    });
  }, []);

  return (
    <div>
      <div className="font-bold text-2xl flex justify-center py-5  ">
        <Link to="/"> Github Repositories Detail</Link>
      </div>
      {isLoading ? (
        <div className="flex flex-col justify-center items-center w-full h-full py-5 ">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
          {/* loading text */}
          <div className="text-2xl font-normal text-gray-900 tracking-wider m-4">
            Loading...
          </div>
        </div>
      ) : (
        <div className="flex justify-center ">
          <div className="flex  flex-col text-center w-1/3 justify-center px-10 pt-10 pb-5 shadow-2xl border-b-2 rounded-lg bg-gray-100 hover:bg-slate-300  ">
            <a href={userRepoDetail.owner.html_url} >
              <div className="flex gap-1 ">
                <div className="font-semibold">Full_name : </div>{" "}
                {userRepoDetail.full_name}
              </div>
            </a>
            <a href={userRepoDetail.html_url}>
            <div className="flex gap-1 ">
              <div className="font-semibold">Reposotiries_Name : </div>{" "}
              {userRepoDetail.name}
            </div>{" "}
            </a>
            <div className="flex gap-1 ">
              <div className="font-semibold">Open_issues : </div>{" "}
              {userRepoDetail.open_issues}
            </div>{" "}
            <div className="flex gap-1 ">
              <div className="font-semibold">Default_branch : </div>{" "}
              {userRepoDetail.default_branch}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RepositoriesDetail;
