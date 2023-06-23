export enum TestActionTypes {
	INCREMENT = 'INCREMENT',
	DECREMENT = 'DECREMENT',
}

interface ITestState {
	testNumber: number;
}
export interface ITestAction {
	type: string;
	payload?: any;
}

const initialState: ITestState = {
	testNumber: 0,
};

export const testReducer = (
	state = initialState,
	action: ITestAction
): ITestState => {
	switch (action.type) {
		case TestActionTypes.INCREMENT:
			return { testNumber: state.testNumber + 1 };
		case TestActionTypes.DECREMENT:
			return { testNumber: state.testNumber - 1 };
		default: {
			return state;
		}
	}
};
