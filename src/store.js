import {NewStore} from 'globx'

const store = NewStore({
  /** @type {{text:string,completed:boolean,id:number}[]}*/
  todos:[],
  /** @type {"ALL"|"COMPLETED"|"ACTIVE"} */
  filter:'ALL'
})
export default store
