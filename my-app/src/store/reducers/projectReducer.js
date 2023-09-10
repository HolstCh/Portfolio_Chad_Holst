const initialState = {
    projects: [], // Initial empty array
};

const projectReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PROJECT':
            return { ...state, projects: [...state.projects, action.payload] };
        default:
            return state;
    }
};

export default projectReducer;