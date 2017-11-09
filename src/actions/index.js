
export function getList(){

    console.log('Getting todo list');
    return {
        type: 'get_list',
        payload: {}
    };
}