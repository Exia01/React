//helper method for updating Objs 

export const updateObject = (oldObject, updatedProperties) => {
     return{
         ...oldObject,
         ...updatedProperties, //--> new obj
     }
}