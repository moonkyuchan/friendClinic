import Menu from "./components/Menu";

export default function Header() {
  return (
    <header className="fixed bg-red-100 w-full h-[100px] px-10 py-2">
      <div className="flex w-full h-full items-center">
        <div className="basis-2/12 text-center bg-red-300">벗이비인후과</div>
        <Menu />
        <div className="basis-2/12 text-center bg-red-500">로그인/회원가입</div>
      </div>
    </header>
  );
}
