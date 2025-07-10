import { DataListening, PartListening, ItemListening, DataOnTap } from '../type';


// Phần NGHE *******************
export const dataPhanNghe: DataListening = {
    part1: {
        title: '第一部分   Phần 1',
        fTime: "00:00",
        tTime: "02:37",
        subtitle:
            `第1-5题: 听对话，选择与对话内容一致的图片
            <br />
            Câu hỏi 1-5: Nghe các mẫu đối thoại và chọn hình phù hợp với nội dung của từng mẫu đối thoại.`,
        imgSrc: "/imgs/btnghe/bai11-01-01.png",
        items: [
            {
                no: 1,
                title: "第 1 题 (Câu 1).",
                answer: "E",
                type: "Input-Character",
                fTime: "00:37",
                tTime: "01:03",
                userAnswer: "",
                check: null,
            },
            {
                no: 2,
                title: "第 2 题 (Câu 2).",
                answer: "F",
                type: "Input-Character",
                fTime: "01:03",
                tTime: "01:26",
                userAnswer: "",
                check: null,
            },
            {
                no: 3,
                title: "第 3 题 (Câu 3).",
                answer: "A",
                type: "Input-Character",
                fTime: "01:26",
                tTime: "01:51",
                userAnswer: "",
                check: null,
            },
            {
                no: 4,
                title: "第 4 题 (Câu 4).",
                answer: "C",
                type: "Input-Character",
                fTime: "01:51",
                tTime: "02:10",
                userAnswer: "",
                check: null,
            },
            {
                no: 5,
                title: "第 5 题 (Câu 5).",
                answer: "B",
                type: "Input-Character",
                fTime: "02:10",
                tTime: "02:37",
                userAnswer: "",
                check: null,
            },
        ]
    },
    part2: {
        title: '第二部分   Phần 2',
        fTime: "02:38",
        tTime: "04:37",
        subtitle:
            `第6-10题: 听句子，判断对错
            <br />
            Câu hỏi 6-10: Cho biết các câu sau có phù hợp với tình huống bạn nghe được hay không.`,
        imgSrc: "/imgs/btnghe/bai11-01-02.png",
        items: [
            {
                no: 6,
                title: `第 6 题 (Câu 6). <br /> * 他的电脑出了点儿问题。`,
                answer: "true",
                type: "True-False",
                fTime: "03:26",
                tTime: "04:09",
                userAnswer: null,
                check: null,
            },
            {
                no: 7,
                title: "第 7 题 (Câu 7). <br /> * 。他打算去图书馆学习。",
                answer: "true",
                type: "True-False",
                fTime: "04:09",
                tTime: "04:44",
                userAnswer: null,
                check: null,
            },
            {
                no: 8,
                title: "第 8 题 (Câu 8). <br /> * 他以前骑自行车上班。",
                answer: "false",
                type: "True-False",
                fTime: "04:44",
                tTime: "05:27",
                userAnswer: null,
                check: null,
            },
            {
                no: 9,
                title: "第 9 题 (Câu 9). <br /> * 跟家人一起吃晚饭很快乐。",
                answer: "true",
                type: "True-False",
                fTime: "05:27",
                tTime: "06:10",
                userAnswer: null,
                check: null,
            },
            {
                no: 10,
                title: "第 10 题 (Câu 10). <br /> * 啤酒在桌子上。",
                answer: "false",
                type: "True-False",
                fTime: "06:10",
                tTime: "06:42",
                userAnswer: null,
                check: null,
            },
        ]
    },
    part3: {
        title: '第三部分   Phần 3',
        fTime: "06:43",
        tTime: "10:48",
        subtitle:
            `第11-15题: 听短对话，选择正确答案
            <br />
            Câu hỏi 11-15: Nghe đoạn đối thoại ngắn và chọn câu trả lời đúng.`,
        imgSrc: "/imgs/btnghe/bai11-01-03.png",
        items: [
            {
                no: 11,
                title: `第 11 题 (Câu 11). <br />`,
                chooseA:"地铁站",
                chooseB:"眼镜店",
                chooseC:"地图",
                answer: "B",
                type: "Multi-Choice",
                fTime: "07:22",
                tTime: "08:04",
                userAnswer: null,
                check: null,
            }, 
            {
                no: 12,
                title: `第 12 题 (Câu 12). <br />`,
                chooseA:"给妹妹喝牛奶",
                chooseB:"去超市买牛奶",
                chooseC:"带妹妹去医院",
                answer: "A",
                type: "Multi-Choice",
                fTime: "08:04",
                tTime: "08:40",
                userAnswer: null,
                check: null,
            }, 
            {
                no: 13,
                title: `第 13 题 (Câu 13). <br />`,
                chooseA:"同事",
                chooseB:"经理和客人",
                chooseC:"医生和病人",
                answer: "A",
                type: "Multi-Choice",
                fTime: "08:41",
                tTime: "09:22",
                userAnswer: null,
                check: null,
            },
            {
                no: 14,
                title: `第 14 题 (Câu 14). <br />`,
                chooseA:"出去开会",
                chooseB:"照顾小雨",
                chooseC:"和女的去公园",
                answer: "B",
                type: "Multi-Choice",
                fTime: "09:22",
                tTime: "10:06",
                userAnswer: null,
                check: null,
            },   
            {
                no: 15,
                title: `第 15 题 (Câu 15). <br />`,
                chooseA:"让女的去还书",
                chooseB:"书已经还了",
                chooseC:"女的忘了还书",
                answer: "B",
                type: "Multi-Choice",
                fTime: "10:06",
                tTime: "10:48",
                userAnswer: null,
                check: null,
            },   
        ]
    },
    part4: {
        title: '第四部分   Phần 4',
        fTime: "10:48",
        tTime: "16:33",
        subtitle:
            `第16-20题: 听长对话，选择正确答案
            <br />
            Câu hỏi 16-20: Nghe đoạn đối thoại dài và chọn câu trả lời đúng.`,
        imgSrc: "/imgs/btnghe/bai11-01-04.png",
        items: [
            {
                no: 16,
                title: `第 16 题 (Câu 16). <br />`,
                chooseA:"今天比较忙",
                chooseB:"空调有问题",
                chooseC:"叫人来还水",
                answer: "B",
                type: "Multi-Choice",
                fTime: "11:31",
                tTime: "12:29",
                userAnswer: null,
                check: null,
            }, 
            {
                no: 17,
                title: `第 17 题 (Câu 17). <br />`,
                chooseA:"已经洗澡了",
                chooseB:"不喜欢出去跑步",
                chooseC:"想去超市买东西",
                answer: "A",
                type: "Multi-Choice",
                fTime: "12:29",
                tTime: "13:26",
                userAnswer: null,
                check: null,
            }, 
            {
                no: 18,
                title: `第 18 题 (Câu 18). <br />`,
                chooseA:"比以前便宜了",
                chooseB:"太旧了",
                chooseC:"又大又方便",
                answer: "A",
                type: "Multi-Choice",
                fTime: "13:27",
                tTime: "14:36",
                userAnswer: null,
                check: null,
            },
            {
                no: 19,
                title: `第 19 题 (Câu 19). <br />`,
                chooseA:"来周先生家吃晚饭",
                chooseB:"每天八点左右下班",
                chooseC:"总是照顾周先生的小狗",
                answer: "C",
                type: "Multi-Choice",
                fTime: "14:36",
                tTime: "15:41",
                userAnswer: null,
                check: null,
            },   
            {
                no: 20,
                title: `第 20 题 (Câu 20). <br />`,
                chooseA:"玩儿电脑",
                chooseB:"打篮球",
                chooseC:"复习考试",
                answer: "B",
                type: "Multi-Choice",
                fTime: "15:42",
                tTime: "16:33",
                userAnswer: null,
                check: null,
            },   
        ]
    },
};

