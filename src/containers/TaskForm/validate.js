const validate = (values) => {
  const errors = {};
  const { title, description, } = values;
  if (title === null || typeof title === 'undefined' || title.trim() === '') {
    errors.title = 'Vui lòng nhập tiêu đề';
  }

  if (title) {
    if (title.length < 5) {
      errors.title = 'Tiêu đề phải lớn hơn 5 ký tự';
    }
  }

  if (
    description === null ||
    typeof description === 'undefined' ||
    description.trim() === ''
  ) {
    errors.description = 'Vui lòng nhập mô tả';
  }

  if (description) {
    if (description.length < 15) {
      errors.description = 'Mô tả phải lớn hơn 15 ký tự';
    }
  }

  return errors;
};

export default validate;
