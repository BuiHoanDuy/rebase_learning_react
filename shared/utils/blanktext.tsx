import React, { useState } from "react";

interface Inputs {
    [key: string]: string; // Allow any string as a key, with values being strings
}

interface FillInBlanksProps {
    id: number;
    paragraph: string;
    answers: { [key: string]: string }; // Object containing correct answers for blanks
}

const BlankText: React.FC<FillInBlanksProps> = ({ id, paragraph, answers }) => {
    const [inputs, setInputs] = useState<Inputs>({});
    const [feedback, setFeedback] = useState<{ [key: string]: boolean }>({}); // Feedback for each blank
    const [resultText, setResultText] = useState<string>("");

    const handleChange = (key: string, value: string) => {
        setInputs((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    const isStringInTextWithRegex = (text: string, pattern: string): boolean => {
        const regex = new RegExp(pattern, "i"); // 'i' flag for case-insensitive matching
        return regex.test(text);
    }

    const handleCheckAnswers = () => {
        const newFeedback: { [key: string]: boolean } = {};
        for (const key in answers) {
            let usrAns = inputs[key]?.trim();
            let ans = answers[key]?.trim();
            newFeedback[key] = isStringInTextWithRegex(ans,usrAns);
        }
        console.log(newFeedback);
        setFeedback(newFeedback);
        ///
        let countTrue = 0;
        let countFalse = 0;
        for (const key in newFeedback) {
            if (newFeedback[key]) {
                countTrue++;
            } else {
                countFalse++;
            }
        }
        setResultText(`Kết quả: ${countTrue} câu đúng, ${countFalse} câu sai !`);
    };

    const handleShowAnswers = () => {
        const newInputs: { [key: string]: string } = {};
        for (const key in answers) {
            newInputs[key] = answers[key]?.trim();
        }
        console.log(newInputs);
        setInputs(newInputs);
    };

    const handleReset = () => {
        const newInputs: { [key: string]: string } = {};
        const newFeedback: { [key: string]: boolean } = {};
        for (const key in answers) {
            newInputs[key] = "";
        }
        console.log(newInputs);
        setInputs(newInputs);
        setFeedback(newFeedback);
        setResultText("");
    }

    const renderTextWithBlanks = (id: number, text: string) => {
        const regex = /\(__(\d+)__\)/g; // Matches (__n__) where n is a number
        let parts: React.ReactNode[] = [];
        let match;
        let lastIndex = 0;

        while ((match = regex.exec(text)) !== null) {
            const blankIndex = match[1]; // Extract the number of the blank
            const blankKey = `blank-${id}-${blankIndex}`; // Dynamic key for the blank
            const beforeText = text.slice(lastIndex, match.index); // Text before the blank

            parts.push(
                <span key={`text-${id}-${lastIndex}`}>{beforeText}</span>,
                <input
                    type="text"
                    name={blankKey}
                    value={inputs[blankKey] || ''} // Dynamically access the value
                    onChange={(e) => handleChange(blankKey, e.target.value)}
                    style={{
                        backgroundColor: feedback[blankKey] === undefined ? 'white' : (feedback[blankKey] ? 'green' : 'red'),
                        color: feedback[blankKey] === undefined ? 'grey' : (feedback[blankKey] ? 'white' : 'yellow'),
                        borderBottom: "1px solid rgb(30 58 138)"
                    }}
                    className="text-center"
                    placeholder={`Câu ${id}-(${blankIndex})`}
                />

            );
            lastIndex = regex.lastIndex;
        }

        // Add any remaining text after the last blank
        parts.push(<span key={`text-${id}-${lastIndex}`}>{text.slice(lastIndex)}</span>);
        return parts;
    };

    return (
        <div className="p-4 rounded shadow-md">
            <div className="text-lg leading-relaxed">{renderTextWithBlanks(id, paragraph)}</div>
            <p style={{ color: "rgb(111,123,12)" }} className="text-red-700 mt-5">{resultText}</p>
            <br />
            <div className="inline-flex rounded-md shadow-sm" role="group">
                <button
                    onClick={handleCheckAnswers}
                    type="button"
                    className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-s-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                    Xem đáp án
                </button>
                <button
                    type="button"
                    onClick={handleShowAnswers}
                    className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-e-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                    Gợi ý đáp án
                </button>
                <button
                    type="button"
                    onClick={handleReset}
                    className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-e-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                    Reset
                </button>
            </div>
        </div>
    );
};

export default BlankText;
