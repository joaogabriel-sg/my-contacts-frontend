import { useEffect } from 'react';
import { useAnimatedList } from '../../../hooks/useAnimatedList';
import { toastEventManager } from '../../../utils/toast';
import ToastMessage from '../ToastMessage';

import { Container } from './styles';

export default function ToastContainer() {
  const {
    setItems: setMessages,
    handleRemoveItem,
    renderList,
  } = useAnimatedList([]);

  useEffect(() => {
    function handleAddToast({ type, text, duration }) {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          id: Math.random(), type, text, duration,
        },
      ]);
    }

    toastEventManager.on('addtoast', handleAddToast);

    return () => {
      toastEventManager.removeListener('addtoast', handleAddToast);
    };
  }, [setMessages]);

  return (
    <Container>
      {renderList((message, { isLeaving, animatedRef }) => (
        <ToastMessage
          key={message.id}
          message={message}
          onRemoveMessage={handleRemoveItem}
          isLeaving={isLeaving}
          animatedRef={animatedRef}
        />
      ))}
    </Container>
  );
}
