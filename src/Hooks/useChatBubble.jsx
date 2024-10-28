import { useEffect, useState } from "react";

function useChatBubble(ref, messages) {
  const [showBubble, setShowBubble] = useState(false);
  const [bubbleShown, setBubbleShown] = useState(false);
  const [bubbleMessage, setBubbleMessage] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !bubbleShown) {
          setBubbleMessage(
            messages[Math.floor(Math.random() * messages.length)]
          );

          setTimeout(() => {
            setShowBubble(true);
            setBubbleShown(true);

            setTimeout(() => {
              setShowBubble(false);
            }, 5000); // Bubble visible duration
          }, 5000); // Bubble delay
        }
      });
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [bubbleShown, messages, ref]);

  return { showBubble, bubbleMessage };
}

export default useChatBubble;
