"use client";
import Image from 'next/image';
import { useState } from 'react';
import { MonitorCheck, MonitorX, Asterisk, User } from "lucide-react";
import Parser from 'html-react-parser';
import {  ItemListening } from '../../../shared/type';
import { dataPhanViet } from '../../../shared/data/bai11.data'


export const PhanViet = () => {    
    const [data1, setData1] = useState(dataPhanViet.part1);
    const [data2, setData2] = useState(dataPhanViet.part2);
    const [data3, setData3] = useState(dataPhanViet.part3);

    const handleInputChange = (index: any, value: any, part: any) => {
        if (part == 1 && data1?.items) {
            const updatedItems = [...data1.items];
            updatedItems[index].userAnswer = value;
            setData1({ ...data1, items: updatedItems });
        }
        else if (part == 2 && data2?.items) {
            const updatedItems = [...data2.items];
            updatedItems[index].userAnswer = value;
            setData2({ ...data2, items: updatedItems });
        }
        else if (part == 31 && data3?.items) {
            const updatedItems = [...data3.items];            
            updatedItems[index].userAnswer = value;
            setData3({ ...data3, items: updatedItems });
        }
        else if (part == 32 && data3?.items) {
            const updatedItems = [...data3.items];
            updatedItems[index].userAnswer1 = value;
            setData3({ ...data3, items: updatedItems });
        }
    };

    const checkAnswer = (part: any) => {
        if (part == 1 && data1?.items) {
            const updatedItems = [...data1.items];
            for (let i = 0; i < updatedItems.length; i++) {
                updatedItems[i].check = (updatedItems[i].answer?.trim() == updatedItems[i].userAnswer?.trim());
            }
            setData1({ ...data1, items: updatedItems });
        }
        else if (part == 2 && data2?.items) {
            const updatedItems = [...data2.items];
            for (let i = 0; i < updatedItems.length; i++) {
                updatedItems[i].check = (updatedItems[i].answer?.trim() == updatedItems[i].userAnswer?.trim());
            }
            setData2({ ...data2, items: updatedItems });
        }
        else if (part == 3 && data3?.items) {
            const updatedItems = [...data3.items];
            for (let i = 0; i < updatedItems.length; i++) {
                updatedItems[i].check = (updatedItems[i].answer == updatedItems[i].userAnswer && updatedItems[i].answer1 == updatedItems[i].userAnswer1);
            }
            setData3({ ...data3, items: updatedItems });
        }
    };

    const resetAnswer = (part: any) => {
        if (part == 1 && data1?.items) {
            const updatedItems = [...data1.items];
            for (let i = 0; i < updatedItems.length; i++) {
                updatedItems[i].check = null;
            }
            setData1({ ...data1, items: updatedItems });
        }
        else if (part == 2 && data2?.items) {
            const updatedItems = [...data2.items];
            for (let i = 0; i < updatedItems.length; i++) {
                updatedItems[i].check = null;
            }
            setData2({ ...data2, items: updatedItems });
        }
        else if (part == 3 && data3?.items) {
            const updatedItems = [...data3.items];
            for (let i = 0; i < updatedItems.length; i++) {
                updatedItems[i].check = null;
            }
            setData3({ ...data3, items: updatedItems });
        }
    };

    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            {/* Section Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold">三、书写  Phần viết</h1>
            </div>

            {/* Phần viết 01 - Part 1*/}
            <div className="mb-8">
                <h2 className="text-gray-600 text-2xl font-bold">{data1?.title}</h2>
                <p className="text-gray-600 mt-4">
                    {Parser(data1?.subtitle as string)}
                </p>

            </div>

            {/* Image Grid */}
            <Image src={data1?.imgSrc as string} alt="A" width={1000} height={150} className="left-0" />


            {/* Answer Section */}
            {/* Question and Input Section */}
            <div className="grid grid-cols-3 gap-0 items-center auto-cols-fr">
                <div className="text-left py-1 col-span-3">        
                    <p className="text-gray-600 mt-5 ">
                        <b>例如: </b> 小船 / 上 / 一 / 河 / 条 / 有                       
                    </p>
                    <p  className="ml-10">
                        <b> 答：</b> 河上有一条小船。                       
                    </p>
                </div>                
                
                {
                    data1?.items?.map(({ title, userAnswer, check }: ItemListening, index) => (
                        <>
                            <div className="text-left py-1">
                                <p className="mt-4">
                                    {Parser(title as string)}
                                </p>
                            </div>
                            <div className="text-left py-1 place-items-center">
                                <input
                                    type="text"
                                    value={userAnswer as string}
                                    onChange={(e) => handleInputChange(index, e.target.value, 1)}
                                    className="w-auto text-center border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="..."
                                />
                            </div>
                            <div className="text-left py-1">
                                {(check == true) && (
                                    <MonitorCheck color="#00ad1d" size={30} className="ml-2 float-start" />
                                )}
                                {(check == false) && (
                                    <MonitorX color="#ff0000" size={30} className="ml-2 float-start" />
                                )}
                            </div>
                        </>
                    ))
                }
            </div>
            <div className='mt-2'>
                <button
                    onClick={() => checkAnswer(1)}
                    type="button"
                    className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                    Xem đáp án
                </button>
                <button
                    onClick={() => resetAnswer(1)}
                    type="button"
                    className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                    Reset
                </button>
            </div>


            {/* Phần viết 02 - Part 1 */}
            <div className="mb-8 mt-10">
                <h2 className="text-gray-600 text-2xl font-bold">{data2?.title}</h2>
                <p className="text-gray-600 mt-4">
                    {Parser(data2?.subtitle as string)}
                </p>

            </div>

            {/* Image Grid */}
            <Image src={data2?.imgSrc as string} alt="A" width={1000} height={150} className="left-0" />


            {/* Answer Section */}
            {/* Question and Input Section */}
            <div className="grid grid-cols-3 gap-0 items-center justify-center">
                <div className="text-left py-1 col-span-3">                    
                    <p className="text-gray-600 mt-5 ">
                        <b>例如: </b>
                        <br />没（ guān ）系，别难过，高兴点儿。
                    </p>
                    <p  className="ml-10">
                        <b> 答：</b> 关                       
                    </p>
                </div>               
               
                {
                    data2?.items?.map(({ title, userAnswer, check }: ItemListening, index) => (
                        <>
                            <div className="text-left py-1">
                                <p className="text-gray-600 mt-4">
                                    {Parser(title as string)}
                                </p>
                            </div>
                            <div className="text-left py-1 place-items-center">
                                <input
                                    type="text"                                    
                                    value={userAnswer as string}
                                    onChange={(e) => handleInputChange(index, e.target.value, 2)}
                                    className="w-auto text-center border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="A-D"
                                />
                            </div>
                            <div className="text-left py-1">
                                {(check == true) && (
                                    <MonitorCheck color="#00ad1d" size={30} className="ml-2 float-start" />
                                )}
                                {(check == false) && (
                                    <MonitorX color="#ff0000" size={30} className="ml-2 float-start" />
                                )}
                            </div>
                        </>
                    ))
                }
            </div>
            <div className='mt-2'>
                <button
                    onClick={() => checkAnswer(2)}
                    type="button"
                    className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                    Xem đáp án
                </button>
                <button
                    onClick={() => resetAnswer(2)}
                    type="button"
                    className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                    Reset
                </button>
            </div>




            {/* Phần đọc 03 - Part 3 */}
            <div className="mt-20 mb-8">
                <h2 className="text-gray-600 text-2xl font-bold">{data3?.title}</h2>
                <p className="text-gray-600 mt-4">
                    {Parser(data3?.subtitle as string)}
                </p>
            </div>
            {/* Image Grid */}
            <Image src={data3?.imgSrc as string} alt="A" width={1000} height={150} className="left-0" />          
            {/* Answer Section */}
            {/* Question and Input Section */}
            <div className="grid grid-cols-3 gap-0 items-center justify-center">
                <div className="text-left py-1 col-span-3">
                    <p className="text-gray-600 mt-4">
                        <b>例如: </b>
                        <br /> 例如：我不知道__(1)__个地方在__(2)__儿。（那，哪）
                    </p>
                    <p className="ml-10 mt-3">
                        <b> 答：</b> (1) 那  (2) 哪
                    </p>
                </div>                           
                {
                    data3?.items?.map(({ title, listWords, userAnswer, userAnswer1,check }: ItemListening, index) => (
                        <>
                            <div className="text-left py-1">
                                <p className="text-gray-900 mt-4">
                                    {Parser(title as string)}
                                </p>
                            </div>                          
                            <div className="text-left py-1 place-items-center">
                                <span >(1) </span>
                                <select
                                    value={userAnswer as string}
                                    onChange={(e) => handleInputChange(index, e.target.value, 31)}
                                    className="p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option selected > --- </option>
                                    {
                                        listWords?.map((w)=>(
                                            <option value={w}>{w}</option>
                                        ))
                                    }
                                </select>
                                <span>(2) </span>
                                <select
                                    value={userAnswer1 as string}
                                    onChange={(e) => handleInputChange(index, e.target.value, 32)}
                                    className="p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option selected > --- </option>
                                    {
                                        listWords?.map((w)=>(
                                            <option value={w}>{w}</option>
                                        ))
                                    }
                                </select>
                           </div>                           
                            <div className="text-left py-1">
                                {(check == true) && (
                                    <MonitorCheck color="#00ad1d" size={30} className="ml-2 float-start" />
                                )}
                                {(check == false) && (
                                    <MonitorX color="#ff0000" size={30} className="ml-2 float-start" />
                                )}
                            </div>
                        </>
                    ))
                }
            </div>
            <div className='mt-2'>
                <button
                    onClick={() => checkAnswer(3)}
                    type="button"
                    className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                    Xem đáp án
                </button>
                <button
                    onClick={() => resetAnswer(3)}
                    type="button"
                    className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                    Reset
                </button>
            </div>
        </div>
    );
};

export default PhanViet;
