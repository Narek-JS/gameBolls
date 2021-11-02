import { createContext, useReducer } from "react";
import { reducer } from './reducer';

const ThemeContext = createContext(null);

const initialState = {
    boardLocation: 0,
    point: 0 
};

const ThemeContextProvaider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <ThemeContext.Provider value={{state, dispatch}}>
            { children }
        </ThemeContext.Provider>
    );
};
export { ThemeContextProvaider, ThemeContext };










































// export const ContextProvaiderBoard = ({ children }) => {
//     const [left, setLeft] = useState();
//     return (
//         <BoardContext.Provider value={{boardLeft:left, setBoradLeft:setLeft}}>
//             {children}
//         </BoardContext.Provider>
//     );
// };
