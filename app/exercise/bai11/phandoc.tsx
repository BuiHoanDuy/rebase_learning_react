"use client";
import Image from 'next/image';
import { useState } from 'react';
import { MonitorCheck, MonitorX, Asterisk, User } from "lucide-react";
import Parser from 'html-react-parser';
import {  ItemListening } from '../../../shared/type';
import { dataPhanDoc } from '../../../shared/data/bai11.data'


export const PhanDoc = () => {
    const [data1, setData1] = useState(dataPhanDoc.part1);
    const [data2, setData2] = useState(dataPhanDoc.part2);
    const [data3, setData3] = useState(dataPhanDoc.part3);

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
        else if (part == 3 && data3?.items) {
            const updatedItems = [...data3.items];
            updatedItems[index].userAnswer = value;
            setData3({ ...data3, items: updatedItems });
        }
    };

    const checkAnswer = (part: any) => {
        if (part == 1 && data1?.items) {
            const updatedItems = [...data1.items];
            for (let i = 0; i < updatedItems.length; i++) {
                updatedItems[i].check = (updatedItems[i].answer?.toUpperCase() == updatedItems[i].userAnswer?.toUpperCase());
            }
            setData1({ ...data1, items: updatedItems });
        }
        else if (part == 2 && data2?.items) {
            const updatedItems = [...data2.items];
            for (let i = 0; i < updatedItems.length; i++) {
                updatedItems[i].check = (updatedItems[i].answer?.toUpperCase() == updatedItems[i].userAnswer?.toUpperCase());
            }
            setData2({ ...data2, items: updatedItems });
        }
        else if (part == 3 && data3?.items) {
            const updatedItems = [...data3.items];
            for (let i = 0; i < updatedItems.length; i++) {
                updatedItems[i].check = (updatedItems[i].answer == updatedItems[i].userAnswer);
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
                <h1 className="text-3xl font-bold">二、阅读 Phần đọc</h1>
            </div>

            {/* Phần đọc 01 - Part 1*/}
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
                <div className="text-left py-1">                    
                    <p  className=" mt-4">
                        <b>A. </b> 都这么晚了，今天别看书了，快睡觉吧。
                        <br/><b>B.</b> 你什么时候来找我，我们一起去图书馆吧。
                        <br/><b>C.</b> 我昨天没来，把你的笔记本借我看看吧？
                        <br/><b>D.</b> 我今天是开车来的，你们喝吗？
                        <br/><b>E.</b> 当然。我们先坐公共汽车，然后换地铁。
                        <br/><b> F.</b> 不是，我去参加一个会议了，下星期三回来。
                    </p>

                    <p className="text-gray-600 mt-5 ml-10">
                        <b>例如: </b>
                        <br />你知道怎么去那儿吗？
                    </p>
                </div>
                <div className="text-left py-1 place-items-center">
                    <input
                        type="text"
                        maxLength={1}
                        value="E"
                        className="w-12 text-center border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="A-D"
                        disabled={true}
                    />
                </div>
                <div className="text-left py-1">
                </div>

                {
                    data1?.items?.map(({ title, answer, fTime, tTime, type, userAnswer, check }: ItemListening, index) => (
                        <>
                            <div className="text-left py-1">
                                <p className="text-gray-600 mt-4">
                                    {Parser(title as string)}
                                </p>
                            </div>
                            <div className="text-left py-1 place-items-center">
                                <input
                                    type="text"
                                    maxLength={1}
                                    value={userAnswer as string}
                                    onChange={(e) => handleInputChange(index, e.target.value, 1)}
                                    className="w-12 text-center border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
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


            {/* Phần đọc 02 - Part 1 */}
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
                <div className="text-left py-1">                    
                    <p  className=" mt-4">
                        <b>A. </b> 结束
                        <br/><b>B.</b>  图书馆
                        <br/><b>C.</b> 地铁
                        <br/><b>D.</b> 习惯
                        <br/><b>E.</b> 声音
                        <br/><b> F.</b> 关
                    </p>

                    <p className="text-gray-600 mt-5 ml-10">
                        <b>例如: </b>
                        <br />她说话的（_____）多好听啊！
                    </p>
                </div>
                <div className="text-left py-1 place-items-center">
                    <input
                        type="text"
                        maxLength={1}
                        value="E"
                        className="w-12 text-center border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="A-D"
                        disabled={true}
                    />
                </div>
                <div className="text-left py-1">
                </div>
                {
                    data2?.items?.map(({ title, answer, fTime, tTime, type, userAnswer, check }: ItemListening, index) => (
                        <>
                            <div className="text-left py-1">
                                <p className="text-gray-600 mt-4">
                                    {Parser(title as string)}
                                </p>
                            </div>
                            <div className="text-left py-1 place-items-center">
                                <input
                                    type="text"
                                    maxLength={1}
                                    value={userAnswer as string}
                                    onChange={(e) => handleInputChange(index, e.target.value, 2)}
                                    className="w-12 text-center border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            <Image src={data3?.imgSrc1 as string} alt="B" width={1000} height={150} className="left-0" />
            {/* Answer Section */}
            {/* Question and Input Section */}
            <div className="grid grid-cols-5 gap-0 items-center justify-center">
                <div className="text-left py-1 col-span-4">
                    <p className="text-gray-600 mt-4">
                        <b>例如: </b>
                        <br /> 您是来参加今天会议的吗？您来早了一点儿，现在才八点半。您先进来坐吧。
                        <br/> 会议最可能几点开始？
                    </p>
                    <p className="ml-10 mt-3">
                        <b>A.</b> 8点
                        <br /> <b>B.</b> 8点半
                        <br /> <b>C.</b> 9点 √
                    </p>
                </div>
                <div className="text-left py-1 place-items-center">
                    <select
                        disabled
                        className="p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="1" selected>A</option>
                        <option value="0">Sai</option>
                    </select>
                </div>               
                {
                    data3?.items?.map(({ title, chooseA, chooseB, chooseC, fTime, tTime, type, userAnswer, check }: ItemListening, index) => (
                        <>
                            <div className="text-left py-1 col-span-5">
                                <p className="text-gray-900 mt-4">
                                    {Parser(title as string)}
                                </p>
                            </div>
                            <div className="text-left py-1">
                                <p className="text-gray-600 mt-4">
                                    <b>A.</b> {chooseA}
                                </p>
                            </div>
                            <div className="text-left py-1">
                                <p className="text-gray-600 mt-4">
                                    <b>B.</b> {chooseB}
                                </p>
                            </div>
                            <div className="text-left py-1">
                                <p className="text-gray-600 mt-4">
                                    <b>C.</b> {chooseC}
                                </p>
                            </div>
                            <div className="text-left py-1 place-items-center">
                                <select
                                    value={userAnswer as string}
                                    onChange={(e) => handleInputChange(index, e.target.value, 3)}
                                    className="p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option selected > --- </option>
                                    <option value="A">A</option>
                                    <option value="B">B</option>
                                    <option value="C">C</option>
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

export default PhanDoc;
