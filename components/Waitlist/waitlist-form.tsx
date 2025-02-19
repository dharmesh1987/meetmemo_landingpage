"use client";

import { WaitlistInput } from "./waitlist-input";
import { useState } from "react";
import { toast } from "sonner";
import Confetti from "react-dom-confetti";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/landing/convert-kit`,
        {
          method: "POST",
          body: JSON.stringify({
            user_email: email,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const result = await response.json();

      if (result.data.status === 201) {
        setSuccess(true);
        setEmail("");

        setTimeout(() => {
          setSuccess(false);
        }, 2000);
      }

      if (result.data.status === 200) {
        toast.info("You're already on the waitlist!");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <div className="px-2  lg:px-0 w-full flex justify-center items-center z-20">
      <WaitlistInput
        placeholders={placeholders}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        onSubmit={(e) => handleSubmit(e)}
        type="email"
        id="waitlist-form"
      />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 border z-50">
        <Confetti active={success} config={config} />
      </div>
    </div>
  );
}

const placeholders = ["Join the waitlist and signup for our beta..."];

const config = {
  angle: 90,
  spread: 360,
  startVelocity: 40,
  elementCount: 200,
  dragFriction: 0.12,
  duration: 2000,
  stagger: 3,
  width: "10px",
  height: "10px",
  perspective: "500px",
  colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
};
