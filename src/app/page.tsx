import ChatComponent from "./components/Chat";
import FileUpload from "./components/FileUpload";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="flex">
      <div>
        <Header/>
            </div>
      <div className="w-[30vw] min-h-screen ">
        <div className="flex justify-center items-center min-h-screen">
          <FileUpload/>
        </div>
      </div>
      <div className="w-[50vw] min-h-screen border-l-2 ">
        <ChatComponent/>
      </div>
    </div>
  );
}
