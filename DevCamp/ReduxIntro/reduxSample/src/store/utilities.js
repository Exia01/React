export const updateObj = (oldObject, updatedValues) => {
    console.log(updatedValues)
  return {
    ...oldObject, //creating new obj and distributing properties
    ...updatedValues//passing an updated obj with the values to override
  };
};
