export function updateInputValue(wrapper, name, value) {
  return wrapper.find(`input[name="${name}"]`).simulate('change', {
    target: { value, name }
  });
}

export function findElementByText(wrapper, text) {
  return wrapper.filterWhere(n => n.text() === text);
}
