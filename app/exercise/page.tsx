import Image from 'next/image';

const Page = () => {
    return (
        <>
            <h2 className="text-2xl font-bold">Exercises - Phần bài tập</h2>
            <p>Sách bài tập - HSK 3 tiêu chuẩn.</p>
            <Image src="/imgs/biasach_baitap.png" alt="A" width={450} height={150} className="left-0" />

        </>
    );
};

export default Page;
