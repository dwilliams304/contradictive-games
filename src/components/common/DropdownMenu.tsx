import { useState, useRef, useEffect } from 'react';
import './DropdownMenu.css';

interface DropdownOption {
  content: string;
  action: () => void;
}

interface DropdownMenuProps {
  title: string;
  options: DropdownOption[];
}

export default function DropdownMenu({ title, options }: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleOptionClick = (option: DropdownOption) => {
    option.action();
    setIsOpen(false);
  };

  return (
    <div className="dropdown-menu" ref={dropdownRef}>
      <button 
        className="dropdown-trigger nav-link"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        {title}
        <span className={`dropdown-arrow ${isOpen ? 'open' : ''}`}>▼</span>
      </button>
      
      {isOpen && (
        <div className="dropdown-content">
          {options.map((option, index) => (
            <button
              key={index}
              className="dropdown-item"
              onClick={() => handleOptionClick(option)}
            >
              {option.content}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}