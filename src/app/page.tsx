import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen bg-gray-100">
      <Button>Click me 1</Button>
      <Button variant="outline">Click me 1</Button>
      <Button variant="destructive">Click me 1</Button>

      <Button asChild>
        <a href="/contact">Contact</a>
      </Button>
    </main>
  );
}
