import { gh } from '@ngconf/data-access-github-repos';
import { createContext, createResource, ParentComponent, useContext } from "solid-js";
import { createStore } from "solid-js/store";

const createStoreContext = (username = '') => {
    const [state, setState] = createStore({
        username
    });

    const [reposResource] = createResource(() => state.username, gh.getRepos, {
        initialValue: []
    });

    return {
        state: {
            ...state,
            get repos() {
                return reposResource();
            }
        },
        actions: {
            usernameUpdated(username: string) {
                setState('username', username);
            }
        }
    } as const;
}

type StoreContextType = ReturnType<typeof createStoreContext>;

export const StoreContext = createContext<StoreContextType>();

export const StoreProvider: ParentComponent = (props) => {
    const storeContext = createStoreContext();

    return (
        <StoreContext.Provider value={storeContext}>
            {props.children}
        </StoreContext.Provider>
    )
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const useStore = () => useContext(StoreContext)!;