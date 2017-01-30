var reducers=require('reducers');
var expect=require('expect');
var df=require('deep-freeze-strict');

describe('Reducers', ()=>{
describe('searchTextReducer',()=>{
it('should set searchText', ()=>{
var action={
  type:'SET_SEARCH_TEXT',
  searchText:'dog'
};
var res=reducers.searchTextReducer(df(''), df(action));

expect(res).toEqual(action.searchText);
});
});
describe('showCompletedReducer', ()=>{

  it('should toggle showCompleted', ()=>{
  var action={
    type:'TOGGLE_SHOW_COMPLETED'

  };
  var res=reducers.showCompletedReducer(df(false),df(action));
 //console.log(res);
  expect(res).toEqual(true);
  // action.toggleShowCompleted=false;
  // var res1=reducers.showCompletedReducer('', action);
  // expect(res1).toBe(true);
});

});





});
