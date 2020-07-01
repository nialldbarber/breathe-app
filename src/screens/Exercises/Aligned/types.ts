export interface Instruction {
  id: number;
  title: string;
  content: string;
  color: string;
  width?: string | number;
  height?: string | number;
}

export interface Instructions {
  title: string;
  cycles: Array<Instruction>;
}

export interface AlignedScreenProps {
  instruction: Instruction;
}
