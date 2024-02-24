import React, { useState, useEffect, useRef } from 'react';
import styles from './styles.module.scss'

interface SelectItem {
    id: number;
    text: string;
}

const Select: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedItem, setSelectedItem] = useState<string>('Выберите');
    const [items, setItems] = useState<SelectItem[]>([
        { id: 1, text: 'Стилизация select CSS' },
        { id: 2, text: 'Стилизация select JavaScript' },
        { id: 3, text: 'Стилизация select, используя input' },
    ]);

    const selectRef = useRef<HTMLDivElement>(null);

    const handleHeadClick = () => {
        if (isOpen) {
            setIsOpen(false);
        } else {
            setIsOpen(true);
        }
    };

    const handleItemClick = (text: string) => {
        setIsOpen(false);
        setSelectedItem(text);
    };

    const handleDocumentClick = (e: MouseEvent) => {
        if (selectRef.current && !selectRef.current.contains(e.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleDocumentClick);

        return () => {
            document.removeEventListener('click', handleDocumentClick);
        };
    }, []);

    return (
        <div className="select" ref={selectRef}>
            <input className="select__input" type="hidden" name="" value={selectedItem} />
            <div className={`select__head ${isOpen ? 'open' : ''}`} onClick={handleHeadClick}>
                {selectedItem}
            </div>
            <ul className="select__list" style={{ display: isOpen ? 'block' : 'none' }}>
                {items.map((item) => (
                    <li key={item.id} className="select__item" onClick={() => handleItemClick(item.text)}>
                        {item.text}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Select;
