import { useState } from "react";

const AccordionItem = ({ itemId, itemTitle, itemContent }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">

      <div 
        className="accordion-header fw-bold bg-graysome py-2 px-2 custom-cursor-pointer" 
        id={`item-${itemId}`}
        aria-expanded={isActive}
        aria-controls={`colaps-${itemId}`}
        onClick={() => setIsActive(isActive => !isActive)}
      >
        <span>{isActive ? '-' : '+'}</span>
        <span>{` ${itemTitle}`}</span>
      </div>

      {isActive && (
        <div className="accordion-collapse" id={`colaps-${itemId}`} aria-labelledby={`item-${itemId}`}>
          <div className="accordion-body">
            {itemContent}
          </div>
        </div>
      )}

    </div>
  );
}

export default AccordionItem;