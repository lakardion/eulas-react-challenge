/**
 * The TextInput component renders an input element in the DOM
 * and accepts a ref that is forwarded to that input element.
 * Finish the FocusableInput component:
 * - The component should accept a focused prop.
 * - When the focused prop is changed from false to true, and the input is not focused, it should receive the focus.
 * - If on mounting the focused prop is true, the input should receive the focus.
 */

import React, { useCallback, useEffect, useRef, useState } from "react";

function Input(props) {
  const { forwardedRef, ...otherProps } = props;
  return <input {...otherProps} ref={forwardedRef} />;
}

const TextInput = React.forwardRef((props, ref) => {
  return <Input {...props} forwardedRef={ref} />;
});

// Implement:
// When the focused prop is changed from false to true,
// and the input is not focused, it should receive focus.
// If focused prop is true, the input should receive the focus.
export function FocusableInput({ focusable = false }) {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);

  // const handleFocused = () => setIsFocused(true);
  // const handleBlur = () => setIsFocused(false);

  const handleFocused = useCallback(() => setIsFocused(true), []);
  const handleBlur = useCallback((e) => {
    if (e && focusable) {
      e.preventDefault();
      inputRef?.current.focus();
    } else {
      setIsFocused(false);
    }
  }, [focusable]);

  useEffect(() => {
    if (!inputRef?.current) return;
    if (focusable && !isFocused) {
      inputRef.current.focus();
      handleFocused();
    }
  }, [focusable, handleFocused, isFocused]);

  useEffect(() => {
    if (!inputRef?.current) return;
    if (!focusable) {
      inputRef.current.blur();
      handleBlur();
    }
  }, [focusable, handleBlur]);

  return (
    // @ts-ignore
    <TextInput onFocus={handleFocused} onBlur={handleBlur} ref={inputRef} />
  );
}
