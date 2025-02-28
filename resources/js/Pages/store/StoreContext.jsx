import { usePage } from "@inertiajs/react";
import { createContext, useContext, useEffect, useReducer } from "react";

const initialState = {
    menu: false,
    blogs: [],
};

const reducer = (state, action) => {
    switch (action.type) {
        case "OPEN_MENU":
            return {
                ...state,
                menu: true,
            };
        case "CLOSE_MENU":
            return {
                ...state,
                menu: false,
            };
        case "UPDATE_BLOG":
            return {
                ...state,
                blogs: action.payload,
            };
        default:
            return state;
    }
};

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
    const { props, component } = usePage();
    const [state, dispatch] = useReducer(reducer, initialState);

    const openMenu = (taskId) => {
        dispatch({ type: "OPEN_MENU" });
    };

    const closeMenu = () => {
        dispatch({ type: "CLOSE_MENU" });
    };

    useEffect(() => {
        closeMenu();
    }, [component]);

    const updateBlog = () => {
        dispatch({ type: "UPDATE_BLOG", payload: props.blogs });
    };

    useEffect(() => {
        updateBlog();
    }, [props.blogs]);

    return (
        <StoreContext.Provider value={{ state, openMenu, closeMenu }}>
            {children}
        </StoreContext.Provider>
    );
};

export const useStore = () => {
    return useContext(StoreContext);
};
