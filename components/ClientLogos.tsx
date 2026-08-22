import Image from "next/image";
import { clients } from "@/lib/data";

export function ClientLogos() {
  return (
    <div className="grid grid-cols-2 gap-px overflow-hidden border border-line bg-line sm:grid-cols-4 md:grid-cols-8">
      {clients.map((client) => (
        <div
          key={client.name}
          className="flex h-24 items-center justify-center bg-paper p-5 transition-transform duration-200 hover:scale-105"
        >
          <Image
            src={client.src}
            alt={client.name}
            width={140}
            height={70}
            className="h-auto max-h-12 w-auto max-w-full object-contain"
          />
        </div>
      ))}
    </div>
  );
}
