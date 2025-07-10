
"use client";
import Image from 'next/image';
import { useState, useRef } from 'react';
import { MonitorCheck, MonitorX, SquareStack, User } from "lucide-react";
import ReactAudioPlayer from 'react-audio-player';
import { PhanNghe } from './phannghe'
import PhanDoc from './phandoc';
import PhanViet from './phanviet';
import PhanOnTap from './phanontop';

const Page = () => {
       
    return (
        <div>
            <h2 className="text-2xl font-bold">第 11 课： 别忘了把空调关了.</h2>
            <p>Bài tập HSK 3 - Phần 2.</p>
            <PhanNghe />
            <hr/>
            <PhanDoc />
            <hr/>
            <PhanViet />
            <hr/>
            <PhanOnTap />
        </div>
    );
};

export default Page;