// Phần ĐỌC *******************
export const dataPhanDoc: DataListening = {
    part1: {
        title: '第一部分   Phần 1',
        subtitle:
            `第21-25题: 
            <br />
            Câu hỏi 21-25: Chọn câu hỏi hoặc câu trả lời phù hợp với câu cho sẵn.`,
        imgSrc: "/imgs/btdoc/bai11-01-01.png",
        items: [
            {
                no: 21,
                title: "第 21 题 (Câu 21). <br/> 中午吃完饭，一点左右，怎么样？",
                answer: "B",
                type: "Input-Character",
                userAnswer: "",
                check: null,
            },
            {
                no: 22,
                title: "第 22 题 (Câu 22). <br/>你带这么多东西，又要出去旅游吗？",
                answer: "F",
                type: "Input-Character",
                userAnswer: "",
                check: null,
            },
            {
                no: 23,
                title: "第 23 题 (Câu 23).<br/> 我习惯睡觉以前看会儿书了，不看书我睡不着。",
                answer: "A",
                type: "Input-Character",
                userAnswer: "",
                check: null,
            },
            {
                no: 24,
                title: "第 24 题 (Câu 24). <br/>周经理，您来一口酒都不喝吗？",
                answer: "D",
                type: "Input-Character",
                userAnswer: "",
                check: null,
            },
            {
                no: 25,
                title: "第 25 题 (Câu 25). <br/>对不起，我忘带了，明天给你吧。",
                answer: "C",
                type: "Input-Character",
                userAnswer: "",
                check: null,
            },
        ]
    },
    part2: {
        title: '第二部分   Phần 2',        
        subtitle:
            `第26-30题: 选择合适的词语填空
            <br />
            Câu hỏi 26-30: Điền từ ngữ thích hợp vào chỗ trống.`,
        imgSrc: "/imgs/btdoc/bai11-01-02.png",
        items: [
            {
                no: 26,
                title: "第 26 题 (Câu 26). <br/> 我们一会儿在（ ____ ）门口见面吧。",
                answer: "B",
                type: "Input-Character",
                userAnswer: "",
                check: null,
            },
            {
                no: 27,
                title: "第 27 题 (Câu 27).<br/> 你去经理的办公室把灯（ ____ ）了。",
                answer: "F",
                type: "Input-Character",
                userAnswer: "",
                check: null,
            },
            {
                no: 28,
                title: "第 28 题 (Câu 28). <br/>我想住在（ ___ ）站附近，这样去别的地方很方便。",
                answer: "C",
                type: "Input-Character",
                userAnswer: "",
                check: null,
            },
            {
                no: 29,
                title: "第 29 题 (Câu 29). <br/> <b>A: </b>今天晚上的音乐会几点（ ___ ）？ <br/> <b>B: </b> 十点左右，你还有事情吗？",
                answer: "A",
                type: "Input-Character",
                userAnswer: "",
                check: null,
            },
            {
                no: 30,
                title: "第 30 题 (Câu 30). <br/> <b>A: </b>给你买件衬衫吧，在银行上班穿衬衫好一些。 <br/> <b>B: </b> 我还不太（ ___ ）穿衬衫。",
                answer: "D",
                type: "Input-Character",
                userAnswer: "",
                check: null,
            },
        ]
    },
    part3: {
        title: '第三部分   Phần 3',
        subtitle:
            `第31-35题: 选择正确答案
            <br />
            Câu hỏi 31-35: Chọn câu trả lời đúng.`,
        imgSrc: "/imgs/btdoc/bai11-01-03a.png",
        imgSrc1: "/imgs/btdoc/bai11-01-03b.png",
        items: [
            {
                no: 31,
                title: `第 31 题 (Câu 31). 
                    <br /> 我每天下班都坐地铁回家，在地铁上，我更喜欢站着，因为我已经在办公室里坐了一天了。
                    <br /> * 我为什么在地铁上站着？`,
                chooseA:"地铁上人很多",
                chooseB:"我不累",
                chooseC:"我坐了一天了",
                answer: "C",
                type: "Multi-Choice",
                userAnswer: null,
                check: null,
            }, 
            {
                no: 32,
                title: `第 32 题 (Câu 32). 
                    <br /> 看书时会看到一些历史上的人或者国家的名字，这些字现在很多都不用了，想要知道这些字的读音和意思就要字典的帮助，所以有本字典很方便。
                    <br /> * 看书时会看到：`,
                chooseA:"不认识的字",
                chooseB:"现在的名人",
                chooseC:"汉字的读音",
                answer: "A",
                type: "Multi-Choice",
                userAnswer: null,
                check: null,
            },
            {
                no: 33,
                title: `第 33 题 (Câu 33). 
                    <br /> 中国有一句话叫“有借有还，再借不难”，是说向别人借的东西，用完就要还，这样下次你再借东西的时候，他们还会借给你。
                    <br /> * 借了别人的东西：`,
                chooseA:" 别用太长时间",
                chooseB:" 要记得还",
                chooseC:" 不能再借",
                answer: "B",
                type: "Multi-Choice",
                userAnswer: null,
                check: null,
            },
            {
                no: 34,
                title: `第 34 题 (Câu 34). 
                    <br /> 我爸爸妈妈都是北方人，但是我一直住在南方，所以没见过雪。搬到北京以后，虽然这儿的天气很冷，我还不太习惯，但是我见到雪了，我很高兴。
                    <br /> * 她：`,
                chooseA:" 不想搬家",
                chooseB:" 见到雪了",
                chooseC:" 习惯北京的天气",
                answer: "B",
                type: "Multi-Choice",
                userAnswer: null,
                check: null,
            },
            {
                no: 35,
                title: `第 35 题 (Câu 35). 
                    <br /> 下班后，我们一起去喝啤酒吧，就在公司旁边。以前是六十五元一个人，现在是三十五元一个人，想喝几瓶就可以喝几瓶，还送一些吃的。你那个朋友姓什么，我忘记了，叫他也来吧。
                    <br /> * 根据这段话，可以知道：`,
                chooseA:" 我忘记我朋友的名字了",
                chooseB:" 三十五元可以喝一瓶啤酒",
                chooseC:" 喝啤酒比以前便宜了",
                answer: "C",
                type: "Multi-Choice",
                userAnswer: null,
                check: null,
            },
        ]
    },   
};

