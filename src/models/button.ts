export type ButtonProps = {
  label: string;
  onClick: () => void;
}

export default class Button {
  label: string;
  onClick: () => void;

  constructor(label: string, onClick: () => void) {
    this.label = label;
    this.onClick = onClick;
  }
}
