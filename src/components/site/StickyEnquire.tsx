import { useEffect, useState } from "react";
import { MessageSquare, Phone } from "lucide-react";
import { CONTACT } from "@/data/site";
import { cn } from "@/lib/utils";

/** Fixed side rail with enquire + call, appearing after the hero as on the original. */
export function StickyEnquire() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed right-0 top-1/2 z-40 hidden -translate-y-1/2 flex-col transition-[transform,opacity] duration-500 ease-[var(--ease-brand)] lg:flex",
        visible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0",
      )}
    >
      <a
        href="#enquiry"
        className="flex w-11 flex-col items-center gap-3 bg-bronze py-5 text-white transition-colors duration-300 hover:bg-bronze-dark"
      >
        <MessageSquare className="h-4 w-4" />
        <span className="text-[0.6rem] font-bold uppercase tracking-[0.22em] [writing-mode:vertical-rl]">Enquire</span>
      </a>
      <a
        href={`tel:${CONTACT.salesPhone.replace(/\s/g, "")}`}
        className="flex w-11 flex-col items-center gap-3 bg-ink py-5 text-white transition-colors duration-300 hover:bg-bronze"
      >
        <Phone className="h-4 w-4" />
        <span className="text-[0.6rem] font-bold uppercase tracking-[0.22em] [writing-mode:vertical-rl]">Call</span>
      </a>
    </div>
  );
}
