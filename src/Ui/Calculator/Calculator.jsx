import { useState } from 'react';
import classes from './Calculator.module.css';

function Calculator() {
    const [display, setDisplay] = useState('0');
    const [stored, setStored] = useState(null);
    const [operator, setOperator] = useState(null);
    const [resetOnNext, setResetOnNext] = useState(false);

    const inputDigit = (digit) => {
        setDisplay((prev) => {
            if (resetOnNext) {
                setResetOnNext(false);
                return digit;
            }
            if (prev === '0') return digit;
            if (prev.length >= 12) return prev;
            return prev + digit;
        });
    };

    const inputDot = () => {
        setDisplay((prev) => {
            if (resetOnNext) {
                setResetOnNext(false);
                return '0.';
            }
            if (prev.includes('.')) return prev;
            return prev + '.';
        });
    };

    const clear = () => {
        setDisplay('0');
        setStored(null);
        setOperator(null);
        setResetOnNext(false);
    };

    const calculate = (a, b, op) => {
        const x = parseFloat(a);
        const y = parseFloat(b);
        switch (op) {
            case '+': return String(x + y);
            case '-': return String(x - y);
            case '*': return String(x * y);
            case '/': return y === 0 ? 'Ошибка' : String(x / y);
            default: return b;
        }
    };

    const formatResult = (value) => {
        if (value === 'Ошибка') return value;
        const num = parseFloat(value);
        if (!Number.isFinite(num)) return '0';
        const rounded = Math.round(num * 1e10) / 1e10;
        return String(rounded);
    };

    const handleOperator = (op) => {
        if (operator && !resetOnNext) {
            const result = formatResult(calculate(stored, display, operator));
            setStored(result);
            setDisplay(result);
        } else {
            setStored(display);
        }
        setOperator(op);
        setResetOnNext(true);
    };

    const handleEquals = () => {
        if (!operator || stored === null) return;
        const result = formatResult(calculate(stored, display, operator));
        setDisplay(result);
        setStored(null);
        setOperator(null);
        setResetOnNext(true);
    };

    const handlePercent = () => {
        setDisplay((prev) => formatResult(String(parseFloat(prev) / 100)));
    };

    const handleToggleSign = () => {
        setDisplay((prev) => {
            if (prev === '0' || prev === 'Ошибка') return prev;
            return prev.startsWith('-') ? prev.slice(1) : '-' + prev;
        });
    };

    const keys = [
        { label: 'C', action: clear, wide: true },
        { label: '±', action: handleToggleSign },
        { label: '%', action: handlePercent },
        { label: '÷', action: () => handleOperator('/'), op: true },
        { label: '7', action: () => inputDigit('7') },
        { label: '8', action: () => inputDigit('8') },
        { label: '9', action: () => inputDigit('9') },
        { label: '×', action: () => handleOperator('*'), op: true },
        { label: '4', action: () => inputDigit('4') },
        { label: '5', action: () => inputDigit('5') },
        { label: '6', action: () => inputDigit('6') },
        { label: '−', action: () => handleOperator('-'), op: true },
        { label: '1', action: () => inputDigit('1') },
        { label: '2', action: () => inputDigit('2') },
        { label: '3', action: () => inputDigit('3') },
        { label: '+', action: () => handleOperator('+'), op: true },
        { label: '0', action: () => inputDigit('0'), wide: true },
        { label: '.', action: inputDot },
        { label: '=', action: handleEquals, equals: true },
    ];

    return (
        <div className={classes.calculator}>
            <div className={classes.header}>
                <span>Калькулятор</span>
            </div>
            <div className={classes.display} aria-live="polite">
                {display}
            </div>
            <div className={classes.keys}>
                {keys.map(({ label, action, op, wide, equals }) => (
                    <button
                        key={label}
                        type="button"
                        onClick={action}
                        className={[
                            classes.key,
                            op && classes.keyOp,
                            wide && classes.keyWide,
                            equals && classes.keyEquals,
                        ]
                            .filter(Boolean)
                            .join(' ')}
                    >
                        {label}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Calculator;
