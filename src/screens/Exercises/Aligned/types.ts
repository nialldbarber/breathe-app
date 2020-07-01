export interface Instruction {
  id: number;
  title: string;
  content: string;
  color: string;
  width?: string;
  height?: string;
}

export interface Instructions {
  title: string;
  cycles: Array<Instruction>;
}

export interface AlignedScreenProps {
  instruction: Instruction;
}
