const isEmpty = require("./is-empty")
const validator = require("validator")

module.exports = function validateLogininput(data) {
  let errors = {}
  data.title = !isEmpty(data.title) ? data.title : ""
  data.content = !isEmpty(data.content) ? data.content : ""

  if (
    !validator.isLength(data.title, {
      min: 2,
    })
  ) {
    errors.title = "title must be at least 2 characters"
  }

  if (validator.isEmpty(data.title)) {
    errors.title = "title field is required"
  }

  if (
    !validator.isLength(data.content, {
      min: 2,
    })
  ) {
    errors.content = "Content must be at least 2 characters"
  }

  if (validator.isEmpty(data.content)) {
    errors.content = "Content field is required"
  }

  return {
    errors,
    isValid: isEmpty(errors),
  }
}
