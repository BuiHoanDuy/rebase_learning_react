import Link from 'next/link';
import Image from 'next/image'
//import HLLogo1 from '~/assets/images/brand/logo01.png';

export default function HomePage() {
  return (
    <main className="flex h-screen items-center justify-center bg-black text-white">
      <div className="text-center">
        <div className="flex justify-center items-center pt-12 pb-10">
          <Image src="/imgs/logo00.png" alt="Logo HL Laoshi" height="64" width="250" className='opacity-70'/>
        </div>

        <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">HSK Tiêu chuẩn 3</h1>
        <p className="mt-4 text-lg sm:text-xl md:text-2xl">
          Trang thông tin học tập dành cho môn học
          <br/> TIẾNG TRUNG QUỐC 5
        </p>
        <Link href="/docs" className="mt-8 inline-block bg-gray-900 text-white font-semibold py-2 px-4 rounded hover:bg-gray-700">
          BÀI HỌC
        </Link>
        <Link href="/exercise" className="ml-5 mt-8 inline-block bg-gray-900 text-white font-semibold py-2 px-4 rounded hover:bg-gray-700">
          BÀI TẬP
        </Link>
      </div>
    </main>
  );
}
