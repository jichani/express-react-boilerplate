export default function Layout({ children }) {
  return (
    <div className="w-full flex justify-center min-h-screen">
      <div className="max-w-sm w-full bg-gray-200">{children}</div>
    </div>
  );
}
