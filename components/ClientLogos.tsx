import Image from "next/image";
import { clients } from "@/lib/data";

export function ClientLogos() {
  return (
    <div className="grid grid-cols-2 overflow-hidden border-l border-t border-line sm:grid-cols-4 md:grid-cols-8">
      {clients.map((client) => (
        <div
          key={client.name}
          className={`flex h-24 items-center justify-center border-b border-r border-line p-5 transition-transform duration-200 hover:scale-105 ${
            client.dark ? "bg-ink" : "bg-white"
          }`}
        >
          {client.src ? (
            <Image
              src={client.src}
              alt={client.name}
              width={140}
              height={70}
              className="h-auto max-h-12 w-auto max-w-full object-contain"
            />
          ) : (
            <span className="text-center text-sm font-semibold uppercase tracking-wide text-ink">
              {client.name}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
