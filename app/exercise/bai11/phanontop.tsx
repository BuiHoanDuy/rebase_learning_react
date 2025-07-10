"use client";
import { useState } from 'react';
import Parser from 'html-react-parser';
import { dataPhanOnTap } from '../../../shared/data/bai11.data'
import BlankText from '../../../shared/utils/blanktext'
import { ItemOnTap } from '@/shared/type';


export const PhanOnTap = () => {
    const [data1, setData1] = useState(dataPhanOnTap.part1);

    return (
        <div className="p-8 min-h-screen">
            {/* Section Header */}
            <div className=" mt-8">
                <h1 className="text-3xl font-bold">四、复习 Ôn tập</h1>
            </div>

            {/* Phần đọc 01 - Part 1*/}
            <div className="">
                <h2 className="text-gray-600 text-2xl font-bold">{data1?.title}</h2>
                <p className="text-gray-600 mt-4">
                    {Parser(data1?.subtitle as string)}
                </p>

            </div>

            {/* Image Grid */}
            {/* <Image src={data1?.imgSrc as string} alt="A" width={1000} height={150} className="left-0" /> */}

            {
                data1?.items?.map(({no, title, paragraph, listAnswers, type, check }: ItemOnTap, index) => (
                    <>
                        <div className="text-left py-1">
                            <p className="text-gray-600 mt-4 font-bold">
                                {Parser(title as string)}
                            </p>
                        </div>
                        <div className='max-w-5xl'>
                            <BlankText id={no} paragraph={paragraph as string} answers={listAnswers} />
                        </div>
                    </>
                ))
            }
        </div>
    );
};

export default PhanOnTap;
