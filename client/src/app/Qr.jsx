import { useState } from "react";
import Layout from "../components/Layout";
import { QrScanner } from "@yudiel/react-qr-scanner";
import { ClipLoader } from "react-spinners";
import { useMutation } from "react-query";
import useUser from "../hooks/useUser";
import { missionCompleted } from "../api";

export default function Qr() {
  const [prevResult, setPrevResult] = useState(null);
  const { user } = useUser();
  const userId = user?.id;

  const { mutate } = useMutation(missionCompleted, {
    onSuccess: (data) => {
      if (data.result === 0) {
        alert(data.message);
      } else if (data.result === 1) {
        alert(data.message);
      } else if (data.result === 2) {
        alert(data.message);
      } else {
        return;
      }
    },
  });

  // qr을 읽었을 때 실행
  const handleSuccess = (result) => {
    if (prevResult == null || prevResult !== result) {
      setPrevResult(result);
      mutate({ missionId: result, userId: userId });
      // mutate 전송 react-query
    }
  };
  return (
    <Layout isHeader isFooter>
      <div className="w-full h-full flex items-center">
        {/* isLoading = true */}
        {false ? (
          <div className="w-full flex justify-center">
            <ClipLoader />
          </div>
        ) : (
          <QrScanner onDecode={handleSuccess} onError={(error) => console.log(error?.message)} constraints={{ facingMode: "environment" }} scanDelay={500} />
        )}
      </div>
    </Layout>
  );
}
