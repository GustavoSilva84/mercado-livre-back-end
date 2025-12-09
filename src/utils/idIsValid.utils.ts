export default function idIsValidUtils(_id: any): number {
    if(!_id) throw new Error;
    
    const id = parseInt(_id);

    if(isNaN(id)) throw new Error; 
    
    return id;
}