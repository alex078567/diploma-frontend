export interface InputAndLabelI {
	id: string;
	type: string;
	name: string;
	labelText: string;
	value: string;
	onChange: () => unknown;
	className?: string;
}
