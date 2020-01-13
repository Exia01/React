//helper method for updating Objs 

export const updateObject = (oldObject, updatedProperties) => {
     return{
         ...oldObject, // spread properties and override with new obj
         ...updatedProperties, //--> new obj
     }
}