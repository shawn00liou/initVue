import { Arguments } from 'src/models/server.model';

console.log('boot site setting!!!')

export default async (context:Arguments)=>{
  const {Vue} = context;
  //console.log(Vue);
  console.log('boot site async!!!')
}
