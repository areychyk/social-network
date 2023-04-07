


export const updateObjectInArray=(items: Array<any>, itemId:any, ObjPropName:string, newObjProp:any)=> items.map(m => m[ObjPropName] === itemId ? ({...m, ...newObjProp}) : m)
