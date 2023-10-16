"use client"
import styles from './page.module.css'
import { useState } from 'react';

export default function Home() {
  const [expression, setExpression] = useState("");
  
  const buttons = [
    ["(", "(", styles.operatorButton],[")", ")", styles.operatorButton],["del", "del", styles.specialButton],["/", "÷", styles.operatorButton],
    ["7", "7",                      ],["8", "8",                      ],["9", "9",                         ],["*", "×", styles.operatorButton],
    ["4", "4",                      ],["5", "5",                      ],["6", "6",                         ],["-", "−", styles.operatorButton],
    ["1", "1",                      ],["2", "2",                      ],["3", "3",                         ],["+", "+", styles.operatorButton],
    [".", ".",                      ],["0", "0",                      ],["C", "C", styles.specialButton    ],["=", "=", styles.specialButton ]
  ];
  

  function handleButtonClick(buttonPressed) {
    //alert(typeof expression);
    switch(buttonPressed) {
      case "=":
        try {
          const result = (Math.round((eval(expression) * 10000000000))/10000000000).toString();   
          setExpression(result);
        } catch (error) {
          setExpression("Invalid Input");
        }
        break;

      case "del":
        let expressionString = expression;
        expressionString = expressionString.slice(0, -1);
        setExpression(expressionString);
        break;

      case "C":
        setExpression("0");
        break;
      
      default:
        setExpression((preExp) => preExp + buttonPressed);
    }
  }
    
  return (
    <main>
      <div className={styles.calcContainer}>
        <input type="text" className={styles.textBox} value={expression} readOnly/>
        <div className={styles.buttonContainer}>
          {buttons.map((button) => (
            <button key={button[0]} className={button[2]} onClick={() => handleButtonClick(button[0])}>
              {button[1]}
            </button>
          ))}
        </div>
      </div>
    </main>
  )
}
