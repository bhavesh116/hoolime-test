export default function (state=[],action){
switch(action.type){
case 'Item':return([action.payload]);
default : return state

}


}
