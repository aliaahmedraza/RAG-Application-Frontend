"use client";
import * as React from "react"; 
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
interface ChatMessage {
    role: "assistant" | "user";
    content?: string;
    document?: string[];
}

const ChatComponent: React.FC = () => {
    const [message, setMessage] = React.useState<string>("");
    const [chatHistory, setChatHistory] = React.useState<ChatMessage[]>([]);

    const handleSendChatMessage = async () => {
        if (!message.trim()) return;

        setChatHistory((prev) => [
            ...prev,
            { role: "user", content: message }
        ]);

        const res = await fetch(`http://localhost:3006/chat?message=${encodeURIComponent(message)}`);
        const data = await res.json();

        setChatHistory((prev) => [
            ...prev,
            { role: "assistant", content: data?.message }
        ]);

        console.log(`Message: ${data?.message}`);
        console.log("Full object as string:", JSON.stringify(data?.docs, null, 2));

        setMessage(""); 
    };

    return (
        <div className="p-4">
            <div className="flex flex-col gap-2 h-[80vh] overflow-y-auto">
                {chatHistory.map((message, index) => (
                    <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                        <div className={`p-2 rounded-md ${message.role === "user" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"}`}>
                            {message.content}
                        </div>
                    </div>
                ))}
            </div>
            <div className="fixed bottom-4 w-[50%] flex gap-2">
                <Input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") handleSendChatMessage();
                    }}
                    placeholder="Type your message here"
                />
                <Button onClick={handleSendChatMessage} disabled={!message.trim()}>
                    Send
                </Button>
            </div>
        </div>
    );
};

export default ChatComponent;
