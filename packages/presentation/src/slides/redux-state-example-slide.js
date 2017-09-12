import React, {PureComponent} from "react";
import {FillView} from "../shared/fill-view";
import {CodeView} from "../shared/code-view";

const sourceCode = `
{
  "pantry": {
    "groceryItems": [
      { "name": "Bananas", "price": 1.49 },
      { "name": "Apples", "price": 0.79 },
      { "name": "Pears", "price": 0.98 },
      { "name": "Cereal", "price": 3.49 },
      { "name": "Bread", "price": 2.5 },
      { "name": "Milk", "price": 3.1 },
      { "name": "Peanut Butter", "price": 4.69 },
      { "name": "Spaghetti", "price": 1.5 },
      { "name": "Granola Bars", "price": 3.99 },
      { "name": "Cheese", "price": 2.49 }
    ],
    "groceryList": {
      "Spaghetti": 1,
      "Cheese": 2
    },
    "pantry": {
      "Bread": 2,
      "Milk": 1,
      "Apples": 1,
      "Bananas": 1
    },
    "account": [
      { "credit": 100, "debit": 0, "balance": 100 },
      { "credit": 0, "debit": 10.38, "balance": 89.62 }
    ]
  }
}
`;

export class ReduxStateExampleSlide extends PureComponent {
    render() {
        return (
            <FillView>
                <CodeView sourceCode={sourceCode} language="javascript" />
            </FillView>
        )
    }
}
