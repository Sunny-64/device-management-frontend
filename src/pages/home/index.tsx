import { useQuery } from "@tanstack/react-query";
import { Card } from "../../components";
import { QUERY_KEYS } from "../../constants";
import { Api } from "../../services/ApiService";
import platform from "platform";

function detectDevice(userAgent: string): string {
  const parsed = platform.parse(userAgent); // Parse the User-Agent
  const { os, product } = parsed;

  if (product) {
    return "phone"; // Product is typically present for mobile devices
  } else if (os?.family === "iOS" || os?.family === "Android") {
    return "phone";
  } else {
    return "laptop";
  }
}

const Home = () => {
  const { isLoading, data } = useQuery({
    queryKey: [QUERY_KEYS.GET_ACTIVITIES],
    queryFn: Api.getActiveDevices,
  });

  return (
    <div className="p-4 md:px-6">
      <p className="font-bold text-lg my-4">Activity Logs</p>
      <div className="grid gap-4 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
        {!isLoading ? (
          data?.data?.data?.map((activity: any) => (
            <Card
              key={activity?._id}
              device={detectDevice(activity?.device)}
              ip={activity?.ip_address}
              lastLogin={activity?.logged_in_at}
              current={activity?.current}
              tokenId={activity?.token_id}
            />
          ))
        ) : (
          <p>Loading....</p>
        )}
      </div>
    </div>
  );
};

export default Home;
