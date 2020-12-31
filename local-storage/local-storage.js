let Database = {}; //local storage to store data

/** helper to delete data in local database after provided seconds
 *  @param {Number} seconds
 *  @param {String} key
 */
const timer = (seconds, key) => {
  setTimeout(() => {
    if (Database.hasOwnProperty(key)) {
      delete Database[key];
    }
  }, seconds * 1000);
};

/**
 * helper to insert data in local database
 * @param {String} key
 * @param {JSON} value
 * @param {Number} seconds
 *
 * @return {String} Returns the error or success message
 */
exports.Create = (key, value, seconds = 0) => {
  if (!Database.hasOwnProperty(key)) {
    //checking database contain provided key or not
    if (
      JSON.stringify(Database).length < 1024 * 1020 * 1024 && //check for size of database , must not exceed 1GB
      JSON.stringify(value).length <= 16 * 1024 * 1024 //check for size of value, must not exceed 16KB
    ) {
      if (key.length <= 32) {
        //check for size of key , must not exceed 32 character
        if (seconds != 0) {
          timer(seconds, key); //timer handler call to handle data expire time
        }
        Database[key] = value;
        return `Success Message: ${key} Key added successfully`;
      } else {
        return "Error Message : Memory limit exceeded!!";
      }
    } else {
      return "Error Message : Memory limit exceeded!!";
    }
  } else {
    return "Error Message : This key already exists";
  }
};

/**
 * helper to read data from local database
 * @param {String} key
 *
 * @return {String}
 */
exports.Read = (key) => {
  if (Database.hasOwnProperty(key)) {
    //checking for key in database
    return JSON.stringify({ [key]: Database[key] });
  } else {
    return "Error Message :  Given key does not exist in database. Please enter a valid key";
  }
};

/**
 * helper to delete data from local database
 * @param {String} key
 * @return {String}
 */
exports.Delete = (key) => {
  if (Database.hasOwnProperty(key)) {
    //checking for key in database
    delete Database[key];
    return "Success Message: local-data key is successfully deleted from Database";
  } else {
    return "Error Message :  Given key does not exist in database. Please enter a valid key";
  }
};