// Phần VIẾT *******************
export const dataPhanViet: DataListening = {
    part1: {
        title: '第一部分   Phần 1',
        subtitle:
            `第36-40题:  连词成句
            <br />
            Câu hỏi 36-40: Sắp xếp các từ ngữ để tạo thành câu hoàn chỉnh.`,
        imgSrc: "/imgs/btviet/bai11-01-01.png",
        items: [
            {
                no: 36,
                title: "第 36 题 (Câu 36). <br/> 左右 / 上地铁 / 我每天 / 七点",
                answer: "我每天七点左右上地铁。",
                type: "Input-Text",
                userAnswer: "",
                check: null,
            },
            {
                no: 37,
                title: "第 37 题 (Câu 37). <br/> 几点 / 图书馆 / 关门",
                answer: "图书馆几点关门？",
                type: "Input-Text",
                userAnswer: "",
                check: null,
            },
            {
                no: 38,
                title: "第 38 题 (Câu 38). <br/> 喝了 / 我昨天 / 啤酒 / 两瓶",
                answer: "我昨天喝了两瓶啤酒。",
                type: "Input-Text",
                userAnswer: "",
                check: null,
            },
            {
                no: 39,
                title: "第 39 题 (Câu 39). <br/> 参加 / 运动会 / 今年的 / 你 / 吗",
                answer: "你今年的运动会参加吗？",
                type: "Input-Text",
                userAnswer: "",
                check: null,
            },    
            {
                no: 40,
                title: "第 40 题 (Câu 40). <br/> 别 / 忘了 / 手机 / 你 / 把",
                answer: "别把你的手机忘了。",
                type: "Input-Text",
                userAnswer: "",
                check: null,
            },  
        ]
    },
    part2: {
        title: '第二部分   Phần 2',        
        subtitle:
            `第41-45题: 看拼音，写汉字
            <br />
            Câu hỏi 41-45: căn cứ vào phiên âm để điền chữ đúng.`,
        imgSrc: "/imgs/btviet/bai11-01-02.png",
        items: [
            {
                no: 41,
                title: `第 41 题 (Câu 41). 
                    <br/> 这个笔记（ běn ）电脑太贵了。`,
                answer: "本",
                type: "Input-Text",
                userAnswer: "",
                check: null,
            },
            {
                no: 42,
                title: `第 42 题 (Câu 42). 
                    <br/> 早睡早起是一个好（ xí ）惯。`,
                answer: "习",
                type: "Input-Text",
                userAnswer: "",
                check: null,
            },  
            {
                no: 43,
                title: `第 43 题 (Câu 43). 
                    <br/> 今天的（ huì ）议几点结束？`,
                answer: "会",
                type: "Input-Text",
                userAnswer: "",
                check: null,
            },  
            {
                no: 44,
                title: `第 44 题 (Câu 44). 
                    <br/> 我从图书馆借了一本英汉（ cí ）典。`,
                answer: "词",
                type: "Input-Text",
                userAnswer: "",
                check: null,
            }, 
            {
                no: 45,
                title: `第 45 题 (Câu 45). 
                    <br/> 房间里的（ dēng ）怎么还开着呢？`,
                answer: "灯",
                type: "Input-Text",
                userAnswer: "",
                check: null,
            },      
        ]
    },
    part3: {
        title: '第三部分   Phần 3',
        subtitle:
            `第46-50题: 辨认汉字，选择正确的汉字填空
            <br />
            Câu hỏi 46-50: Phân biệt các chữ Hán trong ngoăc và điền phù hợp vào chỗ trống.`,
        imgSrc: "/imgs/btviet/bai11-01-03.png",
        items: [
            {
                no: 46,
                title: `第 46 题 (Câu 46). 
                    <br /> 家里的空_(1)_坏了，_(2)_未我要叫人来看看看。（周，调）`,
                listWords: ["周","调"],
                answer: "调",
                answer1: "周",
                type: "Input-Text",
                userAnswer: null,
                check: null,
            },  
            {
                no: 47,
                title: `第 47 题 (Câu 47). 
                    <br /> 昨_(1)_你离开的时候忘记_(2)_灯了。（关，天）`,
                listWords: ["关","天"],
                answer: "天",
                answer1: "关",
                type: "Input-Text",
                userAnswer: null,
                check: null,
            },
            {
                no: 48,
                title: `第 48 题 (Câu 48). 
                    <br /> 你帮我把__(1)_本数学书_(2)_了吧。（还，这）`,
                listWords: ["还","这"],
                answer: "这",
                answer1: "还",
                type: "Input-Text",
                userAnswer: null,
                check: null,
            }, 
            {
                no: 49,
                title: `第 49 题 (Câu 49). 
                    <br /> __(1)__点儿，2号桌还少一双__(2)__子。（快，筷）`,
                listWords: ["快","筷"],
                answer: "快",
                answer1: "筷",
                type: "Input-Text",
                userAnswer: null,
                check: null,
            }, 
            {
                no: 50,
                title: `第 50 题 (Câu 50). 
                    <br /> 你看__(1)__了，我__(2)__的不是这本书。（借，错）`,
                listWords: ["借","错"],
                answer: "错",
                answer1: "借",
                type: "Input-Text",
                userAnswer: null,
                check: null,
            },          
        ]
    },   
};

