import { Card } from "../../components";

const Home = () => {
  
  return (
    <div className="p-4 md:px-6">
      <p className="font-bold text-lg my-4">Activity Logs</p>
      <div className="grid gap-4 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
        <Card device="phone" ip={"192.168.27"} lastLogin={"12 December 2023"} />
        <Card
          device="laptop"
          ip={"192.168.27"}
          lastLogin={"12 December 2024"}
        />
         <Card
          device="phone"
          ip={"192.168.27"}
          lastLogin={"12 December 2024"}
        />
         <Card
          device="laptop"
          ip={"192.168.27"}
          lastLogin={"12 December 2024"}
        />
      </div>
    </div>
  );
};

export default Home;
