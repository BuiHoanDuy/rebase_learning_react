"use client";
import Image from 'next/image';
import { useState, useRef } from 'react';
import { MonitorCheck, MonitorX, Asterisk, User } from "lucide-react";
import ReactAudioPlayer from 'react-audio-player';
import Parser from 'html-react-parser';
import { DataListening, PartListening, ItemListening } from '../../../shared/type';
import { dataPhanNghe } from '../../../shared/data/bai11.data'


export const PhanNghe = () => {
    const audioRef: any = useRef(null);
    const audioRef2: any = useRef(null);
    const audioRef3: any = useRef(null);
    const audioRef4: any = useRef(null);
    const [intervalId, setIntervalId] = useState<ReturnType<typeof setInterval> | null>(null);
    const [data1, setData1] = useState(dataPhanNghe.part1);
    const [data2, setData2] = useState(dataPhanNghe.part2);
    const [data3, setData3] = useState(dataPhanNghe.part3);
    const [data4, setData4] = useState(dataPhanNghe.part4);

    const convertToSeconds = (time: any) => {
        const [minutes, seconds] = time.split(":").map(Number);
        return minutes * 60 + seconds;
    };

    const playAudio = (t1: any, t2: any, ref: any) => {
        const audioElement = ref.current.audioEl.current;

        if (!audioElement) return;

        const startTime = convertToSeconds(t1);
        const endTime = convertToSeconds(t2);

        audioElement.currentTime = startTime;
        audioElement.play();

        // Set an interval to monitor the audio time and stop it at the target point
        const id = setInterval(() => {
            if (audioElement.currentTime >= endTime) {
                audioElement.pause();
                audioElement.currentTime = startTime;
                clearInterval(id);
                setIntervalId(null);
            }
        }, 100);

        setIntervalId(id);
    };

    const stopAudio = (ref: any) => {
        const audioElement = ref.current.audioEl.current;

        if (!audioElement) return;

        audioElement.pause();
        audioElement.currentTime = 0; // Reset to the start of the audio


        // Clear the monitoring interval
        if (intervalId) {
            clearInterval(intervalId);
            setIntervalId(null);
        }
    };

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
        else if (part == 4 && data4?.items) {
            const updatedItems = [...data4.items];
            updatedItems[index].userAnswer = value;
            setData4({ ...data4, items: updatedItems });
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
                updatedItems[i].check = (updatedItems[i].answer == updatedItems[i].userAnswer);
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
        else if (part == 4 && data4?.items) {
            const updatedItems = [...data4.items];
            for (let i = 0; i < updatedItems.length; i++) {
                updatedItems[i].check = (updatedItems[i].answer == updatedItems[i].userAnswer);
            }
            setData4({ ...data4, items: updatedItems });
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
        else if (part == 4 && data4?.items) {
            const updatedItems = [...data4.items];
            for (let i = 0; i < updatedItems.length; i++) {
                updatedItems[i].check = null;
            }
            setData4({ ...data4, items: updatedItems });
        }
    };

    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            {/* Section Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold">一、听力 Phần nghe</h1>
            </div>
            <div className="mb-8">
                <h2 className="text-gray-600 text-2xl font-bold">{data1?.title}</h2>
                <p className="text-gray-600 mt-4">
                    {Parser(data1?.subtitle as string)}
                </p>

            </div>

            {/* Image Grid */}
            <Image src={data1?.imgSrc as string} alt="A" width={1000} height={150} className="left-0 object-contain" />


            {/* Answer Section */}
            {/* Question and Input Section */}
            <div className="grid grid-cols-4 gap-0 items-center justify-center">
                <div className="text-left py-1">
                    <p className="text-gray-600 mt-4">
                        <b>例如: </b>
                        <br />男: 请问张经理在吗?
                        <br />女: 他正在开会，您半个小时以后再打，好吗?
                    </p>
                </div>
                <div className="text-left py-1 place-items-center">
                    <input
                        type="text"
                        maxLength={1}
                        value="D"
                        className="w-12 text-center border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="A-D"
                        disabled={true}
                    />
                </div>
                <div className="text-left py-1">
                    <ReactAudioPlayer
                        ref={audioRef}
                        src="/mp3/Bai11_HSK3_SachBT.mp3"
                        controls
                    />
                </div>
                <div className="text-center py-1">
                    <button
                        onClick={() => playAudio(data1?.fTime, data1?.tTime, audioRef)}
                        type="button"
                        className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">
                        Play [Phần 1]
                    </button>
                </div>
                {
                    data1?.items?.map(({ title, answer, fTime, tTime, type, userAnswer, check }: ItemListening, index) => (
                        <>
                            <div className="text-left py-1">
                                <p className="text-gray-600 mt-4">
                                    {title}
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
                                <button
                                    onClick={() => playAudio(fTime, tTime, audioRef)}
                                    className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                        Play [ {fTime} - {tTime} ]
                                    </span>
                                </button>
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


            {/* Phần nghe 02 */}
            <div className="mt-20 mb-8">
                <h2 className="text-gray-600 text-2xl font-bold">{data2?.title}</h2>
                <p className="text-gray-600 mt-4">
                    {Parser(data2?.subtitle as string)}
                </p>

            </div>
            {/* Image Grid */}
            <Image src={data2?.imgSrc as string} alt="A" width={1000} height={150} className="left-0" />
            {/* Answer Section */}
            {/* Question and Input Section */}
            <div className="grid grid-cols-4 gap-0 items-center justify-center">
                <div className="text-left py-1">
                    <p className="text-gray-600 mt-4">
                        <b>例如: </b>
                        <br />为了让自己更健康，他每天都花一个小时去锻炼身体。
                        <br /><Asterisk color="#00ad1d" size={25} className='float-left' /> 他希望自己很健康。
                    </p>
                </div>
                <div className="text-left py-1 place-items-center">
                    <select
                        defaultValue="1"
                        disabled
                        className="p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="1" >Đúng</option>
                        <option value="0">Sai</option>
                    </select>
                </div>
                <div className="text-left py-1">
                </div>
                <div className="text-center py-1">
                </div>

                <div className="text-left py-1">
                    <p className="text-gray-600 mt-4">
                        今天我想早点儿回家。看了看手表，才5点。过了一会儿再看表，还是5点，我这才发现我的手表不走了。
                        <br /><Asterisk color="#00ad1d" size={25} className='float-left' /> 那块儿手表不是他的。
                    </p>
                </div>
                <div className="text-left py-1 place-items-center">
                    <select
                        defaultValue="0"
                        disabled
                        className="p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="1" >Đúng</option>
                        <option value="0">Sai</option>
                    </select>
                </div>
                <div className="text-left py-1">
                    <ReactAudioPlayer
                        ref={audioRef2}
                        src="/mp3/Bai11_HSK3_SachBT.mp3"
                        controls
                    />
                </div>
                <div className="text-center py-1">
                    <button
                        onClick={() => playAudio(data2?.fTime, data2?.tTime, audioRef2)}
                        type="button"
                        className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">
                        Play [Phần 2]
                    </button>
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

                                <select
                                    defaultValue=""
                                    value={userAnswer as string}
                                    onChange={(e) => handleInputChange(index, e.target.value, 2)}
                                    className="p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option value=""> --- </option>
                                    <option value="true" >Đúng</option>
                                    <option value="false">Sai</option>
                                </select>
                            </div>
                            <div className="text-left py-1">
                                <button
                                    onClick={() => playAudio(fTime, tTime, audioRef2)}
                                    className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                        Play [ {fTime} - {tTime} ]
                                    </span>
                                </button>
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




            {/* Phần nghe 03 */}
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
            <div className="grid grid-cols-7 gap-0 items-center justify-center">
                <div className="text-left py-1 col-span-4">
                    <p className="text-gray-600 mt-4">
                        <b>例如: </b>
                        <br /> <b>男：</b> 小王，帮我开一下门，好吗？谢谢！
                        <br /> <b>女：</b>没问题。您去超时了？买了这么多东西。
                        <br /> <b>问：</b>男的想让小王做什么？
                    </p>
                    <p className="ml-10 mt-3">
                        <b>A.</b> 开门
                        <br /> <b>B.</b> 拿东西
                        <br /> <b>C.</b> 去超市买东西
                    </p>
                </div>
                <div className="text-left py-1 place-items-center">
                    <select
                        defaultValue="1"
                        disabled
                        className="p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="1">A</option>
                        <option value="0">Sai</option>
                    </select>
                </div>
                <div className="text-left py-1">
                    <ReactAudioPlayer
                        ref={audioRef3}
                        src="/mp3/Bai11_HSK3_SachBT.mp3"
                        controls
                    />
                    <button
                        onClick={() => playAudio(data3?.fTime, data3?.tTime, audioRef3)}
                        type="button"
                        className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">
                        Play [Phần 3]
                    </button>
                </div>
                <div className="text-center py-1">

                </div>
                {
                    data3?.items?.map(({ title, chooseA, chooseB, chooseC, fTime, tTime, type, userAnswer, check }: ItemListening, index) => (
                        <>
                            <div className="text-left py-1">
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
                                    defaultValue=""
                                    value={userAnswer as string}
                                    onChange={(e) => handleInputChange(index, e.target.value, 3)}
                                    className="p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option value="" > --- </option>
                                    <option value="A">A</option>
                                    <option value="B">B</option>
                                    <option value="C">C</option>
                                </select>
                            </div>
                            <div className="text-left py-1">
                                <button
                                    onClick={() => playAudio(fTime, tTime, audioRef3)}
                                    className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                        Play [ {fTime} - {tTime} ]
                                    </span>
                                </button>
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



            {/* Phần nghe 04 */}
            <div className="mt-20 mb-8">
                <h2 className="text-gray-600 text-2xl font-bold">{data4?.title}</h2>
                <p className="text-gray-600 mt-4">
                    {Parser(data4?.subtitle as string)}
                </p>

            </div>
            {/* Image Grid */}
            <Image src={data4?.imgSrc as string} alt="A" width={1000} height={150} className="left-0" />
            {/* Answer Section */}
            {/* Question and Input Section */}
            <div className="grid grid-cols-7 gap-0 items-center justify-center">
                <div className="text-left py-1 col-span-4">
                    <p className="text-gray-600 mt-4">
                        <b>例如: </b>
                        <br /> <b>女：</b>晚饭做好了，准备吃饭了。
                        <br /> <b>男：</b> 等一会儿，比赛还有三分钟就结束了。
                        <br /> <b>女：</b> 快点儿吧，一起吃，菜冷了就不好吃了。
                        <br /> <b>男：</b> 你先吃，我马上就看完了。
                        <br /> <b>问：</b> 男的在做什么？
                    </p>
                    <p className="ml-10 mt-3">
                        <b>A.</b> 洗澡
                        <br /> <b>B.</b> 吃饭
                        <br /> <b>C.</b> 看电视
                    </p>
                </div>
                <div className="text-left py-1 place-items-center">
                    <select
                        defaultValue="1"
                        disabled
                        className="p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="1">C</option>
                        <option value="0">Sai</option>
                    </select>
                </div>
                <div className="text-left py-1">
                    <ReactAudioPlayer
                        ref={audioRef4}
                        src="/mp3/Bai11_HSK3_SachBT.mp3"
                        controls
                    />
                    <button
                        onClick={() => playAudio(data4?.fTime, data4?.tTime, audioRef4)}
                        type="button"
                        className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">
                        Play [Phần 4]
                    </button>
                </div>
                <div className="text-center py-1">

                </div>
                {
                    data4?.items?.map(({ title, chooseA, chooseB, chooseC, fTime, tTime, type, userAnswer, check }: ItemListening, index) => (
                        <>
                            <div className="text-left py-1">
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
                                    defaultValue=""
                                    value={userAnswer as string}
                                    onChange={(e) => handleInputChange(index, e.target.value, 4)}
                                    className="p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option value="" > --- </option>
                                    <option value="A">A</option>
                                    <option value="B">B</option>
                                    <option value="C">C</option>
                                </select>
                            </div>
                            <div className="text-left py-1">
                                <button
                                    onClick={() => playAudio(fTime, tTime, audioRef4)}
                                    className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                        Play [ {fTime} - {tTime} ]
                                    </span>
                                </button>
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
                    onClick={() => checkAnswer(4)}
                    type="button"
                    className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                    Xem đáp án
                </button>
                <button
                    onClick={() => resetAnswer(4)}
                    type="button"
                    className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                    Reset
                </button>
            </div>
        </div>
    );
};

export default PhanNghe;