// Phần ÔN TẬP *******************
export const dataPhanOnTap: DataOnTap = {
    part1: {
        title: '第一部分   Phần 1',
        subtitle:
            `第1-2题:  根据课文内容填空
            <br />
            Câu hỏi 1-2: Dựa vào nội dung của bài học, hãy điền từ ngữ thích hợp vào chỗ trống.`,
        imgSrc: "/imgs/btontap/bai11-01-01.png",
        items: [
            {
                no: 1,
                title: "第 1 题 (Câu 1).",
                paragraph:"开会的时候，小丽告诉周明，王经理两点 (__1__) 来了个电话，说他已经坐 (__2__) 公司了。周明告诉小丽会议 (__3__) 后，别 (__4__) 把 (__5__) 关了。",
                listAnswers:
                    {   "blank-1-1":"打",
                        "blank-1-2":"到",
                        "blank-1-3":"结束",
                        "blank-1-4":"忘",
                        "blank-1-5":"灯"},
                type: "Input-Text",
                userAnswer1: null,
                userAnswer2: null,
                userAnswer3: null,
                userAnswer4: null,
                userAnswer5: null,
                check: null,
            },
            {
                no: 2,
                title: "第 2 题 (Câu 2). ",
                paragraph:"今天是爸爸的生日，所以妈妈做了很多菜。妈妈让儿子去拿 (__1__) ，还差一 (__2__) 。儿子想让爸爸喝点儿 (__3__) ，但是医生说爸爸 (__4__) 酒都不能喝，所以不能让他看见酒 (__5__) 。",
                listAnswers:
                    {"blank-2-1":"筷子",
                        "blank-2-2":"盘",
                        "blank-2-3":"酒",
                        "blank-2-4":"一点",
                        "blank-2-5":"瓶"},
                type: "Input-Text",
                userAnswer1: null,
                userAnswer2: null,
                userAnswer3: null,
                userAnswer4: null,
                userAnswer5: null,
                check: null,
            },            
        ]
    },    
};