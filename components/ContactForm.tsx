"use client";

import { useEffect, useRef } from "react";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { Send, Loader2 } from "lucide-react";
import toast from "react-hot-toast";
import { sendContactMessage, type ContactState } from "@/app/actions/contact";

const initialState: ContactState = { status: "idle" };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full inline-flex items-center justify-center gap-2 h-12 rounded-xl bg-gradient-to-r from-violet-500 to-blue-500 text-white font-medium hover:shadow-lg hover:shadow-violet-500/30 transition-shadow disabled:opacity-70 disabled:cursor-not-allowed"
    >
      {pending ? (
        <>
          <Loader2 size={16} className="animate-spin" /> Sending…
        </>
      ) : (
        <>
          <Send size={16} /> Send Message
        </>
      )}
    </button>
  );
}

export function ContactForm() {
  const [state, formAction] = useActionState(sendContactMessage, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const lastHandled = useRef<ContactState>(initialState);

  useEffect(() => {
    if (state === lastHandled.current) return;
    lastHandled.current = state;

    if (state.status === "success") {
      toast.success("Message sent — I'll reply soon.");
      formRef.current?.reset();
    } else if (state.status === "error") {
      toast.error(state.error);
    }
  }, [state]);

  return (
    <form
      ref={formRef}
      action={formAction}
      className="glass rounded-2xl p-6 space-y-4 self-start"
    >
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input
          id="company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div>
        <label htmlFor="name" className="sr-only">
          Name
        </label>
        <input
          id="name"
          name="name"
          required
          maxLength={120}
          placeholder="Your Name"
          className="w-full px-4 h-12 rounded-xl bg-muted/40 border border-border/60 focus:border-accent/60 focus:outline-none transition-colors placeholder:text-muted-foreground"
        />
      </div>
      <div>
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          maxLength={200}
          placeholder="Your Email"
          className="w-full px-4 h-12 rounded-xl bg-muted/40 border border-border/60 focus:border-accent/60 focus:outline-none transition-colors placeholder:text-muted-foreground"
        />
      </div>
      <div>
        <label htmlFor="message" className="sr-only">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          minLength={10}
          maxLength={5000}
          placeholder="Your Message"
          className="w-full px-4 py-3 rounded-xl bg-muted/40 border border-border/60 focus:border-accent/60 focus:outline-none transition-colors placeholder:text-muted-foreground resize-none"
        />
      </div>
      <SubmitButton />
    </form>
  );
}
