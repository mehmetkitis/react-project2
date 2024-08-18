import React, { useReducer } from 'react';

import WorkintechCalculatorTotalDisplay from './WorkintechCalculatorTotalDisplay.jsx';
import WorkintechCalculatorCalcButton from './WorkintechCalculatorCalcButton.jsx';
import reducer, { initialState } from './WorkintechCalculatorReducers.jsx';
import { CE, changeOperation, EQUALS, MEMORY_ADD, MEMORY_CLEAR, MEMORY_RECALL, typeOnScreen } from './WorkintechCalculatorActions.jsx';
import "./workintechCalculator.css"

function WorkintechCalculatorApp() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div >
            <nav >
                <span > Reducer Challenge</span>
            </nav>

            <div >
                <div>
                    <form name="Cal">
                        <WorkintechCalculatorTotalDisplay value={state.accumulator} />
                        <WorkintechCalculatorTotalDisplay value={state.displayValue} />
                        <div >
                            <span id="operation">
                                <b>Operation:</b> {state.operation}
                            </span>
                            <span id="memory">
                                <b>Memory:</b> {state.memory}
                            </span>
                        </div>
                        <div className='calc-btn' >
                            <WorkintechCalculatorCalcButton
                                value={'M+'}
                                onClick={() =>
                                    dispatch({
                                        type: MEMORY_ADD,
                                    })
                                }
                            />
                            <WorkintechCalculatorCalcButton
                                value={'MR'}
                                onClick={() =>
                                    dispatch({
                                        type: MEMORY_RECALL,
                                    })
                                }
                            />
                            <WorkintechCalculatorCalcButton
                                value={'MC'}
                                onClick={() =>
                                    dispatch({
                                        type: MEMORY_CLEAR,
                                    })
                                }
                            />
                        </div>
                        <div className='calc-btn' >
                            <WorkintechCalculatorCalcButton
                                value={1}
                                onClick={(e) => dispatch(typeOnScreen(e.target.value))}
                            />
                            <WorkintechCalculatorCalcButton
                                value={2}
                                onClick={(e) => dispatch(typeOnScreen(e.target.value))}
                            />
                            <WorkintechCalculatorCalcButton
                                value={3}
                                onClick={(e) => dispatch(typeOnScreen(e.target.value))}
                            />
                        </div>

                        <div className='calc-btn'>
                            <WorkintechCalculatorCalcButton
                                value={4}
                                onClick={(e) => dispatch(typeOnScreen(e.target.value))}
                            />
                            <WorkintechCalculatorCalcButton
                                value={5}
                                onClick={(e) => dispatch(typeOnScreen(e.target.value))}
                            />
                            <WorkintechCalculatorCalcButton
                                value={6}
                                onClick={(e) => dispatch(typeOnScreen(e.target.value))}
                            />
                        </div>

                        <div className='calc-btn'>
                            <WorkintechCalculatorCalcButton
                                value={7}
                                onClick={(e) => dispatch(typeOnScreen(e.target.value))}
                            />
                            <WorkintechCalculatorCalcButton
                                value={8}
                                onClick={(e) => dispatch(typeOnScreen(e.target.value))}
                            />
                            <WorkintechCalculatorCalcButton
                                value={9}
                                onClick={(e) => dispatch(typeOnScreen(e.target.value))}
                            />
                        </div>
                        <div className='calc-btn'>
                            <WorkintechCalculatorCalcButton
                                value={'+'}
                                onClick={(e) => dispatch(changeOperation(e.target.value))}
                            />
                            <WorkintechCalculatorCalcButton
                                value={0}
                                onClick={(e) => dispatch(typeOnScreen(e.target.value))}
                            />
                            <WorkintechCalculatorCalcButton
                                value={'-'}
                                onClick={(e) => dispatch(changeOperation(e.target.value))}
                            />
                        </div>
                        <div className='calc-btn'>
                            <WorkintechCalculatorCalcButton
                                value={'*'}
                                onClick={(e) => dispatch(changeOperation(e.target.value))}
                            />
                            <WorkintechCalculatorCalcButton
                                value={'/'}
                                onClick={(e) => dispatch(changeOperation(e.target.value))}
                            />
                            <WorkintechCalculatorCalcButton
                                value={'CE'}
                                onClick={() =>
                                    dispatch({
                                        type: CE,
                                    })
                                }
                            />
                        </div>

                        <div >
                            <WorkintechCalculatorCalcButton
                                value={'='}
                                onClick={() =>
                                    dispatch({
                                        type: EQUALS,
                                    })
                                }
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default WorkintechCalculatorApp;