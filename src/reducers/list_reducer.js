const INITIAL_STATE = { list: [], item: null };

export default (state = INITIAL_STATE, action) => {

    console.log(action.type)
    switch(action.type){

        case 'get_list':
            console.log('Forming list');
            return  state;
        default: console.log('Couldn\'t handle request');
            return state;
    }
}

