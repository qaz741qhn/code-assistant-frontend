import { useState, useEffect } from 'react';

export const useLoadingDots = (initialMessage) => {
  const [message, setMessage] = useState(initialMessage);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessage((currentMessage) => {
        let dots = currentMessage.split('.').length - 1;
        dots = dots >= 3 ? 0 : dots + 1;
        return initialMessage + '.'.repeat(dots);
      });
    }, 500);
    return () => clearInterval(interval);
  }, [initialMessage]);

  return message;
};
