import { ChevronDown, Hash, Mic, Send } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {} from "lucide-react";
import Image from "next/image";

export const Cards = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Left Section - Model Selection */}
      <Card className="bg-zinc-900 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white text-xl font-semibold">
            One Click IDE
          </CardTitle>
          <CardDescription className="text-gray-300 text-sm leading-relaxed">
            Use AI models like Claude Sonnet out of the box, or bring your own
            key to access models from Azure, Anthropic, Google, Ollama, OpenAI,
            and OpenRouter, Out of Box inside VS Code.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 ml-auto mr-6 mt-4">
          <Image src={"/images/vsc.png"} alt="pic" width={150} height={150} />
        </CardContent>
      </Card>

      {/* Middle Section - Codebase Expert */}
      <Card className="bg-zinc-900 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white text-xl font-semibold">
            An expert on your codebase
          </CardTitle>
          <CardDescription className="text-gray-300 text-sm leading-relaxed">
            Your codebase is indexed locally and remotely (on GitHub) to
            understand whats relevant, enabling fast, context-aware
            interactions.
          </CardDescription>
        </CardHeader>
        <CardContent className="mt-4">
          <div className="bg-zinc-800 rounded-2xl p-4 space-y-3">
            <div className="flex items-center gap-2 text-sm">
              <span className="text-gray-400">Add Context...</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-yellow-400">📄</span>
              <span className="text-white">settings.json</span>
              <span className="text-gray-400">Current file</span>
              <button className="text-gray-400 hover:text-white">x</button>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Hash className="h-4 w-4 text-blue-400" />
              <span className="text-blue-400">codebase</span>
              <Hash className="h-4 w-4 text-blue-400" />
              <span className="text-blue-400">file:HistoryView.swift</span>
              <span className="text-gray-400">|</span>
            </div>
            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center gap-2">
                <span className="text-gray-400">@</span>
                <Mic className="h-4 w-4 text-gray-400" />
                <span className="text-white">Ask</span>
                <ChevronDown className="h-4 w-4 text-gray-400" />
                <span className="text-white">select model</span>
                <ChevronDown className="h-4 w-4 text-gray-400" />
              </div>
              <Send className="h-4 w-4 text-gray-400" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Right Section - Team Workflow */}
      <Card className="bg-zinc-900 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white text-xl font-semibold">
            AI that works the way your team does
          </CardTitle>
          <CardDescription className="text-gray-300 text-sm leading-relaxed">
            Personalize interactions using custom instructions and reusable
            prompt files tailored to your workflows, tools, and projects.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className=" p-4 font-mono text-sm font-semibold">
            <div className="space-y-1">
              <div className="flex">
                <span className="text-gray-500 w-6">1</span>
                <span className="text-purple-400">interface</span>
                <span className="text-blue-400 ml-2">AIConfig</span>
                <span className="text-white ml-2">{"{"}</span>
              </div>
              <div className="flex">
                <span className="text-gray-500 w-6">2</span>
                <span className="text-blue-400 ml-4">model</span>
                <span className="text-white">:</span>
                <span className="text-green-400 ml-2">claude-4</span>
              </div>
              <div className="flex">
                <span className="text-gray-500 w-6">3</span>
                <span className="text-blue-400 ml-4">instructions</span>
                <span className="text-white">:</span>
                <span className="text-yellow-400 ml-2">string</span>
                <span className="text-white">[]</span>
              </div>
              <div className="flex">
                <span className="text-gray-500 w-6">4</span>
                <span className="text-blue-400 ml-4">context</span>
                <span className="text-white">?:</span>
                <span className="text-yellow-400 ml-2">File</span>
                <span className="text-white">[]</span>
              </div>
              <div className="flex">
                <span className="text-gray-500 w-6">5</span>
                <span className="text-white">{"}"}</span>
              </div>
              <div className="flex">
                <span className="text-gray-500 w-6">6</span>
              </div>
              <div className="flex">
                <span className="text-gray-500 w-6">7</span>
                <span className="text-purple-400">const</span>
                <span className="text-blue-400 ml-2">config</span>
                <span className="text-white">:</span>
                <span className="text-yellow-400 ml-2">AIConfig</span>
                <span className="text-white ml-2">=</span>
                <span className="text-white ml-2">{"{"}</span>
              </div>
              <div className="flex">
                <span className="text-gray-500 w-6">8</span>
                <span className="text-blue-400 ml-4">model</span>
                <span className="text-white">:</span>
                <span className="text-green-400 ml-2">claude-4</span>
                <span className="text-white">,</span>
              </div>
              <div className="flex">
                <span className="text-gray-500 w-6">9</span>
                <span className="text-blue-400 ml-4">instructions</span>
                <span className="text-white">:</span>
                <span className="text-white ml-2">[</span>
                <span className="text-green-400">Use React hooks</span>
                <span className="text-white">]</span>
              </div>
              <div className="flex">
                <span className="text-gray-500 w-6">10</span>
                <span className="text-white">{"}"}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
