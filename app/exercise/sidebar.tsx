import Link from 'next/link';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white flex flex-col p-4">
      <h2 className="text-2xl font-bold mb-6">
        <a href='/'> ⬅️ TQ5</a>
      </h2>
      <nav className="space-y-4">
        <Link href="/exercise/bai11" className="block py-2 px-4 hover:bg-gray-700 rounded">
        第 11 课 <br/>别忘了把空调关了.
        </Link>
        <Link href="/exercise/bai12" className="block py-2 px-4 hover:bg-gray-700 rounded">
          Bài 12
        </Link>
        <Link href="/exercise/bai13" className="block py-2 px-4 hover:bg-gray-700 rounded">
          Bài 13
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
