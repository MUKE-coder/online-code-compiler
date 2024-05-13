import { CodeSnippetsProps } from "@/components/EditorComponent";

export const languageOptions = [
  {
    language: "javascript",
    version: "18.15.0",
    aliases: ["node-javascript", "node-js", "javascript", "js"],
    runtime: "node",
  },
  {
    language: "typescript",
    version: "5.0.3",
    aliases: ["ts", "node-ts", "tsc", "typescript5", "ts5"],
  },
  {
    language: "php",
    version: "8.2.3",
    aliases: [],
  },
  {
    language: "python",
    version: "3.10.0",
    aliases: ["py", "py3", "python3", "python3.10"],
  },
  {
    language: "ruby",
    version: "3.0.1",
    aliases: ["ruby3", "rb"],
  },
  {
    language: "rust",
    version: "1.68.2",
    aliases: ["rs"],
  },
  {
    language: "csharp",
    version: "6.12.0",
    aliases: ["mono", "mono-csharp", "mono-c#", "mono-cs", "c#", "cs"],
    runtime: "mono",
  },
  {
    language: "c++",
    version: "10.2.0",
    aliases: ["cpp", "g++"],
    runtime: "gcc",
  },
  {
    language: "go",
    version: "1.16.2",
    aliases: ["go", "golang"],
  },
  {
    language: "java",
    version: "15.0.2",
    aliases: [],
  },
  {
    language: "c",
    version: "10.2.0",
    aliases: ["gcc"],
    runtime: "gcc",
  },
];

export const codeSnippets: CodeSnippetsProps = {
  javascript: `function sum(a, b) {
  return a + b;
}
console.log(sum(3, 4));`, // Output: 7

  typescript: `function sum(a: number, b: number): number {
  return a + b;
}
console.log(sum(3, 4));`, // Output: 7

  php: `function sum($a, $b) {
  return $a + $b;
}
echo sum(3, 4);`, // Output: 7

  python: `def sum(a, b):
    return a + b
print(sum(3, 4))`, // Output: 7

  ruby: `def sum(a, b)
  a + b
end
puts sum(3, 4)`, // Output: 7

  rust: `fn sum(a: i32, b: i32) -> i32 {
  a + b
}
fn main() {
  println!("{}", sum(3, 4));
}`, // Output: 7

  "csharp.net": `public class Program
{
    public static int Sum(int a, int b)
    {
        return a + b;
    }
}
class MainClass
{
    public static void Main (string[] args)
    {
        Console.WriteLine(Program.Sum(3, 4));
    }
}`, // Output: 7

  "c++": `int sum(int a, int b) {
  return a + b;
}
int main() {
  std::cout << sum(3, 4);
  return 0;
}`, // Output: 7

  go: `func sum(a, b int) int {
  return a + b
}
func main() {
  fmt.Println(sum(3, 4))
}`, // Output: 7

  java: `public class Main {
    public static int sum(int a, int b) {
        return a + b;
    }
    public static void main(String[] args) {
        System.out.println(sum(3, 4));
    }
}`, // Output: 7

  c: `int sum(int a, int b) {
  return a + b;
}
int main() {
  printf("%d", sum(3, 4));
  return 0;
}`, // Output: 7
};
