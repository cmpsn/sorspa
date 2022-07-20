/**
 * Delete/Omit properties of an object. Properties to omit must be listed in a separate array.
 * 
 * @param {Object} obj
 *  An object from which the properties are deleted.
 * @param {Array} propsToOmit
 *  An array in which properties for omission are listed.
 * @returns {Object}
 *  An object with remaining properties and their values.
 */
export const omitObjProperties = (obj, propsToOmit) => {
  const restObj = { ...obj };
  propsToOmit.forEach((prop) => {
    delete restObj[prop];
  });
  return restObj;
}

/**
 * Get the keys of an object and assign them a custom value.
 * 
 * @param {Object} obj
 *  An object with key/values (Product attributes).
 * @param {*} customValue
 *  A custom value (any type, string | Object) to be used for the shared key for all objects.
 * @returns {Object}
 *  An object.
 */
export const extractAttrsAsCustomObj = (obj, customValue) => {
  const initValue = {};
  
  return Object.keys(obj).reduce((accumulator, currentElem) => {
    
    return { ...accumulator, [currentElem]: customValue};

  }, initValue);
}

/**
 * Get the options of the user: an object with attributes as keys and 
 * attribute values as values.
 * 
 * @param {Object} productAttributes
 *  An Object (with product attributes as keys and variants as arrays).
 * @param {Object} formValuesObj
 *  An Object (with all input values from the user).
 * @returns {Object} 
 *  An Object (with product attributes and the values selected by user).
 */
export const getUserOptions = (productAttributes, formValuesObj) => {

  const userOptions = Object.keys(productAttributes).reduce((accum, currentElem) => {
    return { ...accum, [currentElem]: formValuesObj[currentElem]};
  }, {});

  //console.log('getUserOptions fired')
  
  return userOptions;
}

/**
 * Get the product variant corresponding to user's options 
 * (through comparison between user Options and all existing variants of the product).
 * 
 * @param {Array} productVariants
 *  An array of Objects (all variants of the product).
 * @param {Object} userOptions
 *  An Object (with user's input values referenced to the product attributes).
 * @returns {Object} 
 *  An Object (with all properties of the selected product).
 */
export const getPreferredVariant = (productVariants, userOptions) => {

  const userVariant = productVariants.find((variant) => {
    
    return Object.entries(userOptions).every(([key, value]) => {
      
      return variant[key] === value;
    });
  });

  //console.log('getPreferredVariant fired')

  return userVariant ? userVariant : null;
}
