import { ref } from "vue";
import { onClickOutside } from "@vueuse/core";

export const useHoverWithDelay = (delay = 300) => {
  const showServices = ref(false);
  const dropdownRef = ref(null);
  let leaveTimer = null;
  let enterTimer = null;

  const handleMouseEnter = () => {
    clearTimeout(leaveTimer);
    enterTimer = setTimeout(() => {
      showServices.value = true;
    }, 100);
  };

  const handleMouseLeave = (event) => {
    clearTimeout(enterTimer);
    const dropdownRect = dropdownRef.value?.getBoundingClientRect();
    if (!dropdownRect) return;

    // Check if mouse is moving outside the dropdown area
    if (event.clientY < dropdownRect.top - 50) {
      leaveTimer = setTimeout(() => {
        showServices.value = false;
      }, delay);
    }
  };

  const cancelLeave = () => {
    clearTimeout(leaveTimer);
  };

  const closeImmediately = () => {
    clearTimeout(leaveTimer);
    showServices.value = false;
  };

  // Handle clicks outside
  onClickOutside(dropdownRef, () => {
    closeImmediately();
  });

  return {
    showServices,
    dropdownRef,
    handleMouseEnter,
    handleMouseLeave,
    cancelLeave,
    closeImmediately,
  };
};
