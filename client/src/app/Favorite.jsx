import Layout from "../components/Layout";
import useUser from "../hooks/useUser";
import CompletedImg from "../asset/png/completed.png";

export default function Favorite() {
  const { user } = useUser();

  const missions = user?.missionCompleted;
  console.log(missions);

  return (
    <Layout isFooter>
      <div className="py-2 px-4 border border-gray-300">팔공산</div>
      <div className="py-2 px-4 border border-gray-300">Favorite</div>
      <div className="py-2 px-4 border border-gray-300">앞산</div>
      <div className="py-2 px-4 border border-gray-300">Favorite</div>
      <div className="py-2 px-4 border border-gray-300">Favorite</div>
      <div className="py-2 px-4 border border-gray-300">Favorite</div>
    </Layout>
  );
}
