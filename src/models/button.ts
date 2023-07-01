export type ButtonProps = {
  text: string;
  onClick: () => void;
}

export default class Button {
  text: string;
  onClick: () => void;

  constructor(label: string, onClick: () => void) {
    this.text = label;
    this.onClick = onClick;
  }
}
